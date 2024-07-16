import { ReactNode } from 'react'

const PaddedLayout = ({children} : {children: ReactNode}) => {
  return (
    <div className='p-5 md:px-36 md:py-10'>
    {children}
    </div>
  )
}

export default PaddedLayout
