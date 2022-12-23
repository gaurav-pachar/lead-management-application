import React, {forwardRef, useImperativeHandle} from "react";

export default forwardRef(function Filter(props, ref){

 const [filterParamState, setfilterParamState] = React.useState([]);
 const [filterOn, setfilterOn] = React.useState(false);
 const AllFilterParams = ["all","incomplete","complete","unread","opened"]
 React.useEffect(() => {
  props.filterChangedCallback();
 }, [filterParamState])
 
 useImperativeHandle(ref, () => {
   return {
       isFilterActive () {
           return filterOn
           //return !filterParamState.includes("all");
       },
       doesFilterPass(params){
           console.log(params);
           const filter = filterItem(params.data, filterParamState);
           return filter;
       },
       getModel(){
           return undefined
       },
       setModel(){
       }
   }
 })

 const SetFilterParams = (valueToFilter, valueToAdd, FilterParamsInState) => {
    const OpositeValueRemoved = FilterParamsInState.filter((item) => {return item !== valueToFilter });
    
    !FilterParamsInState.includes(valueToAdd) ? setfilterParamState([...OpositeValueRemoved, valueToAdd]) : null
 }

 const filterBtnsClicked = (e) => {

   if(!filterOn){
    setfilterOn(true);
   } 
    
   if(e.target.name === "all") {
     setfilterOn(false);
     setfilterParamState([]);
   } else if (e.target.name === "incomplete") {
     SetFilterParams("complete", "incomplete", filterParamState);

   } else if (e.target.name === "complete") {
     SetFilterParams("incomplete", "complete", filterParamState);

   } else if (e.target.name === "unread") {
    SetFilterParams("opened", "unread", filterParamState);

   } else if (e.target.name === "opened") {
    SetFilterParams("unread", "opened", filterParamState);

   }
   
 }
 

 const filterItem = (item, filterParams) => {
    console.log(filterParams);
    let itemViewedStatus = ""; 
    let itemDetailStatus = "";
    let filterTheItem = false; 

    item.isUnread ? (itemViewedStatus = "unread") : (itemViewedStatus = "opened");

    item.isComplete ? (itemDetailStatus = "complete") : (itemDetailStatus = "incomplete");

    if(filterParams.length === 1){
        filterTheItem = filterParams.includes(itemViewedStatus) || filterParams.includes(itemDetailStatus); 
    } else if(filterParams.length === 2){
        filterTheItem = filterParams.includes(itemViewedStatus) && filterParams.includes(itemDetailStatus)
    }
    return filterTheItem;
 }

 return (
   <div className="p-2 rounded-lg">
   <div className="">
     <span className="-2">
         Status:
     </span> 
    <div className="ml-3 pb-3 my-2 border-b-2">
        <label className="">
           <input 
                type="radio" 
                name="all" 
                className="" 
                checked={!filterOn}
                onChange={filterBtnsClicked} />
           <span className="label-text ml-2">All Leads</span> 
         </label>
   </div>
   <ul className="flex">
    <div className="p-2">
     <li className="p-1">
        <label className="">
           <input 
                type="radio" 
                name="unread" 
                className="" 
                checked={filterParamState.includes("unread")}
                onChange={filterBtnsClicked} />
           <span className="label-text ml-2">Unread</span> 
         </label>
     </li>
     <li className="p-1">
        <label className="">
           <input 
                type="radio" 
                name="opened" 
                className="" 
                checked={filterParamState.includes("opened")}
                onChange={filterBtnsClicked} />    
           <span className="label-text ml-2">Opened</span> 
         </label>
     </li>
    </div>
    <div className="p-2 border-l-2">
     <li className="p-1">
        <label className="">
           <input 
                type="radio" 
                name="complete" 
                className="" 
                checked={filterParamState.includes("complete")}
                onChange={filterBtnsClicked} />    
           <span className="label-text ml-2">Complete Leads</span> 
         </label>
     </li>
     <li className="p-1">
        <label className="">
           <input 
                type="radio" 
                name="incomplete" 
                className="" 
                checked={filterParamState.includes("incomplete")}
                onChange={filterBtnsClicked} />    
           <span className="label-text ml-2">Incomplete Leads</span> 
         </label>
     </li>
    </div>
   </ul>
  </div>
 </div>
 )
})


/*
const [filterParamState, setfilterParamState] = React.useState(["all"]);
 const intialFilterParamsObject = {
  FilterOn: false, 
  AllUnread: false,
  AllComplete: false,
}
 const [FilterParamsObject, setFilterParamsObject] = useState(intialFilterParamsObject)
 const AllFilterParams = ["all","incomplete","complete","unread","opened"]
 React.useEffect(() => {
  props.filterChangedCallback();
 }, [filterParamState])
 
 useImperativeHandle(ref, () => {
   return {
       isFilterActive () {
           //return FilterParamsObject.FilterOn
           return !filterParamState.includes("all");
       },
       doesFilterPass(params){
           console.log(params);
           const filter = filterItem(params.data, filterParamState);
           return filter;
       },
       getModel(){
           return undefined
       },
       setModel(){
       }
   }
 })

 const SetFilterParams = (DefaultValueRemoved, valueToFilter, valueToAdd, FilterParamsInState) => {
    const OpositeValueRemoved = DefaultValueRemoved.filter((item) => {return item !== valueToFilter });
    !FilterParamsInState.includes(valueToAdd) ? setfilterParamState([...OpositeValueRemoved, valueToAdd]) : null
 }

 const filterBtnsClicked = (e) => {
    console.log(e);
    let DefaultValueRemoved = [];

   if(filterParamState.includes("all")){
        DefaultValueRemoved = filterParamState.filter((item) => {return item !== "all" });
   } else {
       DefaultValueRemoved = filterParamState;
   }
    
   if(e.target.name === "all") {
     setfilterParamState(["all"]);

   } else if (e.target.name === "incomplete") {
     SetFilterParams(DefaultValueRemoved, "complete", "incomplete", filterParamState);
   } else if (e.target.name === "complete") {
     SetFilterParams(DefaultValueRemoved, "incomplete", "complete", filterParamState);
   } else if (e.target.name === "unread") {
    SetFilterParams(DefaultValueRemoved, "opened", "unread", filterParamState);
   } else if (e.target.name === "opened") {
    SetFilterParams(DefaultValueRemoved, "unread", "opened", filterParamState);
   }
   
 }
 

 const filterItem = (item, filterParams) => {
    console.log(filterParams);
    let itemViewedStatus = ""; 
    let itemDetailStatus = "";
    let filterTheItem = false; 

    item.isUnread ? (itemViewedStatus = "unread") : (itemViewedStatus = "opened");

    item.isComplete ? (itemDetailStatus = "complete") : (itemDetailStatus = "incomplete");

    if(filterParams.length === 1){
        filterTheItem = filterParams.includes(itemViewedStatus) || filterParams.includes(itemDetailStatus); 
    } else if(filterParams.length === 2){
        filterTheItem = filterParams.includes(itemViewedStatus) && filterParams.includes(itemDetailStatus)
    }
    return filterTheItem;
 }

 return (
   <div className="p-2 rounded-lg">
   <div className="">
     <span className="-2">
         Status:
     </span> 
    <div className="ml-3 pb-3 my-2 border-b-2">
        <label className="">
           <input 
                type="radio" 
                name="all" 
                className="" 
                checked={filterParamState.includes("all")}
                onChange={filterBtnsClicked} />
           <span className="label-text ml-2">All Leads</span> 
         </label>
   </div>
   <ul className="flex">
    <div className="p-2">
     <li className="p-1">
        <label className="">
           <input 
                type="radio" 
                name="unread" 
                className="" 
                checked={filterParamState.includes("unread")}
                onChange={filterBtnsClicked} />
           <span className="label-text ml-2">Unread</span> 
         </label>
     </li>
     <li className="p-1">
        <label className="">
           <input 
                type="radio" 
                name="opened" 
                className="" 
                checked={filterParamState.includes("opened")}
                onChange={filterBtnsClicked} />    
           <span className="label-text ml-2">Opened</span> 
         </label>
     </li>
    </div>
    <div className="p-2 border-l-2">
     <li className="p-1">
        <label className="">
           <input 
                type="radio" 
                name="complete" 
                className="" 
                checked={filterParamState.includes("complete")}
                onChange={filterBtnsClicked} />    
           <span className="label-text ml-2">Complete Leads</span> 
         </label>
     </li>
     <li className="p-1">
        <label className="">
           <input 
                type="radio" 
                name="incomplete" 
                className="" 
                checked={filterParamState.includes("incomplete")}
                onChange={filterBtnsClicked} />    
           <span className="label-text ml-2">Incomplete Leads</span> 
         </label>
     </li>
    </div>
   </ul>
  </div>
 </div>
 )
*/
