<template>
  <table>
    <caption>Calles con dos o más locales de apuestas</caption>
    <thead>
      <tr><td>Calle</td><td class="num">Nº de locales</td></tr>
    </thead>
    <tbody>
      <tr v-for="row in table">
        <td>{{row[0]}}</td>
        <td class="num">{{row[1]}}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Fuente: Datos abiertos y elaboración propia</td>
      </tr>
    </tfoot>
  </table>
</template>


<script>
export default {
  name: 'table-streets-by-number',
  data: function(){
    return {
      table: [
        ["Alcalá",14],
        ["Bravo Murillo",14],
        ["General Ricardos",10],
        ["Marcelo Usera",9],
        ["Embajadores",5],
        ["Lopez de Hoyos",5],
        ["Vía Carpetana",5],
        ["Doctor Esquerdo",4],
        ["Extremadura",4],
        ["Oca",4],
        ["Albufera",3],
        ["Atocha",3],
        ["Carretas",3],
        ["Cartagena",3],
        ["Delicias",3],
        ["General Margallo",3],
        ["Institución Libre de Enseñanza",3],
        ["Monforte de Lemos",3],
        ["Montera",3],
        ["Pedro Laborde",3],
        ["Antonio López",2],
        ["Batalla del Salado",2],
        ["Camino viejo de Leganés",2],
        ["Castellana",2],
        ["Corregidor Diego de Valderrábano",2],
        ["Cristo de la Victoria",2],
        ["Dolores Barranco",2],
        ["Emilio Vargas",2],
        ["Felipe Castro",2],
        ["Fermín Caballero",2],
        ["Fernando el Católico",2],
        ["Ferroviarios",2],
        ["Francisco Silvela",2],
        ["Francos Rodríguez",2],
        ["General Perón",2],
        ["Gran Avenida",2],
        ["Gran Vía",2],
        ["Granada",2],
        ["Guzmán el Bueno",2],
        ["Huerta de Castañeda",2],
        ["Isla Paragua",2],
        ["Jose Prat",2],
        ["Laguna",2],
        ["Magallanes",2],
        ["Manco de Lepanto",2],
        ["Marcelino Camacho",2],
        ["Martínez de la Riva",2],
        ["Mayor",2],
        ["Menéndez Álvaro",2],
        ["Monteigueldo",2],
        ["Niza",2],
        ["Pablo Neruda",2],
        ["Peña Prieta",2],
        ["Ponferrada",2],
        ["Reina Victoria",2],
        ["San Cipriano",2],
        ["Santa María de la Cabeza",2],
        ["Seseña",2],
        ["Tembleque",2],
      ]
    }
  }
}
</script>