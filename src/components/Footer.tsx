import React from "react"

const Footer = () => {
	return (
		<footer className="bg-indigo-800 mt-12 text-white">
			<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
				<p className="text-center text-sm">
					© {new Date().getFullYear()} Marria Sokhanchak All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
