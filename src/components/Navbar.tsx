const Navbar = () => {
	return (
		<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="flex justify-between h-16">
				<div className="flex">
					<div className="flex-shrink-0 flex items-center">
						<span className="text-xl font-semibold text-indigo-800">
							Марія Соханчак
						</span>
					</div>
				</div>
				<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
					{[
						"About",
						"Services",
						"Pricing",
						"Certificates",
						// "Reviews",
						// "Blog",
						"Contact",
					].map((item) => (
						<link
							key={item}
							href={item === "Blog" ? "/blog" : `/#${item.toLowerCase()}`}
							className="border-transparent text-gray-700 hover:border-indigo-500 hover:text-indigo-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
						/>
					))}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
