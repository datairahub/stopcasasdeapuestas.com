<template>
  <table>
    <caption>Locales en un radio de 100m de un colegio</caption>
    <thead>
      <tr><td>Nº de locales</td><td>CEIP</td><td>IES</td><td>Privados</td><td>Total</td></tr>
    </thead>
    <tbody>
      <tr v-for="row in table">
        <td>{{row[0]}}</td>
        <td class="num">{{row[1]}}</td>
        <td class="num">{{row[2]}}</td>
        <td class="num">{{row[3]}}</td>
        <td class="num">{{row[4]}}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Fuente: FRAVM</td>
      </tr>
    </tfoot>
  </table>
</template>


<script>
export default {
  name: 'table-locals-by-educationcenters',
  data: function(){
    return {
      table: [
        ["3 locales",0,0,2,2],
        ["2 locales",1,1,6,8],
        ["1 local",15,6,22,43],
        ["Suma",16,7,30,53],
        ["Total colegios",247,116,500,863],
      ]
    }
  }
}
</script>