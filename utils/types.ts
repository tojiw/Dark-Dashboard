import { CodeIcon, LucideIcon, MessageSquareText } from "lucide-react";

export interface Task{
    title:string,
    description:string,
    subtitle:string,
    icon:LucideIcon
}

export const tasks: Task[] = [
    {
      title: "Web design and development",
      description: "Analyse and perform research for various profitable market",
      subtitle: "Development",
      icon: MessageSquareText,
    },
    {
      title: "Mobile app UI/UX design and development",
      description: "Analyse and perform research for various profitable market",
      subtitle: "Development",
      icon: CodeIcon,
    },
    {
      title: "Fix homepage bugs",
      description: "Analyse and perform research for various profitable market",
      subtitle: "Marketing",
      icon: CodeIcon,
    },
    {
      title: "Select Marketing page",
      description: "Analyse and perform research for various profitable market",
      subtitle: "Marketing",
      icon: CodeIcon,
    },
    {
      title: "Do market Research",
      description: "Analyse and perform research for various profitable market",
      subtitle: "Marketing",
      icon: MessageSquareText,
    },
  ];