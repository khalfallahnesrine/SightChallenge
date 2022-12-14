import React from "react";
import { Link } from "react-router-dom";

class FillMakeApp extends React.Component{
    style = {borderRadius : "1rem"};

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    
    render(){
        const {values, handleChange} = this.props;
        return(
            <div className ="bg-light">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={this.style}>
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-2">   الخطوة 2:  معلومات إضافية    </h3>
                                    <hr className="my-4"/>

                               

                                    <div className="form-floating mb-3 col">
                                    <input type="text" className="form-control" id="remarques" onChange={handleChange("remarque")} defaultValue={values.remarque} placeholder="" required/>
                                   
                                        <label for="brq">ملاحظات</label>
                                    </div>

                                    <hr className="my-4"/>
                                    <div class="d-grid gap-2 d-block">
                                        <button className="w-100 btn btn btn-outline-danger" type="submit" onClick={this.back}>  الصفحة السابقة  </button>
                                        <button className="w-100 btn btn btn-danger" type="submit" data-bs-toggle="modal" data-bs-target="#ConfirmModal">تأكيد </button>
                                    </div>

                                    <div class="modal fade" id="ConfirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">  !طلب مقدم</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>تم تقديم طلبك، شكرًا لك على الثقة واستخدام منصتنا</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">غلق</button>
                                                    <Link to ='/UDB'>
                                                    <button type="button" data-bs-dismiss="modal" class="btn btn-outline-success">عودة إلى الخلف</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FillMakeApp;
