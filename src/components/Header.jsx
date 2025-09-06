import aurion from "../assets/aurion.svg";

export default function Header() {
	
	return (
		<div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
		  <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
			  <a className="block items-center w-[12rem] xl:mr-8" href="/">
				  <span className="flex items-center gap-2 text-xl text-gold-2">
					  <img src={aurion} alt="aurion" className="h-10 w-10 " />
						AURION
					</span>
				</a>
				
				<nav>
				
			  </nav>
			</div>
		</div>
	);
};
