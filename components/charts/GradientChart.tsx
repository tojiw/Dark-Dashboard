"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis,YAxis } from "recharts"

import {
  Card,
  CardContent
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", Revenew: 186, Expenses: 80 },
  { month: "February", Revenew: 305, Expenses: 200 },
  { month: "March", Revenew: 237, Expenses: 120 },
  { month: "April", Revenew: 73, Expenses: 190 },
  { month: "May", Revenew: 209, Expenses: 130 },
  { month: "June", Revenew: 214, Expenses: 140 },
]

const chartConfig = {
  Revenew: {
    label: "Revenew",
    color: "#CB3CFF",
  },
  Expenses: {
    label: "Expenses",
    color: "#00C2FF",
  },
} satisfies ChartConfig

function Component() {
  return (
    <Card>
      
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillRevenew" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Revenew)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Revenew)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Expenses)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Expenses)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="Expenses"
              type="natural"
              fill="url(#fillExpenses)"
              fillOpacity={0.4}
              stroke="var(--color-Expenses)"
              stackId="a"
            />
            <Area
              dataKey="Revenew"
              type="natural"
              fill="url(#fillRevenew)"
              fillOpacity={0.4}
              stroke="var(--color-Revenew)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
export default Component
