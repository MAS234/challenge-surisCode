import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#001226] w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="flex flex-col justify-center items-center max-w-md w-full">
        <Image
          src="/surisLogo.png"
          alt="Logo"
          width={200}
          height={100}
        />
        <h1 className="text-center text-white text-xl md:text-2xl mt-6 md:mt-10">
          Challenge FullStack
        </h1>

        <Link
          href="/palindrome"
          className="bg-[#f29f2c] mt-8 md:mt-10 rounded-lg w-full max-w-xs hover:bg-[#f2a02c97] duration-300 cursor-pointer"
        >
          <p className="text-white font-semibold text-lg md:text-xl p-3 text-center">
            Ingresar
          </p>
        </Link>
      </div>
    </div>
  );
}
