import React from 'react'

type ButtonProps = React.ComponentPropsWithoutRef<'button'>

function Button({ className, children, ...props }: ButtonProps): React.ReactNode {
    return (
        <button
            className={`${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
