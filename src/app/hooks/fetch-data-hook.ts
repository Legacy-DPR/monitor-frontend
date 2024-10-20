'use client';
import { useEffect, useState } from 'react';
import getCurrentQueueState, { GetCurrentQueueStateReturnType } from '@/api/get-current-queue-state';

export function useQueueData() {
    const [data, setData] = useState<GetCurrentQueueStateReturnType | null>(null);

    useEffect(() => {
        // Function to fetch data and update state
        const fetchData = async () => {
            setData(result);
        };

        // Call the function once when the component mounts
        fetchData();

        // Set up the interval to call fetchData every 5 seconds
        const interval = setInterval(() => {
            fetchData();
        }, 5000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return data;
}
