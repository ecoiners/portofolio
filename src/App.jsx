import Header from "./components/Header";
import Footer from "./components/Footer";

import ButtonGradient from "./assets/svg/ButtonGradient";
//import Button from "./components/Button"

const App = () => {
	
	return (
		<>
		  <div className="p-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
			  <Header />
				
				<Footer />
			</div>
			
			<ButtonGradient />
		</>
	);
};

export default App;