<template>
  <div>
    <table>
      <caption>Barrios según la proporción de población (25+ años) con bajos estudios y número de locales</caption>
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
  name: 'table-neighborhoods-by-studies',
  data: function(){
    return {
      table: [
        ["Muy bajo","Recuento",  '19,0',  '7,0',  '6,0',  '7,0',  '1,0',  '40,0'],
        ["","% Estudios",        '47,5', '17,5', '15,0', '17,5',  '2,5', '100,0'],
        ["","% Locales",         '51,4', '29,2', '24,0', '25,9',  '5,6',  '30,5'],
        ["Bajo","Recuento",       '6,0', '10,0',  '5,0',  '3,0',  '2,0',  '26,0'],
        ["","% Estudios",        '23,1', '38,5', '19,2', '11,5',  '7,7', '100,0'],
        ["","% Locales",         '16,2', '41,7', '20,0', '11,1', '11,1',  '19,8'],
        ["Medio","Recuento",      '3,0',  '1,0',  '3,0',  '2,0',  '3,0',  '12,0'],
        ["","% Estudios",        '25,0',  '8,3', '25,0', '16,7', '25,0', '100,0'],
        ["","% Locales",          '8,1',  '4,2', '12,0',  '7,4', '16,7',   '9,2'],
        ["Alto","Recuento",       '5,0',  '3,0',  '7,0',  '5,0',  '5,0',  '25,0'],
        ["","% Estudios",        '20,0', '12,0', '28,0', '20,0', '20,0', '100,0'],
        ["","% Locales",         '13,5', '12,5', '28,0', '18,5', '27,8',  '19,1'],
        ["Muy alto","Recuento",   '4,0',  '3,0',  '4,0', '10,0',  '7,0',  '28,0'],
        ["","% Estudios",        '14,3', '10,7', '14,3', '35,7', '25,0', '100,0'],
        ["","% Locales",         '10,8', '12,5', '16,0', '37,0', '38,9',  '21,4'],
        ["Total","Recuento",     '37,0', '24,0', '25,0', '27,0', '18,0', '131,0'],
        ["","% Estudios",        '28,2', '18,3', '19,1', '20,6', '13,7', '100,0'],
        ["","% Locales",        '100,0','100,0','100,0','100,0','100,0', '100,0'],
      ],
      table2: [
        ["Muy bajo",  '3,25', '-0,16', '-0,79', '-0,58', '-2,48'],
        ["Bajo",     '-0,65',  '2,97',  '0,02', '-1,28', '-1,00'],
        ["Medio",    '-0,26', '-0,94',  '0,55', '-0,35',  '1,19'],
        ["Alto",     '-1,02', '-0,91',  '1,26', '-0,08',  '1,01'],
        ["Muy alto", '-1,85', '-1,17', '-0,73',  '2,23',  '1,95'],
      ]
    }
  }
}
</script>