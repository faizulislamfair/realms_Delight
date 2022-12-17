import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <Head>
        <title>Home Page</title>
      </Head>


      <h1>This is Next.js</h1>
      <Link href="/blog">
        <h5 style={{ marginTop: '55px' }} >Blog</h5>
      </Link>
    </div>
  )
}
