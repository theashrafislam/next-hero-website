"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const navlinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Gallery',
            path: '/gallery'
        },
    ]
    return (
        <div>
            <nav className='bg-red-500 p-5 flex justify-between item-center'>
                <h3 className='text-2xl font-bold'>NEXT-<span className='text-cyan-500'>HERO</span>-WEB</h3>
                <ul className='flex justify-between item-center gap-8'>
                    {
                        navlinks?.map(link => <Link className={`${pathName === link.path && 'text-white'}`} href={link.path} key={link.path}>{link.title}</Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;