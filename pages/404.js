import Image from 'next/image';
import Link from 'next/link';

const Error = () => {
    return (
        <div className='grid h-screen place-items-center mt-10'>
            <Link href="/">
                <button className='btn btn-secondary'>
                    Back to Home
                </button>
            </Link>
            <Image src='/error_page.jpg' width={1000} height={50}>

            </Image>
        </div>
    );
};

export default Error;