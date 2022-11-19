import { links } from "./data";
import React  from "react";
const Sidebar=()=>{
    return <>
        <h4>Sidebar</h4>
        <div className="links-container show-container">
          <ul className="links">
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
    </>
}
export default Sidebar;