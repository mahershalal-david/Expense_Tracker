import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) =>{

    const datapointValue = props.datapoint.map(datapoint => datapoint.value);
    const totalMax = Math.max(...datapointValue); 

return(
   <div className="chart">
        {props.datapoint.map(datapoint => (
        <ChartBar
        key = {datapoint.label}
         value={datapoint.value}
        maxvalue={totalMax}
        label = {datapoint.label}
        />))}
   </div>
)
}

export default Chart;