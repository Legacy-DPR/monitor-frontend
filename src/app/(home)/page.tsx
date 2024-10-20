import Queue from '@/components/queue';
import { useQueueData } from '@/app/hooks/fetch-data-hook';
import getCurrentQueueState from '@/api/get-current-queue-state';

export default async function Home() {

    const result = await getCurrentQueueState();

    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-120px)]">
            <h2 className="text-3xl font-bold mb-4">
                Очередь клиентов:
            </h2>
            {result &&
                <Queue operatorData={result} />
            }
        </div>
    );
}
