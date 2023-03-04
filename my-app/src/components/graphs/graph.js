import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from './china.json';


export default class Example extends PureComponent {

    render() {
      return (
          <LineChart width={800} height={400} data={data} margin = {{top: 10, right: 5, left: 2, bottom: 5,}}>
          <XAxis dataKey="Timeline" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line name = 'Year' type="natural" dataKey="Values" stroke="#8884d8" />
          <Tooltip />
          <Legend />
          </LineChart>
      );
    }
  }