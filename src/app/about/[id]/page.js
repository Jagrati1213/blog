import UpdateForm from '@/component/UpdateForm';
import { Host } from '@/feature/main';

function UserDetails({ params }) {
    const id = params.id;
    const hostName = Host();

    return (
        <UpdateForm id={id} hostName={hostName} />
    )
}
export default UserDetails;