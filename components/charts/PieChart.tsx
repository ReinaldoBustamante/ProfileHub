"use client"

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getColors } from '@/utils/getColors'

ChartJS.register(ArcElement, Tooltip, Legend);


export const PieChart = ({ languages }: { languages: { [key: string]: number } }) => {
    const backgroundColors = getColors(Object.keys(languages))
    const data = {
        labels: Object.keys(languages),
        datasets: [
            {
                label: 'Projects',
                data: Object.values(languages),
                backgroundColor: backgroundColors,
                borderColor: backgroundColors,
                borderWidth: 1,
            },
        ],
    };

    return <div className="border rounded p-4 shadow-md flex flex-col gap-1 bg-white md:w-[300px]">
        <div className="flex items-end gap-1">
            <h2 className="text-2xl text-[#175B96] font-semibold">Top Languages</h2>
            <span className="text-[12px] bg-[#76BBFF] px-2 text-white mb-1 ">Last 30 projects</span>
        </div>
        <Pie data={data} width={300} height={300}/>
    </div>
}
