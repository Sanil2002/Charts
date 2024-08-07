'use client';

import { BarChart, 
    Bar, 
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

const BarChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={400} data={SalesData} margin={{right:30}}>
             <YAxis />
             <XAxis dataKey="name" />
             <CartesianGrid strokeDasharray="5 5"/>

             <Tooltip content={<CustomTooltip />}/>
             <Legend />
             <Bar dataKey="revenue" fill="#2563eb" />
             <Bar dataKey="profit" fill="#8b5cf6"/>  

          </BarChart>
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

export default BarChartComponent