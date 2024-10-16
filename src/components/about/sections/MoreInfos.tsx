import React from "react"

type MoreInfosProps = {
    children: React.ReactNode
    className?: string
}


function MoreInfos({ className, children }: MoreInfosProps) {
    return (
        <div
            className={`${className}`}
        >
            {children}
        </div>
    )
}

export default MoreInfos
