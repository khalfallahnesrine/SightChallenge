import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../Assets/caisse2.png'; 
import image3 from '../Assets/CAISSE3.png'; 
import image4 from '../Assets/caisse_bg.jpg'; 

function Carousel(){
    return(
        <div>
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                
                <div className="carousel-inner">
                    
                    <div className="carousel-item active">
                        <img src={image4} className="d-block w-100 img-fluid" alt="oops"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className = "py-3" style={{color: "#e24a5d"}}>    طّلع على مخزونك في دقائق ! </h3>
                            
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <img src={image1} className="d-block w-100 img-fluid" alt="oops"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>      </h3>
                            <Link to ="/About">
                            <button className ="btn btn-danger">اقرأ المزيد</button>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100 img-fluid" alt="oops"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>     سجل الآن للاستفادة من أقضيلي مجانا !   </h3>
                            <Link to ="/Register">
                            <button className ="btn btn-danger">إبدأ</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">الصفحة السابقة</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">الصفحة التالية</span>
                </button>
            </div>
        </div>
    );
}
export default Carousel;