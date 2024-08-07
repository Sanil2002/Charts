'use client';

import { LineChart, 
    Line, 
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid, 
    Tooltip,
    Legend} from "recharts";

    interface CustomTooltipProps {
        active?:boolean,
        payload?:Array<{
            name:string,
            value:number,
        }>,
        label?:string
    }

const SalesData = [
    {
      name: 'Jan',
      revenue: 4000,
      profit: 2400,
    },
    {
      name: 'Feb',
      revenue: 3000,
      profit: 2210,
    },
    {
      name: 'Mar',
      revenue: 2000,
      profit: 2290,
    },
    {
      name: 'Apr',
      revenue: 2780,
      profit: 2000,
    },
    {
      name: 'May',
      revenue: 1890,
      profit: 2181,
    },
    {
      name: 'Jun',
      revenue : 2390,
      profit: 2500,
    },
  ];

const LineChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={SalesData} margin={{right:30}}>
             <YAxis />
             <XAxis dataKey="name" />
             <CartesianGrid strokeDasharray="5 5"/>

             <Tooltip content={<CustomTooltip />}/>
             <Legend />
             <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
             <Line type="monotone" dataKey="profit" stroke="#8b5cf6"/>  

          </LineChart>
        </ResponsiveContainer>
    )
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
          <p className="text-medium text-lg">{label}</p>
          <p className="text-sm text-blue-400">
            revenue:
            <span className="ml-2">${payload[0].value}</span>
          </p>
          <p className="text-sm text-indigo-400">
            profit:
            <span className="ml-2">${payload[1].value}</span>
          </p>
        </div>
      );
    }
  };

export default LineChartComponent