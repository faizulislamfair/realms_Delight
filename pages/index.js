import Banner from './../Components/Banner/Banner';
import Navbar from './../Components/Navbar/Navbar';
import Footer from './../Components/Footer/Footer';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div className='text-center'>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-12'>
        {
          posts?.map(post => <div key={post.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post?.title}</h2>
              <div className="card-actions justify-end">
                <Link href={`/posts/${post?.id}`}>
                  <button className="btn btn-outline btn-secondary">See Details</button>
                </Link>
              </div>
            </div>
          </div>)
        }
      </div>

      <Link href={'/posts'}>
        <button className="btn btn-secondary w-96 mb-10">See All Posts
        </button>
      </Link>

      <Footer></Footer>
    </div >
  )
}


export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  }
}