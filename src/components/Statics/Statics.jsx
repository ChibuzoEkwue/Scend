import "./Statics.scss";
const Statics = () => {
	return (
		<section className="bg-grey">
			<div className="container">
				<div className="statics">
					<div className="top">
						<div className="left">
							<h2>Financial Freedom That Resonates</h2>
							<p>
								Send, receive, and invest fund with ease and we help you make
								smart financial decision on the go!{" "}
							</p>
						</div>
						<div className="right">
							<div className="box">
								<h2>25k+</h2>
								<p>Downloads</p>
							</div>
							<div className="box">
								<h2>200M+</h2>
								<p>Transacted</p>
							</div>
							<div className="box">
								<h2>5.0</h2>
								<p>Rating</p>
							</div>
						</div>
					</div>
					<div className="bottom">
						<div>
							<img src="./Paystack.svg" />
						</div>
						<div>
							<img src="./VisaInc.svg" />
						</div>
						<div>
							<img src="./Facebook.svg" />
						</div>
						<div>
							<img src="./nse.svg" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Statics;
