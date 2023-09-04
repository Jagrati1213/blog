const { MONGODB_URI, BASE_URL } = process.env;
export const connectionSrt = MONGODB_URI;
export let baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : BASE_URL;