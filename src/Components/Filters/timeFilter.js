//import React, { useState, useEffect, useRef, useContext } from "react";
//import { useSelector, useDispatch } from 'react-redux';
import moment from "moment";

export default function TimeFilter (props){ 
    const dateDaysBack = new Date(moment().subtract(props.daysGap, 'days').format("YYYY MM DD"));
    
    let totalLeadsPresentPeriod = 0;
    let totalCompleteLeads = 0;
    let totalIncompleteLeads = 0;

    props.leadsCount.forEach((item) => {
        const itemDate = new Date(item.year, (item.month - 1), item.day);

      if(itemDate.getTime() >= dateDaysBack.getTime()){
        totalLeadsPresentPeriod = totalLeadsPresentPeriod + (item.completed + item.incompleted);
             totalCompleteLeads = totalCompleteLeads + item.completed;
           totalIncompleteLeads = totalIncompleteLeads + item.incompleted;
      };

     // if(
     //   (itemDate.getTime() >= precedingDate.getTime()) 
     //                        && 
     //   (itemDate.getTime() < dateDaysBack.getTime())
     // ) {
     //   totalLeadsPrecedingPeriod = totalLeadsPrecedingPeriod + (item.completed + item.incompleted);
     // }
    });
 //   const differencebetweenLeads = totalLeadsPresentPeriod - totalLeadsPrecedingPeriod;
 //   let percentageIncrease = null;
 //   if (differencebetweenLeads > 0) {
 //        percentageIncrease = (differencebetweenLeads / totalLeadsPrecedingPeriod) * 100;
 //   }
 //   console.log(totalLeadsPrecedingPeriod, totalLeadsPresentPeriod, percentageIncrease);
    return ({
        totalLeadsPresentPeriod: totalLeadsPresentPeriod,
        totalCompleteLeads: totalCompleteLeads,
        totalIncompleteLeads: totalIncompleteLeads
    });
}



export function TimeFilterObject (props){ 
    const dateDaysBack = new Date(moment().subtract(props.daysGap, 'days').format("YYYY MM DD"));
 //   const precedingDate = new Date(moment().subtract(props.daysGap + props.daysGap, 'days').format("YYYY MM DD"));
    
    let FilteredLeadsObject = [];

    props.leadsCount.forEach((item) => {
        const itemDate = new Date(item.year, (item.month - 1), item.day);
      if(itemDate.getTime() >= dateDaysBack.getTime()){
        FilteredLeadsObject.push(item);
      };
    });
    return ({
        FilterdLeadsData: FilteredLeadsObject
    });
}

/*

    const pastDayToSet = new Date(); 
    pastDayToSet.setDate(pastDayToSet.getDate() - props.lastDate);
    pastDayToSet.setHours(0);
    pastDayToSet.setMinutes(0);
    pastDayToSet.setSeconds(0);
    const timeFilteredObjects = [];
    props.leadsData.forEach((item) => {
      const itemDate = new Date(item.date);
    if(itemDate.getTime() > pastDayToSet.getTime()){
        timeFilteredObjects.push(item);
      }
    });

    const previousDate = new Date();
    previousDate.setDate(previousDate.getDate() - (props.lastDate + props.lastDate));
    previousDate.setHours(0);
    previousDate.setMinutes(0);
    previousDate.setSeconds(0);
    const previousFilteredObjects = [];
    props.leadsData.forEach((item) => {
        const itemDate = new Date(item.date);
      if((itemDate.getTime() > previousDate.getTime()) && (itemDate.getTime() < pastDayToSet.getTime())){
        previousFilteredObjects.push(item);
        }
      });

    const numberofLeadsinpresentperiod = timeFilteredObjects.length;
    const numberofLeadsinpreviousperiod = previousFilteredObjects.length;
    const differencebetweenLeads = numberofLeadsinpresentperiod - numberofLeadsinpreviousperiod;
    let percentageIncrease = null;
    if (differencebetweenLeads > 0) {
         percentageIncrease = (differencebetweenLeads / numberofLeadsinpreviousperiod) * 100;
    }
    */

