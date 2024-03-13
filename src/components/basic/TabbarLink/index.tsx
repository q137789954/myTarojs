import useTabbatContext from '@/models/tabbar/useTabbatContext';
import React from 'react';


interface TabbarLinkProps {
    href: string,
    className?: string,
    children: React.ReactNode,
}

const TabbarLink = (props: TabbarLinkProps) => {

    const { href, children, className } = props;
    const { to } = useTabbatContext();
    const handleLink = () => to(href)


    return (
        <span className={className} onClick={handleLink}>
            {children}
        </span>
    )
}

export default TabbarLink;