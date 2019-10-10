import D3Map from './d3.map'

class D3MapPoints extends D3Map  {

    constructor(selection, data, config = {}) {
        super(selection, data, config)
        this.circles = {};
        this.cfg.circlesize = 50;
        this.pointevents = {
            click: ()=>{}
        }
    }
    loadPoints(points){
        let self = this;
        let tdata = {};

        // comprobamos puntos locales
        self.data.forEach(function(d){
            if(points.indexOf(d) === -1){
                // punto local NO existe en remoto -> borramos
                self.map.removeLayer(self.circles[d.id])
                delete self.circles[d.id]
            }else{
                // punto local SI existe en remoto -> guardamos
                tdata[d.id] = d
            }
        });

        // comprobamos datos remotos
        points.forEach(function(d){

            // punto remoto no existe en local -> creamos
            if(self.data.indexOf(d) === -1){
                // puntos a crear
                let lnglat = new L.LatLng(+d.latitude, +d.longitude);
                let circle = new L.circle((lnglat), self.cfg.circlesize, {
                    color: d.color,
                    opacity:1,
                    fillOpacity:.5,
                    className: 'point c-'+d.class+' id-'+d.id,
                })
                circle.addTo(self.map)
                circle.on('click', function(){
                    self.pointevents.click(d)
                })
                self.circles[d.id] = circle
                tdata[d.id] = d
            }
        })

        self.data = []
        for (let property in tdata) {
            if (tdata.hasOwnProperty(property)) {
                self.data.push(tdata[property])
            }
        }

    }

    onpoint(listener, fn){
        this.pointevents[listener] = fn;
    }
}
export default D3MapPoints