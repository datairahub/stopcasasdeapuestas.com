<template>
  <div>
    <table>
      <caption>Barrios según la proporción de 65 y más años y número de locales</caption>
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
  name: 'table-neighborhoods-by-senility',
  data: function(){
    return {
      table: [
        ["Muy bajo","Recuento",  '10,0',  '8,0',  '3,0',  '5,0',  '2,0',  '24,0'],
        ["","% Senilidad",       '41,7', '33,3', '12,5',  '4,2',  '8,3', '100,0'],
        ["","% Locales",         '27,0', '33,3', '12,0',  '3,7', '11,1',  '18,3'],
        ["Bajo","Recuento",       '6,0',  '4,0',  '9,0',  '7,0',  '8,0',  '34,0'],
        ["","% Senilidad",       '17,6', '11,8', '26,5', '20,6', '23,5', '100,0'],
        ["","% Locales",         '16,2', '16,7', '36,0', '25,9', '44,4',  '26,0'],
        ["Medio","Recuento",      '4,0',  '4,0',  '2,0',  '4,0',  '4,0',  '18,0'],
        ["","% Senilidad",       '22,2', '22,2', '11,1', '22,2', '22,2', '100,0'],
        ["","% Locales",         '10,8', '16,7',  '8,0', '14,8', '22,2',  '13,7'],
        ["Alto","Recuento",       '5,0',  '5,0',  '4,0', '10,0',  '1,0',  '25,0'],
        ["","% Senilidad",       '20,0', '20,0', '16,0', '40,0',  '4,0', '100,0'],
        ["","% Locales",         '13,5', '20,8', '16,0', '37,0',  '5,6',  '19,1'],
        ["Muy alto","Recuento",  '12,0',  '3,0',  '7,0',  '5,0',  '3,0',  '30,0'],
        ["","% Senilidad",       '40,0', '10,0', '23,3', '16,7', '10,0', '100,0'],
        ["","% Locales",         '32,4', '12,5', '28,0', '18,5', '16,7',  '22,9'],
        ["Total","Recuento",     '37,0', '24,0', '25,0', '27,0', '18,0', '131,0'],
        ["","% Senilidad",       '28,2', '18,3', '19,1', '20,6', '13,7', '100,0'],
        ["","% Locales",        '100,0','100,0','100,0','100,0','100,0', '100,0'],
      ],
      table2: [
        ["Muy bajo",  '1,62',  '2,10', '-0,91', '-2,20', '-0,85'],
        ["Bajo",     '-1,60', '-1,15',  '1,27',  '0,00',  '1,93'],
        ["Medio",    '-0,61',  '0,46', '-0,93',  '0,18',  '1,13'],
        ["Alto",     '-1,02',  '0,24', '-0,44',  '2,66', '-1,57'],
        ["Muy alto",  '1,63', '-1,34',  '0,67', '-0,61', '-0,68'],
      ]
    }
  }
}
</script>