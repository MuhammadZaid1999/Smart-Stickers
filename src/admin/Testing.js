import React from 'react';
import './Testing.css';


function Testing(props){
    return(
        <div>
                
            <div id="first" className="animated fadeInUp delay-1s">
                <br/><br/><br/><br/>
                <h2 style={{marginLeft:'2%', fontSize:'20px'}}>{props.first}</h2>
       
             </div>

            <div id="second" className="animated fadeInDown delay-1s">
                
                <h2 style={{textAlign:'right', marginRight:'2%', fontSize:'20px'}}>{props.second}</h2>

             </div>

        </div>

    );
}
export default Testing;