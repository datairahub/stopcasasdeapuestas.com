<template>
  <div>
    <table>
      <caption>Barrios por nivel de renta según el número de locales</caption>
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
          <td class="strong">{{row[0]}}</td>
          <td class="strong">{{row[1]}}</td>
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
          <td class="strong">{{row[0]}}</td>
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
  name: 'table-neighborhoods-by-locals',
  data: function(){
    return {
      table: [
        ["Muy bajo","Recuento",   '4,0',  '2,0',  '3,0',  '6,0',  '7,0',  '22,0'],
        ["","% Renta",           '18,2',  '9,1', '13,6', '27,3', '31,8', '100,0'],
        ["","% Locales",         '10,8',  '8,3', '12,0', '22,2', '38,9',  '16,8'],
        ["Bajo","Recuento",       '4,0',  '4,0',  '8,0',  '9,0',  '8,0',  '33,0'],
        ["","% Renta",           '12,1', '12,1', '24,2', '27,3', '24,2', '100,0'],
        ["","% Locales",         '10,8', '16,7', '32,0', '33,3', '44,4',  '25,2'],
        ["Medio","Recuento",      '5,0',  '2,0',  '3,0',  '1,0',  '2,0',  '13,0'],
        ["","% Renta",           '38,5', '15,4', '23,1',  '7,7', '15,4', '100,0'],
        ["","% Locales",         '13,5',  '8,3', '12,0',  '3,7', '11,1',   '9,9'],
        ["Alto","Recuento",       '2,0',  '5,0',  '4,0',  '3,0',  '0,0',  '14,0'],
        ["","% Renta",           '14,3', '35,7', '28,6', '21,4',  '0,0', '100,0'],
        ["","% Locales",          '5,4', '20,8', '16,0', '11,1',  '0,0',  '10,7'],
        ["Muy alto","Recuento",  '22,0', '11,0',  '7,0',  '8,0',  '1,0',  '49,0'],
        ["","% Renta",           '44,9', '22,4', '14,3', '16,3',  '2,0', '100,0'],
        ["","% Locales",         '59,5', '45,8', '28,0', '29,6',  '5,6',  '37,4'],
        ["Total","Recuento",     '37,0', '24,0', '25,0', '27,0', '18,0', '131,0'],
        ["","% Renta",           '28,2', '18,3', '19,1', '20,6', '13,7', '100,0'],
        ["","% Locales",        '100,0','100,0','100,0','100,0','100,0', '100,0'],
      ],
      table2: [
        ["Muy bajo", '-1,15', '-1,23', '-0,71',  '0,85',  '2,70'],
        ["Bajo",     '-2,38', '-1,06',  '0,87',  '1,09',  '2,03'],
        ["Medio",     '0,86', '-0,29',  '0,39', '-1,21',  '0,18'],
        ["Alto",     '-1,23',  '1,78',  '0,96',  '0,08', '-1,58'],
        ["Muy alto",  '3,27',  '0,94', '-1,08', '-0,94', '-3,01'],
      ]
    }
  }
}
</script>