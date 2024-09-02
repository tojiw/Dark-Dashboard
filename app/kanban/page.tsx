"use client";
import KanbanCard from "@/components/KanbanCard";
import { tasks as initialTasks, Status, statuses, Task } from "@/utils/types";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const Kanban = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isHoveringOver, setIsHoveringOver] = useState<Status | null>(null);

  const updateTaskTitle = (task: Task, title: string) => {
    const updatedTask = tasks.map((t) => {
      return t.id === task.id ? { ...t, title } : t;
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

  const updateTask = (updatedTask: Task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === updatedTask.id ? updatedTask : t
    );
    setTasks(updatedTasks);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const task = tasks.find((task) => task.id === id);
    if (task) {
      updateTask({ ...task, status });
    }
    setIsHoveringOver(null)
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (status: Status) => {
    setIsHoveringOver(status);

  };

  return (
    <div className="flex flex-row">
        <Sidebar/>
    <div className="flex gap-4">
      {columns.map((column) => (
        <div
          onDrop={(e) => handleDrop(e, column.status)}
          onDragOver={handleDragOver}
          onDragEnter={() => handleDragEnter(column.status)}
          className="flex flex-col p-4 gap-8 items-center"
        >
          <div className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-row gap-2">
              <h1 className=" capitalize text-[#AEB9E1]">{column.status}</h1>
              <span className="text-sm text-[#AEB9E1] bg-inner-color flex px-2 rounded-md border-[0.1px] border-system-color-b">
                {column.tasks.length}
              </span>
            </div>
            <EllipsisVertical size={16} />
          </div>
          <div className={`h-full flex flex-col gap-4 rounded-md ${isHoveringOver===column.status?'bg-inner-color':null}`}>
            {column.tasks.map((task) => (
              <KanbanCard
                task={task}
                key={task.id}
                updateTaskTitle={updateTaskTitle}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>

  );
};
export default Kanban;
