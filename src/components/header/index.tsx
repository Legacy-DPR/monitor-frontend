import Logo from '@/components/ui/logo';

export default function Header() {
    return (
        <div className="container py-2 mb-4">
            <div className="flex justify-center items-center gap-x-4">
                <Logo />
                <div className="text-3xl font-bold text-secondary uppercase">
                    Почта Донбасса
                </div>
            </div>
        </div>
    );
}
