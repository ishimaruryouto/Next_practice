import Image from 'next/image';
import Link from 'next/link';
export default function Bike() {
	return (
		<>
			<header>
				<nav className="flex justify-between text-sm items-center w-3/5 mx-auto py-2.5 max-sm:px-3.75 max-sm:w-full">
					<h1>
						<Image src="/img/logo.svg" alt="Profile" width={120} height={40} />
					</h1>
					<ul className="flex gap-7.5">
						<li>
							<Link href="#">About</Link>
						</li>
						<li>
							<Link href="#">Bicycle</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<Image
					src="/img/mainvisual.jpg"
					alt="白い自転車"
					width={2000}
					height={1000}
					className="w-full h-150 object-cover"
				/>

				<section>
					<div className="flex justify-center mt-20">
						<h2 className="text-[32px] border-b inline">About</h2>
					</div>
					<div className="flex w-2/5 mx-auto mt-17.5 max-sm:w-full max-sm:flex-wrap max-sm:px-3.75">
						<Image
							src="/img/about.jpg"
							alt="緑の帽子を被った男性"
							width={100}
							height={100}
							className="h-fit rounded-full aspect-square max-sm:block max-sm:mx-auto"
						/>
						<div className="ml-7.5">
							<h3 className="text-base font-bold max-sm:mt-2.5">KAKERU MIYAICHI</h3>
							<p>
								テキストテキストテキストテキストテキストテキストテキスト
								テキストテキストテキストテキストテキストテキストテキスト
								テキストテキストテキストテキストテキストテキストテキスト
							</p>
						</div>
					</div>
				</section>

				<section>
					<div className="flex justify-center mt-20 max-sm:w-full">
						<h2 className="text-[32px] border-b inline">Bicycle</h2>
					</div>
					<div className="sm:flex justify-center gap-4.5 mt-15 max-sm:flex-wrap max-sm:gap-7.5">
						<div>
							<Image src="/img/bicycle1.jpg" alt="黒い自転車のサドル" width={300} height={300} className="max-sm:w-full max-sm:px-3.75" />
							<h3 className="text-base font-bold text-center mt-2.5">タイトルタイトル</h3>
							<p className="text-sm text-center mt-2.5">テキストテキストテキスト</p>
						</div>

						<div className="max-sm:mt-7.5">
							<Image src="/img/bicycle2.jpg" alt="シルバーの自転車" width={300} height={300} className="max-sm:w-full max-sm:px-3.75" />
							<h3 className="text-base font-bold text-center mt-2.5">タイトルタイトル</h3>
							<p className="text-sm text-center mt-2.5">テキストテキストテキスト</p>
						</div>

						<div className="max-sm:mt-7.5">
							<Image src="/img/bicycle3.jpg" alt="白の自転車" width={300} height={300} className="max-sm:w-full max-sm:px-3.75" />
							<h3 className="text-base font-bold text-center mt-2.5">タイトルタイトル</h3>
							<p className="text-sm text-center mt-2.5">テキストテキストテキスト</p>
						</div>
					</div>
				</section>
			</main>

			<footer>
				<p className="text-[8px] text-center mt-27.5 mb-2.5">
					<small>&copy;</small>2020 Profile
				</p>
			</footer>
		</>
	);
}
