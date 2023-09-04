import Adduserform from '@/component/Adduserform';
import { Host } from '@/feature/main';

function AddUser() {
    const hostName = Host();
    return (
        <Adduserform hostName={hostName} />
    )
}

export default AddUser