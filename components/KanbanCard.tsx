import React, { FC, ReactNode, useState } from "react";
import avatars from "@/public/images/avatars.svg";
import Image from "next/image";
import { Ellipsis, MessageCircle, Paperclip } from "lucide-react";

import { Task, KanbanCardProps } from "@/utils/types";

const KanbanCard: FC<KanbanCardProps> = ({ task, updateTaskTitle }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div draggable
    onDragStart={(e)=>{
      e.dataTransfer.setData("id",task.id)
    }}
     className=" bg-inner-color rounded-md border-[0.1px] border-card-stroke p-5">
      <div className="flex flex-row justify-between">
        <div className="">
          <Image src={avatars} alt="" width={100} />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <MessageCircle size={16} />
          <span className="text-gray-300 text-sm">2</span>
          <Paperclip size={16} />
          <span className="text-gray-300 text-sm">4</span>
        </div>
      </div>
      <div className="flex flex-col gap-[.5rem] justify-between">
        <div className="space-y-2 pt-2">
          {isEditing ? (
            <input
              autoFocus
              className="w-full bg-inner-color"
              onBlur={() => setIsEditing(false)}
              value={task.title}
              onChange={(e) => updateTaskTitle(task, e.target.value)}
            />
          ) : (
            <h2 className="pt-2" onClick={() => setIsEditing(true)}>
              {task.title}
            </h2>
          )}
          <p className="text-sm text-gray-300">{task.description}</p>
        </div>
        <div className="flex mt-3 justify-between items-center ">
          <div className=" flex flex-row gap-2 items-center border-[.1px] border-system-color-b rounded-sm bg-system-color-b bg-opacity-20 px-4 py-1">
            <task.icon size={18} className="text-system-color-b" />
            <p className="text-sm">{task.subtitle}</p>
          </div>
          <Ellipsis size={18} className="text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
