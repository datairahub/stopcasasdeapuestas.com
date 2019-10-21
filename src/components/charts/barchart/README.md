# D3 Barchart

A [bar chart](https://en.wikipedia.org/wiki/Bar_chart) presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent.

Build with [D3](https://d3js.org/), and based on this [block](https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4)

## Component

```html
<template>
    <div>
        barchart
        <div ref="chart" style="height: 300px"></div>
    </div>
</template>


<script>
import D3BarChart from './d3.barchart';
import {select} from 'd3-selection';
const d3 = {select}

export default {
    name: 'bar-chart',
    data: function(){
        return {
            chart: {},
        }
    },
    props: ['config', 'datum', 'title'],
    mounted: function(){

        this.chart = new D3BarChart(
            d3.select(this.$refs.chart),
            this.datum,
            this.config
        )

    }
}
</script>
```

## Data format

An **objects array** is expected. Each object will be a bar. Fields can be changed in configuration object. Example:

```javascript
data = [
  {
    "name":"Adolfo Olea Gutierrez",
    "total":30
  },{
    "name":"Fernando Miguel Alegria Medina",
    "total":21
  },{
    "name":"Vilhelm Stiernstedt",
    "total":20
  }
]
```
> To work with this data, configuration must have `key = 'total'` and `label = 'name'`

## Configuration options

Default options:

```javascript
configuration = {
  margin: {top: 10, right: 30, bottom: 50, left: 40},
  key: 'key',
  value: 'value',
  labelRotation: 0,
  color: 'steelblue',
  yAxis: '',
  yscaleticks: 5,
  yscaleformat: '.0f',
}
```

- **margin**: (object). Chart's margins. [See more info](https://bl.ocks.org/mbostock/3019563).
- **key**: (string). Field to use as name of each bar (bottom axis texts).
- **value**: (string). Field to compute bar's height.
- **labelRotation**: (number). Angle (in degs) to rotate labels. Use it if labels are too long.
- **color**: (string). Color to apply to bars.
- **yAxis**: (string). Vertical axis text.
- **yscaleticks**: (number). Horizontal axis divisions.
- **yscaleformat**: (string). Vertical axis number format. [See more info](https://github.com/d3/d3-format).

> Chart's width & height is automatically calculated based on component's available space

## Styles

Default styles are loaded from `chartstyles.scss`. To customize styles, use BEM modifiers notation:

```scss
.chart{
  &__label--barchart {
    font-size: 10px;
  }
  &__axis--barchart {
    font-size: 9px;
  }
  &__bar--barchart {
    fill: red;
  }
}
```

> Note that SVG elements use some special properties in CSS. [See more info](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)