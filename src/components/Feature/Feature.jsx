import "./Feature.scss";
const Feature = () => {
	return (
		<section>
			<div className="container">
				<div className="feature">
					<h2>Our Key Features</h2>
					<div className="feature-list">
						<div className="card">
							<img src="./Frame757.svg" />
							<h3>Smart Recommendations</h3>
							<p>
								Receive tailored financial advice and recommendations based on
								your spending habits and financial goals.
							</p>
						</div>
						<div className="card">
							<img src="./Frame756.svg" />
							<h3>Bill Payment Made Simple </h3>
							<p>
								Never miss a payment with automated bill reminders and secure
								payment options
							</p>
						</div>
						<div className="card">
							<img src="./Frame755.svg" />
							<h3>Investment Management </h3>
							<p>
								Track and analyze your investment portfolios in real-time, with
								market insights and performance reports.
							</p>
						</div>
						<div className="card">
							<img src="./Frame754.svg" />
							<h3>Effortless Expense Tracking</h3>
							<p>
								Automatically categorize and track your expenses, so you always
								know where your money is going.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature;
