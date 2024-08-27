import React from "react";
import { ArrowUpRight, Timer } from "lucide-react";
interface SessionsCardProps {
  Chart: React.ComponentType<any>;
}
const SessionsCard: React.FunctionComponent<SessionsCardProps> = ({
  Chart,
}) => {
  return (
    <div>
      <div className="flex flex-col p-4 gap-1">
        <div className="flex flex-row gap-1 items-center">
          <Timer size={15} />
          <p className="text-sm text-inner-text">Total Profit</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <span className="text-3xl font-semibold">400</span>
          <div
            className={`p-1 flex flex-row items-center bg-green-700 text-positive  bg-opacity-80 rounded-sm`}
          >
            <span className="text-sm">16.5%</span>
            <ArrowUpRight size={15} />
          </div>
        </div>
        <Chart />
        <div className="flex flex-row justify-between items-baseline">
          <div className="flex flex-row gap-2 items-baseline">
            <div
              className={`p-1 flex flex-row items-center bg-green-700 text-positive  bg-opacity-80 rounded-sm`}
            >
              <span className="text-sm">Live</span>
            </div>
            <p className="text-sm text-opacity-80">10K visitors</p>
          </div>
          <p className="text-sm text-primary-color cursor-pointer">
            View Report
          </p>
        </div>
      </div>
    </div>
  );
};

export default SessionsCard;
