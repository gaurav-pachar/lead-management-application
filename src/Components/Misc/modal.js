import React from 'react';

export default function Modal (props) {
    switch (props.type) {
      case "normal":
            return (
                <>
                <div className={"modal" + (props.modelOpen ? " modal-open" : "")} id="my-modal-2">
                 <div className="modal-box">
                   <h3 className="font-bold text-lg">{props.heading}</h3>
                   <p className="py-4">{props.details}</p>
                   <div className="modal-action">
                   {props.btnLabel2 ? <button onClick={(e) => props.onBtn2Click(e)} className="btn">{props.btnLabel2}</button> : null}
                   <button onClick={(e) => props.onMainBtnClick(e)} className="btn btn-primary">{props.btnLabel}</button>
                   </div>
                 </div>
               </div>
                </>
            )
      case "closeOnClickOutside":
            return (
                <>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className={"modal" + (props.modelOpen ? " modal-open" : "")}>
                <div className="modal-box relative">
                  <button onClick={(e) => props.onCloseBtnClick(e)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                  <h3 className="text-lg font-bold">{props.heading}</h3>
                  <p className="py-4 text-red-500">{props.details}</p>
                </div>
              </div>
                </>
            )
      case "googlemaps":
              return (
                  <>
                  <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                  <div className={"modal" + (props.modelOpen ? " modal-open" : "")}>
                  <div className="modal-box h-5/6 w-11/12 max-w-5xl flex justify-center">
                    <button onClick={(e) => props.onCloseBtnClick(e)} htmlFor="my-modal-3" className="btn btn-square btn-xs sm:btn-sm absolute right-2 top-2">✕</button>
                    <div className='h-11/12 w-11/12'>
                    {props.children}
                    </div>
                  </div>
                </div>
                  </>
              )
        case "changePassword":
              return (
                <>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className={"modal" + (props.modelOpen ? " modal-open" : "")}>
                 <div className="modal-box w-96">
                 <button onClick={(e) => props.onCloseBtnClick(e)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                 <div className='p-3'>
                   <h3 className="font-bold text-lg">{props.heading}</h3>
                   <div className="py-4">{props.children}</div>
                   <p className="py-4 text-red-500">{props.error.length > 0 ? props.error : null}</p>
                 </div>
                 </div>
               </div>
                </>
              )
        case "leadTableData":
                return (
                    <>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className={"modal" + (props.modelOpen ? " modal-open" : "")}>
                    <div className="modal-box h-fit w-11/12 max-w-5xl flex justify-center py-8 px-2">
                      <button onClick={(e) => props.onCloseBtnClick(e)} htmlFor="my-modal-3" className="btn btn-xs btn-circle absolute right-2 top-2">✕</button>
                      <div className='h-11/12 w-11/12'>
                        {props.children}
                      </div>
                    </div>
                  </div>
                    </>
                )
                case "profilePicture":
                  return (
                      <>
                      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                      <div className={"modal" + (props.modelOpen ? " modal-open" : "")}>
                      <div className="modal-box relative">
                        <button onClick={(e) => props.onCloseBtnClick(e)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                        <div>
                          {props.children}
                        </div>
                      </div>
                    </div>
                      </>
                  )
    }
    
}

/*
<>
                  <div className={"modal" + (props.modelOpen ? " modal-open" : "")} id="my-modal-2">
                    <div clasName="modal-box bg-white">
                      <h3 className="font-bold text-lg">{props.heading}</h3>
                      <div clasName="py-4">{props.children}</div>
                    </div>
                  </div>
                  </>
*/