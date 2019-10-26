<template>
  <div>
    <table>
      <caption>Barrios según densidad y número de locales</caption>
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
  name: 'table-neighborhoods-by-density',
  data: function(){
    return {
      table: [
        ["Muy bajo","Recuento",  '16,0',  '7,0',  '2,0',  '2,0',  '1,0',  '28,0'],
        ["","% Densidad",        '57,1', '25,0',  '7,1',  '7,1',  '3,6', '100,0'],
        ["","% Locales",         '43,2', '29,2',  '8,0',  '7,4',  '5,6',  '21,4'],
        ["Bajo","Recuento",       '9,0',  '8,0',  '6,0',  '4,0',  '0,0',  '27,0'],
        ["","% Densidad",        '33,3', '29,6', '22,2', '14,8',  '0,0', '100,0'],
        ["","% Locales",         '24,3', '33,3', '24,0', '14,8',  '0,0',  '20,6'],
        ["Medio","Recuento",      '7,0',  '2,0',  '7,0',  '6,0',  '2,0',  '24,0'],
        ["","% Densidad",        '29,2',  '8,3', '29,2', '25,0',  '8,3', '100,0'],
        ["","% Locales",         '18,9',  '8,3', '28,0', '22,2', '11,1',  '18,3'],
        ["Alto","Recuento",       '4,0',  '6,0',  '6,0',  '6,0',  '5,0',  '27,0'],
        ["","% Densidad",        '14,8', '22,2', '22,2', '22,2', '18,5', '100,0'],
        ["","% Locales",         '10,8', '25,0', '24,0', '22,2', '27,8',  '20,6'],
        ["Muy alto","Recuento",   '1,0',  '1,0',  '4,0',  '9,0', '10,0',  '25,0'],
        ["","% Densidad",         '4,0',  '4,0', '16,0', '36,0', '40,0', '100,0'],
        ["","% Locales",          '2,7',  '4,2', '16,0', '33,3', '55,6',  '19,1'],
        ["Total","Recuento",     '37,0', '24,0', '25,0', '27,0', '18,0', '131,0'],
        ["","% Densidad",        '28,2', '18,3', '19,1', '20,6', '13,7', '100,0'],
        ["","% Locales",        '100,0','100,0','100,0','100,0','100,0', '100,0'],
      ],
      table2: [
        ["Muy bajo",  '3,83',  '1,03', '-1,81', '-1,99', '-1,76'],
        ["Bajo",      '0,66',  '1,70',  '0,47', '-0,84', '-2,33'],
        ["Medio",     '0,11', '-1,40',  '1,39',  '0,59', '-0,85'],
        ["Alto",     '-1,74',  '0,59',  '0,47',  '0,23',  '0,81'],
        ["Muy alto", '-2,99', '-2,06', '-0,44',  '2,11',  '4,24'],
      ]
    }
  }
}
</script>