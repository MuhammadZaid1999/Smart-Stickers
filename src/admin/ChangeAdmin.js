import React,{useState} from 'react';
import { useStore } from '../context/GlobalState';
import { changeOwner } from '../store/asyncActions'; 
import Loader from '../components/images/loader.gif';

function ChangeAdmin(){

    const [address,setaddress] = React.useState("");
    const [pass,setpass] = React.useState("");
    const [{contract, accounts}, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInprocess] = useState(false);
    const [isTransactionSuccessful , setTransactionSuccessful] = useState(true);
    const [transactionError , setTransactionError] = useState("");
   

    const handleSubmit = async (e) => {
        e.preventDefault()
     
      
        setTransactionSuccessful(true);
        setTransactionError("");
        try {
            setTransactionInprocess(true)
            const newTransaction = {
              address: address,
              pass: pass,
            }
           console.log(newTransaction) 
         await changeOwner(contract, accounts,newTransaction, dispatch);
    
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
          
                    <h1 style={{color:'#000', fontWeight:'bold'}}>CHANGE ADMIN</h1>
                    <br></br>
                    
                    <form onSubmit={handleSubmit}> 
                        <div className="input-group form-group">
                        <div class="input-group-prepend">
							<span class="input-group-text" style={{backgroundColor:'rgb(93, 174, 206)'}}><i class="fas fa-user" style={{color:'white'}}></i></span>
						</div>
                            <input type="text" className="form-control" placeholder="Wallet Address*" style={{height:'50px'}} onChange={(e)=> setaddress(e.target.value)}/>
                        </div>
                        <br></br>
                      
                        <div className="input-group form-group">
                        <div class="input-group-prepend">
							<span class="input-group-text" style={{backgroundColor:'rgb(93, 174, 206)'}}><i class="fas fa-key" style={{color:'white'}}></i></span>
						</div>
                            <input type="password" className="form-control" placeholder="Password*" style={{height:'50px'}} onChange={(e)=> setpass(e.target.value)}/>
                        </div>

                        <br></br>
                        <div className="input-group form-group">
                       <button type="submit"  style={{width: '550px',height:'50px',borderRadius: '1rem',padding: '1.5%', border: 'none',  cursor:'pointer',    fontWeight: 'bold',  color: 'white',backgroundColor: 'rgb(93, 174, 206)'}} ><i class="fas fa-sign-in-alt"></i> SUBMIT</button>      
                   </div>
                        </form>
                        {isTransactionInProcess && <img width="40px" src={Loader} alt="Loading..." />}
                    {!isTransactionSuccessful && <div style={{color:"red"}}>{transactionError}</div>}
               
                        </div>

                        </div>
                        </div>
                        </center>
    )
}

export default ChangeAdmin;