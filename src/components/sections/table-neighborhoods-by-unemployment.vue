<template>
  <div>
    <table>
      <caption>Barrios según tasas de paro absoluta y número de locales</caption>
      <thead>
        <tr>
          <td></td>
          <td></td>
          <td class="cen">0 locales</td>
          <td class="cen">1 local</td>
          <td class="cen">2-3 locales</td>
          <td class="cen">3-6 locales</td>
          <td class="cen">7+ locales</td>
          <td class="cen">Total</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table">
          <td>{{row[0]}}</td>
          <td>{{row[1]}}</td>
          <td class="num">{{row[2]}}</td>
          <td class="num">{{row[3]}}</td>
          <td class="num">{{row[4]}}</td>
          <td class="num">{{row[5]}}</td>
          <td class="num">{{row[6]}}</td>
          <td class="num">{{row[7]}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Fuente: FRAVM</td>
        </tr>
      </tfoot>
    </table>

    <table>
      <caption>Residuos corregidos tipificados</caption>
      <thead>
        <tr>
          <td></td>
          <td class="cen">0 locales</td>
          <td class="cen">1 local</td>
          <td class="cen">2-3 locales</td>
          <td class="cen">3-6 locales</td>
          <td class="cen">7+ locales</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table2">
          <td>{{row[0]}}</td>
          <td class="num">{{row[1]}}</td>
          <td class="num">{{row[2]}}</td>
          <td class="num">{{row[3]}}</td>
          <td class="num">{{row[4]}}</td>
          <td class="num">{{row[5]}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Fuente: FRAVM</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>


<script>
export default {
  name: 'table-neighborhoods-by-unemployment',
  data: function(){
    return {
      table: [
        ["Muy bajo","Recuento",  '14,0',  '2,0',  '2,0',  '1,0',  '0,0',  '19,0'],
        ["","% Paro a.",         '73,7', '10,5', '10,5',  '5,3',  '0,0', '100,0'],
        ["","% Locales",         '37,8',  '8,3',  '8,0',  '3,7',  '0,0',  '14,5'],
        ["Bajo","Recuento",       '8,0', '12,0',  '9,0',  '9,0',  '2,0',  '40,0'],
        ["","% Paro a.",         '20,0', '30,0', '22,5', '22,5',  '5,0', '100,0'],
        ["","% Locales",         '21,6', '50,0', '36,0', '33,3', '11,1',  '30,5'],
        ["Medio","Recuento",      '9,0',  '5,0',  '6,0',  '8,0', '10,0',  '38,0'],
        ["","% Paro a.",         '23,7', '13,2', '15,8', '21,1', '26,3', '100,0'],
        ["","% Locales",         '24,3', '20,8', '24,0', '29,6', '55,6',  '29,0'],
        ["Alto","Recuento",       '4,0',  '3,0',  '6,0',  '5,0',  '5,0',  '23,0'],
        ["","% Paro a.",         '17,4', '13,0', '26,1', '21,7', '21,7', '100,0'],
        ["","% Locales",         '10,8', '12,5', '24,0', '18,5', '27,8',  '17,6'],
        ["Muy alto","Recuento",   '2,0',  '2,0',  '2,0',  '4,0',  '1,0',  '11,0'],
        ["","% Paro a.",         '18,2', '18,2', '18,2', '36,4',  '9,1', '100,0'],
        ["","% Locales",          '5,4',  '8,3',  '8,0', '14,8',  '5,6',   '8,4'],
        ["Total","Recuento",     '37,0', '24,0', '25,0', '27,0', '18,0', '131,0'],
        ["","% Paro a.",         '28,2', '18,3', '19,1', '20,6', '13,7', '100,0'],
        ["","% Locales",        '100,0','100,0','100,0','100,0','100,0', '100,0'],
      ],
      table2: [
        ["Muy bajo",  '4,76', '-0,95', '-1,03', '-1,79', '-1,88'],
        ["Bajo",     '-1,39',  '2,29',  '0,66',  '0,35', '-1,93'],
        ["Medio",    '-0,74', '-0,98', '-0,61',  '0,08',  '2,67'],
        ["Alto",     '-1,27', '-0,72',  '0,94',  '0,15',  '1,23'],
        ["Muy alto", '-0,77', '-0,01', '-0,08',  '1,35', '-0,47'],
      ]
    }
  }
}
</script>