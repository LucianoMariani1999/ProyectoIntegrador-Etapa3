import React from "react";

const Footer = () => {
  return (
    <div className="footer">
         <h4>Visitanos en:</h4>
         <br/>
         <nav>
            <a href="https://www.facebook.com/" class="futer" target="_blank">Facebook</a>
            <a href="https://www.instagram.com/" class="futer" target="_blank">Instagram</a>
            <a href="https://www.youtube.com/" target="_blank" >Youtube</a>
         </nav>
         <br/>
         <nav>
         <ul>
           <li>
            <a>Politicas de privacidad</a>
           </li>  
         </ul>        
         </nav>
         <br/>
         <hr/>
         <br/>
         <p>Copyright 2024©</p>
         <br/>
         <span class="material-symbols-outlined">
          TRAVEL_NOW
         </span>
    </div>
  );
};

export default Footer;
