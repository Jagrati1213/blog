import { headers } from "next/headers";


export async function Host() {
    const headersList = headers();
    const hostName = headersList.get('host');
    return hostName;
}
// to get domain