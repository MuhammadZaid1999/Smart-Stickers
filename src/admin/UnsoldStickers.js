import React from 'react';
import { useStore } from '../context/GlobalState';


function UnsoldStickers(){
   
    const [{unSolds}] = useStore(); 
    var counter = 0;

  console.log(unSolds)
  
      return(
          <center>
            <br/><br/>
                <div className="container">
        
                <h1 style={{color:'#000', fontWeight:'bold'}}>UNSOLD STICKERS</h1>
                   
                    <div className="row" >
        
                            <br></br>
                            <table class="table table-hover">
                                <thead>
                                    <tr style={{backgroundColor:'rgb(93, 174, 206)', color:'white'}}>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>               
                                    </tr>
                                </thead>
                                <tbody>
                                    { unSolds.map((obj) => (
                                        obj.map((na) => (
                                    <tr>
                                    <th scope="row">{counter+=1}</th>
                                    <td><img src={`https://ipfs.io/ipfs/${na.url}`} style={{height:'50px',width:'50px'}}></img></td> 
                                    <td>{na.name}</td>
                                   <td>{(na.price / Math.pow(10,18))+"+"+(((na.price / Math.pow(10,18)) * 500) / 10000).toFixed(7)+"fee"}</td>
                                   <td>{(na.isSale == true)?(<text>Pending Sale</text>):(null)}</td>
                                    </tr>
                                    ))
                                    ))}
                                </tbody>
                            </table>

                        </div>
                               
                </div>
        </center>
    )
}

export default UnsoldStickers;