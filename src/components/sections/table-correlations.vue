<template>
  <div>    
    <table>
      <caption>Tabla de correlaciones</caption>
      <thead>
        <tr>
          <td></td>
          <td class="cen">Simples</td>
          <td class="cen" colspan="10" style="border-bottom: 1px solid rgba(128,128,128,0.3);">Parciales</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td class="cen">Renta</td>
          <td class="cen">Paro</td>
          <td class="cen">Estudios</td>
          <td class="cen">Distancia</td>
          <td class="cen">Población</td>
          <td class="cen">Densidad</td>
          <td class="cen">Jóvenes</td>
          <td class="cen">Senil</td>
          <td class="cen">Extranjeros</td>
          <td class="cen">Precios</td>
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
  name: 'table-correlations',
  data: function(){
    return {
      table: [
        ['Renta'      ,-0.381446874,           ,-0.3014602 ,-0.21722303,-0.39402187,-0.28989812,-0.2968161 ,-0.38045441,-0.3893129 ,-0.14068477,-0.36372367],
        ['Paro'       , 0.259310891,-0.08726947,           ,-0.11409645, 0.2883811 , 0.18128194, 0.2669963 , 0.21924003, 0.26486198, 0.02042045, 0.20100011],
        ['Estudios'   , 0.324911197, 0.05154303, 0.23145434,           , 0.39594858, 0.24410257, 0.34790483, 0.29289883, 0.32759297,-0.01065084, 0.33395964],
        ['Distancia'  ,-0.303092185,-0.3197319 ,-0.32766767,-0.37928532,           ,-0.28992542,-0.00541777,-0.27741075,-0.30086207,-0.19852307,-0.41535925],
        ['Población'  , 0.398077969, 0.31295007, 0.35700049, 0.33941757, 0.38888376,           , 0.30541051, 0.42404139, 0.39403755, 0.36331253, 0.36893767],
        ['Densidad'   , 0.452225492, 0.38867697, 0.45602361, 0.46719061, 0.35222641, 0.37800012,           , 0.45099528, 0.4602346 , 0.35559551, 0.49610004],
        ['Jóvenes'    , 0.185216939, 0.18289547, 0.12021748, 0.11380695, 0.13583909, 0.24248632, 0.18153904,           , 0.19425377,-0.04186486, 0.16652961],
        ['Senil'      , 0.063580069, 0.10539886, 0.08455357, 0.07740102,-0.05064864, 0.01595764,-0.1148566 , 0.08705803,           , 0.16876485, 0.09875146],
        ['Extranjeros', 0.593917566, 0.50746048, 0.55350392, 0.52576205, 0.56156258, 0.57652297, 0.53779533, 0.57525602, 0.60714151,           , 0.57670692],
        ['Precios'    ,-0.174851383, 0.12485951, 0.051737  , 0.19244382,-0.34157758,-0.06946304,-0.28509268,-0.15483668,-0.19007983,-0.01994578,           ]
      ]
    }
  }
}
</script>