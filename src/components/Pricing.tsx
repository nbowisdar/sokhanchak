
const Pricing = () => {
	return (
		<div
			id="pricing"
			className="mt-8 bg-white bg-opacity-90 backdrop-blur-sm overflow-hidden shadow rounded-lg"
		>
			<div className="px-4 py-5 sm:p-6">
				<h2 className="text-2xl font-bold text-gray-900">Ціни</h2>
				<div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					<div className="bg-gray-50 overflow-hidden shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<h3 className="text-lg font-medium text-gray-900">
								Індивідуальна терапія
							</h3>
							<p className="mt-1 text-2xl font-semibold text-indigo-600">
								500 грн. / сессія
							</p>
							<ul className="mt-4 space-y-2">
								<li className="flex items-start">
									<span className="flex-shrink-0 h-5 w-5 text-indigo-600">
										✓
									</span>
									<span className="ml-2 text-sm text-gray-600">
										50-хвилинна сесія
									</span>
								</li>
								<li className="flex items-start">
									<span className="flex-shrink-0 h-5 w-5 text-indigo-600">
										✓
									</span>
									<span className="ml-2 text-sm text-gray-600">
										Персоналізований план лікування
									</span>
								</li>
								<li className="flex items-start">
									<span className="flex-shrink-0 h-5 w-5 text-indigo-600">
										✓
									</span>
									<span className="ml-2 text-sm text-gray-600">
										Доступно особисто або онлайн
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="bg-gray-50 overflow-hidden shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<h3 className="text-lg font-medium text-gray-900">
								Сімейна терапія
							</h3>
							<p className="mt-1 text-2xl font-semibold text-indigo-600">
								800 грн. / сессія
							</p>
							<ul className="mt-4 space-y-2">
								<li className="flex items-start">
									<span className="flex-shrink-0 h-5 w-5 text-indigo-600">
										✓
									</span>
									<span className="ml-2 text-sm text-gray-600">
										75-хвилинна сесія
									</span>
								</li>
								<li className="flex items-start">
									<span className="flex-shrink-0 h-5 w-5 text-indigo-600">
										✓
									</span>
									<span className="ml-2 text-sm text-gray-600">
										Індивідуальні стратегії спілкування
									</span>
								</li>
								<li className="flex items-start">
									<span className="flex-shrink-0 h-5 w-5 text-indigo-600">
										✓
									</span>
									<span className="ml-2 text-sm text-gray-600">
										Техніки вирішення конфліктів
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="bg-gray-50 overflow-hidden shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<h3 className="text-lg font-medium text-gray-900">
								Груповий тренінг
							</h3>
							<p className="mt-1 text-2xl font-semibold text-indigo-600">
								1000 грн. / сессія
							</p>
							<ul className="mt-4 space-y-2">
								<li className="flex items-start">
									<span className="flex-shrink-0 h-5 w-5 text-indigo-600">
										✓
									</span>
									<span className="ml-2 text-sm text-gray-600">
										2-годинна сесія
									</span>
								</li>
								<li className="flex items-start">
									<span className="flex-shrink-0 h-5 w-5 text-indigo-600">
										✓
									</span>
									<span className="ml-2 text-sm text-gray-600">
										Інтерактивні групові вправи
									</span>
								</li>
								<li className="flex items-start">
									<span className="flex-shrink-0 h-5 w-5 text-indigo-600">
										✓
									</span>
									<span className="ml-2 text-sm text-gray-600">
										Навчальні матеріали для дому включені
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<p className="mt-6 text-sm text-gray-600">
					* Ціни можуть змінюватися залежно від конкретних потреб та обставин.
					Будь ласка, зв'яжіться для отримання персональної пропозиції.
				</p>
			</div>
		</div>
	)
}

export default Pricing