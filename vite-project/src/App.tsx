import React from 'react';
import './App.css'
import AreaChartComponent from './Components/AreaChart';
import BarChartComponent from './Components/BarChart';
import LineChartComponent from './Components/LineChart';

interface GridItemProps {
  title:string,
  children:React.ReactNode
}

function App() {

  const GridItem: React.FC<GridItemProps> = ({ title, children }) => {
    return (
      <div className="flex flex-col items-center justify-center p-4 bg-black rounded-xl h-[400px]">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        {children}
      </div>
    );
  }

  return (<>
    <div className='bg-gradient-to-r bg-black from-slate-800 via-white to-orange-300 items-center justify-center'>
      <div className='pt-11 flex flex-col gap-2'>
        <h1 className='justify-center text-center font-bold text-5xl text-black'>Charts</h1>
        <p className='justify-center text-center font-normal text-base text-black'>A simple AreaChart, BarChart & LineChart representation of a static data using recharts Library.</p>
      </div>
     <div className='flex w-screen h-screen items-center justify-center pb-14'> 
      <div className='grid xl:grid-cols-3 lg:grid-cols-1 w-full gap-12 max-w-[1400px]'>
        <GridItem title="Area Chart">
          <AreaChartComponent />
        </GridItem>

        <GridItem title="Bar Chart">
        <BarChartComponent />
        </GridItem>

        <GridItem title="Line Chart">
        <LineChartComponent />
        </GridItem>
      </div>
     </div>
    </div>
  </>  
  )
}

export default App
