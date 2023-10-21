import React from "react";

import './ChartBar.css'

const ChartBar = (props) =>{
    let bar_per = '0%'

    if (props.maxvalue > 0) {
        bar_per = Math.round((props.value / props.maxvalue) * 100) + '%';
    }


    return(
        <div className="chart-bar">
<div className="chart-bar__inner">
    <div className="chart-bar__fill" style={{height : bar_per}}></div>
    
</div>
<div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar;