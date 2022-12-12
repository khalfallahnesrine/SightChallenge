import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'; 
import { Link } from 'react-router-dom';
import ab from '../Assets/about.png'
function About(){
    return(
        <div className ="bg-light">
            <Navbar/>
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1">
اتصل بنا</h1>
                        <p className="lead">  هو موقع يمثل وسيلة حديثة    تمكن من مراقبة توزيع المنتوجات الغذائية و ذلك لضمان الحاجيات الأساسية المواطن من هذه المنتوجات خاصة المفقودة منها و لتحقيق الإحتكار . 
كل مغازلة أو محل تجاري له كمية محدودة من المنتجات حسب عدد السكان المجاورين في المنطقة بالنظر . هذه المنتوجات يتم توزيعها عن طريق مزودين .</p>
                        <Link to="/Services">
                            <button type="button" className="btn btn-outline-danger me-2">...لمزيد من المعلومات</button>
                        </Link>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-3" src={ab} alt="" width="400"/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default About;