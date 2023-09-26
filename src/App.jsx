import Details from "./components/Details/Details";
import Feature from "./components/Feature/Feature";
import GetApp from "./components/GetApp/GetApp";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Statics from "./components/Statics/Statics";
import Testimony from "./components/Testimony/Testimony";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Statics />
			<Details />
			<Feature />
			<Testimony />
			<GetApp />
		</>
	);
}

export default App;
