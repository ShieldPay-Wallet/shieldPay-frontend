import { forwardRef } from "react";
import "../registeration/style.css"

const Modal = forwardRef(({children,show,onClose},ref) =>{
  
    if(!show){
        return null
    }
    return(
        <div className="modal-container" onClick={onClose} ref={ref}>
            <div className="modal-contentt" onClick={e => e.stopPropagation()}>
                <div className="modal-body">
                    {children}
                </div>
            </div>
            
        </div>
    );

})
export default Modal;