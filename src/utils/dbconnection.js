const { MONGODB_URI } = process.env;
export const connectionSrt = MONGODB_URI;

export let baseURL = '';

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000';
} else {
    baseURL = 'https://blog-exd8gqzn1-jagrati1213.vercel.app/';
}