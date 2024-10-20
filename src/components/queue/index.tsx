import React from 'react';

interface OperatorQueueProps {
    operatorData: {
        [key: string]: {
            name: string;
            currentTicket: string | null;
            queue: string[];
        };
    };
}

function getLastCharsOfId(id: string) {
    return id.slice(id.length - 3, id.length);
}

export default function Queue({ operatorData }: OperatorQueueProps) {
    const operatorEntries = Object.entries(operatorData);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operatorEntries.map(([operatorId, operator], index) => (
                <div key={operatorId} className="p-4 bg-white rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Оператор {index + 1}</h2>

                    {!operator.currentTicket && !operator.queue.length ? (
                        <div>Свободен</div>
                    ) : (
                        <>
                            {operator.currentTicket && (
                                <p className="font-bold text-lg mb-2">Текущий
                                    талон: {getLastCharsOfId(operator.currentTicket)}</p>
                            )}

                            <div className="space-y-2">
                                {operator.queue.slice(0, 10).map((ticket, index) => (
                                    <p key={ticket} className="text-sm">
                                        {index + 1}. {getLastCharsOfId(ticket)}
                                    </p>
                                ))}

                                {operator.queue.length > 10 && (
                                    <p className="text-sm text-gray-500">и
                                        ещё {operator.queue.length - 10} талонов...</p>
                                )}
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};
