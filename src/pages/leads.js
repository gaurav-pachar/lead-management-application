import React, { useEffect, useState } from 'react';
// NextJs imports
import Head from 'next/head';
// components imports
import EnquiriesTable from 'Components/Tables/enquiriesTable';
import DashboardLayout from 'Components/Layouts/DashboardLayout';
import TabPanels from 'Components/TabPanels/TabPanels';
export default function Leads(props) {
  const [newLeadsShow, setnewLeadsShow] = useState(true);
  const [rowData, setrowData] = useState([])
  const [fetchingData, setfetchingData] = useState(false);

  React.useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => {
    setfetchingData(true);
    setTimeout(() => {
      setrowData(LeadsData);
      //setrowData([{noData: true}]);
      setfetchingData(false);
    }, 3000);
  };
  
  const items = [
    {
      TabLabel: "New Leads",
      children: <EnquiriesTable rowData={rowData} fetchingData={fetchingData} fetchData={fetchData}/>
    },{
      TabLabel: "Old Leads",
      children: <EnquiriesTable rowData={OldLeadsData}/>
    },{
      TabLabel: "Archived Leads",
      children: <EnquiriesTable rowData={[]}/>
    }
  ]
  return (
       <DashboardLayout user={props.user}>
        <TabPanels tabDef={items}/>
       </DashboardLayout> 
  )
}

/*export async function getServerSideProps({ req }) {
  const { Auth } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    // console.log("signed in User:", user);
    return {
        props: {
          authenticated: true,
          user: {...user.attributes}
        },
      };
  } catch (err) {
     console.log(err);
     return {
        redirect: {
          destination: "/user/login",
          permanent: false,
        },
       props: {
         authenticated: false,
         user: {
          email: "demo@example.com",
          name: "Demo"
        }
       },
     };
  }
}*/
let OldLeadsData = [
  {
    isUnread: true,
    isComplete: true,
    leadName: "Jane Doe",
    leadAddress: "H. No. 14, Sector - 40, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 2900,
    noOfBathrooms: 3,
    phonenumber: 1256567890,
    email: "jane.doe@gmail.com",
    DateandTime: "Wed Dec 14 2022 20:10:00 GMT+0530 (India Standard Time)",
    leadID: "1",
    estimate: 450000
  }
]
let LeadsData = [
  {
    isUnread: true,
    isComplete: true,
    leadName: "Jane Doe",
    leadAddress: "H. No. 14, Sector - 40, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 2900,
    noOfBathrooms: 3,
    phonenumber: 1256567890,
    email: "jane.doe@gmail.com",
    DateandTime: "Wed Dec 14 2022 20:10:00 GMT+0530 (India Standard Time)",
    leadID: "1",
    estimate: 450000
  },
  {
    isUnread: true,
    isComplete: true,
    leadName: "John Doe",
    leadAddress: "",
    location: "",
    message: "",
    builtUpArea: 3100,
    noOfBathrooms: 3,
    phonenumber: 1234597890,
    email: "john.doe@gmail.com",
    DateandTime: "Wed Dec 14 2022 10:10:00 GMT+0530 (India Standard Time)",
    leadID: "2",
    estimate: 450000
  },
  {
    isUnread: false,
    isComplete: true,
    leadName: "Jerry Dane",
    leadAddress: "H. No. 123, Sector - 2, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 4500,
    noOfBathrooms: 4,
    phonenumber: 1232597890,
    email: "jerry.dane@gmail.com",
    DateandTime: "Mon Dec 12 2022 11:00:00 GMT+0530 (India Standard Time)",
    leadID: "3",
    estimate: 600000
  },
  {
    isUnread: false,
    isComplete: false,
    leadName: "Tom Harry",
    leadAddress: "H. No. 561, Sector - 68, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: null,
    noOfBathrooms: null,
    phonenumber: 1234563700,
    email: "tom.harry@gmail.com",
    DateandTime: "Mon Dec 12 2022 17:00:00 GMT+0530 (India Standard Time)",
    leadID: "4",
    estimate: null
  },
  {
    isUnread: true,
    isComplete: true,
    leadName: "Parth Kumar",
    leadAddress: "H. No. 1, Sector - 78, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 4800,
    noOfBathrooms: 5,
    phonenumber: 1234539890,
    email: "parth.kumar@gmail.com",
    DateandTime: "Mon Dec 12 2022 09:00:00 GMT+0530 (India Standard Time)",
    leadID: "5",
    estimate: 450000
  },
  {
    isUnread: true,
    isComplete: false,
    leadName: "Shyam Singh",
    leadAddress: "",
    location: "",
    message: "",
    builtUpArea: null,
    noOfBathrooms: null,
    phonenumber: 1232867890,
    email: "shyam.singh@gmail.com",
    DateandTime: "Sat Dec 10 2022 18:30:00 GMT+0530 (India Standard Time)",
    leadID: "6",
    estimate: null
  },
  {
    isUnread: true,
    isComplete: true,
    leadName: "James Brown",
    leadAddress: "H. No. 67, Sector - 89, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 2800,
    noOfBathrooms: 3,
    phonenumber: 1230467890,
    email: "jmaes.brown@gmail.com",
    DateandTime: "Fri Dec 09 2022 17:00:00 GMT+0530 (India Standard Time)",
    leadID: "7",
    estimate: 400000
  },
  {
    isUnread: true,
    isComplete: false,
    leadName: "John Harry",
    leadAddress: "H. No. 78, Sector - 89, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: null,
    noOfBathrooms: 2,
    phonenumber: 1934567890,
    email: "john.harry@gmail.com",
    DateandTime: "Wed Dec 07 2022 08:00:00 GMT+0530 (India Standard Time)",
    leadID: "8",
    estimate: null
  },
  {
    isUnread: false,
    isComplete: true,
    leadName: "Jerry Brown",
    leadAddress: "H. No. 23, Sector - 3, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 5500,
    noOfBathrooms: 5,
    phonenumber: 1234567850,
    email: "jerry.brown@gmail.com",
    DateandTime: "Tue Dec 06 2022 12:30:00 GMT+0530 (India Standard Time)",
    leadID: "9",
    estimate: 700000
  },
  {
    isUnread: true,
    isComplete: true,
    leadName: "Barack Obama",
    leadAddress: "H. No. 18, Sector - 6, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 2700,
    noOfBathrooms: 3,
    phonenumber: 1234287890,
    email: "barack.obama@gmail.com",
    DateandTime: "Sat Dec 03 2022 12:30:00 GMT+0530 (India Standard Time)",
    leadID: "10",
    estimate: 650000
  },
  {
    isUnread: true,
    isComplete: true,
    leadName: "Barack Doe",
    leadAddress: "H. No. 12, Sector - 9, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 2200,
    noOfBathrooms: 2,
    phonenumber: 1239567890,
    email: "barack.doe@gmail.com",
    DateandTime: "Sat Dec 03 2022 12:30:00 GMT+0530 (India Standard Time)",
    leadID: "11",
    estimate: 300000
  },
  {
    isUnread: true,
    isComplete: false,
    leadName: "Brat Brown",
    leadAddress: "",
    location: "",
    message: "",
    builtUpArea: null,
    noOfBathrooms: null,
    phonenumber: 1207467890,
    email: "brat.brown@gmail.com",
    DateandTime: "Fri Dec 02 2022 14:30:00 GMT+0530 (India Standard Time)",
    leadID: "12",
    estimate: null
  },
  {
    isUnread: true,
    isComplete: true,
    leadName: "Raman Deep",
    leadAddress: "H. No. 671, Sector - 23, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 3300,
    noOfBathrooms: 3,
    phonenumber: 1234575190,
    email: "raman.deep@gmail.com",
    DateandTime: "Fri Dec 02 2022 12:30:00 GMT+0530 (India Standard Time)",
    leadID: "13",
    estimate: 400000
  },
  {
    isUnread: true,
    isComplete: false,
    leadName: "True Blue",
    leadAddress: "",
    location: "",
    message: "",
    builtUpArea: 6000,
    noOfBathrooms: 5,
    phonenumber: 1234917890,
    email: "true.blue@gmail.com",
    DateandTime: "Tue Nov 29 2022 15:30:00 GMT+0530 (India Standard Time)",
    leadID: "14",
    estimate: 800000
  },
  {
    isUnread: false,
    isComplete: false,
    leadName: "Matt Brown",
    leadAddress: "",
    location: "",
    message: "",
    builtUpArea: null,
    noOfBathrooms: null,
    phonenumber: 1592356890,
    email: "matt.brown@gmail.com",
    DateandTime: "Mon Nov 28 2022 15:00:00 GMT+0530 (India Standard Time)",
    leadID: "15",
    estimate: null
  },
  {
    isUnread: true,
    isComplete: false,
    leadName: "Bill Gates",
    leadAddress: "",
    location: "",
    message: "",
    builtUpArea: 4500,
    noOfBathrooms: 4,
    phonenumber: 1206367890,
    email: "bill.gates@gmail.com",
    DateandTime: "Sat Nov 26 2022 19:30:00 GMT+0530 (India Standard Time)",
    leadID: "16",
    estimate: 600000
  },
  {
    isUnread: true,
    isComplete: true,
    leadName: "Joe Biden",
    leadAddress: "H. No. 561, Sector - 78, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 1800,
    noOfBathrooms: 2,
    phonenumber: 1634567890,
    email: "joe.biden@gmail.com",
    DateandTime: "Thu Nov 24 2022 20:00:00 GMT+0530 (India Standard Time)",
    leadID: "17",
    estimate: 300000
  },
  {
    isUnread: false,
    isComplete: true,
    leadName: "James Bull",
    leadAddress: "H. No. 367, Sector - 34, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 3000,
    noOfBathrooms: 3,
    phonenumber: 1234538890,
    email: "james.bull@gmail.com",
    DateandTime: "Tue Nov 22 2022 10:00:00 GMT+0530 (India Standard Time)",
    leadID: "18",
    estimate: 450000
  },
  {
    isUnread: true,
    isComplete: true,
    leadName: "Carl Joe",
    leadAddress: "H. No. 567, Sector - 45, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 4200,
    noOfBathrooms: 4,
    phonenumber: 1234527590,
    email: "carl.joe@gmail.com",
    DateandTime: "Sun Nov 20 2022 13:00:00 GMT+0530 (India Standard Time)",
    leadID: "19",
    estimate: 600000
  },
  {
    isUnread: true,
    isComplete: true,
    leadName: "James Clarks",
    leadAddress: "H. No. 234, Sector - 63, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 3100,
    noOfBathrooms: 3,
    phonenumber: 1234505290,
    email: "james.clarks@gmail.com",
    DateandTime: "Sat Nov 19 2022 13:00:00 GMT+0530 (India Standard Time)",
    leadID: "21",
    estimate: 500000
  },
  {
    isUnread: true,
    isComplete: false,
    leadName: "Ron Jane",
    leadAddress: "",
    location: "",
    message: "",
    builtUpArea: null,
    noOfBathrooms: null,
    phonenumber: 1234594890,
    email: "ron.jane@gmail.com",
    DateandTime: "Thu Nov 17 2022 07:45:00 GMT+0530 (India Standard Time)",
    leadID: "22",
    estimate: null
  },
  {
    isUnread: false,
    isComplete: true,
    leadName: "Reed Brown",
    leadAddress: "H. No. 365, Sector - 73, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 2000,
    noOfBathrooms: 2,
    phonenumber: 1242767890,
    email: "reed.brown@gmail.com",
    DateandTime: "Tue Nov 15 2022 09:45:00 GMT+0530 (India Standard Time)",
    leadID: "23",
    estimate: 400000
  },
  {
    isUnread: false,
    isComplete: true,
    leadName: "Jack Bill",
    leadAddress: "H. No. 456, Sector - 87, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 2700,
    noOfBathrooms: 3,
    phonenumber: 1239967890,
    email: "jabk.bill@gmail.com",
    DateandTime: "Mon Nov 14 2022 19:45:00 GMT+0530 (India Standard Time)",
    leadID: "24",
    estimate: 350000
  },
  {
    isUnread: false,
    isComplete: true,
    leadName: "Lime Soda",
    leadAddress: "H. No. 1, Sector - 42, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 4000,
    noOfBathrooms: 5,
    phonenumber: 1234000890,
    email: "lime.soda@gmail.com",
    DateandTime: "Mon Nov 14 2022 09:15:00 GMT+0530 (India Standard Time)",
    leadID: "25",
    estimate: 650000
  },
  {
    isUnread: true,
    isComplete: true,
    leadName: "Kelly Carl",
    leadAddress: "H. No. 259, Sector - 40, ABCDEF, GHIJKL",
    location: "",
    message: "",
    builtUpArea: 2900,
    noOfBathrooms: 3,
    phonenumber: 1234557890,
    email: "kelly.carl@gmail.com",
    DateandTime: "Sat Nov 12 2022 20:15:00 GMT+0530 (India Standard Time)",
    leadID: "26",
    estimate: 400000
  },
  {
    isUnread: true,
    isComplete: false,
    leadName: "John Jess",
    leadAddress: "",
    location: "",
    message: "",
    builtUpArea: 1000,
    noOfBathrooms: 1,
    phonenumber: 1234533390,
    email: "john.jess@gmail.com",
    DateandTime: "Fri Nov 11 2022 09:15:00 GMT+0530 (India Standard Time)",
    leadID: "27",
    estimate: 150000
  }
]