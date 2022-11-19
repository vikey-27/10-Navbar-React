import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  
  const[showlinks,setShowLinks]=useState(false);
  const linkscontainerRef=useRef(null);
  const linksRef=useRef(null);

  useEffect(()=>{
    const linksHeight=linksRef.current.getBoundingClientRect().height;
    if(showlinks)
    {
      linkscontainerRef.current.style.height=`${linksHeight}px`
    }
    else{
      linkscontainerRef.current.style.height='0px';
    }

  },[showlinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt={logo} />
          <button className="nav-toggle" onClick={()=>setShowLinks(!showlinks)} >
            <FaBars />
          </button>
        </div>
    
          {/* <div className={`${showlinks?'show-container links-container ': 'links-container'}`}> */}
          <div className="links-container" ref={linkscontainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <ul>
                    <a href={url}>{text}</a>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        
        <ul className="social-icons">
          {social.map((item)=>{
            const{id,url,icon}=item;
            return(
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
