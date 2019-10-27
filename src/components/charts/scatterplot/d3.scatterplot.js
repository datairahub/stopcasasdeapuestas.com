import {select, selectAll} from 'd3-selection'
import {scaleOrdinal, scaleLinear} from 'd3-scale'
import {max, extent} from 'd3-array'
import {axisLeft, axisBottom} from 'd3-axis'
import {schemeCategory10, schemeAccent, schemeDark2, schemePaired,
    schemePastel1, schemePastel2, schemeSet1, schemeSet2, schemeSet3,
    schemeTableau10} from 'd3-scale-chromatic'


const d3 = {
    select, selectAll,
    scaleOrdinal, scaleLinear,
    max, extent,
    axisLeft, axisBottom,
    schemeCategory10, schemeAccent, schemeDark2, schemePaired, schemePastel1,
    schemePastel2, schemeSet1, schemeSet2, schemeSet3, schemeTableau10,
}


class D3ScatterPlot{

    constructor(selection, data, config = {}) {
        this.selection = d3.select(selection);
        this.data = data;
        let self = this;

        // Default configuration
        this.cfg = {
            margin: {top: 16, right: 30, bottom: 20, left: 40},
            keyX: 'x', // Value to compute in horizontal scale
            keyY: 'y', // Value to compute in vertical scale
            label: false, // Label to display
            labelX: 'x', // Label to display X values
            labelY: 'y', // Label to display Y values
            color: 'steelblue', // More schemes in https://github.com/d3/d3-scale-chromatic
            pointRadius: 4,
            pointHoverRadius: 8,
            yAxis: '', // Vertical axis title
            xScaleTicks: 5, // Horizontal axis divisions 
            xScaleFormat: '.0f', // Horizontal axis format
            yScaleTicks: 5, // Vertical axis divisions 
            yScaleFormat: '.0f', // Vertical axis format. More on https://github.com/d3/d3-format
        };

        // Set up configuration
        Object.keys(config).forEach(key=> {
            if(config[key] instanceof Object && config[key] instanceof Array === false){
                Object.keys(config[key]).forEach(sk=> {
                    this.cfg[key][sk] = config[key][sk];
                });
            } else this.cfg[key] = config[key];
        });

        // Set up dimensions
        this.cfg.width = parseInt(this.selection.node().offsetWidth) - this.cfg.margin.left - this.cfg.margin.right;
        this.cfg.height = parseInt(this.selection.node().offsetHeight)- this.cfg.margin.top - this.cfg.margin.bottom;

        // Set up scales domain
        this.xScale = d3.scaleLinear().rangeRound([0, this.cfg.width]);
        this.yScale = d3.scaleLinear().rangeRound([this.cfg.height, 0]);

        // Calcule vertical scale
        this.yScale = d3.scaleLinear()
            .domain([0, d3.max(this.data, d => d[this.cfg.keyY] )])
            .rangeRound([this.cfg.height, 0]);

        // Calcule horizontal scale
        this.xScale = d3.scaleLinear()
            .domain([0, d3.max(this.data, d => d[this.cfg.keyX] )])
            .rangeRound([0, this.cfg.width]);

        // Resize listener
        window.addEventListener("resize", _ => {
            this.draw();
        });

        this.initGraph();
    }

    initGraph() {

        // Wrapper div
        this.wrap = this.selection.append('div') 
            .attr("class", "chart__wrap chart__wrap--scatterplot");

        // SVG element
        this.svg = this.wrap.append('svg')
            .attr("class", "chart chart--scatterplot")
            .attr("viewBox", `0 0 ${this.cfg.width+this.cfg.margin.left+this.cfg.margin.right} ${this.cfg.height+this.cfg.margin.top+this.cfg.margin.bottom}`)
            .attr("width", this.cfg.width + this.cfg.margin.left + this.cfg.margin.right)
            .attr("height", this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom);

        // General group for margin convention
        this.g = this.svg.append("g")
            .attr('class', 'chart__margin-wrap')
            .attr("transform", `translate(${this.cfg.margin.left},${this.cfg.margin.top})`);

        // Axis group
        this.axisg = this.g.append('g')
            .attr('class', 'chart__axis chart__axis--scatterplot')

        // Horizontal grid
        this.yGrid = this.axisg.append("g")
            .attr("class", "chart__grid chart__grid--y chart__grid--scatterplot");

        // Vertical grid
        this.xGrid = this.axisg.append("g")
            .attr("class", "chart__grid chart__grid--x chart__grid--scatterplot");

        // Vertical axis title
        if(this.cfg.yAxis)
        this.yAxisTitle = this.axisg.append('text')
            .attr('class', 'chart__axis-title chart__axis-title--scatterplot')
            .attr("y", -this.cfg.margin.left+10)
            .attr("x", -this.cfg.height/2)
            .attr("transform", 'rotate(-90)')
            .style("text-anchor", "middle")
            .text(this.cfg.yAxis)

        // Tooltip
        this.selection.selectAll('.chart__tooltip').remove()
        this.tooltip = this.wrap
            .append('div')
            .attr('class', 'chart__tooltip chart__tooltip--scatterplot');

        // Points group
        this.pointsg = this.g.selectAll(".chart__points-group")
          .data(this.data)
          .enter().append('g')
          .attr('transform', d => `translate(${this.xScale(d[this.cfg.keyX])},${this.yScale(d[this.cfg.keyY])})`)
          .attr("class", (d, i) => {
            return "chart__points-group chart__points-group--scatterplot chart__points-group--"+i;
          });

        // Hover point
        this.pointsg.append('circle')
            .attr('class', 'chart__point-hover chart__point-hover--scatterplot')
            .attr('fill', 'transparent')
            .attr('r', this.cfg.pointHoverRadius)
            .on('mouseover', d => {
                this.tooltip.html(_ => {
                    let label = this.cfg.label && d[this.cfg.label] ? d[this.cfg.label]+'<br>' : '';
                    return `
                        <div>${label}${this.cfg.labelX}: ${d[this.cfg.keyX]}<br>${this.cfg.labelY}: ${d[this.cfg.keyY]}</div>
                    `
                })
                .classed('active', true);
            })
            .on('mouseout', _ => {
                this.tooltip.classed('active', false)
            })
            .on('mousemove', _ => {
                this.tooltip
                    .style('left', window.event['pageX'] - 28 + 'px')
                    .style('top', window.event['pageY'] - 90 + 'px')
            })

            // Visible point
            this.pointsg.append('circle')
                .attr('class', 'chart__point-visible chart__point-visible--scatterplot')
                .attr('pointer-events', 'none')
                .attr('fill', d => this.cfg.color)
                .attr('r', this.cfg.pointRadius)

        this.draw()
    }

    draw(){

        // Set up dimensions
        this.cfg.width = parseInt(this.selection.node().offsetWidth) - this.cfg.margin.left - this.cfg.margin.right;
        this.cfg.height = parseInt(this.selection.node().offsetHeight)- this.cfg.margin.top - this.cfg.margin.bottom;

        // Resize scales
        this.xScale.rangeRound([0, this.cfg.width]);
        this.yScale.rangeRound([this.cfg.height,  0]);

        // Resize SVG element
        this.svg
            .attr("viewBox", `0 0 ${this.cfg.width+this.cfg.margin.left+this.cfg.margin.right} ${this.cfg.height+this.cfg.margin.top+this.cfg.margin.bottom}`)
            .attr("width", this.cfg.width + this.cfg.margin.left + this.cfg.margin.right)
            .attr("height", this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom);

        // Redraw horizontal grid
        this.yGrid.call(
            this.make_y_gridlines()
                .tickSize(-this.cfg.width)
                .ticks(this.cfg.yScaleTicks, this.cfg.yScaleFormat)
        );

        // Redraw vertical grid
        this.xGrid
            .attr("transform", `translate(0,${this.cfg.height})`)
            .call(
            this.make_x_gridlines()
                .tickSize(-this.cfg.width)
                .ticks(this.cfg.xScaleTicks, this.cfg.xScaleFormat)
            );

        // Redraw points
        this.pointsg
            .attr('transform', d => `translate(${this.xScale(d[this.cfg.keyX])},${this.yScale(d[this.cfg.keyY])})`)

    }

    // Gridlines in x axis function
    make_x_gridlines() {       
        return d3.axisBottom(this.xScale);
    }

    // Gridlines in y axis function
    make_y_gridlines() {       
        return d3.axisLeft(this.yScale);
    }
}

export default D3ScatterPlot