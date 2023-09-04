const { MONGODB_URI } = process.env;
export const connectionSrt = MONGODB_URI;
export let baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://blog.vercel.app';