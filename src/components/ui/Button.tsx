import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    variant: 'rounded' | 'square' 
}

const Button = ({children,className, ...props} : ButtonProps) => {
    const classVariance = props.variant === 'rounded' ? 'rounded-full' : 'rounded-md'
  return (
   <button {...props} className={`${classVariance} bg-cyan w-full py-2 text-white font-bold ${className}`}>{children}</button>
  )
}

export default Button
