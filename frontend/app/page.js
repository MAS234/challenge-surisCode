import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#001226] w-full h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <Image src="/surisLogo.png" alt="Logo" width={200} height={200} />
        <h1 className="text-center text-white text-2xl mt-10">Challenge FullStack</h1>

        <Link href="/polindrome"  className="bg-[#f29f2c] mt-10 rounded-lg w-52 hover:bg-[#f2a02c97] duration-300 cursor-pointer">
          <p className="text-white font-semibold text-xl p-2 text-center" >Ingresar</p>
        </Link>
      </div>
      
    </div>
  );
}
