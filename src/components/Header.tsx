import logo from '../assets/images/logo.svg'
import menuIcon from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close.svg'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import MobileNavs from './MobileNavs'
import Button from './ui/Button'

const Header = () => {
    const [open, setOpen] = useState(false)
  return (
    <header className="flex justify-between md:justify-between items-center relative">
      <img src={logo} alt="shortly url shortener" />
      <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
        <motion.img src={open ? closeIcon : menuIcon} alt="open mobile nav" />
      </button>
      <AnimatePresence>
        {open && <MobileNavs onClose={setOpen} />}
      </AnimatePresence>
      <div className='hidden md:block ml-4'>
        <nav className='flex justify-between items-center'>
          <ul className='mr-auto flex justify-start gap-5'>
            <li>
              <a href="" className='text-gray hover:text-dark-violet transition-all font-semibold'>Features</a>
            </li>
            <li>
              <a href="" className='text-gray hover:text-dark-violet transition-all font-semibold'>Pricing</a>
              </li>
              <li>
                <a href="" className='text-gray hover:text-dark-violet transition-all font-semibold'>Resources</a>
              </li>
          </ul>
        </nav>
      </div>
          <div className='flex gap-2 ml-auto items-center'>
            <a href="" className='text-gray font-semibold hover:text-dark-violet'>Login</a>
            <Button variant='rounded'>Sign up</Button>
          </div>
    </header>
  );
}

export default Header
