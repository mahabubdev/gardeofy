import { AdminOrdersPage } from './styled';
import OrdesManageTable from '../Table/Orders';


const AdminOrderPage = () => {
    return (
        <AdminOrdersPage>
            {/* <h1>Only admins should see this.</h1> */}
            <OrdesManageTable />
        </AdminOrdersPage>
    )
}


export default AdminOrderPage;