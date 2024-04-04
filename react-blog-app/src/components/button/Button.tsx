import React from 'react'

interface ButtonProps {
    onClick: () => void
    children: React.ReactNode
}

function Button(props: ButtonProps) {
    return (
        <button className="button" onClick={props.onClick}>
            {props.children}
        </button>
    )
}

// Ghost Button
export function GhostButton(props: ButtonProps) {
    return (
        <button className="p-2 text-gray-600" onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button
