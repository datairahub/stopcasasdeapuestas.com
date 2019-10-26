<template>
  <div>    
    <table>
      <caption>Modelo 8: MCO, usando las observaciones 1-131<br>Variable dependiente: Rlocales</caption>
      <thead>
        <tr>
          <td></td>
          <td class="cen">Coeficiente</td>
          <td class="cen">Desv. Típica</td>
          <td class="cen">Estadístico t</td>
          <td class="cen">Valor p</td>
          <td></td>
      </tr>
      </thead>
      <tbody>
        <tr v-for="row in table">
          <td>{{row[0]}}</td>
          <td class="num">{{row[1]}}</td>
          <td class="num">{{row[2]}}</td>
          <td class="num">{{row[3]}}</td>
          <td class="num">{{row[4]}}</td>
          <td class="cen">{{row[5]}}</td>
        </tr>
      </tbody>
    </table>

    <table>
      <tbody>
        <tr v-for="row in table2">
          <td>{{row[0]}}</td>
          <td>{{row[1]}}</td>
          <td>{{row[2]}}</td>
          <td>{{row[3]}}</td>
          <td>{{row[4]}}</td>
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
  name: 'table-regression',
  data: function(){
    return {
      table: [
        ['const',-0.792556,0.181671,-4.3626,'0.00003','***'],
        ['Extranjeros',0.0755827,0.0108665,6.9556,'<0.00001','***'],
        ['Densidad',0.00266168,0.000581662,4.5760,'0.00001','***'],
        ['Población',2.60364e-05,4.92297e-06,5.2888,'<0.00001','***'],
      ],
      table2: [
        ['Media de la vble. dep.','1.359242',,'D.T. de la vble. dep.','1.102349'],
        ['Suma de cuad. residuos','68.85796',,'D.T. de la regresión','0.736335'],
        ['R-cuadrado','0.564114',,'R-cuadrado corregido','0.553818'],
        ['F(3, 127)','54.78690',,'Valor p (de F)','8.61e-23'],
        ['Log-verosimilitud','-143.7545',,'Criterio de Akaike','295.5091'],
        ['Criterio de Schwarz','307.0098',,'Crit. de Hannan-Quinn','300.1823'],
      ] 
    }
  }
}
</script>