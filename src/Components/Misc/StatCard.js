import React, {useEffect, useState, useRef} from "react";
import { FaCircleNotch } from "react-icons/fa";

export default function StatCard (props) {
    return (
    <div className={props.className}>
     <div className="stats">
        <div className="stat">
          <div className="stat-title">{props.statHeading}</div>
          <div className="stat-value">{props.stats?.length === 0 ? <FaCircleNotch className='animate-spin h-8 w-auto stroke-2' /> : props.stats}</div>
          <div className="stat-desc">{props.statDetails}</div>
        </div>
     </div>
    </div>
    )
}
// <FaCircleNotch className='animate-spin h-8 w-auto stroke-2' />
