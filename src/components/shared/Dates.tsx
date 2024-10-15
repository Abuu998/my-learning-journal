import React from "react";

type DatesProps = {
    date: string
    className?: string
    style?: React.CSSProperties
}

function Dates({ date, className, style }: DatesProps) {
    return (
        <span
            className={`text-xs md:text-sm uppercase tracking-widest ${className}`}
            style={style}
        >
            {date}
        </span>
    )
}

export default Dates
