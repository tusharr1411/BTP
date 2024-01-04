import { useEffect } from "react";

import "./Modal.css"



const Modal = ({setModalOpen,contract})=>{


    const sharing =  async ()=>{
        const address = document.querySelector(".address").ariaValueMax;
        await contract.allow(address);
        

    }


    return <>
    <div className="modalBackground">
        <div className="modalContainer" >
            <div className="title"> Grant Access</div>
            <div className="body">
                <input type="text" className="address" placeholder="Enter the address"></input>
            </div>
            <form id="myForm">
                <select id="selectNumber">
                    <option className="address"> People with Access</option>
                </select>
            </form>
            <div className="footer">
                <button onClick={()=>{setModalOpen(false)}} id="cancelBtn"> cancel</button>
                <button onClick={()=>sharing}>Share</button>
            </div>


        </div>
    </div>
    </>
}

export default Modal;