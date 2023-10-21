import React from "react";
import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {

    const chartdataPoints = [
        {label : 'Jan', value : 0},
        {label : 'Feb', value : 0},
        {label : 'Mar', value : 0},
        {label : 'Apr', value : 0},
        {label : 'May', value : 0},
        {label : 'Jun', value : 0},
        {label : 'Jul', value : 0},
        {label : 'Aug', value : 0},
        {label : 'Sep', value : 0},
        {label : 'Oct', value : 0},
        {label : 'Nov', value : 0},
        {label : 'Dec', value : 0}
    ];

    for (const in_expense of props.expense) {
        const monthExp = in_expense.date.getMonth();
        chartdataPoints[monthExp].value = chartdataPoints[monthExp].value + in_expense.amount;
    }

    return(
        <div>
            <Chart datapoint={chartdataPoints} />
        </div>
    )
}

export default ExpensesChart;