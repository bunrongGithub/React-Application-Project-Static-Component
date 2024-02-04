import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../../assets/logo.svg';

const menuItems = [
   { href: '#home', title: 'Home' },
   { href: '#wgpt3', title: 'What is GPT3' },
   { href: '#possibility', title: 'Open AI' },
   { href: '#features', title: 'Case Studies' },
   { href: '#blog', title: 'Library' },
];
const Navbar = () => {
   const [toggleMenu, setToggleMenu] = useState(false);

   return (
      <div className='gpt3__navbar'>
         <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
               <img src={logo} alt="logo" />
            </div>
            <div className='gpt3__navbar-links_container'>
               {
                  menuItems.map((item) => (
                     <p key={item.href} >
                        <a href={item.href}>{item.title}</a>
                     </p>
                  ))
               }
            </div>
         </div>
         <div className="gpt3__navbar-sign">
            <span>Sign in</span>
            <button type='button'>Sign up</button>
         </div>
         <div className="gpt3__navbar-menu">
            {toggleMenu ? (
               <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            ) : (
               <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
            )}
            {
               toggleMenu && (
                  <div className='gpt3__navabr-menu_container scale-up-center'>
                     <div className='qpt3_navbar-menu_container-links'>
                        {menuItems.map((item)=>(
                           <p key={item.href}>
                              <a href={item.href}>{item.title}</a>
                           </p>
                        ))}
                        <div className="gpt3__navbar-menu_container-links-sign">
                           <p>Sign in</p>
                           <button type='button'>Sign up</button>
                        </div>
                     </div>
                  </div>
               )
            }
         </div>
      </div>
   )
}

export default Navbar