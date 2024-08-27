"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", Revenue: 186 },
  { month: "February", Revenue: 305 },
  { month: "March", Revenue: 237 },
  { month: "April", Revenue: 73 },
  { month: "May", Revenue: 209 },
  { month: "June", Revenue: 214 },
]

const chartConfig = {
  Revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

function LinesChart() {
  return (
    <Card>
      
      <CardContent>
        <ChartContainer className="h-[130px] w-11/12 pt-4" config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="Revenue"
              type="linear"
              stroke="#CB3CFF"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
     
    </Card>
  )
}
export default LinesChart