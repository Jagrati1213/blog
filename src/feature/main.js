import { headers } from "next/headers";


export function Host() {
    const headersList = headers();
    const hostName = headersList.get('host');
    return hostName;
}
// to get domain