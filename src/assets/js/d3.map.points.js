import D3Map from './d3.map'

class D3MapPoints extends D3Map  {

    constructor(selection, data, config = {}) {
        super(selection, data, config)
        this.circles = {};
        this.cfg.circlesize = 50;
        this.pointevents = {
            click: ()=>{}
        }
        this.popup = new L.Popup();
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
                this.pointevents.click(d);
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

    onpoint(listener, fn){
        this.pointevents[listener] = fn;
    }
}
export default D3MapPoints