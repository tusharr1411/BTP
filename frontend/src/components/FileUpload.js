import { useState } from "react";
import "./FileUpload.css";
import axios from "axios";



const FileUpload = ({contract, account, provider})=>{
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No File Selected");

    const handleSubmit= async (e)=>{
        e.preventDefault();
        if(file){
            try{
                const formData = new FormData();
                formData.append("file", file);

                //pinata code
                const resFile = await axios({
                    method:"post",
                    url:"https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data:formData,
                    headers:{
                        pinata_api_key: `37863d70ec4408f0253f`,
                        pinata_secret_api_key: `6abf8c985a9e66a25d2a2d501c186ec273fc56f3903b8ae9eb2bdb6ee0e9b00d`,
                        "Content-Type":"multipart/form-data",
                    },
                });
                //////


                //collecting image hash
                const fileHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
                contract.add(account,fileHash);
                alert("successfully Uploaded");
                setFileName("No file Selected");
                setFile(null);
            }
            catch(e){
                console.log("Unable to upload")
                alert("Unable to upload");
            }
        }


    }

    const retrieveFile =  (e)=>{
        const data = e.target.files[0];// files array of selected files
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend=()=>{
            setFile(e.target.files[0]);
        }
        setFileName(e.target.files[0].name);
        e.preventDefault();
    }


    return (
    <div className="top">
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor = "file-upload" className="choose"> Choose Your File</label>
            <input type="file"  id ="file-upload" name="data" onChange={retrieveFile}></input>
            <span className="textArea" >File: {fileName}</span>
            <button className="upload" type="submit" disabled={!file}>Upload File</button>
        </form>
    </div>
    )
}

export default FileUpload;



//////////////////////////////////////////////


