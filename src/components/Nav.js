import React from 'react';

export default function Nav() {
   return (
    <nav className="nav">
   <a href="/" className ="portTitle">Katie Ritchie</a>      
       <ul>
        <li>
          <a href="/About">About Me</a>
        </li>
        <li>
          <a href="/Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/Resume">Resume</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
       </ul>
     
    </nav>
  );
}
