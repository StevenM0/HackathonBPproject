import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import data from './usa.json'


export default class USA_graph extends PureComponent {

    render() {
      return (
        <div>
        <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <LineChart width={1000} height={400} data={data} margin = {{top: 10, right: 5, left: 50, bottom: 5,}}>
          <XAxis dataKey="Timeline"/>
          <YAxis>
            <Label angle = {-90} offset = {-25} value="CO2" position="insideLeft" />
          </YAxis>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line name = 'Year' type="natural" dataKey="Values" stroke="#8884d8" />
          <Tooltip />
          <Legend />
          </LineChart>
          </div>
          </div>
      );
    }
  }