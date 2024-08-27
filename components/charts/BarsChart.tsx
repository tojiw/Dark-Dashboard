"use client";

import { Bar, BarChart, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", Revenue: 186, Expenses: 80 },
  { month: "February", Revenue: 305, Expenses: 200 },
  { month: "March", Revenue: 237, Expenses: 120 },
  { month: "April", Revenue: 73, Expenses: 190 },
  { month: "May", Revenue: 209, Expenses: 130 },
  { month: "June", Revenue: 214, Expenses: 140 },
];

const chartConfig = {
  Revenew: {
    label: "Revenue",
    color: "#CB3CFF",
  },
  Expenses: {
    label: "Expenses",
    color: "#00C2FF",
  },
} satisfies ChartConfig;

 function BarsChart() {
  return (
    <Card>
      <CardContent>
        <ChartContainer className="w-11/12 h-[160px] pt-2" config={chartConfig}>
          <BarChart data={chartData}>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Revenue" fill="#CB3CFF" radius={4} />
            <Bar dataKey="Expenses" fill="#00C2FF" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default BarsChart