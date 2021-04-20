import { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { DashboardPageWrapper, AddServiceForm } from './styled';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import { API_SERVER } from '../../config';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import ServiceManageTable from '../../components/Table/Services';
import { AdminRoleRoutes } from '../../routes/private/Admin.routes';



const AddServicePage = () => {
    const history = useHistory();
    // form
    let { formState: {errors}, register, reset, handleSubmit } = useForm({ mode: 'all' });
    const onFormSubmit = async (srv) => {
        const getToken = localStorage.getItem('token') ?
            localStorage.getItem('token') : 'NULL'
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${getToken}`
        }
        await fetch(API_SERVER + '/api/service/add', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(srv)
        })
        .then(res => res.json())
        .then(res => {
            if (res.errCode) {
                // have errors
                console.log(res);
                if (res.errors.code === 11000) {
                    swal({
                        title: 'Duplicate service entry',
                        text: 'You cann\'t add duplicate services (name:unique)',
                        icon: 'error'
                    })
                } else {
                    swal({
                        title: res.message,
                        text: res.errCode,
                        icon: 'error'
                    })
                }
                
            }
            else {
                // ok
                swal({
                    title: res.message,
                    text: res.data?.name,
                    icon: 'success'
                })
                reset(); // form reset
                history.goBack();
            }
        })
    }

    return (
        <>
            <h2>Add a new service</h2>

            <AddServiceForm autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>
                <input name="name" placeholder="Service Name"
                {...register('name', {
                    required: {value: true, message: 'Name is required'},
                    minLength: {value: 5, message: 'Minimum 5 characters required'}
                })}
                />
                {errors.name && <span className="form_err">{errors.name.message}</span>}


                <textarea name="description" placeholder="Service Description"
                {...register('description', {
                    required: {value: true, message: 'Description is required'},
                    minLength: {value: 30, message: 'Minimum 30 characters required'}
                })}
                ></textarea>
                {errors.description && <span className="form_err">{errors.description.message}</span>}

                <Button variant="contained" color="primary" type="submit">submit</Button>
            </AddServiceForm>
        </>
    )
}








const ManageServices = () => {
    // states
    const [services, setServices] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const reload = () => setLoaded(false);

    useEffect( () => {
        async function fetchServices() {
            if (!loaded) {
                const getToken = localStorage.getItem('token') ?
                localStorage.getItem('token') : 'NULL'
                const headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${getToken}`
                }
                await fetch(API_SERVER + '/api/service', {headers: headers})
                .then(res => res.json())
                .then(res => {
                    if (res.errCode) {
                        // have errors
                        console.log(res.errors);
                        swal({
                            title: res.message,
                            text: res.errCode,
                            icon: 'error'
                        })
                    }
                    else {
                        // ok
                        setServices(res);
                        console.log(res);
                        setLoaded(true);
                    }
                })
            }
        }
        fetchServices();
    }, [loaded]);

    return(
        <>
            <h2>Manage Services</h2>
            {
                loaded ? (<ServiceManageTable reloader={reload} data={services} />) : (
                    <p>Empty services. Please create as soon as possible</p>
                )
            }
        </>
    )
}












const ServicesPage = ({ match }) => {
    return (
        <DashboardPageWrapper>
                <Switch>
                    <AdminRoleRoutes exact path={`${match.url}`} component={ManageServices} />
                    <AdminRoleRoutes path={`${match.url}/add`} component={AddServicePage} />
                    <AdminRoleRoutes path={`${match.url}/*`} render={(props) => (
                        <p style={{color: 'red'}}>Page not found ${props.match.url}</p>
                    )} />
                </Switch>
        </DashboardPageWrapper>
    )
}
export default ServicesPage;