import React, { useState, useEffect, useContext } from 'react';
import UserMenu from './UserMenu';
//import { open, close } from '../../reduxSlices/sideBarSlice';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'Elements/icons';
import Link from 'next/link'; 
import { useRouter } from "next/router";
// Redux imports
import { open } from "Redux/reduxSlices/UIStateSlice";
//import Logo from "../../images/reveal_leads_logo.png";
import Image from "next/image";
export default function DashboardHeader (props) {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const sideBarOpenState = useSelector((state) => state.UIState.SideBar.sideBarOpen);
  const sideBardispatch = useDispatch();
  
  
  const handleSignOut = async function (e) {
        setloading(true);
        setTimeout(() => {
          setloading(false);
          router.push("/user/login");
        }, 2000);
  }

  return (
      <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 -mb-px">
            {/* Header Left Side */}
          <div className="flex">
            {/* SideBar open button*/}
          <button
              className="text-slate-500 hover:text-slate-600 lg:hidden ml-1"
              aria-controls="sidebar"
              aria-expanded={sideBarOpenState}
              onClick={() => sideBardispatch(open())}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
          {/* <button
              className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${searchModalOpen && 'bg-slate-200'}`}
              onClick={(e) => { e.stopPropagation(); setSearchModalOpen(true); }}
              aria-controls="search-modal"
            >
              <span className="sr-only">Search</span>
              <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current text-slate-500" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                <path className="fill-current text-slate-400" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
              </svg>
            </button> */}
            {/* <SearchModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} /> */}
          {/* <Notifications/> 
          <Help/>  */}
            {/*  Divider */}
          <hr className="w-px h-6 bg-slate-200 mx-3" />
          <UserMenu {...props.user} proPicStatus={props.proPicStatus} loading={loading} onClick={(e) => handleSignOut(e)}/>
          </div>
          </div>
        </div>
      </header>
    )
} 

export function MinimalHeader (props) {
    return (
        <div className="navbar bg-white ">
        <div className="flex-1">
          <span className='w-36'>
          <Image src={Logo}/>
          </span>
        </div>
        <div className="flex-none mr-4">
        {props.login ? null : 
                   <p className='text-sm text-slate-500'>
                    Have a account?
                    <span className='font-medium text-indigo-500 cursor-pointer'>
                        <Link href="/user/login">LogIn</Link>
                        </span>
                        </p>
                        }
        </div>
     </div>
    )
}

/*
<div className="navbar bg-white sticky">
          <div className="flex-1">
          <button
              className="text-slate-500 hover:text-slate-600 lg:hidden ml-1"
              aria-controls="sidebar"
              aria-expanded={sideBarOpenState}
              onClick={() => sideBardispatch(open())}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>
          <div className="flex-none">
          {/* <button
              className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${searchModalOpen && 'bg-slate-200'}`}
              onClick={(e) => { e.stopPropagation(); setSearchModalOpen(true); }}
              aria-controls="search-modal"
            >
              <span className="sr-only">Search</span>
              <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current text-slate-500" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                <path className="fill-current text-slate-400" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
              </svg>
            </button> */
            /* <SearchModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} /> }
            <Notifications/> 
            <Help/> 
              {/*  Divider 
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu {...props.user} loading={loading} onClick={(e) => handleSignOut(e)}/>
            </div>
         </div>
*/

/*
{showRefreshBtn ? <button 
                className={"btn btn-primary btn-sm ml-6 lg:ml-0" + (fetchingData ? " loading" : "")}
                onClick={(e) => {
                  FetchData(e);
                }}
                disabled={fetchingData}>
                Refresh Data
            </button> : null}
*/
/*
const FetchData = (e) => {
    setfetchingData(true);
    const requestObject = [
      "CrmWebApi2",
      "leads/leadslist",
      {}
    ]
    BackendService.getUser().then((res) => {
      console.log(res.data);
      userDetailsDispatch(add({...res.data}));
      API.get(...requestObject).then((res) => {
        console.log(res);
       if(res.data.leads.length === 0){
        leadsDataDispatch(addData([{noData: true}]));
       } else {
        leadsDataDispatch(addData([...res.data.leads]));
       }
       setfetchingData(false);
      })
    }).catch(err => {
      console.log(err);
      setfetchingData(false);
    })
  }
*/