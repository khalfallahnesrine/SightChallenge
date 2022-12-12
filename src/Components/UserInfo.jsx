import React from "react";

export class UserInfo extends React.Component {
	style = { borderRadius: "1rem" };

	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
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
									الخطوة 1: معلومات المستخدم
									</h3>

                                    <hr className="my-4"/>

									<div id="tab">
										<div className="row">
											<div className="form-floating mb-3 col-6">
												<input
													type="text"
													className="form-control"
													id="Fname"
													placeholder="First name"
													required
												/>
												<label for="Fname">
												الاسم
												</label>
											</div>

											<div className="form-floating mb-3 col-6">
												<input
													type="text"
													className="form-control"
													id="Lname"
													placeholder="Last Name"
													required
												/>
												<label for="Lname">
												اللقب
												</label>
											</div>
										</div>


										<div className="form-floating mb-3">
											<input
												type="password"
												className="form-control"
												id="CIN"
												placeholder="CIN"
												required
											/>
											<label for="CIN">
											رقم بطاقة التعريف الوطنية 
											</label>
										</div>

                                        <hr className="my-4"/>

                                        <button className="w-100 btn btn btn-danger" type="submit" onClick={this.continue}>الصفحة التالية</button>
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

export default UserInfo;
