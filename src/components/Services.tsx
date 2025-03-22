import { BookOpen, Headphones, Users } from "lucide-react"

const Services = () => {
	return (
		<div
			id="services"
			className="mt-8 bg-white bg-opacity-90 backdrop-blur-sm overflow-hidden shadow rounded-lg"
		>
			<div className="px-4 py-5 sm:p-6">
				<h2 className="text-2xl font-bold text-gray-900">Послуги</h2>
				<div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					<div className="bg-gray-50 overflow-hidden shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<Headphones className="h-8 w-8 text-indigo-600" />
							<h3 className="mt-2 text-lg font-medium text-gray-900">
								Індивідуальна терапія
							</h3>
							<p className="mt-1 text-sm text-gray-600">
								Індивідуальні заняття, пристосовані до ваших унікальних потреб і
								цілей.
							</p>
						</div>
					</div>
					<div className="bg-gray-50 overflow-hidden shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<Users className="h-8 w-8 text-indigo-600" />
							<h3 className="mt-2 text-lg font-medium text-gray-900">
								Консультування пар
							</h3>
							<p className="mt-1 text-sm text-gray-600">
								Покращуйте комунікацію та зміцнюйте стосунки.
							</p>
						</div>
					</div>
					<div className="bg-gray-50 overflow-hidden shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<BookOpen className="h-8 w-8 text-indigo-600" />
							<h3 className="mt-2 text-lg font-medium text-gray-900">
								Майстер-класи
							</h3>
							<p className="mt-1 text-sm text-gray-600">
								Групові заняття на різні теми, такі як управління стресом та
								усвідомленість.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
