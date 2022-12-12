import React from "react";
import { Link } from "react-router-dom";
export class FinalStep extends React.Component {
	style = { borderRadius: "1rem" };

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		return (
			<div className="bg-light">
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-12 col-md-8 col-lg-8 col-xl-8">
							<div
								className="card shadow-2-strong"
								style={this.style}
							>
								<div className="card-body p-5 text-center">
									<h3 className="mb-3">الخطوة الأخيرة</h3>

									<hr className="my-4" />

								

										<div className="form-floating mb-3">
											<input
												type="number"
												className="form-control"
												id="NBFM"
												placeholder="NBFM"
												required
											/>
											<label for="NBFM">
										  	عدد أفراد الأسرة    
											</label>
										</div>

										<div className="form-floating mb-3">
											<input
												type="number"
												className="form-control"
												id="PhoneNumber"
												placeholder="Phone Number"
												required
											/>
											<label for="PhoneNumber">
											رقم هاتفك
											</label>
										</div>
										<div id="tab">
										<div className="form-floating mb-3">
											<select
												type="text"
												className="form-select"
												id="state"
												placeholder="handicapped"
												required
											>
												<option selected value="NO">
												لا
												</option>
												<option value="YES">
												نعم 
												</option>
											</select>
											<label for="handicapped">هل انت من ذوي الاحتياجات الخصوصية؟</label>
											
										</div>
										
										<div className="form-floating mb-3">
											<select
												type="text"
												className="form-select"
												id="state"
												placeholder="Poverty"
												required
											>
												<option selected value="NO">
												لا
												</option>
												<option value="YES">
												نعم 
												</option>
											</select>
											<label for="Poverty"> هل لديك شهادة فقر ؟  </label>
											
										<div className="form-floating mb-3">
											<input
												type="number"
												className="form-control"
												id="PovertyNumber"
												placeholder="PovertyNumber"
												required
											/>
											<label for="PovertyNumber">
											رقم شهادة الفقر
											</label></div>
										</div>
                                           
                                        <hr className="my-4"/>
                                        <div class="d-grid gap-2 d-block">
                                            <button className="w-100 btn btn btn-outline-danger" type="submit" onClick={this.back}>الصفحة السابقة</button>
                                            <Link to="/UDB">
                                            <button className="w-100 btn btn btn-danger" type="submit" >التسجيل</button>
                                            </Link>
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

export default FinalStep;
