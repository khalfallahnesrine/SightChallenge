import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "../Assets/akdhili2.png";
function Navbar(){
    const NavStyles = {
        textDecoration : "none"
       
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-danger bg-danger" aria-label="Eighth navbar example">
            <div className="container">

                <img height="40px" src={Logo}/>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample07">
                   
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
                        <li className="nav-item">
                            <Link style = {NavStyles} to = "/Home" >
                                <a className="nav-link active"  aria-current="page"  style={{color: "#FFFFFF"}} >الصفحة الرئيسية</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link style = {NavStyles} to = "/About">
                                <a className="nav-link active" aria-current="page"  style={{color: "#FFFFFF"}} >  تعرف علينا  </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link style = {NavStyles} to = "/Services">
                                <a className="nav-link active" aria-current="page"  style={{color: "#FFFFFF"}}>الخدمات</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link style = {NavStyles} to = "/Contact">
                                <a className="nav-link active" aria-current="page"  style={{color: "#FFFFFF"}}>اتصل بنا</a>
                            </Link>
                        </li>                        
                    </ul>
                    
                    <div className="col-md-3 text-end">
                    
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;