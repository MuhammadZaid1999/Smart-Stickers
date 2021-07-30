import React from 'react';
import Testing from './Testing';
import { useStore } from '../context/GlobalState';


function  Home(){

const [{buyOrders,sellOrders,userList,totalStickers,accounts}] = useStore();

var totalbuy =0;
  buyOrders.map( (obj) =>{
        totalbuy =  obj.length});
console.log(totalbuy)

var totalsells=0;
 sellOrders.map((obj) => { 
  obj.map((na) => { 
   if(na.isComplted == true){
      totalsells++;
   }
  }
  )});
console.log(totalsells)

var allusers = 0;
   userList.map( (obj) =>{
     allusers =  obj.length});
console.log(allusers)

var allstickers = totalStickers;
console.log(allstickers)


var adminsales=parseFloat(0);
 sellOrders.map((obj) => { 
  obj.map((na) => { 
   if(na.isComplted == true && na[0].my_address == "0xdA06BC6A8595771E771528e256a7378601520882"){ 
    adminsales +=  na[0].price / Math.pow(10,18);
   }
  }
  )});
console.log(adminsales)


var no_of_adminsales=0;
 sellOrders.map((obj) => { 
  obj.map((na) => { 
   if(na.isComplted == true && na[0].my_address == "0xdA06BC6A8595771E771528e256a7378601520882"){ 
    no_of_adminsales+=1;
   }
  }
  )});
console.log(adminsales)


    return(
        <div>
        <h1 style={{fontWeight:'bolder', fontSize:'50px',textAlign:'center'}}>STATSTISTICS</h1>
        <br/>
        
          <div className="row" style={{marginLeft:'5%', marginRight:'10%'}}>
          
            <div className="col-lg-4" >
              <Testing first="Total Users" second={allusers}/>
              <br></br>
            </div>  
            
            <div className="col-lg-4">
              <Testing first="Total Stickers" second={allstickers}/>
              <br></br>
            </div>

            <div className="col-lg-4">
              <Testing first="Total Buys" second={totalbuy} />
              <br></br>
            </div>
           

            <div className="col-lg-4">
              <Testing first="Total Sells" second={totalsells} />
              <br></br>
            </div>
          
            <div className="col-lg-4">
              <Testing first="Admin Sales Price" second={adminsales+"+"+((adminsales  * 500) / 10000).toFixed(7)+"fee"} />
              <br></br>
            </div>

            <div className="col-lg-4">
              <Testing first="Total Admin Sales" second={no_of_adminsales} />
              <br></br>
            </div>
           
            </div>  

          <br/><br/><br/>
          <h1 style={{fontWeight:'bolder', fontSize:'50px'}}>PURPOSES:</h1>
       
           
            <br/>
            <ul class="list-group" style={{ fontSize: '18px'}}>
              <li class="list-group-item"><b>Add New Sticker:</b> For adding a new Sticker</li>
              <li class="list-group-item"><b>List of Stickers:</b> Show the list of all Stickers</li>
              <li class="list-group-item"><b>Users:</b> Show the list of all Users</li>
              <li class="list-group-item"><b>Orers:</b> Show the list of all Orders</li>
              <li class="list-group-item"><b>Logout:</b> For Signing out</li>
            </ul>
         </div>
    )
}
export default Home;