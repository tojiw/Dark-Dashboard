import Sidebar from "@/components/Sidebar";
import UserCard from "@/components/UserCard";
import { UserRound, UsersRound } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <p className="text-lg font-semibold">Users</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search For..."
              className="w-[400px] h-10 rounded-md border-[0.1px] border-card-stroke bg-inner-color pl-4 placeholder:text-sm"
            />
          </div>
          <button className="px-8 py-2 bg-primary-color rounded-sm ">
            Add User
          </button>
        </div>

      <div className="mt-10 flex gap-8 justify-evenl">
      <UserCard
        icon={UserRound}
        heading="Total Users"
        value="250"
        color="primary-color"
        iconColor="#CB3CFF"
      />
      <UserCard
        icon={UsersRound}
        heading="New Users"
        value="15"
        color="primary-color"
        iconColor="#CB3CFF"
      />
      <UserCard
        icon={UsersRound}
        heading="Total Users"
        value="250"
        color="primary-color"
        iconColor="#CB3CFF"
      />
      <UserCard
        icon={UsersRound}
        heading="Total Users"
        value="250"
        color="primary-color"
        iconColor="#CB3CFF"
      />
      
      </div>

      </div>
    </div>
  );
};

export default page;
