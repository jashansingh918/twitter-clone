import Link from 'next/link';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold">Twitter Clone</h1>
      </Link>
      <div className="flex gap-4">
        <Link href="/">
          <FaHome className="text-2xl cursor-pointer hover:text-gray-200" />
        </Link>
        <Link href="/messages">
          <FaEnvelope className="text-2xl cursor-pointer hover:text-gray-200" />
        </Link>
        <Link href="/profile">
          <FaUser className="text-2xl cursor-pointer hover:text-gray-200" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
