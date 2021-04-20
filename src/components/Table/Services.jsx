import { useState } from 'react';
import { TableWrapper, TableBody, TableHead } from './styled';
// import { useTable } from 'react-table'
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import { DataGrid } from '@material-ui/data-grid';
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import swal from 'sweetalert';
import { API_SERVER } from '../../config';


//   const useStyles = makeStyles({
//     root: {
//       width: '100%',
//     },
//     container: {
//       maxHeight: 500,
//     },
//   });

const ServiceManageTable = ({ data, reloader }) => {
    // const [changed, setChanged] = useState('');

    // change status
    const changeStatus = (uid, status) => {
        async function updateStatus(Id, val) {
            let newStatus = {
                status: val
            }
            const getToken = localStorage.getItem('token') ?
                            localStorage.getItem('token') : 'NULL'
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${getToken}`
            }
            await fetch(API_SERVER + `/api/service/update?uid=${Id}&status_only=1`, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(newStatus),
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
                    reloader();
                }
            }).catch(err => {
                console.log(err.errors);
                swal({
                    title: err.message,
                    text: err.errCode,
                    icon: 'error'
                })
            })
        }

        updateStatus(uid, status); // called
    }



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

            await fetch(API_SERVER + `/api/service/remove?uid=${Id}`, {
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
                    reloader();
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


    return (
        <TableWrapper>

            <table style={{border: 0}}>
                <TableHead>
                    <tr>
                        <th>Name</th>
                        <th>Availability</th>
                        <th>Description</th>
                        <th>Manage</th>
                    </tr>
                </TableHead>

                <TableBody>
                    {
                        data.length > 0 ? (
                            data.map(rw => (
                                <tr key={rw._id}>
                                    <td>{rw.name}</td>

                                    <td>
                                        {rw.status ? (
                                            <span className="_on">Online</span>
                                        ) : (
                                            <span className="_off">Offline</span>
                                        )}
                                    </td>

                                    <td>{rw.description}</td>

                                    <td className="manage_row">
                                        <span className="_del" onClick={() => deleteItem(rw.uid)}>
                                            <AiFillDelete></AiFillDelete>
                                        </span>
                                        {/* <span className="_set">
                                            <AiFillSetting></AiFillSetting>
                                        </span> */}
                                        <select name="changed" onChange={(event) => {
                                            changeStatus(rw.uid, event.target.value);
                                        }}>
                                            <option selected>select</option>
                                            <option value={true}>online</option>
                                            <option value={false}>offline</option>
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





            {/* <table {...getTableProps()} style={{border: '1px solid blue'}}>
                <thead>
                    {headerGroups.map(hg => (
                        <tr {...hg.getHeaderGroupProps()}>
                            {hg.headers.map(col => (
                                <th {...col.getHeaderProps()} style={{
                                    borderBottom: '.1em solid red',
                                    background: 'lightblue',
                                    color: 'gray',
                                    fontWeight: 'bold'
                                }}>
                                    {col.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map(rw => {
                        prepareRow(rw)
                        return(
                            <tr {...rw.getRowProps()}>
                                {rw.cells.map(cl => (
                                    <td {...cl.getCellProps()}
                                    style={{
                                        padding: '10px',
                                        border: '.1em solid gray',
                                        background: 'papayawhip'
                                    }}>
                                        {/* {cl.render('Cell')} */}
                                    {/* </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table> */} 



            {/* <DataGrid getRowId={`uid`} rows={data} columns={columns} pageSize={5} /> */}
            {/* <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                            {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                <TableCell key={row._id} align={column.align}>
                                    {
                                        column.format && typeof value === 'number' 
                                            || typeof value === 'boolean'
                                            ? 
                                            column.format(value) : value
                                    }
                                </TableCell>
                                );
                            })}
                            </TableRow>
                        );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper> */}
        </TableWrapper>
    )
}

export default ServiceManageTable;