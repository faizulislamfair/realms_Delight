import Post from "../../Components/Post/Post";


const Posts = ({ posts }) => {
    console.log(posts)
    return (
        <div>
            <h1 className="text-2xl text-center">Number of posts : {posts.length}</h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;


export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=25");
    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }
}