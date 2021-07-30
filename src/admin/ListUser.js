import React from 'react';
import { useStore } from '../context/GlobalState';
  
function ListUser(){

 const [{userList}] = useStore();
  var counter = 0;
  console.log(userList)

      return(
        <center>
            <br/>
                <div className="container">
        
                <h1 style={{color:'#000', fontWeight:'bold',textAlign:'center'}}>LIST OF USERS</h1>

                    <div className="row" >
        
                            <br></br>
                            <table class="table table-hover">
                                <thead>
                                    <tr style={{backgroundColor:'rgb(93, 174, 206)', color:'white'}}>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Wallet Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { userList.map((obj) => (
                                        obj.map((na) => (
                                    <tr>
                                    <th scope="row">{counter+=1}</th>
                                    <td>{na.name}</td>
                                    <td>{na.email}</td>
                                    <td>{na.wallet}</td>
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

export default ListUser;