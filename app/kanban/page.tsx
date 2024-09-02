import KanbanCard from "@/components/KanbanCard";
import { Code, LucideIcon, MessageSquareText } from "lucide-react";
import { Task } from "@/utils/types";
const Kanban = () => {
  const task: Task = {
    title: "Do market Research",
    description: "Analyse and perform research for various profitable market",
    subtitle: "Marketing",
    icon: MessageSquareText,
  };
  return (
    <div>
      <KanbanCard task={task} />
    </div>
  );
};
export default Kanban;
