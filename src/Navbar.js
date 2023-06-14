import React from 'react'

const Navbar=()=>{
    return(
        <>
          <div>
          <nav className="navbar fixed-top navbar-expand-lg  navbar-dark bg-dark">
           <div className="container-fluid">
         
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <br/><br/><br/><br/><br/><br/><div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item" id="article" style={{color: 'white',marginRight: 50, paddingLeft: '590px', fontSize:'40px'}}>UNIT CONVERTER</li>  
         </ul>
           </div>
         </div>
          </nav>  
        </div>
  
       

        </>
      );

} 

export default Navbar;