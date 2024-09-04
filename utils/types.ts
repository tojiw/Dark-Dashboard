import { CodeIcon, LucideIcon, MessageSquareText } from "lucide-react";
export type Status = "todo" | "in progress" | "completed";

export interface Task {
  id: string;
  title: string;
  description: string;
  subtitle: string;
  icon: LucideIcon;
  status: Status;
}
export const statuses: Status[] = ["todo", "in progress", "completed"];

export interface KanbanCardProps {
  task: Task;
  updateTaskTitle: (task: Task, title: string) => void;
}


 interface TaskformProps{
  onSubmit:(newTask:Partial<Task>)=>void
  onCancel:()=>void
}


export const tasks: Task[] = [
  {
    id: "1",
    title: "Web design and development",
    description: "Analyse and perform research for various profitable market",
    subtitle: "Development",
    icon: CodeIcon,
    status: "todo",
  },
  {
    id: "2",
    title: "Mobile app UI/UX design and development",
    description: "Analyse and perform research for various profitable market",
    subtitle: "Development",
    icon: CodeIcon,
    status: "in progress",
  },
  {
    id: "3",
    title: "Fix homepage bugs",
    description: "Analyse and perform research for various profitable market",
    subtitle: "Development",
    icon: CodeIcon,
    status: "in progress",
  },
  {
    id: "4",
    title: "Select Marketing page",
    description: "Analyse and perform research for various profitable market",
    subtitle: "Marketing",
    icon: MessageSquareText,
    status: "completed",
  },
  {
    id: "5",
    title: "Do market Research",
    description: "Analyse and perform research for various profitable market",
    subtitle: "Marketing",
    icon: MessageSquareText,
    status: "completed",
  },
  {
    id: "6",
    title: "Do market Research",
    description: "Analyse and perform research for various profitable market",
    subtitle: "Marketing",
    icon: MessageSquareText,
    status: "completed",
  },
];
