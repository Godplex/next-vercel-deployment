import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from 'react';

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

interface Props {
    text: string;
    href: string;
}

const ActiveLink: FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link legacyBehavior href={href}>
            <a style={asPath === href ? style : undefined}>{text}</a>
        </Link>
    )
}

export default ActiveLink