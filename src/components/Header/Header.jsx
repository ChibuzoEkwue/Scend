import "./Header.scss";
const Header = () => {
	return (
		<header>
			<div className="container">
				<nav className="navlinks">
					<div className="logo">
                        <img src="./logo.svg" alt='Scend Logo' />
                        <h2>Scend</h2>
                    </div>
					<ul>
						<li className="active">Home</li>
						<li>About</li>
						<li>How it works</li>
						<li>FAQs</li>
					</ul>
					<ul>
						<li>Login</li>
						<li className="cta">Register</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
