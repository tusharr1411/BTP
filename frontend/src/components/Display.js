import { useState } from "react";
import "./Display.css"
import { Signer } from "ethers";



const Display = ({account,contract}) => {

    const [data,setData] = useState("");



    const getData = async ()=>{
        let dataArray;
        const OtherAddress = document.querySelector(".address").value;
        if(OtherAddress){
            dataArray = await contract.display(OtherAddress);
        }
        else{
            dataArray = await contract.display(account);
        }
        console.log('dataArray:', dataArray); 

        const isEmpty = Object.keys(dataArray).length ===0;
        if(!isEmpty){
            const str = dataArray.toString();
            const strArray = str.split(",");
            // console.log(strArray);
            const files = strArray.map((item,i)=>{
                return (
                    <a href={item} key={i} target="_blank">
                        <img key={i} src={`${item}`} alt ="new" className="image-list"></img>
                    </a>
                )
            })

            
            setData(files);
        }
        else{
            alert("No image to display");
        }

    }


    return <>
    <div className="image-list"> {data}</div>
    <input type="text" placeholder="Enter the address" className="address"></input>
    <button className="center button" onClick={getData}>Get Data</button>


    </>;
};

export default Display;
