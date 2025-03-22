import { Mail } from "lucide-react"
const Contact = () => {
	return (
		<div
			id="contact"
			className="mt-8 bg-white bg-opacity-90 backdrop-blur-sm overflow-hidden shadow rounded-lg"
		>
			<div className="px-4 py-5 sm:p-6">
				<h2 className="text-2xl font-bold text-gray-900">Контакти</h2>
				<div className="mt-4 flex items-center">
					<Mail className="h-6 w-6 text-indigo-600 mr-2" />
					<a
						href="mailto:mariasohanchak@gmail.com"
						className="text-indigo-600 hover:text-indigo-800"
					>
						mariasohanchak@gmail.com
					</a>
				</div>
				<p className="mt-2 text-gray-600">
					Для запису на прийом або з питань, будь ласка, напишіть мені на
					електронну пошту або в телеграм @Cactyss
				</p>
			</div>
		</div>
	)
}

export default Contact