<template>
  <div>
    <table>
      <caption>Barrios según la proporción de jóvenes y número de locales</caption>
      <thead>
        <tr>
          <td></td>
          <td></td>
          <td class="cen">0 locales</td>
          <td class="cen">1 local</td>
          <td class="cen">2-3 locales</td>
          <td class="cen">3-6 locales</td>
          <td class="cen">7y+ locales</td>
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
          <td class="cen">7y+ locales</td>
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
        ["Muy bajo","Recuento",  '13,0', '11,0',  '6,0',  '3,0',  '3,0',  '36,0'],
        ["","% Jóvenes",         '36,1', '30,6', '16,7',  '8,3',  '8,3', '100,0'],
        ["","% Locales",         '35,1', '45,8', '24,0', '11,1', '16,7',  '27,5'],
        ["Bajo","Recuento",       '4,0',  '8,0',  '1,0',  '5,0',  '1,0',  '19,0'],
        ["","% Jóvenes",         '21,1',  '5,3', '42,1', '26,3',  '5,3', '100,0'],
        ["","% Locales",         '10,8',  '4,2', '32,0', '18,5',  '5,6',  '14,5'],
        ["Medio","Recuento",      '6,0',  '2,0',  '4,0',  '8,0',  '3,0',  '23,0'],
        ["","% Jóvenes",         '26,1',  '8,7', '17,4', '34,8', '13,0', '100,0'],
        ["","% Locales",         '16,2',  '8,3', '16,0', '29,6', '16,7',  '17,7'],
        ["Alto","Recuento",       '6,0',  '6,0',  '2,0',  '7,0',  '6,0',  '27,0'],
        ["","% Jóvenes",         '22,2', '22,2',  '7,4', '25,9', '22,2', '100,0'],
        ["","% Locales",         '16,2', '25,0',  '8,0', '25,9', '33,3',  '20,6'],
        ["Muy alto","Recuento",   '8,0',  '4,0',  '5,0',  '4,0',  '5,0',  '26,0'],
        ["","% Jóvenes",         '30,8', '15,4', '19,2', '15,4', '19,2', '100,0'],
        ["","% Locales",         '21,6', '16,7', '20,0', '14,8', '27,8',  '19,8'],
        ["Total","Recuento",     '37,0', '24,0', '25,0', '27,0', '18,0', '131,0'],
        ["","% Jóvenes",         '28,2', '18,3', '19,1', '20,6', '13,7', '100,0'],
        ["","% Locales",        '100,0','100,0','100,0','100,0','100,0', '100,0'],
      ],
      table2: [
        ["Muy bajo",  '1,23',  '2,23', '-0,43', '-2,14', '-1,11'],
        ["Bajo",     '-0,75', '-1,59',  '2,76',  '0,66', '-1,16'],
        ["Medio",    '-0,25', '-1,31', '-0,23',  '1,85', '-0,11'],
        ["Alto",     '-0,78',  '0,59', '-1,73',  '0,77',  '1,14'],
        ["Muy alto",  '0,32', '-0,43',  '0,02', '-0,74',  '0,91'],
      ]
    }
  }
}
</script>