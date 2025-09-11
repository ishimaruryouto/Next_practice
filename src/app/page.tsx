import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="font-2xl">ちんちん</h1>
      <Link href={"/testLink"}>押してちょ</Link>
      <Image src="/img/photo.webp" alt="テスト画像" width={800} height={500} />
    </>
  )
}