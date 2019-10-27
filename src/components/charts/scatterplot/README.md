# D3 Scatterplot

A [scatter plot](https://en.wikipedia.org/wiki/Scatter_plot) uses Cartesian coordinates to display values for typically two variables for a set of data. The data are displayed as a collection of points, each having the value of one variable determining the position on the horizontal axis and the value of the other variable determining the position on the vertical axis.

Build with [D3](https://d3js.org/).

## Component

```html
<scatter-plot :config="config" :datum="datum" :title="title" :source="source"></scatter-plot>
```

## Data format

An **objects array** is expected. Each object will be a bar. Fields can be changed in configuration object. Example:

```javascript
data = [
  {
    name: 'Test1',
    locals: 20,
    rent: 37000
  },
  {
    name: 'Test2',
    locals: 15,
    rent: 47000
  },
]
```
> To work with this data, configuration must have `keyX = 'rent'` and `keyY = 'locals'`

## Configuration options

Default options:

```javascript
configuration = {
  margin: {top: 16, right: 30, bottom: 20, left: 40},
  keyX: 'x',
  keyY: 'y',
  label: false,
  labelX: 'x',
  labelY: 'y',
  color: 'steelblue',
  pointRadius: 4,
  pointHoverRadius: 8,
  yAxis: '',
  xScaleTicks: 5,
  xScaleFormat: '.0f',
  yScaleTicks: 5,
  yScaleFormat: '.0f',
}
```

- **margin**: (object). Chart's margins. [See more info](https://bl.ocks.org/mbostock/3019563).
- **keyX**: (string). Field to use as value in horizontal scale.
- **keyY**: (string). Field to use as value in vertical scale.
- **label**: (string). Text to display as title in the tooltip of each point.
- **labelX**: (string). Text to display as horizontal value in the tooltip of each point.
- **labelY**: (string). Text to display as vertical value in the tooltip of each point.
- **color**: (string). Color to apply to points.
- **yAxis**: (string). Vertical axis text.
- **xScaleTicks**: (number). Horizontal axis divisions.
- **xScaleFormat**: (string). Horizontal axis number format. [See more info](https://github.com/d3/d3-format).
- **yScaleTicks**: (number). Vertical axis divisions.
- **yScaleFormat**: (string). Vertical axis number format. [See more info](https://github.com/d3/d3-format).

> Chart's width & height is automatically calculated based on component's available space

## Styles

Default styles are loaded from `chartstyles.scss`. To customize styles, use BEM modifiers notation:

```scss
.chart{
  &__label--scatterplot {
    font-size: 10px;
  }
  &__axis--scatterplot {
    font-size: 9px;
  }
  &__bar--scatterplot {
    fill: red;
  }
}
```

> Note that SVG elements use some special properties in CSS. [See more info](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)