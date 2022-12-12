import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Carousel from '../Components/Carousel';
import services1 from '../Assets/stock.png';
import services2 from '../Assets/adresse.png';
import services3 from '../Assets/reclamation.png'; 

//unDraw : https://undraw.co/search

function Services (){
    return(
        <div>
            <Navbar/>
            <Carousel/>
            
            <div class="b-example-divider"></div>

            <div class="container my-5">
                <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 class="display-4 fw-bold lh-1">
                        تحقق من مخزونك
                        </h1>
                        <p class="lead">
                        (مثال:العائلة التي تتكون من 5 أشخاص يمكنها التحصل على 2كغ من الفارينة ،1 كغ من السميد ،6 علب من الحليب)بفضل اقضيلي ، يمكنك التحقق من الكمية المحددة لكالكمية المحددة لك من المواد الاساسية التي تشهد تذبذب في التوزيع في الاسبوع
                        </p>
                    </div>
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img class="rounded-lg-3" src={services1} alt="" width="350"/>
                    </div>
                </div>
            </div>


            <div class="container my-5">
                <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">    
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden">
                        <img class="rounded-lg-3" src={services2} alt="" width="350"/>
                    </div>

                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 class="display-4 fw-bold lh-1">
                        تحيين العنوان
                        </h1>
                        <p class="lead">
                                  .في حالة عدم تواجدك في مكان الاقامة أو تغييره، حدد عنوانك الجديد
                        </p>
                    </div>
                </div>
            </div>


            <div class="container my-5">
                <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                
                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 class="display-4 fw-bold lh-1">
                        الإعلام عن تجاوزات  
                        </h1>
                        <p class="lead">
                        للإعلام عن التجاوزات الرجاء الاتصال بالرقم الأخضر لضمان و تسهيل عملية توزيع المواد الأساسية بشكل عادل و منتظم أو ملأ الاستمارة و شكرا .
                        </p>
                    </div>
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img class="rounded-lg-3" src={services3} alt="" width="350"/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default Services;