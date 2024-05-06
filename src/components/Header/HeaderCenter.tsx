import {useState } from "react";
import { Link } from "react-router-dom";

const HeaderCenter = () => {
  const [isActive, setIsActive] = useState('Home');
  // handle click
  function handle(nav:string):void {
    setIsActive(nav);
  }  
  return (
    <div className="flex items-center flex-col sm:flex-row justify-between py-2">
      <ul className="flex items-center space-x-2 flex-wrap justify-center sm:space-x-5 capitalize">
        <li>
          <Link
            onClick={(e) =>
              handle((e.target as HTMLInputElement).textContent as string)
            }
            to="/"
            className={isActive == "Home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) =>
              handle((e.target as HTMLInputElement).textContent as string)
            }
            to="/about"
            className={isActive == "about" ? "active" : ""}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) =>
              handle((e.target as HTMLInputElement).textContent as string)
            }
            to="/categories"
            className={isActive == "category" ? "active" : ""}
          >
            category
          </Link>
        </li>
      </ul>
      <ul className="flex items-center space-x-2 flex-wrap justify-center sm:space-x-5 capitalize">
        <li>
          <Link to="/">login</Link>
        </li>
        <li>
          <Link to="/">register</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderCenter;
