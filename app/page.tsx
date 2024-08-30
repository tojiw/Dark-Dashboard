import Sidebar from "@/components/Sidebar";
import SmallCard from "@/components/SmallCard";
import BarsChart from "../components/charts/BarsChart";
import LinesChart from "../components/charts/LinesChart";
import {
  Eye,
  ArrowUpRight,
  ArrowDownLeft,
  User,
  PlusCircle,
  Star,
  ChartLine,
} from "lucide-react";
import RevenueCard from "@/components/RevenueCard";
import ProfitCard from "@/components/ProfitCard";
import SessionsCard from "@/components/SessionsCard";
import { DatePicker } from "@/components/DatePicker";
import { RadialChart } from "@/components/charts/RadialChart";
import { Tables } from "../components/Tables";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import map from "../public/images/illustration.svg";
export default function Home() {
  return (
      <div className="flex font-DM-Sans">
        <Sidebar/>
      <div className=" w-full p-8 ">
        <div className="w-full h-12">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="font-medium text-lg">Welcome back, John</p>
              <p className="text-[12px] font-light opacity-70">
                Measure your advertisement ROI and report website traffic.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <button className="px-5 rounded-md bg-border-color hover:bg-inner-color">
                <p className="">Export Data</p>
              </button>
              <button className="px-5 rounded-md bg-primary-color hover:opacity-90">
                <p className="">Create Report</p>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 lg:flex lg:flex-row flex flex-col gap-4 lg:gap-4  cursor-pointer small-cards">
          <SmallCard
            icon={Eye}
            heading={"PageViews"}
            value="50.8K"
            stat="28.4%"
            statColor="text-positive"
            statBg="bg-green-700"
            arrow={ArrowUpRight}
          />
          <SmallCard
            icon={User}
            heading="Monthly Users"
            value="23.6K"
            stat="12.6%"
            statColor="text-negative"
            statBg="bg-red-700"
            arrow={ArrowDownLeft}
          />
          <SmallCard
            icon={PlusCircle}
            heading="New Signups"
            value="756"
            stat="3.1%"
            statColor="text-positive"
            statBg="bg-green-700"
            arrow={ArrowUpRight}
          />
          <SmallCard
            icon={Star}
            heading="Subscriptions"
            value="2.3K"
            stat="11.3%"
            statColor="text-positive"
            statBg="bg-green-700"
            arrow={ArrowUpRight}
          />
        </div>
        <div className=" lg:flex lg:flex-row gap-4 flex flex-col">
          <div className="mt-10 lg:w-3/5 w-full h-full lg:h-[600px] rounded-md border-card-stroke border-[0.1px] bg-inner-color">
            <RevenueCard />
          </div>
          <div className="flex flex-col lg:w-1/2 w-full gap-4">
            <div className="mt-10 h-[300px] rounded-md border-card-stroke border-[0.1px] bg-inner-color">
              <ProfitCard Chart={BarsChart} />
            </div>
            <div className=" h-[283px] rounded-md border-card-stroke border-[0.1px] bg-inner-color">
              <SessionsCard Chart={LinesChart} />
            </div>
          </div>
        </div>
        <div className="lg:mt-10 lg:flex lg:flex-col gap-6 ">
          <h2 className="font-semibold text-xl">Reports Overview</h2>
          <div className="flex flex-row justify-between">
            <DatePicker />
            <div className="flex flex-row gap-2">
              <button className="px-5 rounded-md bg-inner-color hover:bg-inner-color">
                <p className="">Export Data</p>
              </button>
              <button className="px-5 rounded-md bg-primary-color hover:opacity-90">
                <p className="">Create Report</p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-5">
            <div className="w-1/2 h-[400px] bg-inner-color rounded-md">
              <RadialChart />
              <div className="flex flex-col gap-4 p-5 align-middle">
                <div className="flex flex-row justify-between">
                  <p>Desktop Users</p>
                  <p>15,678</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Mobile Users</p>
                  <p>5,647</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Laptop Users</p>
                  <p>2,478</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-[400px] bg-inner-color rounded-md p-5">
              <div className="flex flex-row justify-between items-center">
                <h2 className="text-lg font-semibold">Recent Orders</h2>
                <DatePicker />
              </div>
              <Tables />
            </div>
          </div>
          <div className="w-full h-[410px] bg-inner-color rounded-md p-5 flex flex-row justify-between gap-2">
            <div className="flex flex-col w-1/3">
              <div className="flex flex-row gap-1 items-center">
                <p className="text-lg font-semibold">Users by Country</p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <span className="text-3xl font-semibold">12.4K</span>
                  <div
                    className={`p-1 flex flex-row items-center bg-green-700 text-positive  bg-opacity-80 rounded-sm`}
                  >
                    <span className="text-sm">28.5%</span>
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                <button className="bg-background-dark py-2 px-6 rounded-md">
                  Export
                </button>
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <p className="text-sm">United States</p>
                <Progress value={33} />
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <p className="text-sm">United Kingdom</p>
                <Progress value={23} className="[&>div]:bg-white" />
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <p className="text-sm">Canada</p>
                <Progress value={13} className="[&>div]:bg-yellow-500" />
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <p className="text-sm">Mexico</p>
                <Progress value={9} className="[&>div]:bg-[#9A91FB]" />
              </div>
              <div className="flex flex-col mt-4 gap-2 ">
                <p className="text-sm">Europe</p>
                <Progress value={5} className=" [&>div]:bg-blue-500" />
              </div>
            </div>
            <Image src={map} alt="map" width={800} />
          </div>
        </div>
      </div>
      </div>

  );
}
