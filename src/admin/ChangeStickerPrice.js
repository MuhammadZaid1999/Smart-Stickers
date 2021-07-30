import React,{useState} from "react"; 
import { changePrice } from '../store/asyncActions'; 
import { useStore } from '../context/GlobalState';
import Loader from '../components/images/loader.gif';

function ChangeStickerPrice(){

    const [name,setname] = React.useState("");
    const [price,setprice] = React.useState(0);
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
              name : name,
              price: Number(price)
            }
           console.log(newTransaction) 
         await changePrice(contract, accounts,newTransaction, dispatch);
    
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
        <cdenter>
            <br/><br/>
    <div className="container">
      
    <div className="row" >
  
        <div className="col-md-6 mx-auto" style={{  padding: '5%',  boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19)',textAlign: 'center',color: '#333'}}>
  
            <h1 style={{color:'#000', fontWeight:'bold'}}>CHANGE PRICE</h1>
            <br></br>
            
            <form onSubmit={handleSubmit}> 
                <div className="input-group form-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" style={{backgroundColor:'rgb(93, 174, 206)'}}><i class="fas fa-user" style={{color:'white'}}></i></span>
                </div>
                    <input type="text" className="form-control" placeholder="Sticker Name*" style={{height:'50px'}}  onChange={(e)=> setname(e.target.value)}/>
                </div>
                <br></br>
              
                <div className="input-group form-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" style={{backgroundColor:'rgb(93, 174, 206)'}}><i class="fas fa-dollar-sign" style={{color:'white'}}></i></span>
                </div>
                    <input type="text" className="form-control" placeholder="New Price*" style={{height:'50px'}}  onChange={(e)=> setprice(e.target.value)}/>
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
                </cdenter>
    )
}
export default ChangeStickerPrice;