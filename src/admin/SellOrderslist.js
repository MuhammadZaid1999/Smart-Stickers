import React from 'react';
import { useStore } from '../context/GlobalState';
  
function SellOrderslist(){
   
    const [{sellOrders}] = useStore();
    var counter = 0;
    console.log(sellOrders)

      return(
        <center>
        <br/><br/>
            <div className="container">
    
            <h1 style={{color:'#000', fontWeight:'bold'}}>SELL ORDERS LIST</h1>
                
                <div className="row" >
    
                        <br></br>
                        <table class="table table-hover">
                            <thead>
                                <tr style={{backgroundColor:'rgb(93, 174, 206)', color:'white'}}>
                                <th scope="col">S.No</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Wallet address</th>
                                <th scope="col">Status</th>
                                <th scope="col">date</th>
                                <th scope="col">time</th>
                                </tr>
                            </thead>
                            <tbody>
                            { sellOrders.map((obj) => (
                                    obj.map((na) => {
                                  var date2 = new Date(na.time * 1000);
                                  var day = date2.getDate()
                                  var month = date2.getMonth()+1
                                  var year = date2.getFullYear()
                                  var hour = date2.getHours()
                                  var minute = date2.getMinutes()
                                  var second = date2.getSeconds()
                                  
                            return <tr>
                                <th scope="row">{counter+=1}</th>
                                <td><img src={`https://ipfs.io/ipfs/${na[0].url}`} height='50px' width='50px'></img></td> 
                                <td>{na[0].name}</td>
                                <td>{(na[0].price / Math.pow(10,18))+"+"+(((na[0].price / Math.pow(10,18)) * 500) / 10000).toFixed(7)+"fee"}</td>
                                <td>{na[0].my_address}</td>
                                <td>{(na.isComplted==false)?("pending"):("completed")}</td>
                                <td>{(na.time==0)?("---"):(day+"/"+month+"/"+year)}</td>
                                <td>{(na.time==0)?("---"):(hour+":"+minute+":"+second)}</td>
                                </tr>
                    
                            })
                            ))}
                            </tbody>
                            
                        </table>

                    </div>
               
        
            </div>
    </center>
    )
}

export default SellOrderslist;