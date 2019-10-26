<template>
  <div>
    <table>
      <caption>Barrios según distancia a la Puerta del Sol y número de locales</caption>
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
  name: 'table-neighborhoods-by-distance',
  data: function(){
    return {
      table: [
        ["Muy bajo","Recuento",   '4,0',  '5,0',  '7,0',  '7,0',  '4,0',  '27,0'],
        ["","% Distancia",       '14,8', '18,5', '25,9', '25,9', '14,8', '100,0'],
        ["","% Locales",         '10,8', '20,8', '28,0', '25,9', '22,2',  '20,6'],
        ["Bajo","Recuento",       '4,0',  '4,0',  '4,0',  '6,0',  '8,0',  '26,0'],
        ["","% Distancia",       '15,4', '15,4', '15,4', '23,1', '30,8', '100,0'],
        ["","% Locales",         '10,8', '16,7', '16,0', '22,2', '44,4',  '19,8'],
        ["Medio","Recuento",      '7,0',  '2,0',  '6,0',  '6,0',  '4,0',  '25,0'],
        ["","% Distancia",       '28,0',  '8,0', '24,0', '24,0', '16,0', '100,0'],
        ["","% Locales",         '18,9',  '8,3', '24,0', '22,2', '22,2',  '19,1'],
        ["Alto","Recuento",       '9,0',  '6,0',  '5,0',  '5,0',  '1,0',  '26,0'],
        ["","% Distancia",       '34,6', '23,1', '19,2', '19,2',  '3,8', '101,0'],
        ["","% Locales",         '24,3', '25,0', '20,0', '18,5',  '5,6',  '19,8'],
        ["Muy alto","Recuento",  '13,0',  '7,0',  '3,0',  '3,0',  '1,0',  '27,0'],
        ["","% Distancia",       '48,1', '25,9', '11,1', '11,1',  '3,7', '100,0'],
        ["","% Locales",         '35,1', '29,2', '12,0', '11,1',  '5,6',  '20,6'],
        ["Total","Recuento",     '37,0', '24,0', '25,0', '27,0', '18,0', '131,0'],
        ["","% Distancia",       '28,2', '18,3', '19,1', '20,6', '13,7', '100,0'],
        ["","% Locales",        '100,0','100,0','100,0','100,0','100,0', '100,0'],
      ],
      table2: [
        ["Muy bajo", '-1,74',  '0,03',  '1,02',  '0,77',  '0,18'],
        ["Bajo",     '-1,63', '-0,43', '-0,54',  '0,35',  '2,82'],
        ["Medio",    '-0,03', '-1,48',  '0,70',  '0,47',  '0,36'],
        ["Alto",      '0,81',  '0,70',  '0,02', '-0,19', '-1,64'],
        ["Muy alto",  '2,58',  '1,15', '-1,18', '-1,37', '-1,70'],
      ]
    }
  }
}
</script>