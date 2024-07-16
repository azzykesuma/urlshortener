import { ReactNode } from 'react'

interface TitleProps {
    variants : 'h1' | 'h2' | 'h3' ,
    children: ReactNode
}

const Title = ({variants, children} : TitleProps) => {
    const classVariance = variants === 'h1' ? 'text-4xl md:text-[50px] leading-[50px]' : variants === 'h2' ? 'text-3xl' : 'text-2xl';
  return (
    <h1 className={`${classVariance} font-bold text-very-dark-blue`}>{children}</h1>
  )
}

export default Title
