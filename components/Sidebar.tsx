import React from "react";
import logo from "../public/images/Logo Icon.png";
import Image from "next/image";
import sidebar_config from "./sidebar_config.js";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Avatar from "../public/images/person-avatar.svg";

const Sidebar = () => {
  return (
    <div className="lg:w-2/12 w-1/4 max-sm:hidden  h-screen flex flex-col border-r-[0.1px] border-border-color bg-background-dark px-7 pt-8 sticky top-0 overflow-y-auto">
      <div className="flex flex-row gap-1">
        <Image src={logo} alt="logo-image" width={24} height={24} />
        <span className="hidden lg:block text-lg font-semibold">
          Dark Dashboard
        </span>
      </div>
      <div className="h-10 w-full border  border-[#343B4F] bg-inner-color mt-8 rounded-md placeholder:text-gray-300 flex flex-row gap-1 pl-3 pt-2 align-middle ">
        <span className="text-sm text-gray-500 ">Search for...</span>
      </div>
      <div className="pt-8 flex flex-col gap-2 w-full pb-8">
        {Object.entries(sidebar_config).map(([key, { iconName, name }]) => {
          const Icon = LucideIcons[
            iconName as keyof typeof LucideIcons
          ] as LucideIcon;
          return (
            <div
              key={key}
              className="flex flex-row gap-2 items-center align-bottom rounded-md cursor-pointer text-inner-text hover:bg-border-color py-[10px] pl-2 hover:text-primary-color"
            >
              {Icon && <Icon size={18} className="flex align-bottom" />}
              <span className="lg:inline hidden ">{name}</span>
            </div>
          );
        })}
      </div>
      <div className=" border-b-[0.1px] border-white opacity-20 "></div>
      <div className="pt-8">
        <div className="flex flex-row gap-2 align-middle items-center">
          <Image src={Avatar} alt="avatar" height={40} width={31} />
          <div className="flex flex-col">
            <p>John Carter</p>
            <p className="opacity-30 text-sm">Account Settings</p>
          </div>
        </div>
      </div>
      <div className="w-full h-12 bg-primary-color rounded-md mt-16 flex flex-row gap-2 items-center align-middle justify-center cursor-pointer hover:bg-opacity-90">
        <span className="text-medium flex justify-center">Upgrade Now</span>
        <ArrowRight size={18} />
      </div>
    </div>
  );
};

export default Sidebar;
