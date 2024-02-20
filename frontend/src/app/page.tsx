'use client';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";
import Link from 'next/link';


export default function Home() {
  return (
    <main className="flex min-h-screen p-7 flex-col items-center justify-center">
      <div className="text-center flex flex-col items-center space-y-4">
        <Image
          alt = "Defivy Logo"
          src='/logo.svg'
          width={400} height={400}
        >
        </Image>
        <motion.div
            initial={{ opacity: 0 }}   // Starting opacity
            animate={{ opacity: 1 }}   // End opacity
            transition={{ duration: 0.4 }} // Transition time
            className='text-center flex flex-col items-center space-y-4'
        >
          <p className="text-lg md:text-2xl max-w-prose">
            Where AI and decentralized governance work together for the benefit of humanity.
          </p>
          <Link href='https://github.com/aphxtwin/defivy' className="mt-4 bg-blue-600 hover:bg-blue-700 text-xl text-white font-semibold flex items-center gap-x-2 py-3 px-5 rounded"><FaGithub size={30}/> See the repo </Link>
        </motion.div>
       
      </div>
    </main>
  );
}
