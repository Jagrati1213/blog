export const connectionSrt = process.env.MONGODB_URI;
export const base_url = process.env.NODE_ENV === 'production' ? process.env.PROD_API_URL : process.env.DEV_API_URL;
