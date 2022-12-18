import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Realm's Delight</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <Link href='/posts'>
                        <li className='mr-5 text-xl'> Posts</li>
                    </Link>
                    <Link href='/comments/comments'>
                        <li className='mr-5 text-xl'> Comments</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;