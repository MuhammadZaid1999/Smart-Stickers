import React,{useContext} from 'react';  
import Sidebar from './Sidebar';
import {Context} from './Store1';
import { AdminLogins} from '../store/asyncActions';
import { useStore } from '../context/GlobalState';


function AdminLogin(){
   
    const [{contract, accounts}, dispatch] = useStore();   
    const[getLogin,setLogin] = React.useState({addr:"",pass:""});
    //const [state,setstate] = useContext(Context);
    
  const [{adminloginSuccess}] = useStore();
    console.log(adminloginSuccess)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const newTransaction = {
              addr: getLogin.addr,
              pass: getLogin.pass
            }
        await AdminLogins(contract, accounts,newTransaction, dispatch);    
         
       if(adminloginSuccess == true){
      //      setstate(true);
           window.localStorage.setItem("account", "true");
           window.location.href="/admin"
       }  
        
        }catch (error){
            console.log("error trax = ",error);
          }
        
        }
       
    return(
      
       <div>      
       {
          // (state === true)? (<Sidebar/>) :(
           
          (window.localStorage.getItem("account") == "true")? (
          <Sidebar/>) :(
            <center>
            <br/><br/><br/><br/><br/><br/>
            <div className="container">
            <div className="row" >
                <div className="col-md-6 mx-auto" style={{  padding: '5%',  boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19)',textAlign: 'center',color: '#333'}}>
                <p><b>Note:</b> For security purpose, you need to click two times on login button. We want to verify that you're a human, Thanks.</p>
                    <h1 style={{color:'#000', fontWeight:'bold'}}>ADMIN LOGIN</h1>
                    <br></br>
                    
                    <form onSubmit={handleSubmit}>
                  
                        <div className="input-group form-group">
                        <div className="input-group-prepend">
							<span className="input-group-text" style={{backgroundColor:'rgb(93, 174, 206)'}}><i class="fas fa-wallet" style={{color:'white'}}></i></span>
						</div>
                            <input type="text" className="form-control" placeholder="Wallet Adddress *" style={{height:'50px'}} onChange={(e)=>setLogin({...getLogin,addr:e.target.value})} value={getLogin.addr}/>
                        </div>
                        <br></br>
                        <div className="input-group form-group">
                        <div className="input-group-prepend" >
							<span className="input-group-text" style={{backgroundColor:'rgb(93, 174, 206)'}}><i class="fas fa-key"  style={{color:'white'}} ></i></span>
						</div>
                            <input type="password" className="form-control" placeholder="Password *" style={{height:'50px'}}  onChange={(e)=>setLogin({...getLogin,pass:e.target.value})} value={getLogin.pass} />
                        </div>
                        <br></br>
                        <div className="input-group form-group">
                       
                            <button type="submit"   style={{width: '550px',height:'50px',borderRadius: '1rem',padding: '1.5%', border: 'none',  cursor:'pointer',fontWeight: 'bold',  color: 'white',backgroundColor: 'rgb(93, 174, 206)'}} ><i class="fas fa-sign-in-alt"></i>     LOGIN</button>  
                                  
                        </div>
                        
                        </form>
                </div>
                </div>
            </div>
            <br/><br/><br/>

            </center>
           )
       }
         </div>
 
   )
}

export default AdminLogin;