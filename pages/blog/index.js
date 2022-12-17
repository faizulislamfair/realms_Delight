import Link from 'next/link';

const Blog = () => {
    return (
        <div>
            <h1>This is blog page</h1>
            <Link href="/blog/blog1">
                Blog Page 1
            </Link>
        </div>
    );
};

export default Blog;