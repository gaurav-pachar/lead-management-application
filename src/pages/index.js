import React, { useEffect, useState } from "react";
// NextJs import
import Head from "next/head";
import Image from 'next/image';
// Redux Imports
import { useSelector, useDispatch } from 'react-redux';
//import { addCountData, removeCountData, addDaysParam, setDefaultDays, addFilteredDateData } from "../reduxSlices/leadsCountDataSlice"
// Components imports
import DashboardLayout from "Components/Layouts/DashboardLayout";
import WelcomeBanner from "Components/Misc/WelcomeBanner";
import StatCard from "Components/Misc/StatCard";
import TimeFilter from "Components/Filters/timeFilter";
import RadioInputFilter from "Components/Filters/leadsCountRadioFilter";

export default function Home(props) {
  const { leadsCountData , filteredDatesData , filterDaysParam } = useSelector((state) => state.leadsCountData);
 // const leadsCountDispatch = useDispatch();
  const [StatContent, setStatContent] = useState([
    {
      className: "",
      statHeading: `Total Leads`,
      stats: ""
     // statDetails: `${percentageIncreaseInLeads}% More`
    },
    {
      className: "",
      statHeading: `Complete Leads`,
      stats: ""
     // statDetails: `${percentageIncreaseInLeads}% More`
    },
    {
      className: "",
      statHeading: `Incomplete Leads`,
      stats: ""
     // statDetails: `${percentageIncreaseInLeads}% More`
    }
  ]);
  const [fetchingLeadsCount, setfetchingLeadsCount] = useState(false);

 /*useEffect(() => {
    const path = "getstats";
    const apiName = "CrmWebApi2";
    API.get(apiName, path, {}).then((res) => {
       console.log(res);
       leadsCountDispatch(addCountData(res.data));
    }).catch(err => console.log(err));
  }, []);*/

  /*const fetchLeadsCount = () => {
    setfetchingLeadsCount(true);
    const path = "getstats";
    const apiName = "CrmWebApi2";
    API.get(apiName, path, {}).then((res) => {
       console.log(res);
       leadsCountDispatch(addCountData(res.data));
       setfetchingLeadsCount(false);
    }).catch(err => {
      console.log(err);
      setfetchingLeadsCount(false);
    });
  }*/

  useEffect(() => {
    if (leadsCountData.length === 0) {
      setStatContent([
        {
          className: "",
          statHeading: `Total Leads`,
          stats: "0"
         // statDetails: `${percentageIncreaseInLeads}% More`
        },
        {
          className: "",
          statHeading: `Complete Leads`,
          stats: "0"
         // statDetails: `${percentageIncreaseInLeads}% More`
        },
        {
          className: "",
          statHeading: `Incomplete Leads`,
          stats: "0"
         // statDetails: `${percentageIncreaseInLeads}% More`
        }
      ]);
    } else {
      const { totalLeadsPresentPeriod, totalCompleteLeads , totalIncompleteLeads } = TimeFilter({
        daysGap: filterDaysParam,
        leadsCount: leadsCountData
       });
      setStatContent([
        {
          className: "",
          statHeading: `Total Leads`,
          stats: totalLeadsPresentPeriod
         // statDetails: `${percentageIncreaseInLeads}% More`
        },
        {
          className: "",
          statHeading: `Complete Leads`,
          stats: totalCompleteLeads
         // statDetails: `${percentageIncreaseInLeads}% More`
        },
        {
          className: "",
          statHeading: `Incomplete Leads`,
          stats: totalIncompleteLeads
         // statDetails: `${percentageIncreaseInLeads}% More`
        }
      ]);
      
    }
  },[leadsCountData, filterDaysParam]
  );
  return (
    <DashboardLayout user={props.user}>
             {/* Welcome banner */}
              <WelcomeBanner {...props.user}/> 
              <div className="flex flex-col md:flex-row w-fit rounded-lg shadow-lg p-2 bg-white mb-4">
                <div className="flex w-full h-full flex-col justify-center items-center my-auto">
                <RadioInputFilter/>
                <button 
                    className={"btn btn-primary btn-sm ml-6 lg:ml-0" + (fetchingLeadsCount ? " loading" : "")}
                    onClick={(e) => {
                      fetchLeadsCount();
                    }}
                    disabled={fetchingLeadsCount}>
                    Refresh Data
                </button>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="flex flex-col md:flex-row justify-between shadow border border-slate-200 rounded-md m-2">
                    {StatContent?.map((item, index) => {
                      return (
                          <StatCard 
                                  key={index}
                                  statHeading={item.statHeading}
                                  stats={item.stats}
                                  statDetails={item.statDetails}/>
                      )
                    })}
                </div>
              </div>
              {/* <DashboardTable/> */}
             
    </DashboardLayout>
          
  );
}