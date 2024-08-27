import React from "react";
import { ArrowUpRight, Dot } from "lucide-react";
import GradientChart from './charts/GradientChart'
const AreaGraph = () => {
  return (
    <div className="flex flex-col">
      <div className="lg:flex lg:flex-row flex flex-col lg:justify-between p-5 lg:items-center">
        <div className="flex flex-col gap-2">
          <p className="opacity-80">Total Revenue</p>
          <div className="flex flex-row gap-2 items-center">
            <span className="text-3xl font-semibold">$240.8K</span>
            <div
              className={`p-1 flex flex-row items-center bg-green-700 text-positive  bg-opacity-80 rounded-sm`}
            >
              <span className="text-sm">24.6%</span>
              <ArrowUpRight size={15} />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex flex-row gap-2">
            <div className="flex flex-row items-center">
              <Dot size={40} color="#cb3cff" />
              <p className="text-sm opacity-80">Revenue</p>
            </div>
            <div className="flex flex-row items-center">
              <Dot size={40} color="#21C3FC" />
              <p className="text-sm opacity-80">Expenses</p>
            </div>
          </div>
        </div>
      </div>
      <GradientChart/>
      <div className="flex flex-row justify-between p-5 pt-10 mt-12 ">
          <p className="text-sm opacity-80">Last 6 months</p>
          <span className="text-primary-color text-sm cursor-pointer">View Report</span>
        </div>
    </div>
  );
};

export default AreaGraph;
