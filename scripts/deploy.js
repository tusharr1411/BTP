const hre = require("hardhat");
async function main(){
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.deployed();

  console.log("Deployed to: ", upload.address)


}

main().then(()=>process.exit(0)).catch((error)=>{
  console.log(error);
  process.exit(1);
 
})



