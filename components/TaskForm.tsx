import React, { useState } from 'react';
import { Task, Status, statuses } from '@/utils/types';
import { LucideIcon, MessageSquareText, Code, FileText } from 'lucide-react';

interface TaskFormProps {
  onSubmit: (task: Partial<Task>) => void;
  onCancel: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [status, setStatus] = useState<Status>('todo');
  const [icon, setIcon] = useState<LucideIcon>(MessageSquareText);
  const [editing,setIsEditing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, subtitle, status, icon });
  };

  return (
    // <div className="fixed inset-0 bg-gray-800 bg-opacity-65 flex justify-center items-center">

    <form onSubmit={handleSubmit} className="bg-background-dark p-4 rounded-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full mb-2 p-2 bg-inner-color rounded placeholder:text-white"
        required
        onBlur={()=>{setIsEditing(false)}}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full mb-2 p-2 bg-inner-color rounded placeholder:text-white"
        required
      />
      <input
        type="text"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        placeholder="Subtitle"
        className="w-full mb-2 p-2 bg-inner-color rounded placeholder:text-white"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as Status)}
        className="w-full mb-2 p-2 bg-inner-color rounded"
      >
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => {
          const selectedIcon = e.target.value;
          setIcon(
            selectedIcon === 'MessageSquareText'
              ? MessageSquareText
              : selectedIcon === 'Code'
              ? Code
              : FileText
          );
        }}
        className="w-full mb-2 p-2 bg-inner-color rounded"
      >
        <option value="MessageSquareText">Message</option>
        <option value="Code">Code</option>
        <option value="FileText">File</option>
      </select>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="mr-2 px-4 py-2 bg-inner-color bg-opac rounded"
        >
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-primary-color rounded">
          Add Task
        </button>
      </div>
    </form>
    // </div>

  );
};

export default TaskForm;