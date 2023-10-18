import React, { useState } from 'react';
import Link from '../Links/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Service', path: '/service' }
    ];
    return (
        <nav className='bg-purple-400 px-4'>
            <div onClick={()=> setOpen(!open)} className='md:hidden'>
            
            <span>
                {
                open === true ?
                 <XMarkIcon className="h-8 w-8 text-purple-500" />
                  : <Bars3Icon className="h-8 w-8 text-purple-500" />
                  }
                  </span>
            </div>
            <ul className={`md:flex absolute md:static duration-1000 ml-8 pd-4 bg-purple-300 ${open ? 'top-6': '-top-36'}`}>
                { routes.map(route => <Link
                key={route.id}
                route={route}></Link>)}
            </ul>
        </nav>
    );
};

export default Navbar;