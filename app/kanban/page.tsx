"use client";
import KanbanCard from "@/components/KanbanCard";
import TaskForm from "@/components/TaskForm";
import { tasks as initialTasks, Status, statuses, Task } from "@/utils/types";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/Sidebar";

const Kanban = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isHoveringOver, setIsHoveringOver] = useState<Status | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    const handleMouseClick = (event:MouseEvent)=>{
      if(formRef.current&& formRef.current.contains(event.target as Node))
      {
        setIsFormVisible(false)
      }
    }
    if(isFormVisible){
      document.addEventListener("mousedown",handleMouseClick)
    }
    return ()=> {document.removeEventListener("mousedown",handleMouseClick)}
  },[isFormVisible])

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

  const addNewTask = (newTask: Partial<Task>) => {
    const newTaskWithId = { ...newTask, id: Date.now().toString() } as Task;
    setTasks([...tasks, newTaskWithId]);
    setIsFormVisible(false);
  };

  //handle dragging functionality
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const task = tasks.find((task) => task.id === id);
    if (task) {
      updateTask({ ...task, status });
    }
    setIsHoveringOver(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (status: Status) => {
    setIsHoveringOver(status);
  };

  ////////////////////////////////////////////////////////////////////////
  return (
    <div className="flex flex-row">
      <Sidebar />
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
                {isFormVisible && (
                  <div
                  ref={formRef}
                   className="fixed inset-0 bg-gray-800 bg-opacity-65 flex justify-center items-center">
                    <TaskForm
                      onSubmit={addNewTask}
                      onCancel={() => setIsFormVisible(false)}
                    />
                  </div>
                )}
                <h1 className=" capitalize text-[#AEB9E1]">{column.status}</h1>
                <span className="text-sm text-[#AEB9E1] bg-inner-color flex px-2 rounded-md border-[0.1px] border-system-color-b">
                  {column.tasks.length}
                </span>
              </div>
              <EllipsisVertical size={16} />
            </div>
            <div
              className={`h-full flex flex-col gap-4 rounded-md ${isHoveringOver === column.status ? "bg-inner-color" : null}`}
            >
              <button
                onClick={() => setIsFormVisible(true)}
                className="px-4 py-2 bg-inner-color border-[0.1px] border-card-stroke text-white rounded-md text-4xl"
              >
                +
              </button>
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
