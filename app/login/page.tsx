import React from "react";
import Image from "next/image";
import logo from "@/public/images/Logo Icon.png";
import loginImage from "@/public/images/stock.svg";
import login_bg from "@/public/images/lance-reis-wIykUNwwJQk-unsplash.jpg";
import googleLogo from "@/public/images/google.png";
import Link from "next/link";
const Login = () => {
 
  return (
    <div className="flex flex-row font-DM-Sans min-h-screen tracking-tight">
      <div className="w-1/2 min-h-screen bg-inner-color border-[0.1px] border-card-stroke p-5 relative">
        <Image
          src={login_bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="grayscale opacity-40"
        />
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="flex flex-row gap-1">
            <Image src={logo} alt="logo-image" width={24} height={24} />
            <span className="hidden lg:block text-lg font-medium">
              Dark Dashboard
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-DM-Sans px-14">
              "This dashboard has saved me countless hours of work and helped me
              uncover key insights for my clients faster than ever before."
            </p>
            <p className="text-sm px-14">Sara Hopkins</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
      
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl tracking-tight text-center">Welcome Back</h2>
          <p className="text-center items-center text-gray-300 text-sm">
            It's great to have you back. Login to continue.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="w-[350px] h-10 rounded-[4px] px-2 placeholder:text-sm ring-0 bg-transparent border-[0.1px] border-card-stroke"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="w-[350px] h-10 rounded-[4px] px-2 placeholder:text-sm bg-transparent border-[0.1px] border-card-stroke"
          />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <button className="w-[350px] py-2 bg-primary-color rounded-md mt-4">
            Login
          </button>
          <p className="text-sm text-gray-400 mt-2">or</p>
          <button className="w-[350px] py-2 bg-[#1D88FE] bg-opacity-20 items-center rounded-md mt-4 flex flex-row gap-2 justify-center">
            <span>
              <Image src={googleLogo} alt="" width={26} />
            </span>{" "}
            Login with Google
          </button>
        </div>
        <p className="w-1/2 mt-4 text-center text-sm">
          Don't have an account already?{" "}
          <Link href="../signup" className="underline cursor-pointer"> Sign Up now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
