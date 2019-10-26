# D3 Linechart
A [line chart](https://en.wikipedia.org/wiki/Line_chart) is a type of chart which displays information as a series of data points called 'markers' connected by line segments. It is similar to a scatter plot except that the measurement points are ordered (typically by their x-axis value) and joined with line segments. A line chart is often used to visualize a trend in data over intervals of time –a time series– thus the line is often drawn chronologically.

Build with [D3](https://d3js.org/), and based on this [block](https://bl.ocks.org/d3noob/4db972df5d7efc7d611255d1cc6f3c4f).

## Component

```html
<line-chart :config="config" :datum="datum" :title="title" :source="source"></line-chart>
```

## Data format

An **objects array** is expected. Each object will be a step in the horizontal axis. Fields can be changed in configuration object. Example:

```javascript
data = [
  {
    "iphone": 123,
    "android": 208,
    "motorola": 2,
    "when": "2019-08-01"
  },{
    "iphone": 165,
    "android": 201,
    "motorola": 3,
    "when": "2019-09-01"
  },{
    "iphone": 112,
    "android": 301,
    "motorola": 1,
    "when": "2019-10-01"
  }
]
```
> To work with this data, configuration must have `keys = ['iphone','android','motorola']`, `dateField = 'when'` and `dateformat = '%Y-%m-%d'`

## Configuration options

Default options:

```javascript
configuration = {
  margin: {top: 10, right: 30, bottom: 50, left: 40},
  keys: ['key'],
  labels: false,
  dateField: 'date',
  dateFormat: '%Y-%m-%d',
  dateFormatOutput: '%Y-%m-%d',
  colorScheme: 'schemeCategory10',
  colorKeys: {},
  curve: 'curveLinear',
  pointRadius: 3,
  pointHoverRadius: 6,
  yAxis: '',
  xScaleTicks: 3,
  xScaleFormat: '%Y-%m-%d',
  yScaleTicks: 5,
  yScaleFormat: '.0f',
}
```

- **margin**: (object). Chart's margins. [See more info](https://bl.ocks.org/mbostock/3019563).
- **keys**: (strings array). Fields to compute each line.
- **labels**: (strings array). Labels to display (1:1 with keys). If set to false, labels will be each key.
- **dateField**: (string). Field to compute each horizontal axis division.
- **dateFormat**: (string). How to parse `dateField` field. [See more info](https://github.com/d3/d3-time-format/blob/master/README.md#locale_format).
- **dateFormatOutput**: (string). How to output `dateField` field. [See more info](https://github.com/d3/d3-time-format/blob/master/README.md#locale_format).
- **colorScheme**: (string OR array). Color scheme to use automatically in slices. If set as string, a d3 [out-of-the-box color scheme](https://github.com/d3/d3-scale-chromatic) will be used. If set as array, a custom color scheme with these colors will be used.
- **colorKeys**: (object). Key-value color override.
- **curve**: (string). Interpolation curve. [See more info](https://bl.ocks.org/d3noob/ced1b9b18bd8192d2c898884033b5529).
- **pointRadius**: (number). Visible points radius.
- **pointHoverRadius**: (number). Invisible points radius, used to trigger tooltip. 
- **yAxis**: (string). Vertical axis text.
- **xScaleTicks**: (number). Vertical axis divisions.
- **xScaleFormat**: (string). Vertical axis format. [See more info](https://github.com/d3/d3-format).
- **yScaleTicks**: (number). Horizontal axis divisions.
- **yScaleFormat**: (string). Vertical axis number format. [See more info](https://github.com/d3/d3-format).

> Chart's width is automatically calculated based on component's available space

#### Color configuration

This chart has a main color configuration (set with `colorScheme`), and an overriding key-value color option (set with `colorKeys`):

##### Color scheme
Default configuration. D3 will load the specific color scheme set in configuration (default `schemeCategory10`). Some options are `schemeAccent`, `schemeDark2`, `schemePaired` or `schemeSet1`. These [out-of-the-box color schemes](https://github.com/d3/d3-scale-chromatic) are **colorblind safe**, so people with deuteranopia, protanopia, etc, won't be confused. [See more info about colorblindness](http://mkweb.bcgsc.ca/colorblind/).

D3 color schemes:

```javascript
configuration = {
  colorScheme: 'schemeSet1',
}
```

Custom color scheme:

```javascript
configuration = {
  colorScheme: ['55D6BE', '#ACFCD9', '#7D5BA6', '#DDDDDD', '#FC6471'],
}
```
> Fancy color palettes can be generated easily with [Coolors](https://coolors.co/app)

##### Key-values colors
If you want to override the color scheme, you can pass an object `colorKeys` in configuration. When a slice's key matches one, the color will be overrided (Note that the key field has to be the same as passed in configuration).

```javascript
configuration = {
  colorKeys: {
    'Success': '#339900',
    'Warning': '#ffcc00',
    'Error': '#cc3300',
  },
}
```
> `colorScheme` and `colorKeys` can be used together

## Styles

Default styles are loaded from `common-chart-styles.scss`. To customize styles, use BEM modifiers notation:

```scss
.chart{
  &--linechart {
    font-size: 10px;
    .chart__line {
      stroke-width: 4px;
    }
  }
  &__point--linechart {
    stroke: #000;
    stroke-width: 1px;
  }
}
```

> Note that SVG elements use some special properties in CSS. [See more info](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)