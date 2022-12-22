import React from 'react';
import moment from 'moment';

function WelcomeBanner(props) {
  const timeOfDay = () => {
     const presentTime = "05:11 PM";
     let greeting = "";
     const hour = presentTime.slice(0,2);
     if (presentTime.includes("AM")) {
         greeting = getGreeting(hour, "AM");
        return greeting 
     } else if (presentTime.includes("PM")) {
      greeting = getGreeting(hour, "PM");
      return greeting 
     }  
  }

  const getGreeting = (hour, dayTime) => {
     let greeting = ""
    if(((hour == 12) || (hour < 3)) && (dayTime === "AM")){
        return greeting = "Good Night"      
    } else if (((hour >= 3) && (hour <= 12)) && (dayTime === "AM")) {
        return greeting = "Good Morning"
    } else if (((hour == 12) || (hour < 5)) && (dayTime === "PM")) {
        return greeting = "Good Afternoon"
    } else if (((hour >= 5) && (hour < 8)) && (dayTime === "PM")) {
        return greeting = "Good Evening"
    } else if (((hour >= 8) && (hour < 12)) && (dayTime === "PM")) {
        return greeting = "Good Night"
    }
  }
  return (
    <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
       {/* Content */}
      <div className="relative">
        <h1 
          className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
            {timeOfDay()}, {props.given_name}! 👋
        </h1>
        <p>Here is what’s happening with your projects today:</p>
      </div>

    </div>
  );
}

export default WelcomeBanner;
