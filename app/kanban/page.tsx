import KanbanCard from "@/components/KanbanCard";
import { Code, CodeIcon, LucideIcon, MessageSquareText } from "lucide-react";
import { Task } from "@/utils/types";
import { tasks } from "@/utils/types";
const Kanban = () => {
  return (
    <div>
      {tasks.map((task) => (
        <KanbanCard key={task.title} task={task} />
      ))}
    </div>
  );
};
export default Kanban;
