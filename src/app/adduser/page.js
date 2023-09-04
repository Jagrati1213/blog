import Adduserform from '@/component/Adduserform';
import { Host } from '@/feature/main';

async function AddUser() {
    const hostName = await Host();
    return (
        <Adduserform hostName={hostName} />
    )
}

export default AddUser