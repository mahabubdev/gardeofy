import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { API_SERVER } from '../../config';
import { TableWrapper, TableBody, TableHead } from './styled';



const OrdesManageTable = () => {

    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);


     // update status
    const updateOrder = async (uid, status) => {
        const getToken = localStorage.getItem('token') ?
                            localStorage.getItem('token') : 'NULL'
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${getToken}`
        }
        await fetch(API_SERVER + '/api/order/update', {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
                orderId: uid,
                status: status,
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.errCode) {
            // error
            console.log(res);
            swal({
                title: res.message,
                text: res.errCode,
                icon: 'error'
            })
                setLoaded(true)
            }
            else {
                // ok
                swal({
                    title: res.message,
                    icon: 'success',
                })
                setLoaded(false)
            }
        })
        .catch(err => {
            console.log(err)
            swal({
                title: err.message,
                text: err.errCode,
                icon: 'error'
            })
        })
    }








     // delete order
      // delete item
    const deleteItem = (uid) => {
        async function deleteNow(Id) {
            const getToken = localStorage.getItem('token') ?
                            localStorage.getItem('token') : 'NULL'
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${getToken}`
            }

            await fetch(API_SERVER + `/api/order/remove?orderId=${Id}`, {
                method: 'DELETE',
                headers: headers,
            })
            .then(res => res.json())
            .then(res => {
                if (res.errCode) {
                    // error
                    console.log(res.errors);
                    swal({
                        title: res.message,
                        text: res.errCode,
                        icon: 'error'
                    })
                }
                else {
                    swal({
                        title: res.message,
                    })
                    setLoaded(false);
                }
            })
            .catch(err => {
                console.log(err.errors);
                swal({
                    title: err.message,
                    text: err.errCode,
                    icon: 'error'
                })
            })
        }


        swal({
            title: 'Are you sure?',
            text: 'Deleted items cannot be restored',
            icon: 'warning',
            buttons: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                deleteNow(uid);
            } else {
                swal({
                    title: 'Aborted!',
                    icon: 'info'
                })
            }
        })
        .catch(err => {
            swal({
                title: err.message,
                icon: 'error'
            })
        })
    }








    useEffect(() => {
        async function getOrdersForAdmins() {
            const getToken = localStorage.getItem('token') ?
                              localStorage.getItem('token') : 'NULL'
              const headers = {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${getToken}`
              }
              await fetch(API_SERVER + '/api/order/', { headers: headers })
              .then(res => res.json())
              .then(res => {
                  if (res.errCode) {
                      // error
                      console.log(res);
                      swal({
                          title: res.message,
                          text: res.errCode,
                          icon: 'error'
                      })
                      setLoaded(true)
                  }
                  else {
                      // ok
                      setOrders(res);
                      setLoaded(true)
                  }
              })
        }

        if (! loaded) {
            getOrdersForAdmins();
            console.log(orders)
        }
    }, [loaded])

    return (
        <TableWrapper>

            <table style={{border: 0}}>
                <TableHead>
                    <tr>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Currency</th>
                        <th>Customer Name</th>
                        <th>Payment</th>
                        <th>Contact Num.</th>
                        <th>Status</th>
                        <th>Placed At</th>
                        <th>Manage</th>
                    </tr>
                </TableHead>

                <TableBody>
                    {
                        orders.length > 0 ? (
                            orders.map(rw => (
                                <tr key={rw._id}>
                                    <td>{rw.service.name}</td>
                                    <td>{rw.service.info?.price}</td>
                                    <td>{rw.service.info?.currency}</td>
                                    
                                    <td>{rw.info.billing_details.name}</td>
                                    <td>{rw.info.card.brand + " - " + rw.info.card.last4}</td>
                                    <td>{rw.info.billing_details.phone}</td>

                                    <td>
                                        {rw.status === 'pending' ? (
                                            <span className="_pn">{rw.status}</span>
                                        ) : (
                                            rw.status === 'complete' ? (
                                                <span className="_cm">{rw.status}</span>
                                            ) : (
                                                <span className="_on">{rw.status}</span>
                                            )
                                        )}
                                    </td>


                                    <td>{new Date(rw.createdAt).toLocaleString()}</td>

                                    <td className="manage_row">
                                        <span className="_del" onClick={() => deleteItem(rw.uid)}>
                                            <AiFillDelete></AiFillDelete>
                                        </span>
                                        {/* <span className="_set">
                                            <AiFillSetting></AiFillSetting>
                                        </span> */}
                                        <select name="changed" onChange={(event) => {
                                            // changeStatus(rw.uid, event.target.value);
                                            updateOrder(rw.uid, event.target.value)
                                        }}>
                                            <option selected>select</option>
                                            <option value='pending'>pending</option>
                                            <option value='on_going'>on going</option>
                                            <option value='complete'>complete</option>
                                        </select>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>Empty...!</td>
                            </tr>
                        )
                    }
                </TableBody>
            </table>
        </TableWrapper>
    )
}


export default OrdesManageTable;