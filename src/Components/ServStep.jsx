import React from "react";
import { Link } from "react-router-dom";

class ServStep extends React.Component{
    style = {borderRadius : "1rem"};
    
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
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

                                <h3 className="mb-2"> تحيين العنوان </h3>
                                <hr className="my-4"/>
                                
                                   
                                <div className="form-floating mb-3 col">
                                    <select type="text" className="form-select" id="branch" placeholder="اختر فرعًا" onChange={handleChange("branch")} defaultValue={values.branch} required>
                                    <option
														selected
														value="Ariana"
													>
														أريانة
													</option>
													<option value="Beja">
													باجة
													</option>
													<option value="Ben Arous">
													بن عروس
													</option>
													<option value="Bizerte">
													بنزرت
													</option>
													<option value="Gabes">
													قابس
													</option>
													<option value="Nabel">
													نابل
													</option>
													<option value="Jendouba">
													جندوبة
													</option>
													<option value="Kairouan">
													القيروان
													</option>
													<option value="kasserin">
													القصرين
													</option>
													<option value="Kebili">
													قبلي
													</option>
													<option value="Kef">
													الكاف
													</option>
													<option value="Mahdia">
													المهدية
													</option>
													<option value="Manouba">
													منوبة
													</option>
													<option value="Medenine">
													مدنين
													</option>
													<option value="Monastir">
													المنستير
													</option>
													<option value="Gafsa">
													قفصة
													</option>
													<option value="Sfax">
													صفاقس
													</option>
													<option value="Sidi Bouzid">
													سيدي بوزيد
													</option>
													<option value="Siliana">
													سليانة
													</option>
													<option value="Sousse">
													سوسة
													</option>
													<option value="Tataouine">
													تطاوين
													</option>
													<option value="Tozeur">
													توزر
													</option>
													<option value="Tunis">
													تونس
													</option>
													<option value="Zaghouan">
													زغوان
													</option>
                                    </select>
                                    <label for="branch">اختيار المكان</label>
                                </div>


                                <div className="form-floating mb-3 col">
                                    <select type="text" className="form-select" id="Date" placeholder="Date" onChange={handleChange("date")}defaultValue={values.date} required>
                                        <option value = "20/12/2021">20/12/2022</option>
                                        <option value = "21/12/2021">21/12/2022</option>
                                        <option value = "22/12/2021">22/12/2022</option>
                                    </select>
                                    <label for="Date">اختر تاريخا</label>
                                </div>
								<div className="form-floating mb-3 col">
									<input
												type="number"
												className="form-control"
												id="Periode"
												placeholder="NBP"
												required
											/>
                                    <label for="Periode">فترة</label></div>
 
                                <div className="form-floating mb-3">
											<input
												type="number"
												className="form-control"
												id="NBP"
												placeholder="NBP"
												required
											/>
											<label for="NBP">عدد الاشخاص</label>
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
                                    
                                <hr className="my-4"/>
                                <button className="w-100 btn btn btn-danger" type="submit" onClick={this.continue}>الصفحة التالية</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ServStep;