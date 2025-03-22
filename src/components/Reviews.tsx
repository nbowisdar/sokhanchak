// import { Star } from "lucide-react"
// import { handleReviewSubmit } from "@/actions/reviews"
// import { reviewsTable } from "@/db/schema"

// import { db } from "@/db"
// import Stars from "./Stars"

// const Reviews = async () => {
// 	const reviews = await db.select().from(reviewsTable)
// 	console.log(reviews, "reviews")

// 	return (
// 		<div
// 			id="reviews"
// 			className="mt-8 bg-white bg-opacity-90 backdrop-blur-sm overflow-hidden shadow rounded-lg"
// 		>
// 			<div className="px-4 py-5 sm:p-6">
// 				<h2 className="text-2xl font-bold text-gray-900">Patient Reviews</h2>
// 				<div className="mt-6 space-y-6">
// 					{reviews.map((review, index) => (
// 						<div
// 							key={index}
// 							className="bg-gray-50 overflow-hidden shadow rounded-lg"
// 						>
// 							<div className="px-4 py-5 sm:p-6">
// 								<div className="flex items-center">
// 									{[1, 2, 3, 4, 5].map((value) => (
// 										<Star
// 											key={value}
// 											className={`h-5 w-5 ${
// 												value <= review.rating
// 													? "text-yellow-400"
// 													: "text-gray-300"
// 											}`}
// 											fill={value <= review.rating ? "currentColor" : "none"}
// 										/>
// 									))}
// 								</div>
// 								<p className="mt-2 text-gray-600 italic">{review.content}</p>
// 								<div className="mt-2 flex justify-between items-center">
// 									<p className="text-sm text-gray-500">- {review.author}</p>
// 									<p className="text-sm text-gray-500">{review.date}</p>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 				<div className="mt-8">
// 					<h3 className="text-xl font-semibold text-gray-900 mb-4">
// 						Leave a Review
// 					</h3>
// 					<form action={handleReviewSubmit} className="space-y-4">
// 						<div>
// 							<label
// 								htmlFor="author"
// 								className="block text-sm font-medium text-gray-700"
// 							>
// 								Name
// 							</label>
// 							<input
// 								type="text"
// 								id="author"
// 								name="author"
// 								required
// 								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
// 							/>
// 						</div>
// 						<div>
// 							<label
// 								htmlFor="content"
// 								className="block text-sm font-medium text-gray-700"
// 							>
// 								Review
// 							</label>
// 							<textarea
// 								id="content"
// 								name="content"
// 								rows={4}
// 								required
// 								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
// 							></textarea>
// 						</div>
// 						<Stars />
// 						<button
// 							type="submit"
// 							className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// 						>
// 							Submit Review
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Reviews
