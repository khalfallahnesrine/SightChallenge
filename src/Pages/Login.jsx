import React from 'react';
import Footer from '../Components/Footer';
import {Link} from 'react-router-dom'
function Login(){
    const style = {borderRadius : "1rem",};
    const decoration={textDecoration : "none"};
    return(
        <div className ="bg-light">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={style}>
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-2">دخول</h3>

                                <form className="p-4 p-md-5">
                                    
                                
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="CIN" placeholder="CIN" required/>
                                        <label for="Password">رقم بطاقة التعريف الوطنية</label>
                                    </div>

                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <Link style={decoration} to = "/Register">
                                            <a>ليس لديك حساب ؟</a>
                                        </Link>
                                    </div>
                                    
                                    <hr className="my-4"/>
                                    <Link to = "/UDB">
                                        <button className="w-100 btn btn-lg btn-danger" type="submit"> دخول</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/> 
        </div>
    );
}

export default Login;