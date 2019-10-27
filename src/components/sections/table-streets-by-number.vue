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
        <td>Fuente: Datos abiertos y FRAVM.</td>
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
        ["Bravo Murillo",17],
        ["Alcalá",15],
        ["Marcelo Usera",12],
        ["General Ricardos",10],
        ["Albufera",8],
        ["Embajadores",7],
        ["Extremadura",5],
        ["Lopez de Hoyos",5],
        ["Monforte de Lemos",5],
        ["Alberto Palacios",4],
        ["Antonio López",4],
        ["Atocha",4],
        ["Delicias",4],
        ["Doctor Esquerdo",4],
        ["Martínez de la Riva",4],
        ["Montera",4],
        ["Oca",4],
        ["Vía Carpetana",4],
        ["Arapiles",3],
        ["Camino viejo de Leganés",3],
        ["Gigantes y Cabezudos",3],
        ["Gran Avenida",3],
        ["Institución Libre de Enseñanza",3],
        ["Monteigueldo",3],
        ["Pedro Laborde",3],
        ["Reina Victoria",3],
        ["América",2],
        ["Capitán Blanco Argibay",2],
        ["Carlos Martínez Álvarez",2],
        ["Cartagena",2],
        ["Castellana",2],
        ["Cristo de la Victoria",2],
        ["Dolores Barranco",2],
        ["Emilio Vargas",2],
        ["Fermín Caballero",2],
        ["Francisco Silvela",2],
        ["Guzmán el Bueno",2],
        ["Hortaleza",2],
        ["Huerta de Castañeda",2],
        ["Illescas",2],
        ["Isabelita Usera",2],
        ["Jacinto Benavente",2],
        ["Laguna",2],
        ["Marcelino Camacho",2],
        ["María Martínez Oviol",2],
        ["Marqués de Corbera",2],
        ["Marroquina",2],
        ["Mayor",2],
        ["Menéndez Álvaro",2],
        ["Moratalaz",2],
        ["Ocaña",2],
        ["Pablo Neruda",2],
        ["Palomeras",2],
        ["Peña Prieta",2],
        ["Princesa",2],
        ["Rocafort",2],
        ["San Cipriano",2],
        ["San Diego",2],
        ["Santa Marta",2],
        ["Virgen del Sagrario",2],
      ]
    }
  }
}
</script>