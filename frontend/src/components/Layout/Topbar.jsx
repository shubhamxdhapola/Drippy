import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { FaFacebookSquare } from "react-icons/fa"
import { Phone } from 'lucide-react'

const Topbar = () => {
  return (
    <div className='bg-rabbit-green text-white'>
        <div className='container mx-auto flex justify-between items-center px-4 py-3'>
            <div className='hidden md:flex items-center space-x-4'>
                <a href="#" className='hover:text-gray-300'>
                    <IoLogoInstagram className='h-6 w-6'/>
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <FaFacebookSquare className='h-5 w-5'/>
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <RiTwitterXLine className='h-5 w-5'/>
                </a>
            </div>
            <div className='text-sm text-center flex-grow'>
                <span>We ship worldwide - Fast and reliable shipping!</span>
            </div>
            <div className='text-sm hidden md:block'>
                <a href="tel:+919322663609" className='hover:text-gray-300 flex justify-center items-center space-x-1'>
                    <Phone className='h-4 w-4'/>
                    <span>+91 93226 63609</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Topbar
