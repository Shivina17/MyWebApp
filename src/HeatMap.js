/**
 * Created by shivinasethia on 29/01/2018.
 */
/* global Plotly */

import React from 'react';

import numeric from 'numeric';

class HeatMap extends React.Component {

    componentDidMount() {
//number of spiral loops

        var nspiral = 2;

// angle

        var th = numeric.linspace(((-Math.PI) / 13), (2 * Math.PI * nspiral), 1000);

//Empty Value Containers

        var xValues = [];
        var yValues = [];
        var yShift = [];
        var finalX = [];
        var finalY = [];

//spiral

        for(var i = 0; i <th.length; i++){
            var a = 1.120529;
            var b = 0.306349;
            var r = a * Math.exp((-b) * th[i]);
            var xResult = (r * Math.cos(th[i]));
            var yResult = (r * Math.sin(th[i]));
            xValues.push(xResult);
            yValues.push(yResult);
        }

        function getMaxOfArray(numArray) {
            return Math.max.apply(null, numArray);
        };

        function getMinOfArray(numArray) {
            return Math.min.apply(null, numArray);
        };

//Shift spiral north so that it is centered

        var yShift = (1.6 - (getMaxOfArray(yValues) - getMinOfArray(yValues))) / 2;

        var spiralTrace = {
            x: xValues.map(function(xi) { return -(xi) + xValues[0]; }),
            y: yValues.map(function(yi) { return yi - yValues[0] + yShift; }),
            type: 'scatter',
            line: {
                color: 'white',
                width: 3
            }
        };

//Build the rectangles as a heatmap and specify the edges of the heatmap squares

        var phi = (1 + Math.sqrt(5)) / 2;
        var xe = [0, 1, (1 + (1 / Math.pow(phi,4))), 1 + (1 / Math.pow(phi,3)), phi];
        var ye = [0, (1 / Math.pow(phi,3)), (1 / Math.pow(phi,3)) + (1 / Math.pow(phi,4)), (1 / Math.pow(phi,2)), 1];

        var zValues = [
            [13, 3, 3, 5],
            [13, 2, 1, 5],
            [13, 10, 11, 12],
            [13, 8, 8, 8]
        ];

        var hm = {
            x: xe,
            y: ye.map(function(yi) { return yi + yShift; }),
            z: zValues,
            type: 'heatmap',
            colorscale: 'Viridis'
        };

        var axisTemplate = {
            range: [0, 1.6],
            autorange: false,
            showgrid: false,
            zeroline: false,
            linecolor: 'black',
            showticklabels: false,
            ticks: ''
        };

        var data = [spiralTrace, hm];

        var layout = {
            title: 'Heatmap with Unequal Block Sizes',
            margin: {
                t: 200,
                r: 200,
                b: 200,
                l: 200
            },
            xaxis: axisTemplate,
            yaxis: axisTemplate,
            showlegend: false,
            with: 700,
            height: 700,
            autosize: false
        };

        Plotly.newPlot('map', data, layout);
    }

    render() {
        return (
            <div id="map"></div>
        );
    }
}

export default HeatMap;