import { useRouter } from 'next/router';
import Head from "next/head";


const PostDetails = ({ post }) => {

    const router = useRouter();

    const handleBack = () => {
        router.push("/")
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Head>
                <title>Post | {post?.id}</title>
            </Head>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <p className="text-5xl font-medium">Id: {post?.id}</p>
                    <h1 className="mt-5 text-5xl font-medium">Title: {post?.title}</h1>
                    <p className="text-3xl py-6">{post?.body}</p>

                    <button onClick={handleBack} className="btn btn-secondary">Back to Homepage</button>

                </div>
            </div>
        </div>
    );
};



export const getStaticProps = async (context) => {

    const { params } = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const data = await res.json();

    return {
        props: {
            post: data
        }
    }
}



export const getStaticPaths = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=25");
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })


    return {
        paths,
        fallback: false
    }

}



export default PostDetails;