import React from "react";
import { LucideIcon,Ellipsis } from "lucide-react";


interface SmallCardProps {
  icon: LucideIcon;
  heading: string;
  value: string;
  stat: string;
  statColor: string;
  statBg:string
  arrow:LucideIcon
}
const SmallCard:React.FC<SmallCardProps>= ({ icon: Icon1,arrow:Icon2, heading, value, stat, statColor,statBg }) => {
  return (
    <div className="lg:flex lg:flex-col p-5 border-[0.1px] border-card-stroke lg:w-1/4 w-full rounded-md bg-inner-color">
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-1 items-center">
        <Icon1 size={15}/>
        <span className="text-sm text-inner-text">{heading}</span>
      </div>
      <Ellipsis size={15}/>
    </div>
    <div className="flex flex-row gap-3 pt-4 items-center">
        <span className="text-4xl font-semibold">{value}</span>
        <div className={`p-1 flex flex-row ${statColor} ${statBg} items-center  bg-opacity-80 rounded-sm` }>
            <span className="text-sm">{stat}</span>
            <Icon2 size={15}/>
        </div>
    </div>
    </div>
  );
};

export default SmallCard;
