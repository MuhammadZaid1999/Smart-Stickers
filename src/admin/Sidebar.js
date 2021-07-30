import React from 'react';
import {Context} from './Store1';
import Home from '../admin/Home';
import AddSticker from '../admin/AddSticker';
import ListUser from '../admin/ListUser';
import SellOrderlist from '../admin/SellOrderslist';
import BuyOrderlist from '../admin/BuyOrderslist';
import ChangeAdmin from '../admin/ChangeAdmin';
import AdminLogin from '../admin/AdminLogin';
import {Routes,Route} from 'react-router-dom';
import UnsoldStickers from './UnsoldStickers';
import logo from '../components/images/logo.png';
import { useStore } from '../context/GlobalState';
import ChangeStickerPrice from './ChangeStickerPrice';

function Sidebar() {
  
 // const [setLogin,cheackLogin] = React.useContext(Context);
const [{accounts}] = useStore();

  const Logout = (e)=>{
  e.preventDefault();
  //  cheackLogin(false);
  window.localStorage.removeItem("account");
  window.location.href = "/admin"
    }


  return (
   <div>
   {/* {
    (setLogin === true) ? ( */}

      <div className="container-fluid" >

<div className="row min-vh-100 flex-column flex-md-row" >
    <aside className="col-12 col-md-3  flex-shrink-1" style={{backgroundColor:'black'}} >
        <nav className="navbar navbar-expand-lg navbar-dark  flex-md-column  align-items-start py-2" role= "navigation" style={{backgroundColor:'black'}} >
 
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

   <div className="collapse navbar-collapse " id="navbarSupportedContent"  >
                <ul className="flex-md-column  navbar-nav w-100 justify-content-between">
                   
                   <br/><br/>
                    <li className="nav-item">
                        <h2 className="nav-link  text-nowrap" style={{fontWeight:'bold'}}>Admin Dashboard</h2>
                    </li>
                     <li className="nav-item">
                        <hr style={{border: "1px solid white", margin:'20px -70px 30px'}} />
                    </li>
                  
                    <li className="nav-item">
                        <a href="/admin" className="nav-link" style={{fontWeight:'bold'}}><i className="fas fa-home"></i> &nbsp;Home</a> 
                    </li>
                  
                    <li className="nav-item">
                        <a href="/admin/addsticker" className="nav-link" style={{fontWeight:'bold'}}><i className="fas fa-plus"></i> &nbsp;Add New Sticker</a>
                    </li>
                    <li className="nav-item">
                        <a href="/admin/changestickerprice" className="nav-link" style={{fontWeight:'bold'}}><i className="far fa-address-card"></i> &nbsp;Change Sticker Price</a>
                    </li>
                   <li className="nav-item">
                        <a href="/admin/listuser" className="nav-link" style={{fontWeight:'bold'}}><i className="fas fa-user-check"></i>&nbsp;Users</a>
                    </li>
                    <li className="nav-item">
                        <a href="/admin/changeadmin" className="nav-link" style={{fontWeight:'bold'}}><i className="fas fa-user"></i>&nbsp;Change Admin</a>
                    </li>
                    <li className="nav-item">
                        <a href="/admin/unsold" className="nav-link" style={{fontWeight:'bold'}}><i className="far fa-address-card"></i>&nbsp;Unsold</a>
                    </li>

                    <li  className="nav-item dropdown">
                 <a className="nav-link dropdown-toggle"  id="dropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontWeight:'bold'}}>
                  <i className="fas fa-shopping-basket" ></i>
                  Orders
                 </a>
                 <div className="dropdown-menu dropdown-menu-center" aria-labelledby="dropdownMenu" style={{backgroundColor:'black'}}>
                 <a href="/admin/buyorderlist" className="nav-link" style={{fontWeight:'bold'}}><i className="fas fa-shopping-cart"></i>&nbsp;Buy Order List</a>
                 <a href="/admin/sellorderlist" className="nav-link" style={{fontWeight:'bold'}}><i className="fas fa-clipboard-check"></i>&nbsp;Sell Order List</a>
                </div>
               </li> 
                    
                    <li className="nav-item">
                    
                        <a  className="nav-link" style={{fontWeight:'bold'}} onClick={Logout}><i className="fas fa-lock"></i>&nbsp; Logout</a>
                     
                    </li>
                </ul>
            </div>
        </nav>
    </aside>

      <main class="col bg-faded py-3 flex-grow-1">
      
      <div className="row navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:'-1.5%'}}>
              <div className="col-12">
                <br/>
                <img src={logo} width="150px" height="100px" style={{marginTop:'-1.5%',marginLeft:'-4%'}}></img>
            </div>
       </div>   

        <br/><br/><br/>
          <div className="container">
            
      <Routes>
      <Route path="admin" element={<Home/>}></Route> 
          <Route path="admin/addsticker" element={<AddSticker/>}></Route>
          <Route path="admin/listuser" element={<ListUser/>}></Route>
          <Route path="admin/sellorderlist" element={<SellOrderlist/>}></Route>
          <Route path="admin/buyorderlist" element={<BuyOrderlist/>}></Route>
          <Route path="admin/unsold" element={<UnsoldStickers/>}></Route>
          <Route path="admin/changeadmin" element={<ChangeAdmin/>}></Route>
          <Route path="admin/changestickerprice" element={<ChangeStickerPrice/>}></Route>
      </Routes>
      
          </div>


      </main>
      </div>

</div>
    
    {/* ): (<AdminLogin/>)
    } */}
   </div>
  



  );
}



export default Sidebar;