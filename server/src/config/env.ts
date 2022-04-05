import dotenv from 'dotenv';

dotenv.config({ path: './src/config/.env' });

const env = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV
};

export default env;