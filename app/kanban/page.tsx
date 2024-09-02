"use client";
import KanbanCard from "@/components/KanbanCard";
import { tasks as initialTasks, statuses, Task } from "@/utils/types";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

const Kanban = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  
  const updateTaskTitle = (task: Task, title: string) => {
    const updatedTask = tasks.map((t) => {
      return( t.id === task.id ? { ...t, title } : t)
    });
    setTasks(updatedTask);
  };
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: tasksInColumn,
    };
  });
  return (
    <div className="flex gap-4">
      {columns.map((column) => (
        <div className="flex flex-col p-4 gap-8 items-center">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-row gap-2">
              <h1 className=" capitalize text-[#AEB9E1]">{column.status}</h1>
              <span className="text-sm text-[#AEB9E1] bg-inner-color flex px-2 rounded-md border-[0.1px] border-system-color-b">
                {column.tasks.length}
              </span>
            </div>
            <EllipsisVertical size={16} />
          </div>
          {column.tasks.map((task) => (
            <KanbanCard
              task={task}
              key={task.id}
              updateTaskTitle={updateTaskTitle}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Kanban;
