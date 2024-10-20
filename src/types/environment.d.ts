export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SECRET_TOKEN: string;
            DEPARTMENT_ID: string;
            API_URL: string;
        }
    }
}
