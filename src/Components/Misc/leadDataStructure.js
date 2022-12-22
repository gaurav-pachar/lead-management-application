import React from "react";
import Icon from "Elements/icons";
export default function LeadDataStructure ({
    ToLocalTime, ...props
}) {
    console.log(props, ToLocalTime);
    const { isComplete } = props;
    const stage = isComplete ? "Complete" : "Incomplete";
    const {DateandTime, 
           email, 
           leadName, 
           phonenumber, 
           leadAddress, 
           builtUpArea, 
           noOfBathrooms, 
           estimate} = props;
    return (
        <div className="p-0 pb-4">
        <div className="flex items-center justify-between mb-8">
        <div className={"badge " + (stage === "Complete" ? "badge-success" : "badge-error")}>{stage}</div>
          <div className="ml-4 text-lg">{ToLocalTime(DateandTime)}</div>
        </div>
        <div className="mt-6 mb-3 flex justify-start items-center w-full">
                <h1 className="font-bold text-2xl">Leads Details:</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
             <div className="col-span-4 sm:col-span-1 md:flex justify-center items-center text-gray-500 font-bold text-xl">Lead Name:</div>
             <div className="col-span-4 sm:col-span-3 lg:col-span-1 flex justify-end sm:justify-center items-center text-xl">
               {leadName}
             </div>
             <div className="col-span-4 sm:col-span-1 md:flex justify-center items-center text-gray-500 font-bold text-xl mt-4 lg:mt-0">Phone No:</div>
             <div className="col-span-4 sm:col-span-3 lg:col-span-1 flex justify-end sm:justify-center items-center text-xl">
               {phonenumber}
             </div>
             <div className="col-span-4 sm:col-span-1 mt-4 text-xl md:flex justify-center items-center">
              <span 
                  className="text-gray-500 font-bold mr-4 ">Email: 
              </span>
             </div>
             <div className="col-span-4 sm:col-span-3 mt-4 mb-4 lg:mb-0 text-xl flex justify-center lg:justify-start items-center">
              <span onClick={(e) => {
                              e.preventDefault();
                              window.open(`mailto:${props.email}`);
                             }}
                    className="underline text-blue-400">
                              {email}
              </span>
             </div>
             <div className="col-span-4 mt-6 md:mb-4 text-xl">
             <h1 className="font-bold text-2xl">Site Details:</h1>
             </div>
             <div className="col-span-4 mb-4 flex justify-center items-center">
                <span className="w-5">
                    {Icon("GoogleMaps")}
                </span>
                <span className="text-2xl ml-4">{leadAddress}</span>
             </div>
              <div className="col-span-4 sm:col-span-2 text-xl flex items-center justify-start sm:justify-center">
              <span className="text-gray-500 font-bold mr-4">Built Up Area:</span>
              <span className="text-black font-extrabold">{builtUpArea} SqFt</span>
              </div>
             <div className="col-span-4 sm:col-span-2 text-xl mt-4 sm:mt-0 flex items-center justify-start sm:justify-center">
              <span className="text-gray-500 font-bold mr-4">No of Bathrooms:</span>
              <span className="text-black font-bold">{noOfBathrooms}</span>
             </div>
             <div className="col-span-4 md:col-span-2 text-xl mt-4 mb-4 md:flex justify-center items-center">
              <span className="text-gray-500 font-bold mr-4">Estimate Provided: </span>
              Rs. <span className="ml-1 text-black font-bold">{estimate}</span>
             </div>
        </div>
    </div>
    )
}