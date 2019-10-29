import D3Map from './d3.map'
import {selectAll} from 'd3-selection'
import {scaleSequential} from 'd3-scale'
import {extent} from 'd3-array'
import {interpolateRdYlBu} from 'd3-scale-chromatic'

const d3 = {
    selectAll,
    extent,
    scaleSequential,
    interpolateRdYlBu,
}

class D3MapPoints extends D3Map  {

    constructor(selection, data, config = {}) {
        super(selection, data, config)
        this.circles = {};
        this.cfg.circlesize = 50;
        this.pointevents = {
            click: ()=>{}
        }
        this.popup = new L.Popup();
        this.colorScale = d3.scaleSequential(d3.interpolateRdYlBu)
    }
    loadPoints(points){

        // añadimos puntos al dataset
        points.forEach(d=>{
            let lnglat = new L.LatLng(+d.latitude, +d.longitude);
            let circle = new L.circle((lnglat), this.cfg.circlesize, {
                color: d.color,
                opacity:1,
                fillOpacity:.8,
                className: 'point c-'+d.class+' id-'+d.id,
            })
            circle.addTo(this.map)
            circle.on('click', e=>{
                this.popup.setLatLng(e.latlng);
                this.popup.setContent(d.name);
                this.map.openPopup(this.popup);
                //this.pointevents.click(d);
            })
            this.circles[d.id] = circle
        });
    }

    removePoints(points){
        // eliminamos puntos del dataset
        points.forEach(d=>{
            // punto existe en dataset -> borramos
            if(this.circles[d.id]){
                this.map.removeLayer(this.circles[d.id])
                delete this.circles[d.id]
            }
        })
    }

    loadLayers(geojson){
        this.layers = []
        geojson.features.forEach(feature=>{
            let lgeo = L.geoJSON({
                type: 'FeatureCollection',
                features: [feature]
            },{
                style: {stroke: 0, fillOpacity: 0.7},
            })
            lgeo.addTo(this.map)
            lgeo.on('click', e=>{
                this.popup.setLatLng(e.latlng);
                let content = `
                <div>
                    <strong>${feature.properties.DESBDT}</strong><br>
                    <span>Locales: <strong>${feature.properties.NUMPOINTS}</strong><br>
                    Renta media: <strong>${feature.properties.RENTA}€</strong></br>
                    Paro: <strong>${feature.properties.PARO}%</strong></br>
                    Estudios bajos: <strong>${feature.properties.ESTUDIOS_B}%</strong></br>
                    Densidad: <strong>${feature.properties.DENSIDAD}</strong></br>
                    Población: <strong>${feature.properties.POBLACION}hab</strong></br>
                    Jóvenes: <strong>${feature.properties.JOVENES}%</strong></br>
                    Mayores 65: <strong>${feature.properties.SENIL}%</strong></br>
                    Extranjeros: <strong>${feature.properties.EXTRANJERO}%</strong></br>
                    Distancia a P. Sol: <strong>${feature.properties.DISTANCIA}m</strong></br>
                    Precio m2: <strong>${feature.properties.PRECIO}€</strong></span>
                </div>`
                this.popup.setContent(content);
                this.map.openPopup(this.popup);
                //this.pointevents.click(d);
            })
            this.layers.push({
                feature: feature,
                layer: lgeo
            })
        })
        this.colorLayer('NUMPOINTS')
    }

    removeLayers(){
        this.layers.forEach(layercomp=>{
            this.map.removeLayer(layercomp.layer)
        })
    }

    colorLayer(val){
        let data = this.layers.map(d=>d.feature.properties[val])
        let limits = d3.extent(data);
        this.colorScale.domain([limits[1], limits[0]])
        this.layers.forEach(d=>{
            d.layer.setStyle({
                fillColor: this.colorScale(d.feature.properties[val])
            }) 
        })
    }

    onpoint(listener, fn){
        this.pointevents[listener] = fn;
    }
}
export default D3MapPoints