import { Award } from "lucide-react"

const Certificates = () => {
	return (
		<div
			id="certificates"
			className="mt-8 bg-white bg-opacity-90 backdrop-blur-sm overflow-hidden shadow rounded-lg"
		>
			<div className="px-4 py-5 sm:p-6">
				<h2 className="text-2xl font-bold text-gray-900">Certificates</h2>
				<div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					<div className="bg-gray-50 overflow-hidden shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<Award className="h-8 w-8 text-indigo-600" />
							<h3 className="mt-2 text-lg font-medium text-gray-900">
								Бакалавр з психології 2019-2023
							</h3>
							<p className="mt-1 text-sm text-gray-600">
								Університет імені Олеся Гончара
							</p>
						</div>
					</div>
					<div className="bg-gray-50 overflow-hidden shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<Award className="h-8 w-8 text-indigo-600" />
							<h3 className="mt-2 text-lg font-medium text-gray-900">
								Магістр з психології 2023 –2024
							</h3>
							<p className="mt-1 text-sm text-gray-600">
								Університет імені Олеся Гончара
							</p>
						</div>
					</div>
					<div className="bg-gray-50 overflow-hidden shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<Award className="h-8 w-8 text-indigo-600" />
							<h3 className="mt-2 text-lg font-medium text-gray-900">
								Арт-терапія та ПТСР
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Certificates
