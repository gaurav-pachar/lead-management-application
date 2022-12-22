import React, { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";

// Components Imports
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import Modal from 'Components/Misc/modal';
import GoogleMap from "Components/Misc/googleMap";
//import LeadsTableFilter from "../../filter/leadsTableFilter";
import Icon from "Elements/icons";
import LeadsFilter from "Components/Filters/leadsTableAggrid";
import ModalDataStructure from "Components/Misc/leadDataStructure";
import { FaBars } from "react-icons/fa";


export default function EnquiriesTable (props) {
   const rowData = props.rowData;
   const gridRef = useRef();
   const refButton = useRef(null);
   const [mapModel, setmapModel] = useState(false);
   const [modelContent, setmodelContent] = useState({});
   const [showMap, setshowMap] = useState(false);

  // Grid Functions
    const onGridReady = (params) => {
     params.api.sizeColumnsToFit();
     params.columnApi.applyColumnState({
          state: [
            {
              colId: "date",
              sort: "desc"
            },
          ],
        });
      if (rowData?.length === 0) {
        params.api.showLoadingOverlay();
      } else if (rowData[0]?.noData){
       params.api.showNoRowsOverlay();
       }
    };
   

    const onRowClicked = (e) => {
      if(e.data.isUnread){
       const dataToBeCheckd = rowData;
           console.log(e);
      }
   
      if (e.event.target.innerText === "Locate on Map") {
        setmapModel(true);
        setshowMap(true);
        setmodelContent({geocode: e.data.geocode, type:"googlemaps"})
      } else if ((e.data.email.length > 0) && (e.event.target.innerText === e.data.email)) {
          window.open(`mailto:${e.data.email}`);
      } else {
        setmodelContent({...e.data, type:"leadTableData"});
        setmapModel(true);
      }
    }
    
    const getRowStyle = (params) => {
      if (params.data.isUnread) {
          return { fontWeight: 700 };
      }
    }

 // Header Functions

  const MyHeaderCompnonent = (props) => {
     const onMenuClicked = () => {
       props.showColumnMenu(refButton.current);
     };
     return (
       <div className="flex w-full items-center justify-between m-auto">
         Status
         <button 
             onClick={() => onMenuClicked()}
             className="hover:text-blue-500"
             ref={refButton}>
           <FaBars/>
         </button>
       </div>
     )
  }


  // Cell Renderer Functions
   
   const statusRenderer = (params) => {
     const {isComplete, isUnread} = params.data;
     const Stage = isComplete ? "Complete" : "Incomplete";
      return (
      <div className="flex flex-col items-center justify-center h-full">
         {isUnread ? <div className="badge badge-primary">Unread</div> : null} 
        <div className={"badge mt-2 " + (Stage === "Complete" ? "badge-success" : "badge-error")}>{Stage}</div>
      </div>
      )
   }

   const DateandTimeRenderer = (params) => {
   const LocalTime = ToLocalTime(params.data[params.colDef.field]);
     return (
         <div className="flex items-center justify-center h-full whitespace-pre-wrap text-base">
              {LocalTime}
         </div>
     )
   }

   const leadsDetailsRenderer = (params) => {
    const { leadName: LeadName, email: LeadEmail,  phonenumber: LeadPhoneNumber } = params.data;
     return (
      <div className="flex flex-col justify-center items-center h-full">
        <div 
          className="text-sm flex justify-start w-full">
          <span>{LeadName}</span>
        </div>
        <div 
          className="link text-blue-400 cursor-pointer text-sm mt-2 flex justify-center w-full"
          >
          <span>{LeadEmail}</span>
        </div>
        <div 
          className="text-sm mt-2 flex justify-end w-full">
          <span>{LeadPhoneNumber}</span>
        </div>
      </div>
     )
   }

   const addressCell = (params) => {
    return (
      <div className="flex flex-col justify-center items-center h-full">
           <p className="text-sm whitespace-pre-wrap">
            {params.data[params.colDef.field]}
           </p>
           { 
           params.data[params.colDef.field].length > 0 ? 
           <a className="flex w-full justify-end text-xs text-blue-600 cursor-pointer underline">
              Locate on Map
           </a> : null }
      </div>
    )
   }
   
   const valuationRenderer = (params) => {
    const valuation = params.data[params.colDef.field];
      return (
        <div className="flex items-center justify-center h-full">
         <span>{valuation ? `Rs. ${valuation}` : null}</span>
        </div>
      )
   }

   const detailButton = () => {
       return (
         <div className="flex items-center justify-center h-full">
           <button className="btn btn-link">
             View Details
           </button>
         </div>
       );
   }
   
  // const birthday4 = new Date(2022, 10, 20, 13, 0, 0);
  // console.log(birthday4);
  return (
      
    <div className="bg-white p-3 rounded-lg border border-slate-200 mt-4">
    {
    props.fetchData ? 
    <div className="mb-4">
      <button 
        className={"btn btn-primary btn-sm ml-6 lg:ml-0" + (props.fetchingData ? " loading" : "")}
        onClick={(e) => {
          props.fetchData();
        }}
        disabled={props.fetchingData}>
        Refresh Data
      </button>
    </div> : null }
        <div className="ag-theme-alpine w-full" style={{ height: "85vh" }}>
          <AgGridReact
            ref={gridRef}
            onGridReady={onGridReady}
            rowData={rowData?.length === 0 ? rowData : (rowData[0]?.noData ? null : rowData) }
            rowSelection="multiple"
            rowMultiSelectWithClick={true}
            suppressRowClickSelection={true}
            onRowClicked={onRowClicked}
            rowHeight={120}
            getRowStyle={getRowStyle}
           >
            <AgGridColumn
              field="status"
              headerName="Status"
              cellRenderer={statusRenderer}
              filter={LeadsFilter}
              headerComponent={MyHeaderCompnonent}
            />
            <AgGridColumn
              field="DateandTime"
              headerName="Date and Time"
              cellRenderer={DateandTimeRenderer}
              sortable={true}
              filter={true}
              resizable={true}
              floatingFilter={true}
            />
            <AgGridColumn
              headerName="Lead's Details"
              cellRenderer={leadsDetailsRenderer}
              filter={true}
              floatingFilter={true}
              resizable={true}/>
            <AgGridColumn
              field="leadAddress"
              headerName="Address"
              cellRenderer={addressCell}
              sortable={true}
              filter={true}
              resizable={true}
              floatingFilter={true}
            />
            <AgGridColumn
              field="estimate"
              headerName="Estimate"
              sortable={true}
              filter={true}
              resizable={true}
              floatingFilter={true}
              cellRenderer={valuationRenderer}
            />
            <AgGridColumn
              field="viewDetails"
              headerName="Action"
              cellRenderer={detailButton}
            />
          </AgGridReact>
        </div>
        <Modal 
                   modelOpen={mapModel} 
                   {...modelContent} 
                   onCloseBtnClick={(e) => {setmodelContent({});setmapModel(false);setshowMap(false)}}>

                   {showMap ? 

                   <GoogleMap geocode={modelContent.geocode}/> : 

                       <ModalDataStructure {...modelContent} ToLocalTime={ToLocalTime}/>
                   }
        </Modal> 
        </div>
     )
}



const ToLocalTime = (date) => {
  const strDateTime = date;
  const myDate = new Date(strDateTime);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour12: true,
    hourCycle: "h12",
    hour: "2-digit",
    minute:	"2-digit",
    second:	"2-digit"
  }

  return(myDate.toLocaleString('en-US',options));
}













//onRowClicked={onRowClicked}

/*

if (filteredData.length === 0 && leadsData.length === 0) {
       params.api.showLoadingOverlay();
     } else if (leadsData[0]?.noData){
      params.api.showNoRowsOverlay();
      }


rowData={(leadsData.length === 0) ? leadsData : (leadsData[0].noData ? null : filteredData)}
*/


