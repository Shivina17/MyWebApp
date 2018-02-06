
/* global Plotly */

import React from 'react';
import * as d3 from 'd3'
class Histogram extends React.Component {

    componentDidMount() {
        var x1 = [];
        var x2 = [];

        //var x3 = [];
        //var x4 = [];
        //
        //function getintorows(csv){
        //    csv.map(function (d) {
        //        x3.push(parseFloat(d.x));
        //        x4.push(parseFloat(d.y));
        //    });
        //}
        //
        //d3.csv('/histData.csv', function(csv) {
        //    getintorows(csv);
        //});


        for (var i = 1; i < 10; i++)
        {
            var k=Math.random();
            x1.push(Math.random() + 1);
            x2.push(Math.random() + 4.1);
        }
        console.log("ok...")
        console.log(JSON.stringify(x1))
        console.log(JSON.stringify(x2))

            var trace1 = {
            x: x1,
            type: "histogram",
            opacity: 0.5,
            marker: {
                color: 'green',
            },
        };
        var trace2 = {
            x: x2,
            type: "histogram",
            opacity: 0.6,
            marker: {
                color: 'red',
            },
        };
        var data = [trace1, trace2];
        var layout = {barmode: "overlay"};
        Plotly.newPlot("hist", data, layout);
    }

    render() {
        return (
            <div id="hist"></div>
        );
    }
}

export default Histogram;