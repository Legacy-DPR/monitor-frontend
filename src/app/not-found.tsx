import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(80vh)] container">
            <div className="max-w-80 w-full">
                <h2 className="text-3xl font-semibold mb-4 text-center">
                    Не найдено :(
                </h2>
                <Link href="/" className="w-full py-8 mt-12">
                    <Button className="w-full" size="xl">
                        Вернуться на главную
                    </Button>
                </Link>
            </div>
        </div>
    );
}
