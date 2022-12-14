import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
 
function Contact (){
    return(
        <div>
            <Navbar/>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5 ">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3"> :اتصل بنا</h1>
                        
                        <p className="col-lg-7 fs-4">
                            !إذا كنت تريد معرفة المزيد عنا وعن خدماتنا، فيرجى عدم التردد في التواصل معنا
                        </p>
                    </div>
                    
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="CINInput" placeholder="CIN"/>
                                <label for="CINInput">رقم بطاقة الهوية الوطنية</label>
                                
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="NameInput" placeholder="Name"/>
                                <label for="NameInput">اسم</label>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="numtelInput" placeholder="numtel"/>
                                <label for="CINInput">رقم الهاتف</label>
                            </div>
                            

                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="MassageBox" rows="3" placeholder="Message"></textarea>
                                <label for="MassageBox">رسالة</label>
                            </div>
                            
                            <hr className="my-4"/>
                            <button className="w-100 btn btn-lg btn-danger " type="submit">إرسال</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;