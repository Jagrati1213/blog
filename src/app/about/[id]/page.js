import UpdateForm from '@/component/UpdateForm';
import { base_url } from '@/utils/dbconnection';

function UserDetails({ params }) {
    const id = params.id;

    return (
        <UpdateForm id={id} hostName={base_url} />
    )
}
export default UserDetails;