import { ReactNode } from 'react'

const PaddedLayout = ({children} : {children: ReactNode}) => {
  return (
    <div className='p-5'>
    {children}
    </div>
  )
}

export default PaddedLayout
