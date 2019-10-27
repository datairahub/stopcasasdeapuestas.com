<template>
  <table>
    <caption>Universo de locales por distritos y empresas</caption>
    <thead>
      <tr>
        <td>Distrito</td>
        <td>Reales</td>
        <td>Oficiales</td>
        <td>Cerrados<sup>1</sup></td>
        <td>Con otros epígrafes</td>
        <td>Codere</td>
        <td>Sportium</td>
        <td>Luckia</td>
        <td>Orenes</td>
        <td>Reta Bet.es</td>
        <td>Bwin</td>
        <td>Juegging</td>
        <td>Otros</td>
    </tr>
    </thead>
    <tbody>
      <tr v-for="row in table">
        <td class="strong">{{row[0]}}</td>
        <td class="num">{{row[1]}}</td>
        <td class="num">{{row[2]}}</td>
        <td class="num">{{row[3]}}</td>
        <td class="num">{{row[4]}}</td>
        <td class="num">{{row[5]}}</td>
        <td class="num">{{row[6]}}</td>
        <td class="num">{{row[7]}}</td>
        <td class="num">{{row[8]}}</td>
        <td class="num">{{row[9]}}</td>
        <td class="num">{{row[10]}}</td>
        <td class="num">{{row[11]}}</td>
        <td class="num">{{row[12]}}</td>
      </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan='999999'>Fuente: Elaboración propia. <sup>1</sup>Locales cerrados o que no lo son.</td>
        </tr>
    </tfoot>
  </table>
</template>


<script>
export default {
  name: 'table-locals-by-distric-company',
  data: function(){
    return {
      table: [
        ["Centro",31,25,4,10,11,12,5,0,0,1,0,2],
        ["Arganzuela",21,24,6,3,7,10,1,0,1,0,1,1],
        ["Retiro",4,8,4,0,3,0,0,0,0,0,0,1],
        ["Salamanca",16,15,1,2,3,8,1,1,0,1,0,2],
        ["Chamartín",12,13,1,0,7,3,2,0,0,0,0,0],
        ["Tetuán",35,35,5,5,14,12,4,0,1,0,0,4],
        ["Chamberí",21,22,3,2,9,8,2,1,0,0,0,1],
        ["Fuencarral-El Pardo",12,14,4,2,4,6,1,0,0,0,0,1],
        ["Moncloa-Aravaca",6,6,2,2,1,4,0,0,0,0,0,1],
        ["Latina",27,27,2,2,13,8,1,0,1,0,0,4],
        ["Carabanchel",48,46,4,6,18,17,4,0,2,0,1,6],
        ["Usera",32,29,2,5,10,7,0,2,1,0,0,12],
        ["Puente Vallecas",44,33,3,14,15,14,5,2,1,1,1,5],
        ["Ciudad lineal",27,27,2,2,11,11,1,0,1,0,0,3],
        ["Hortaleza",6,7,1,0,2,4,0,0,0,0,0,0],
        ["Villaverde",21,13,2,10,5,8,4,0,1,1,2,0],
        ["V. Vallecas",7,4,0,3,2,3,1,1,0,0,0,0],
        ["Vicálvaro",7,9,2,0,3,3,0,1,0,0,0,0],
        ["San Blas Canillejas",13,13,2,2,5,6,1,0,0,0,0,1],
        ["Barajas",3,2,0,1,2,1,0,0,0,0,0,0],
        ["Total",400,378,52,74,148,148,33,8,9,4,6,44],
      ]
    }
  }
}
</script>