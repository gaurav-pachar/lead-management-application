import React, { useState, useEffect, useRef, useContext } from "react";
//import { Link, useLocation } from 'react-router-dom';
import { useRouter } from "next/router";
import Link from "next/link";
//import SidebarLinkGroup from './SidebarLinkGroup';
import {
  FaTachometerAlt,
  FaChartArea,
  FaShippingFast,
  FaUsers,
  FaInbox,
  FaWrench,
  FaClipboard,
  FaArrowLeft
} from "react-icons/fa";
import Icon from "Elements/icons";
// import { sideBarOpenContext } from '../contexts/sideBarStore';
import { useSelector, useDispatch } from "react-redux";
import { open, close, shrink, expand } from "Redux/reduxSlices/UIStateSlice";
import Image from "next/image";
import Logo from "Images/favicon.png";

const data = [
    {
        group: false,
        title: "Dashboard",
        icon: "Dashboard",
        path: "/"
    },{
      group: false,
      title: "Landing Page",
      icon: "Utility",
      path: "/landing_page"
   },{
        group: false,
        title: "Leads",
        path: "/leads",
        icon: "Campaigns"
     },{
        group: true,
        title: "Settings",
        icon: "Settings",
        links: [
              {
                   path: "/user/profile",
                   title: "Profile",
              },{
                   path: "/billing",
                   title: "Billing"
              }
        ]
     }
]

function SideBar(props) {
  const router = useRouter();
  const pathname = router.pathname;
  const sidebar = useRef(null);
  const sideBarOpenState = useSelector((state) => state.UIState.SideBar.sideBarOpen);
  const sidebarExpanded = useSelector((state) => state.UIState.SideBar.sideBarExpanded);
  const sideBardispatch = useDispatch();

  useEffect(() => {
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity overflow-hidden duration-200 ${
          sideBarOpenState ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sideBarOpenState ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between lg:justify-start mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => sideBardispatch(close())}
            aria-controls="sidebar"
            aria-expanded={sideBarOpenState}
          >
            <span className="sr-only">Close sidebar</span>
            <FaArrowLeft className="h-auto w-5"/>
          </button>

          {/* Logo */}
          {sidebarExpanded ? <span className="block w-40 grow lg:grow-0">
          <Link href="/" className="block">
            <Image src={Logo} className="w-40"/>
          </Link>
          </span>: null}
        </div>

        {/* Links */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>
            <ul className="mt-3">
              {data.map((item) => {
                return (
                  <SideBarOptions
                    key={item.title}
                    {...item}
                    activeLink={pathname}
                  />
                );
              })}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button
              onClick={() => {
                sideBardispatch(!sidebarExpanded ? expand() : shrink());
              }}
            >
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

function SideBarOptions(props) {
  // console.log("SideBarLinks props:", props);
  if (!props.group) {
    const iconColored = (props.activeLink === props.path);
    return (
      <li
        key={props.path}
        className={`px-3 block py-2 cursor-pointer truncate transition duration-150 text-slate-200 hover:text-white rounded-sm mb-0.5 last:mb-0 ${
          props.activeLink === props.path && "bg-slate-900 hover:text-slate-200"
        }`}
      >
        <Link href={props.path}>
          <div className="flex items-center">
            {Icon(props.icon, (props.activeLink === props.path))}
            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {props.title}
            </span>
          </div>
        </Link>
      </li>
    );
  } else {
    return <SidebarLinkGroup {...props} />;
  }
}

function SidebarLinkGroup(props) {
   //  console.log("SidebarLinkGroup",props);
  const [open, setOpen] = useState(false);
  const sideBardispatch = useDispatch();
  const handleClick = (e) => {
    // console.log('handleclick happend');
    e.preventDefault();
    //props.setSidebarExpanded(true);
    sideBardispatch(expand());
    setOpen(!open);
  };
  const GroupActive = (activeLink) => {
   let isGroupActive = false
   props.links.forEach(item => {
        if(activeLink.includes(item.path)) {
          isGroupActive = true
        }
   });
    return isGroupActive ;
  } 
  return (
    <li
      key={props.title}
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        GroupActive(props.activeLink) && "bg-slate-900"
      }`}
    >
      <a
        href="#0"
        className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
          props.activeLink === props.path && "hover:text-slate-200"
        }`}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {Icon(props.icon, GroupActive(props.activeLink))}
            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {props.title}
            </span>
          </div>
          {/* Icon */}
          <div className="flex shrink-0 ml-2">
            <svg
              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                open && "transform rotate-180"
              }`}
              viewBox="0 0 12 12"
            >
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </div>
        </div>
      </a>
      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
          {props.links.map((item) => {
            return (
              <li
                key={item.title}
                className={"mb-1 text-slate-400 last:mb-0 cursor-pointer" + 
                (props.activeLink.includes(item.path) ? " text-indigo-400" : " hover:text-slate-200")}
              >
                <Link
                  href={item.path}
                  className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
                >
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}
// hover:text-slate-200