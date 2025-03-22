import { Star } from "lucide-react"
import { useState } from "react"

const Stars = () => {
	const [rating, setRating] = useState(5)

	return (
		<div>
			<label className="block text-sm font-medium text-gray-700">Rating</label>
			<div className="flex items-center mt-1">
				{[1, 2, 3, 4, 5].map((value) => (
					<label key={value} className="mr-2">
						<input
							type="radio"
							name="rating"
							value={value}
							checked={rating === value}
							onChange={() => setRating(value)}
							className="sr-only"
						/>
						<Star
							className={`h-6 w-6 cursor-pointer ${
								value <= rating ? "text-yellow-400" : "text-gray-300"
							}`}
							fill={value <= rating ? "currentColor" : "none"}
						/>
					</label>
				))}
			</div>
		</div>
	)
}

export default Stars
