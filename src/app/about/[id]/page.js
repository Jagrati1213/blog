import UpdateForm from '@/component/UpdateForm';
import { Host } from '@/feature/main';

async function UserDetails({ params }) {
    const id = params.id;
    const hostName = await Host();

    return (
        <UpdateForm id={id} hostName={hostName} />
    )
}
export default UserDetails;