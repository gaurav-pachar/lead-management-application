import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { addCountData, removeCountData, addDaysParam, setDefaultDays, addFilteredDateData } from "Redux/reduxSlices/leadsCountDataSlice";
import { TimeFilterObject } from "./timeFilter";

export default function RadioInputFilter (props) {
    const [True, setTrue] = React.useState(false);
    const { leadsCountData , filteredDatesData , filterDaysParam } = useSelector((state) => state.leadsCountData);
    const leadsCountDispatch = useDispatch();
    
    React.useEffect(() => {
        const { FilterdLeadsData } = TimeFilterObject({daysGap: filterDaysParam, leadsCount: leadsCountData});
     //   console.log(PrepareFilteredData(FilterdLeadsData));
        const FilteredDataPrepared = PrepareFilteredData(FilterdLeadsData);
        leadsCountDispatch(addFilteredDateData(FilteredDataPrepared));
      //   console.log(FilterdLeadsData);
    }, [leadsCountData, filterDaysParam]);
     
    const PrepareFilteredData = (FilterdLeadsData) => {
         const FilteredDataPrepared = [];
         FilterdLeadsData.forEach((item) => {
             const itemDate = new Date(item.year, (item.month - 1), item.day).toLocaleDateString('en-US');
          //   console.log(typeof itemDate, itemDate);
             const LeadObject = {
                 date: itemDate,
                 incompleteLeads: item.incompleted,
                 completed: item.completed
             };
             FilteredDataPrepared.push(LeadObject);
         })
       //  FilteredDataPrepared.sort((a, b) => {
       //      return (
       //          a.date - b.date
       //      )
       //  })
       //  console.log(FilteredDataPrepared);
       return FilteredDataPrepared;
    }

    const RadioClicked = (name) => {
        console.log(name);
       let number = null;
       if(name === "today") {
          number = 0;
       } else {
          number = Number(name);
       }
       if (number === 0) {
        leadsCountDispatch(setDefaultDays());
       } else {
        leadsCountDispatch(addDaysParam(number));
       }
       console.log(filterDaysParam);
    }

    return (
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-link m-1 flex-row">{filterDaysParam === 0 ? "Today" : `${filterDaysParam} Days`} <FaAngleDown className="ml-1"/></label>
          <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <span className="m-1">
                Period:
            </span>
            <li><label className="label cursor-pointer">
                  <input 
                       type="radio" 
                       name="today" 
                       className="radio checked:bg-indigo-500" 
                       checked={filterDaysParam === 0}
                       onChange={(e) => {
                        console.log(e);
                        RadioClicked(e.target.name)
                        }} />
                  <span className="label-text">Today</span> 
                </label>
            </li>
            <li><label className="label cursor-pointer">
                  <input 
                       type="radio" 
                       name="7" 
                       className="radio checked:bg-indigo-500" 
                       checked={filterDaysParam === 7}
                       onChange={(e) => {
                        console.log(e);
                        RadioClicked(e.target.name)
                        }} />    
                  <span className="label-text">Last 7 Days</span> 
                </label>
            </li>
            <li><label className="label cursor-pointer">
                  <input  
                       type="radio" 
                       name="30" 
                       className="radio checked:bg-indigo-500" 
                       checked={filterDaysParam === 30}
                       onChange={(e) => {
                        console.log(e);
                        RadioClicked(e.target.name)
                        }} />
                  <span className="label-text">Last 30 Days</span> 
                </label>
            </li>
          </ul>
        </div>
    )
}