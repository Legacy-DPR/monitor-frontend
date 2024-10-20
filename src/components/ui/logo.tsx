import Image from 'next/image';

export default function Logo() {
    return (
        <Image
            src="/logo.png"
            alt="Лого почты донбасса"
            width={48}
            height={48}
        />
    );
}
