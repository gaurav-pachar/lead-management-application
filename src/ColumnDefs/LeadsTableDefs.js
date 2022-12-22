const MyHeaderCompnonent = (props) => {
    // console.log(props);
     
   
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

const statusRenderer = (params) => {
    const { time , stage } = badgeRender(params.data);
     return (
     <div className="flex flex-col items-center justify-center h-full">
        {time === "Unread" ? <div className="badge badge-primary">{time}</div> : null} 
       <div className={"badge mt-2 " + (stage === "Complete" ? "badge-success" : "badge-error")}>{stage}</div>
     </div>
     )
  }

  const DateandTimeRenderer = (params) => {
  // console.log(params.colDef.field);
  const LocalTime = ToLocalTime(params.data[params.colDef.field]);
    return (
        <div className="flex items-center justify-center h-full whitespace-pre-wrap text-base">
             {LocalTime}
        </div>
    )
  }

  const leadsDetailsRenderer = (params) => {
    return (
     <div className="flex flex-col justify-center items-center h-full">
       <div 
         className="text-sm flex justify-start w-full">
         <span>{params.data.leadName}</span>
       </div>
       <div 
         className="link text-blue-400 cursor-pointer text-sm mt-2 flex justify-center w-full"
         >
         <span>{params.data.email}</span>
       </div>
       <div 
         className="text-sm mt-2 flex justify-end w-full">
         <span>{params.data.phonenumber}</span>
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

  const getRowStyle = (params) => {
   if (params.data.isUnread) {
       return { fontWeight: 700 };
   }
  }

const LeadsTableDef = [
    {
      field: "status",
      headerName: "Status",
      cellRenderer: statusRenderer,
      filter: LeadsFilter,
      headerComponent: MyHeaderCompnonent
    },{
      field: "DateandTime",
      headerName: "Date and Time",
      cellRenderer: DateandTimeRenderer,
      sortable: true,
      filter: true,
      resizable: true,
      floatingFilter: true,
    },{
      headerName: "Lead's Details",
      cellRenderer: leadsDetailsRenderer,
      filter: true,
      floatingFilter: true,
      resizable: true
    },{
      field: "leadAddress",
      headerName: "Address",
      cellRenderer: addressCell,
      sortable: true,
      filter: true,
      resizable: true,
      floatingFilter: true
    },{
      field: "estimate",
      headerName: "Estimate",
      sortable: true,
      filter: true,
      resizable: true,
      floatingFilter: true,
      cellRenderer: valuationRenderer 
    },{
      field: "viewDetails",
      headerName: "Action",
      cellRenderer: detailButton
    }
]