import Adduserform from '@/component/Adduserform';
import { base_url } from '@/utils/dbconnection';

function AddUser() {
    return (
        <Adduserform hostName={base_url} />
    )
}

export default AddUser