export const connectionSrt = process.env.MONGODB_URI;
export let apiUrl = process.env.NODE_ENV === 'production' ? process.env.PROD_API_URL : process.env.DEV_API_URL;