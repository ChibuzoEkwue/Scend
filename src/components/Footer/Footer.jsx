import "./Footer.scss";
import logo from "../../../public/logo.svg";
import mFacebook from "../../../public/mFacebook.svg";
import mIg from "../../../public/mIg.svg";
import arrow from "../../../public/arrow.svg";
const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="logo">
					<img src={logo} alt="Scend Logo" />
					<h2>Scend</h2>
				</div>
				<div className="content">
					<div className="left">
						<p>
							We empower you to take control of your finances and make informed
							decisions. while performing other basic financial transactions
						</p>
						<p>No 10, Ajigbremu Street, Ikoyi Lagos State, Nigeria</p>
						<div className="mlogos">
							<img src={mFacebook} alt="Facebook logo" />
							<img src={mIg} alt="Ig logo" />
						</div>
					</div>
					<div className="right">
						<div>
							<h2>Company</h2>
							<ul>
								<li>Home</li>
								<li>About us</li>
								<li>Features</li>
							</ul>
						</div>
						<div>
							<h2>Help Center</h2>
							<ul>
								<li>FAQs</li>
								<li>Careers</li>
								<li>NewsPaper</li>
							</ul>
						</div>
						<div>
							<h2>Subscribe to our Newsletter</h2>
							<div className="mailingList">
								<input type="text" placeholder="Enter Email Address" />
								<img src={arrow} alt="Arrow" />
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="meta">
					<p>Builted by Chibuzo Ekwue</p>
					<ul>
						<li>Privacy</li>
						<li>Terms of agreement</li>
						<li>Liscence</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
