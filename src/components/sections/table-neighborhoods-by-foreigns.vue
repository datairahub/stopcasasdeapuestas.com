<template>
  <div>
    <table>
      <caption>Barrios según la proporción de extranjeros/as y número de locales</caption>
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
  name: 'table-neighborhoods-by-foreigns',
  data: function(){
    return {
      table: [
        ["Muy bajo","Recuento",  '14,0',  '9,0',  '5,0',  '1,0',  '0,0',  '29,0'],
        ["","% Extranjeros",     '48,3', '31,0', '17,2',  '3,4',  '0,0', '100,0'],
        ["","% Locales",         '37,8', '37,5', '20,0',  '3,7',  '0,0',  '22,1'],
        ["Bajo","Recuento",      '14,0',  '7,0',  '6,0',  '4,0',  '2,0',  '33,0'],
        ["","% Extranjeros",     '42,4', '21,2', '18,2', '12,1',  '6,1', '100,0'],
        ["","% Locales",         '37,8', '29,2', '24,0', '14,8', '11,1',  '25,2'],
        ["Medio","Recuento",      '2,0',  '2,0',  '7,0',  '9,0',  '0,0',  '20,0'],
        ["","% Extranjeros",     '10,0', '10,0', '35,0', '45,0',  '0,0', '100,0'],
        ["","% Locales",          '5,4',  '8,3', '28,0', '33,3',  '0,0',  '15,3'],
        ["Alto","Recuento",       '5,0',  '6,0',  '3,0',  '8,0',  '4,0',  '26,0'],
        ["","% Extranjeros",     '19,2', '23,1', '11,5', '30,8', '15,4', '100,0'],
        ["","% Locales",         '13,5', '25,0', '12,0', '29,6', '22,2',  '19,8'],
        ["Muy alto","Recuento",   '2,0',  '0,0',  '4,0',  '5,0', '12,0',  '23,0'],
        ["","% Extranjeros",      '8,7',  '0,0', '17,4', '21,7', '52,2', '100,0'],
        ["","% Locales",          '5,4',  '0,0', '16,0', '18,5', '66,7',  '17,6'],
        ["Total","Recuento",     '37,0', '24,0', '25,0', '27,0', '18,0', '131,0'],
        ["","% Extranjeros",     '28,2', '18,3', '19,1', '20,6', '13,7', '100,0'],
        ["","% Locales",        '100,0','100,0','100,0','100,0','100,0', '100,0'],
      ],
      table2: [
        ["Muy bajo",  '2,72',  '2,01', '-0,29', '-2,59', '-2,44'],
        ["Bajo",      '2,09',  '0,50', '-0,15', '-1,39', '-1,48'],
        ["Medio",    '-1,97', '-1,05',  '1,97',  '2,93', '-1,94'],
        ["Alto",     '-1,14',  '0,70', '-1,09',  '1,43',  '0,27'],
        ["Muy alto", '-2,29', '-2,50', '-0,23',  '0,15',  '5,90'],
      ]
    }
  }
}
</script>