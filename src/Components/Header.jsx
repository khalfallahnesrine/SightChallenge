import React from "react";
import { Link } from "react-router-dom";
import heading from "../Assets/heading.png";
import image2 from "../Assets/caisse_bg.jpg";
import Logo from "../Assets/akdhili.png";

function Header() {
	return (
		<div
			id="carouselExampleIndicators"
			className="carousel slide carousel-fade"
			data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src={image2}
						className="src\Components\Header.jsx"
						alt="oops"
						/>
						<div className="carousel-caption d-none d-md-block ">
					
							<img
						src={Logo}
						className="src\Components\Header.jsx"
						alt="oops"    height='700'
						/> </div> 
						
					<div className="carousel-caption d-none d-md-block">
						<div class="py-5">
							<h1  style={{color: "#e24a5d"}} >
							مرحبا بكم في اقضيلي       
							</h1>
							<p class="lead fw-bold text-muted mb-4">
							للقضاء على الاحتكار و توفير الحاجيات الاساسية 
							</p>
						</div>
						<div class="d-grid gap-3 py-4 d-sm-flex justify-content-sm-center">
							<Link to="/Register">
								<a class="btn btn-danger btn-lg px-4 me-sm-3">
								التسجيل
								</a>
							</Link>
							<Link to="/login">
								<a class="btn btn-outline-danger btn-lg px-4">
							     دخول							</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
