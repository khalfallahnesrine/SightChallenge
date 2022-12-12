import React from "react";

export class PersonnalInfo extends React.Component {
	style = { borderRadius: "1rem" };

	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

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
							<div className="card shadow-2-strong" style={this.style}>
								<div className="card-body p-5 text-center">
									<h3 className="mb-3">
									:الخطوة 2: المعلومات الشخصية
									</h3>

									<hr className="my-4" />

									<div id="tab">
										

										<div className="row">
											<div className="form-floating mb-3 col-6">
												<input
													type="text"
													className="form-control"
													id="city"
													placeholder="City"
													required
												/>
												<label for="city">مدينة</label>
											</div>

											<div className="form-floating mb-3 col-6">
												<select
													type="text"
													className="form-select"
													id="state"
													placeholder="state"
													required
												>
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
												<label for="state">State</label>
											</div>
										</div>

										<div className="row">
											<div className="form-floating mb-3 col-6">
												<input
													type="text"
													className="form-control"
													id="Adress1"
													placeholder="Adress 1"
													required
												/>
												<label for="Adress1">
												العنوان1
												</label>
											</div>

											<div className="form-floating mb-3 col-6">
												<input
													type="text"
													className="form-control"
													id="Adress2"
													placeholder="Adress 2"
												/>
												<label for="Adress2">
												العنوان2
												</label>
											</div>
										</div>

										<div className="form-floating mb-3">
											<input
												type="number"
												className="form-control"
												id="Zip"
												placeholder="Zip"
												required
											/>
											<label for="Zip">الرقم البريدي</label>
										</div>

										<hr className="my-4" />

										<div class="d-grid gap-2 d-block">
											<button
												className="w-100 btn btn btn-outline-danger"
												type="submit"
												onClick={this.back}
											>
												الصفحة السابقة
											</button>
											<button
												className="w-100 btn btn btn-danger"
												type="submit"
												onClick={this.continue}
											>
												الصفحة التالية
											</button>
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

export default PersonnalInfo;
