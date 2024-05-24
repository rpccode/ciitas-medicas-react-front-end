import { RiBarChart2Line, RiPieChart2Line, RiUser2Line, RiPercentLine } from '@remixicon/react'
import React from 'react'
import CardStats from '../Cards/CardStats'

export const StatsList = () => {
  return (
    <div>
    {/* Card stats */}
    <div className="flex flex-wrap">
      <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
        <CardStats
          statSubtitle="TRAFFIC"
          statTitle="350,897"
          statArrow="up"
          statPercent="3.48"
          statPercentColor="text-emerald-500"
          statDescripiron="Since last month"
          statIconName={RiBarChart2Line}
          statIconColor="bg-red-500"
        />
      </div>
      <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
        <CardStats
          statSubtitle="NEW USERS"
          statTitle="2,356"
          statArrow="down"
          statPercent="3.48"
          statPercentColor="text-red-500"
          statDescripiron="Since last week"
          statIconName={RiPieChart2Line}
          statIconColor="bg-orange-500"
        />
      </div>
      <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
        <CardStats
          statSubtitle="SALES"
          statTitle="924"
          statArrow="down"
          statPercent="1.10"
          statPercentColor="text-orange-500"
          statDescripiron="Since yesterday"
          statIconName={RiUser2Line}
          statIconColor="bg-pink-500"
        />
      </div>
      <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
        <CardStats
          statSubtitle="PERFORMANCE"
          statTitle="49,65%"
          statArrow="up"
          statPercent="12"
          statPercentColor="text-emerald-500"
          statDescripiron="Since last month"
          statIconName={RiPercentLine}
          statIconColor="bg-lightBlue-500"
        />
      </div>
    </div>
  </div>
  )
}
