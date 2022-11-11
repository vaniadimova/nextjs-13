import React, { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

type Props = {};

function Home({}: Props) {
	return (
		<div className="flex flex-col space-y-10">
			<Suspense fallback={<p className="text-red-500">Loading the todos</p>}>
				<h1 className="text-base font-medium text-gray-700">Loading todos</h1>
				<div className="flex space-x-2">
					{/* @ts-ignore */}
					<TodosList />
				</div>
			</Suspense>
			<Suspense fallback={<p className="text-blue-500">Loading trolley</p>}>
				<h1>Loading shopping trolley</h1>
				<div className="flex space-x-2">
					{/* @ts-ignore */}
					<TodosList />
				</div>
			</Suspense>
		</div>
	);
}

export default Home;