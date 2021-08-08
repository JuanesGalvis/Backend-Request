import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
    return {
        uri: process.env.URI_ELEPHANTSQL
    }
});