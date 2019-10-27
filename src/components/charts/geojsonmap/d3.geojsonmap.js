import {select, selectAll} from 'd3-selection';
import {scaleSequential} from 'd3-scale'
import {extent} from 'd3-array'
import {geoPath, geoMercator} from 'd3-geo'
import {interpolateBlues, interpolateGreens, interpolateGreys} from 'd3-scale-chromatic'

const d3 = {
    select, selectAll,
    scaleSequential,
    extent,
    geoPath, geoMercator,
    interpolateBlues, interpolateGreens, interpolateGreys
}

class D3GeoJsonMap{

    constructor(selection, data, config = {}) {
        this.selection = d3.select(selection);
        this.data = data;

        // Default configuration
        this.cfg = {
            margin: {top: 10, right: 30, bottom: 20, left: 40},
            projection: 'geoMercator', // More in https://github.com/d3/d3-geo
            scale: 1000,
            center: [0,0],
            key: false,
            label: false,
            color: 'steelblue',
            colorScheme: 'interpolateBlues',
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

        // Set up color scheme
        if(this.cfg.colorScheme instanceof Array === true){
        }else{
            this.colorScale = d3.scaleSequential(d3[this.cfg.colorScheme])
                .domain([0,20]);
        }
        if(this.colorScale){
            this.colorScale.domain(
                d3.extent(this.data.features.map(d=>d.properties[this.cfg.key]))
            )
        }

        this.projection = d3[this.cfg.projection]()

        // Set up path function
        this.path = d3.geoPath()
            .projection(
                this.projection
                    .translate([this.cfg.width/2,this.cfg.height/2])
                    .scale(this.cfg.scale)
                    .center(this.cfg.center)
            )

        // Resize listener
        window.addEventListener("resize", _ => {
            this.resize();
        });

        this.initGraph();
    }
    initGraph() {

        // Wrapper div
        this.wrap = this.selection.append('div') 
            .attr("class", "chart__wrap chart__wrap--geojsonmap");

        // SVG element
        this.svg = this.wrap.append('svg')
            .attr("class", "chart chart--geojsonmap")
            .attr("width", this.cfg.width + this.cfg.margin.left + this.cfg.margin.right)
            .attr("height", this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom);

        // General group for margin convention
        this.g = this.svg.append("g")
            .attr('class', 'chart__margin-wrap')
            .attr("transform", `translate(${this.cfg.margin.left},${this.cfg.margin.top})`);

        // Tooltip
        this.selection.selectAll('.chart__tooltip').remove()
        this.tooltip = this.wrap
            .append('div')
            .attr('class', 'chart__tooltip chart__tooltip--geojsonmap');

        // PATH elements
        this.features = this.g.selectAll("path")
            .data(this.data.features)
            .enter().append("path")
            .attr('fill', d => this.pathColor(d))
            .attr("d", this.path)
            .on("mouseover",d => {
                let label = this.cfg.label && d.properties[this.cfg.label] ? d.properties[this.cfg.label] : '';
                let value = this.cfg.key && d.properties[this.cfg.key] ? d.properties[this.cfg.key] : '';
                if(label||value)
                this.tooltip.html(() => {
                    return `
                        <div>${label}: ${value}</div>
                    `
                })
                .classed('active', true);
            })
            .on('mouseout', () => {
                this.tooltip.classed('active', false)
            })
            .on('mousemove', () => {
                this.tooltip
                    .style('left', window.event['pageX'] - 28 + 'px')
                    .style('top', window.event['pageY'] - 40 + 'px')
            })
    }

    resize(){
        // Get dimensions
        this.cfg.width = parseInt(this.selection.node().offsetWidth) - this.cfg.margin.left - this.cfg.margin.right;
        this.cfg.height = parseInt(this.selection.node().offsetHeight)- this.cfg.margin.top - this.cfg.margin.bottom;

        // SVG element
        this.svg
            .attr("viewBox", `0 0 ${this.cfg.width + this.cfg.margin.left + this.cfg.margin.right} ${this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom}`)
            .attr("width", this.cfg.width + this.cfg.margin.left + this.cfg.margin.right)
            .attr("height", this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom);

        // Set up path function
        this.path = d3.geoPath()
            .projection(
                this.projection
                    .translate([this.cfg.width/2,this.cfg.height/2])
                    .scale(this.cfg.scale)
                    .center(this.cfg.center)
            )

        // PATH elements
        this.features
            .attr("d", this.path)

    }

    // Compute path color
    pathColor(d){
        if(this.cfg.key && this.colorScale){
            return this.colorScale(d.properties[this.cfg.key])
        }else{
            return this.cfg.color;
        }
    }
}

export default D3GeoJsonMap