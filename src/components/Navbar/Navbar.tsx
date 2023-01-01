import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import './Navbar.scss'

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [displaySize, setDisplaySize] = useState<number>(window.innerWidth);

    const dd = () => {
      let size = window.innerWidth;
      setDisplaySize(size);
    }
    
    useEffect(() => {
      window.addEventListener('resize', dd);
      dd();
      console.log(displaySize);
      return () => window.removeEventListener('resize', dd);
    },[displaySize])


    const toggleDrawer = (): any => {
        setOpen(false);
    }
    return (
        <div className='navbar'>
            <div className="logo">
                Dnyanesh<span>.</span>
            </div>
{ displaySize > 600 &&            <div className="links">
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Works</a>
                    </li>                
                    <li>
                        <a href="">About</a>
                    </li>                
                    <li>
                        <a href="">Projects</a>
                    </li>                
                    <li>
                        <a href="">Services</a>
                    </li>
                </ul>
            </div>}
            <div>
                <button className='btn'>Let's Chat</button>
            </div>
            {open && <div className="ham-links">
                <Close className='close' onClick={() =>  setOpen(false)}/>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Works</a>
                    </li>                
                    <li>
                        <a href="">About</a>
                    </li>                
                    <li>
                        <a href="">Projects</a>
                    </li>                
                    <li>
                        <a href="">Services</a>
                    </li>
                </ul>
            </div>}
            {displaySize < 600 && <MenuIcon className="ham" fontSize='large' onClick={() => setOpen(true)} />}
        </div>
    )
}

export default Navbar