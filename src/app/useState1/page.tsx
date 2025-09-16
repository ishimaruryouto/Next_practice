'use client';
// ReactのuseStateをインポート
import { useState } from "react";
export default function Home() {
	// const [状態変数, 状態を更新する関数] = useState(初期値);
	const [count, setCount] = useState(0);
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen py-2 space-y-4">
				<h1 className="text-2xl font-bold">Stateに対する理解</h1>
				<h2 className="text-xl">ボタンを押すたびに数字が増減する機能を実装しよう</h2>

				<div className="flex space-x-2">
					<button
						//クリックされるたびに状態変数に1を足す
						onClick={() => setCount(
							count + 1
						)}
						className="bg-blue-500 text-white px-4 py-2 rounded w-20"
					>
						+
					</button>
					<button
						//クリックされるたびに状態変数から1を引く
						onClick={() => setCount(
							count - 1
						)}
						className="bg-blue-500 text-white px-4 py-2 rounded w-20"
					>
						−
					</button>
				</div>

				{/* 状態変数の値を表示する */}
				<p className="text-lg">{count}</p>
			</div>
		</>
	);
}
