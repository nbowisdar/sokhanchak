
const Hero = () => {
	return (
		<div className="bg-white bg-opacity-90 backdrop-blur-sm overflow-hidden shadow rounded-lg">
			<div className="px-4 py-5 sm:p-6">
				<div className="sm:flex sm:items-center sm:justify-between">
					<div className="sm:flex-1">
						<h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
							Марія Соханчак
						</h1>
						<p className="mt-4 text-xl text-gray-500">
							Психолог за покликом серця
						</p>
						<p className="mt-2 text-gray-600">
							Допомагати вам долати життєві виклики зі співчуттям та та
							досвідом.
						</p>
					</div>
					<div className="mt-5 sm:mt-0 sm:ml-5">
						<img
							src="https://github.com/nbowisdar/sokhanchak/blob/main/public/mari.jpg?raw=true"
							alt="Maria Sohanchak"
							width={300}
							height={300}
							className="rounded-full"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
