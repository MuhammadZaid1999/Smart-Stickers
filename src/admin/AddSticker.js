import React,{useState} from 'react';
import { useStore } from '../context/GlobalState';
import ipfs from '../admin/ipfs'
import { addSticker } from '../store/asyncActions'; 
import Loader from '../components/images/loader.gif';

function AddSticker(){
   
    const [name,setname] = React.useState("");
    const [ipfsHash,setipfsHash] = React.useState("")
    const [price,setprice] = React.useState(0);
    const [stickernumber,setstickernumber] = React.useState(0);
    const [{contract, accounts}, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInprocess] = useState(false);
    const [isTransactionSuccessful , setTransactionSuccessful] = useState(true);
    const [transactionError , setTransactionError] = useState("");
   
   
    var imagebuffer;
    const captureFile = (e) => {
      e.preventDefault()
      const file = e.target.files[0]
      const reader = new window.FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloadend = () => {
        imagebuffer = Buffer(reader.result) 
        console.log('buffer', imagebuffer)
      }
    }

  const upload = async (e) => {
    e.preventDefault()
    await ipfs.files.add(imagebuffer,(error,result)=>{
      if(error){
        console.log("error ="+error);
        document.getElementById("sticker").innerHTML = 'Upload Error! Please Try Again'
      }
      else{
        setipfsHash(result[0].hash)
        console.log("result =",result[0].hash)
        document.getElementById("sticker").innerHTML = 'Upload Successfully!'
      }
    })
    }

  const handleSubmit = async (e) => {
    e.preventDefault()
 
    setTransactionSuccessful(true);
    setTransactionError("");
    try {
        setTransactionInprocess(true)
        const newTransaction = {
          name : name,
          sticker_no: Number(stickernumber),
          url : ipfsHash,
          price: Number(price)
        }
       console.log(newTransaction) 
     await addSticker(contract, accounts,newTransaction, dispatch);

        setTransactionInprocess(false);
        setTransactionSuccessful(true);
    }catch (error){
        console.log("error trax = ",error);
        setTransactionInprocess(false);
        setTransactionSuccessful(false);
        setTransactionError(error.message);
    }

    }
      
    return(

      <center>
        <br/><br/>
        
        <div className="container">
      
            <div className="row" >
          
                <div className="col-md-6 mx-auto" style={{  padding: '5%',  boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19)',textAlign: 'center',color: '#333'}}>
                    <h1 style={{color:'#000', fontWeight:'bold'}}>ADD STICKER</h1>
                    <br></br>
                    
                    <form onSubmit={handleSubmit}>
                    <div className="col-md-12">
                        <div className="input-group form-group">
                        <div class="input-group-prepend">
							<span class="input-group-text" style={{backgroundColor:'rgb(93, 174, 206)'}}><i class="fas fa-user" style={{color:'white'}}></i></span>
						</div>
                            <input type="text" className="form-control" placeholder="Sticker Name*" style={{height:'50px'}} onChange={(e)=> setname(e.target.value)}/>
                        </div>
                        </div>
                        <br></br>
                        <span className="input-group">
                        <div className="col-md-8">
                        <div className="input-group form-group">
                	<span class="input-group-text" style={{backgroundColor:'rgb(93, 174, 206)'}}><i class="fas fa-camera" style={{color:'white'}}></i></span>
					   	
                        <input type="file" placeholder="Sticker Image" className="form-control"style={{height:'50px'}} onChange={captureFile} ></input>
                        </div>
                        </div>
                                   
                        <div className="col-md-4">
                        <div className="input-group form-group">
                            <input type="button" className="form-control" placeholder="Price*" style={{height:'50px'}} onClick={upload} value="UPLOAD"/>
                        </div>
                        </div>
                        </span>
                        <div id="sticker"></div>
                        <br></br>
                        <div className="col-12">
                        <div className="input-group form-group">
                        <div class="input-group-prepend">
							<span class="input-group-text" style={{backgroundColor:'rgb(93, 174, 206)'}}><i class="fas fa-dollar-sign" style={{color:'white'}}></i></span>
						</div>
                            <input type="text" className="form-control" placeholder="Price*" style={{height:'50px'}} onChange={(e)=> setprice(e.target.value)}/>
                        </div>
                        </div>
                        <br></br>

                        <div className="col-12">
                        <div className="input-group form-group">
                        <div class="input-group-prepend">
							<span class="input-group-text" style={{backgroundColor:'rgb(93, 174, 206)'}}><i class="far fa-address-card" style={{color:'white'}}></i></span>
						</div>
                            <input type="text" className="form-control" placeholder="No of Stickers*" style={{height:'50px'}} onChange={(e)=> setstickernumber(e.target.value)}/>
                        </div>
                        </div>
                        <br></br>

                        <div className="col-12">  
                        <div className="input-group form-group">
                       
                            <button type="submit"  style={{width: '550px',height:'50px',borderRadius: '1rem',padding: '1.5%', border: 'none',  cursor:'pointer',    fontWeight: 'bold',  color: 'white',backgroundColor: 'rgb(93, 174, 206)'}} ><i class="fas fa-sign-in-alt"></i>     SUBMIT</button>  
                                  
                        </div>
                        </div>

                        </form>
                        
                      {isTransactionInProcess && <img width="40px" src={Loader} alt="Loading..." />}
                    {!isTransactionSuccessful && <div style={{color:"red"}}>{transactionError}</div>}
                </div>
                </div>
            </div>
         <br/><br/><br/>
         </center>
    
    
   )
}

export default AddSticker;