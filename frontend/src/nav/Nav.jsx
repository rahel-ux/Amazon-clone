import { LocationMarkerIcon,
   SearchIcon, 
   ShoppingCartIcon,
    MenuIcon,
  UserCircleIcon,
  XIcon
  } from '@heroicons/react/outline'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../Firbase';

const Nav = () => {
const [{ basket, user }, dispatch] = useStateValue();
const handleAuthentication = () =>{
  if (user) {
    auth.signOut()
  }
}
  const [country, setCountry] = useState({})
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const fetchData = async () => {
      const request = await fetch("https://ipapi.co/json").then((res)=>res.json()
      );
      setCountry(request)
      return request;
    };
    fetchData();

  }, [])
  const clikHandler = () => !show ?setShow(true):setShow(false)
  return (
    <>
      <div className="w-full bg-amazon_blue-default ">
        <div className="header">
          <div className="pt-5 flex-grow sm:flex-grow-0">
            <Link to="/">
              <img
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
                className="w-[100px] cursor-pointer select-none"
              />
            </Link>
          </div>

          <div className="text-white flex cursor-pointer hover:ring-1 ring-white pr-2 py-1">
            <LocationMarkerIcon className="w-5 mt-2" />
            <p className="flex flex-col">
              <span className="text-xs text-gray-200 font-semibold">Hello</span>
              <span className="font-bold text-sm">{country.country_name}</span>
            </p>
          </div>
          <div className="hidden sm:flex flex-grow items-center h-10 rounded-md bg-orange-300">
            <input
              type="text"
              placeholder="Search Amazon"
              className="border-none outline-none w-full h-full pl-4"
            />
            <SearchIcon className="p-3 flex-grow h-full flex-shrink outline-none hover:bg-orange-400 rounded-r-md cursor-pointer" />
          </div>
          <div>
            <Link to={!user && '/login'}>
              <p className="links">
                <span onClick={handleAuthentication}>
                  Hello {!user ? "Guest" : user.email},{" "}
                  {!user ? "sign in" : "sign out"}
                </span>
                <span>Account & Lists</span>
              </p>
            </Link>
          </div>
          <div>
            <p className="links">
              <span>Returns</span>
              <span>& Orders</span>
            </p>
          </div>
          <Link to="./checkout">
            <div className="text-white relative flex cursor-pointer">
              <span className="absolute -top-1 -right-2 text-orange-500 md:right-5 md:-top-2">
                {basket.length}
              </span>
              <ShoppingCartIcon className="h-8" />
              <span className="hidden sm:flex pt-3 font-bold text-sm">
                Cart
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full bg-amazon_blue-light">
        <div className="header text-white py-2">
          <div className="flex cursor-pointer" onClick={clikHandler}>
            <MenuIcon className="w-6" />
            <p className="font-bold text-md">All</p>
          </div>
          <div className="hidden md:flex gap-6 text-md cursor-pointer">
            <p>Clinic</p>
            <p>Best Sellers</p>
            <p>Customer Service</p>
            <p>Amazon Basics</p>
            <p>New Releases</p>
            <p>Prime</p>
            <p>Music</p>
            <p>Today's Deals</p>
            <p>Books</p>
            <p>Registry</p>
            <p>Fashion</p>
            <p>Amazon Home</p>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 bg-rich -translate-x-[100%] w-full duration-300 ${
          show && "translate-x-[0%] flex gap-2 z-50"
        }`}
      >
        <div className="w-80 bg-white">
          <div className="bg-amazon_blue-light text-white text-center text-2xl py-2">
            <h1 className="font-semibold text-[20px] flex gap-3 items-center justify-center">
              <UserCircleIcon className="w-8" />
              <span>Hello, sign in</span>
            </h1>
          </div>
          <div className="py-5 flex flex-col gap-5 overflow-scroll h-[93vh]">
            <div className="side_content">
              <h1 className="sidebar_header">Trending</h1>
              <p>Best Sellers</p>
              <p>New Releases</p>
              <p>Movers and Shakers</p>
            </div>
            <div className="side_content">
              <h1 className="sidebar_header">Digital Content & Devices</h1>
              <p>Prime Video</p>
              <p>Amazon Music</p>
              <p>Echo & Alexa</p>
              <p>Fire Tablets</p>
              <p>Fire Tv</p>
              <p>Kindle E-readers & Books</p>
              <p>Audiable Books & Orginals</p>
              <p>Amazon Photos</p>
              <p>Amazon Appstore</p>
            </div>
            <hr />
            <div className="side_content">
              <h1 className="sidebar_header">Shop By Department</h1>
              <p>Clothing, Shoes, Jewerly and Watches </p>
              <p>Amazon Fresh</p>
              <p>Books</p>
              <p>Movies, Music and Games </p>
              <p>See All</p>
            </div>
            <div className="side_content">
              <h1 className="sidebar_header">Programs & Features</h1>
              <p>Whole Foods Market</p>
              <p>Amazon Health</p>
              <p>Amazon Physical Stores</p>
              <p>Subscribes & Save</p>
              <p>See All</p>
            </div>
          </div>
        </div>

        <div className="flex-grow relative mt-2">
          <XIcon
            className="w-10 text-white absolute top-0 left-0 z-50 cursor-pointer"
            onClick={clikHandler}
          />
        </div>
      </div>
    </>
  );
}

export default Nav