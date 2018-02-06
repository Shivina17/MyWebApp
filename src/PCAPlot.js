import * as d3 from 'd3'
import {Renderer} from './renderer'
import {PCA} from './pca'
import React from 'react';

class PCAPlot extends React.Component {



    render() {

        var f = '/testdataforcsv.csv'

        d3.csv(f).
            row(
                (d) => {
                    const obj = {
                        name: d.name,
                        values: {}
                    }

                    for (const key in d) {
                        if (key !== 'name') {
                            obj.values[key] = +d[key]
                        }
                    }
                    console.log(JSON.stringify(obj))
                    return obj
                })
            .
            get((errors, data) => {
                const p = 0.98
                const pca = new PCA(data)
                const lambda = pca.lambda()
                const sumLambda = lambda.reduce((a, x) => a + x)
                const renderer = new Renderer().size([400, 400])

                let i
                let acc = 0
                for (i = 0; i < lambda.length; ++i) {
                    acc += lambda[i]
                    if (acc > sumLambda * p) {
                        break
                    }
                }
                const n = i + 1
                for (let i = 0; i < n; ++i) {
                    for (let j = i + 1; j < n; ++j) {
                        d3.select('#PCA')
                            .append('svg')
                            .datum(pca.get(i, j))
                            .call(renderer.render())
                    }
                }
            })
        return <div id="PCA"></div>

    }
}


export default PCAPlot
