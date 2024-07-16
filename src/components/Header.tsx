import logo from '../assets/images/logo.svg'
import menuIcon from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close.svg'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import MobileNavs from './MobileNavs'

const Header = () => {
    const [open, setOpen] = useState(false)
  return (
    <header className='flex justify-between relative'>
        <img src={logo} alt="shortly url shortener" />
        <button onClick={() => setOpen(prev => !prev)}>
            <motion.img src={open ? closeIcon : menuIcon}  alt='open mobile nav'/>
        </button>
        <AnimatePresence>
            {open && <MobileNavs onClose={setOpen}/>}
        </AnimatePresence>
    </header>
  )
}

export default Header
