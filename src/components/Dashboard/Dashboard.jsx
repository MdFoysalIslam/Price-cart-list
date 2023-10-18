import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import axios from 'axios'; 

const Dashboard = () => {

    const marksArray = [
        { id: 1, name: "Student 1", Physics: 75, chemistry: 77, math: 91},
        { id: 2, name: "Student 2", Physics: 80, chemistry: 75, math: 50},
        { id: 3, name: "Student 3", Physics: 90, chemistry: 72, math: 60},
        { id: 4, name: "Student 4", Physics: 65, chemistry: 80, math: 70},
        { id: 5, name: "Student 5", Physics: 99, chemistry: 82, math: 80},
        { id: 6, name: "Student 6", Physics: 60, chemistry: 84, math: 85},
        { id: 7, name: "Student 7", Physics: 90, chemistry: 89, math: 95},
        { id: 8, name: "Student 8", Physics: 70, chemistry: 81, math: 94}

    ];
    return (
        <div>
          <LineChart
          width={900}
          height={300}
          data={marksArray}
          >
            <Line dataKey="Physics"></Line>
            <Line stroke="blue" dataKey="math"></Line>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
          </LineChart>
          <Tooltip/>
        </div>
    );
};

export default Dashboard;