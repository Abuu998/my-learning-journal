import React from 'react'
import { NavLink } from "react-router-dom";

type MyLinkProps = React.ComponentPropsWithoutRef<'a'> & {
    to: string
    className?: string
}

function MyLink({ to, className ,children, ...props }: MyLinkProps) {
    return (
        <NavLink
            to={to}
            className={`${className}`}
            {...props}
        >
            {children}
        </NavLink>
    )
}

export default MyLink
