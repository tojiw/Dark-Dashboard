"use client";
import { ColumnDef } from "@tanstack/react-table";
import { dataType } from "@/components/ReportData";
import { Checkbox } from "@/components/ui/checkbox";
import {
  UserRound,
  Mail,
  Phone,
  Globe,
  Briefcase,
  Hash,
  CheckIcon,
} from "lucide-react";

export const columns: ColumnDef<dataType>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "full_name",
    header: () => {
      return (
        <div className="flex items-center gap-2">
          <UserRound size={15} />
          <span>Name</span>
        </div>
      );
    },
    cell: ({ getValue, row }) => {
      const fullname = getValue() as string;
      return (
        <div className="flex flex-row gap-2 items-center">
          <Checkbox />
          <p>{fullname}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: () => {
      return (
        <div className="flex items-center gap-2">
          <Mail size={15} />
          <span>Email</span>
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: () => {
      return (
        <div className="flex items-center gap-2">
          <Phone size={15} />
          <span>Phone</span>
        </div>
      );
    },
  },
  {
    accessorKey: "country",
    header: () => {
      return (
        <div className="flex items-center gap-2">
          <Globe size={15} />
          <span>Country</span>
        </div>
      );
    },
  },
  {
    accessorKey: "company",
    header: () => {
      return (
        <div className="flex items-center gap-2">
          <Briefcase size={15} />
          <span>Company</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => {
      return (
        <div className="flex items-center gap-2">
          <CheckIcon size={15} />
          <span>Status</span>
        </div>
      );
    },
    cell: ({ getValue }) => {
      const status = getValue() as string;
      return (
        <span
          className={`px-2 py-1 rounded-sm text-sm capitalize ${status === "online" ? "bg-system-color-g bg-opacity-20 border-system-color-g border text-system-color-g" : "bg-gray-400 bg-opacity-20 border border-gray-400 text-gray-400"}`}
        >
          {status}
        </span>
      );
    },
  },
];
