import "./Hero.scss";

const Hero = () => {
	return (
		<section>
			<div className="container">
				<div className="hero">
					<div className="hero-texts">
						<h1>Transform Your Finances with Scend</h1>
						<p>
							Get Financial Freedom at Your Fingertips . Send . Recieve . Invest
						</p>
						<div className="actions">
							<span>Download App</span>
							<span>
								<img src="./play.svg" />
								<span>Watch demo video</span>
							</span>
						</div>
					</div>
					<div className="hero-img">
						<div className="card_1">
							<div className="top">
								<img src="./pic1.png" />
								<div className="content">
									<h5>Jhon Lama</h5>
									<div className="progress">
										<div className="progress_bar"></div>
									</div>
								</div>
							</div>
							<div className="buttom">
								<div className="info">
									<h5>Balance</h5>
									<span>N25,000</span>
								</div>
								<div className="info">
									<h5>Spending Limit</h5>
									<span>N5,000</span>
								</div>
							</div>
						</div>
						<div className="card_2">
							<div className="content">
								<div className="logo">
									<img src="./pic2.svg" />
								</div>
								<div className="bars">
									<div className="bar_1"></div>
									<div className="bar_2"></div>
								</div>
								<div className="amount ">
									<span className="green">+N2,500</span>
								</div>
							</div>
							<div className="content">
								<div className="logo">
									<img src="./pic2.svg" />
								</div>
								<div className="bars">
									<div className="bar_1"></div>
									<div className="bar_2"></div>
								</div>
								<div className="amount ">
									<span className="red">-N5,600</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
