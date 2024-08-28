import React, { FC } from "react";
import { EllipsisVertical, LucideIcon } from "lucide-react";

interface UserCardProps {
  icon: LucideIcon;
  heading: string;
  value: string;
  color:string,
  iconColor:string
}
const UserCard:FC<UserCardProps> = ({heading,value,icon:Icon1,color,iconColor}) => {
  return (
    <div className="flex justify-between bg-inner-color border-[0.1px] border-card-stroke w-[270px] rounded-md h-[90px] p-5 items-center">
      <div className="flex flex-row gap-4">
        <div className={`w-9 h-9 rounded-full bg-${color} bg-opacity-40 flex justify-center items-center`}>
            <Icon1 size={20} color={iconColor}/>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">{heading}</p>
          <p className="text-[10px]"> {value}</p>
        </div>
      </div>
      <EllipsisVertical size={15}/>
    </div>
  );
};

export default UserCard;
