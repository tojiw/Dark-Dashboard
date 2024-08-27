import React from "react";
import { ArrowUpRight, ChartLine } from "lucide-react";
interface ProfitCardProps {
  Chart: React.ComponentType<any>;
}
const ProfitCard: React.FunctionComponent<ProfitCardProps> = ({ Chart }) => {
  return (
    <div className="p-5 flex flex-col justify-between">
      <div className="flex flex-row gap-1 items-center">
        <ChartLine size={15} />
        <p className="text-sm text-inner-text">Total Profit</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <span className="text-3xl font-semibold">$144.6K</span>
        <div
          className={`p-1 flex flex-row items-center bg-green-700 text-positive  bg-opacity-80 rounded-sm`}
        >
          <span className="text-sm">28.5%</span>
          <ArrowUpRight size={15} />
        </div>
      </div>
      <div className="flex-col">
        <Chart />
      <div className="flex flex-row justify-between ">
        <p className="text-sm opacity-80">Last 12 months</p>
        <span className="text-primary-color text-sm cursor-pointer">View Report</span>
      </div>
      </div>
    </div>
  );
};

export default ProfitCard;
