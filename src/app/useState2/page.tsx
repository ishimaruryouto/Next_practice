'use client';
// ReactのuseStateをインポート
import { useState } from "react";
export default function SimpleForm() {
	//username, email, password の state を宣言（初期値は空文字）
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [pass, setPass] = useState("");
	//showConfirm の state を宣言（初期値は false）
	const [showInput, setShowInput] = useState(true);
	//確認ボタン用の関数 handleConfirm を定義
	//    → showConfirm を true にする

	//戻るボタン用の関数 handleBack を定義
	//    → showConfirm を false にする

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-4 space-y-4">
			<h1 className="text-2xl font-bold">ユーザー情報フォーム</h1>

			{/* ⑤ showConfirm が false なら入力フォーム、true なら確認画面を表示する条件分岐を記述 */}
			{/* 例）!showConfirm ? ( …フォーム… ) : ( …確認画面… ) */}
			{showInput ? (
				<>
					{/* 各 input に value と onChange を設定して state と同期させる */}
					<input
						type="text"
						placeholder="ユーザー名"
						/* value=... */
						value={name}
						/* onChange=... */
						onChange={(event) => setName(
							event.target.value
						)}
						className="border border-gray-300 rounded px-2 py-1 w-64"
					/>

					<input
						type="email"
						placeholder="メールアドレス"
						/* value=... */
						value={mail}
						/* onChange=... */
						onChange={(event) => setMail(
							event.target.value
						)}
						className="border border-gray-300 rounded px-2 py-1 w-64"
					/>

					<input
						type="password"
						placeholder="パスワード"
						/* value=... */
						value={pass}
						/* onChange=... */
						onChange={(event) => setPass(
							event.target.value
						)}
						className="border border-gray-300 rounded px-2 py-1 w-64"
					/>

					<button
						/* onClick に handleConfirm を設定（確認画面へ遷移） */
						onClick={
							() => setShowInput(false)
						}
						className="bg-blue-500 text-white px-4 py-2 rounded w-64"
					>
						確認
					</button>
				</>


			) : (
				<>
					<h2 className="text-xl font-semibold">入力内容の確認</h2>
					{/* usernameの値を表示 */}
					<p>ユーザー名:{name}</p>
					{/* emailの値を表示 */}
					<p>メールアドレス:{mail}</p>
					{/* passwordの値を表示 */}
					<p>パスワード:{pass}</p>

					<div className="flex space-x-2">
						<button
							/* onClick に handleBack を設定（入力画面へ戻る） */
							onClick={() => setShowInput(true)}
							className="bg-gray-500 text-white px-4 py-2 rounded"
						>
							戻る
						</button>
						<button
							/* onClick で alert('送信しました！') を呼び出す */
							onClick={() => alert("送信しました！")}
							className="bg-green-500 text-white px-4 py-2 rounded"
						>
							送信
						</button>
					</div>
				</>

			)}

			{/* ▼ 入力フォーム（showConfirm が true のとき表示） */}
			{/* ▼ 確認画面（showConfirm が true のとき表示） */}
		</div>
	);
}
