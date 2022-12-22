import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../utils/Transition';
import { FaAngleDown, FaUserCircle } from "react-icons/fa";
import { useRouter } from 'next/router'

function UserMenu(props) {
  const router = useRouter()
  const proPicStatus=props.proPicStatus
  const userSubId=props.sub
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);
  const imagelink = `https://realtorapp-dp-dev-bygorv.s3.us-east-2.amazonaws.com/public/${userSubId}.jpeg`;

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
    <button
      ref={trigger}
      className="inline-flex justify-center items-center group text-slate-500"
      aria-haspopup="true"
      onClick={() => setDropdownOpen(!dropdownOpen)}
      aria-expanded={dropdownOpen}
    >
      {!proPicStatus?
       <FaUserCircle className='h-7 w-auto'/>  :
       <img className='h-7 w-auto rounded-full' src={imagelink} alt="propic" />}
      <span className="mx-1">{props.given_name}</span>
      <FaAngleDown/>
    </button>
    <Transition
      className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
      show={dropdownOpen}
      enter="transition ease-out duration-200 transform"
      enterStart="opacity-0 -translate-y-2"
      enterEnd="opacity-100 translate-y-0"
      leave="transition ease-out duration-200"
      leaveStart="opacity-100"
      leaveEnd="opacity-0"
    >
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
      >
        <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200 cursor-pointer" onClick={()=>{router.push("/user/profile")}}>
          <span>{props.email}</span>
        </div>
        <ul>
          <li className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3">
            <button 
                 onClick={(e) => props.onClick(e)} 
                 className={"btn btn-xs btn-link" + (props.loading ? " loading disabled" : "")}>
                  Sign Out
            </button>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
  )
}

export default UserMenu;

{/* <div class="dropdown dropdown-end flex">
       <label tabindex="0" className="inline-flex justify-center items-center group">
          <FaUserCircle className='h-7 w-auto'/> 
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium group-hover:text-slate-800">{props.user}</span>
          <FaAngleDown/>
        </div>
      </label>
       <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
         <li><a>Item 1</a></li>
         <li><a>Item 2</a></li>
       </ul>
    </div> */}

/*
<div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img className="w-8 h-8 rounded-full" src={UserAvatar.src} width="32" height="32" alt="User" />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium group-hover:text-slate-800">Acme Inc.</span>
          <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div className="font-medium text-slate-800">Acme Inc.</div>
            <div className="text-xs text-slate-500 italic">Administrator</div>
          </div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                href="/login"
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
*/