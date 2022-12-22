import React from 'react';

export default function TabPanels (props) {
    const [TabActive, setTabActive] = React.useState(0);
    const {tableLabels, childrens} = propExtracter(props.tabDef);
    return (
        <div className='bg-white p-4 shadow-lg rounded-lg border border-slate-200 mt-4'>
              <div className="tabs bg-white tabs-boxed">
                {tableLabels.map((item, index) => {
                    return (
                        <button 
                               className={"tab " + (index === TabActive ? "tab-active" : null)}
                               key={index}
                               onClick={() => setTabActive(index)}>
                        {item}
                        </button> 
                    )
                })} 
              </div>
              {
                childrens[TabActive]
              }
        </div>
    )
}

const propExtracter = (tabDef) => {
    console.log(tabDef);
    const extracted = {
        tableLabels: [],
        childrens: []
    } 
    tabDef.forEach((item) => {
        extracted.tableLabels.push(item.TabLabel);
        extracted.childrens.push(item.children);
    })
    return (
        extracted 
    )
}