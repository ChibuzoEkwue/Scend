import "./Details.scss";
const Details = () => {
	return (
		<section>
			<div className="container">
				<div className="detailBox">
					<div className="left">
						<h2>All in one app for your financial needs</h2>
						<p>
							Scend App empowers you to take control of your finances and make
							informed decisions. while performing other basic financial
							transactions
						</p>
						<button>Learn More</button>
					</div>
					<div className="right">
						<img src="./iPhonetop.png" />
					</div>
				</div>
				<div className="detailBox">
					<div className="left">
						<h2>We help you make Smart Financial Decision</h2>
						<p>
							Scend App gives you up to that advice on the best investment to be
							made and how you can leverage the market
						</p>
						<button>Learn More</button>
					</div>
					<div className="right">
						<img src="./iPhonebottom.png" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Details;
