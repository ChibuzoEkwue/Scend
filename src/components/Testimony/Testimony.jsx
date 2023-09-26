import "./Testimony.scss";

const Testimony = () => {
	return (
		<section>
			<div className="container">
				<div className="testimony">
					<div className="left">
						<h2>
							Some of our users have this to say about <span>scend</span>
						</h2>
						<p>
							Because of the good service we give, the reviews are all good, you
							can bet
						</p>
					</div>
					<div className="right">
						<h3>
							I really enjoy my experience with the scend app, beautiful
							interface, good customer service and they made me a better person
							with handling funds
						</h3>
						<div>
							<img src="./user.png" alt="" />
							<div className="userDetails">
								<p className="username">Adewale Paul</p>
								<p className="userpos">Product Designer - Google</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimony;
