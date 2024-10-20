'use server';
import requestsOptions from '@/shared/requests-options';

export type GetCurrentQueueStateReturnType = {
    [key: string]: {
        name: string;
        currentTicket: string;
        queue: Array<string>;
    }
}

export default async function getCurrentQueueState(): Promise<GetCurrentQueueStateReturnType> {
    const response = await fetch(`${process.env.API_URL}/queue/monitor/${process.env.DEPARTMENT_ID}`, requestsOptions);
    return response.json();
}