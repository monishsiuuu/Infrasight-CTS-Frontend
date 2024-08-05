import React from 'react';
import { Box } from '@mui/material';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import "../styles/components/chart.css";

const Chart = (props) => {

    return (

        <div className='chart-back'>
        <Box boxShadow={2} marginTop={3} borderRadius={3} padding={1} width="95%">
            <ResponsiveContainer width="100%" height={600}>
                <AreaChart
                    width={600}
                    height={200}
                    data={props.data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >

                    <CartesianGrid strokeDasharray="3 3" />
                    {/* <Legend iconSize={20} iconType='square' verticalAlign="top" height={12} /> */}
                    <XAxis dataKey="name" />
                    <YAxis label={{
                        // value: 'Utilization %', angle: '-90', position: 'Insideleft'
                    }} />
                    <Tooltip />
                    <Area type="monotone" dataKey={props.name} stroke={props.color} fill={props.color} />
                </AreaChart>
            </ResponsiveContainer></Box>
        </div>

    )
}

export default Chart