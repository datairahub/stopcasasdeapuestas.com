<template>
  <div class="page page--report">
    <div class="page__wrap">

      <section class="page__section page__section--head">
        <h1 class="page__title">Localización de los locales de juego y salones de apuestas de Madrid</h1>
        <p class="page__subtitle">Elaborado por Vicente Pérez Quintana.</p>
        <p class="page__subtitle">Coordinación del trabajo de campo por Silvia González y Óscar Chaves.</p>
        <p class="page__subtitle">Madrid, octubre de 2019</p>
      </section>

      <section class="page__section page__section--contents">
        <h4>Índice de contenidos</h4>
        <ul>
          <li><a @click="scrollTo('introduccion')">Introducción</a></li>
          <li><a @click="scrollTo('implantacion')">Implantación</a></li>
          <li class="sub"><a @click="scrollTo('latina')">Latina-Carabanchel</a></li>
          <li class="sub"><a @click="scrollTo('usera')">Usera</a></li>
          <li class="sub"><a @click="scrollTo('puente')">Puente de Vallecas</a></li>
          <li class="sub"><a @click="scrollTo('arganzuela')">Arganzuela</a></li>
          <li class="sub"><a @click="scrollTo('centro')">Centro-Chamberí</a></li>
          <li class="sub"><a @click="scrollTo('tetuan')">Tetuán</a></li>
          <li class="sub"><a @click="scrollTo('ciudadlineal')">Ciudad Lineal</a></li>
          <li><a @click="scrollTo('determinantes')">Determinantes de la localización</a></li>
          <li class="sub"><a @click="scrollTo('rentabarrios')">Renta media de los hogares por barrios</a></li>
          <li class="sub"><a @click="scrollTo('paro')">Tasa absoluta de paro</a></li>
          <li class="sub"><a @click="scrollTo('educacion')">Nivel educativo</a></li>
          <li class="sub"><a @click="scrollTo('distanciasol')">Distancia de los barrios a la Puerta del Sol</a></li>
          <li class="sub"><a @click="scrollTo('poblacion')">Población</a></li>
          <li class="sub"><a @click="scrollTo('densidad')">Densidad</a></li>
          <li class="sub"><a @click="scrollTo('jovenes')">Proporción de jóvenes</a></li>
          <li class="sub"><a @click="scrollTo('senilidad')">Tasa de senilidad</a></li>
          <li class="sub"><a @click="scrollTo('extranjeros')">Tasa de extranjería</a></li>
          <li class="sub"><a @click="scrollTo('preciovivienda')">Precio de las viviendas</a></li>
          <li><a @click="scrollTo('recopilacion')">Recopilación</a></li>
          <li><a @click="scrollTo('othercities')">La localización en otras grandes ciudades</a></li>
          <li class="sub"><a @click="scrollTo('barcelona')">Barcelona</a></li>
          <li class="sub"><a @click="scrollTo('valencia')">Valencia</a></li>
          <li class="sub"><a @click="scrollTo('malaga')">Málaga</a></li>
          <li class="sub"><a @click="scrollTo('sevilla')">Sevilla</a></li>
          <li class="sub"><a @click="scrollTo('zaragoza')">Zaragoza</a></li>
          <li class="sub"><a @click="scrollTo('bilbao')">Bilbao</a></li>
          <li><a @click="scrollTo('educationcenters')">Cercanía a los institutos públicos</a></li>
        </ul>
      </section>

      <section class="page__section page__section--text">

        <!-- start intro -->
        <h3 ref="introduccion">Introducción</h3>
        <p>El objeto del presente estudio es la distribución espacial de los establecimientos de juegos y apuestas existentes en la ciudad de Madrid, en la amplia acepción que recoge el artículo 1 de la <a href="http://www.madrid.org/wleg_pub/secure/normativas/contenidoNormativa.jsf?opcion=VerHtml&nmnorma=349&cdestado=P#no-back-button" target="_blank">Ley 6/2001, del juego en la Comunidad de Madrid</a>: locales en los que se realizan «actividades en las que se arriesguen cantidades de dinero u objetos económicamente evaluables en cualquier forma sobre los resultados, y que permitan su transferencia entre los participantes, con independencia de que predomine en ellos el grado de destreza de los jugadores o sean exclusiva o primordialmente de suerte, envite o azar y tanto si se desarrollan mediante la utilización de máquinas automáticas como si se llevan a cabo a través de la realización de actividades humanas, cualquiera que sea el medio por el que se realicen».</p>
        <p>Aquí entran los casinos, bingos, locales de juegos, salones de apuestas, establecimientos de juegos colectivos de dinero y azar, etc. Se excluyen las administraciones de lotería, estancos, ONCE y, en general, los espacios de juegos de gestión pública o sometidos a autorización especial. También quedan fuera los bares, restaurantes y lugares con unas pocas máquinas tragaperras y similares. Solo se consideran los negocios estables, no se contabilizan las instalaciones temporales o efímeras.</p>
        <p>Para establecer el universo de estudio se ha partido del listado de establecimientos con el epígrafe 920002 en el Censo de Locales del Ayuntamiento de Madrid, que comprende los juegos de azar y apuestas de gestión privada. En el trabajo de campo se han visitado todas las direcciones a fin de verificar la actividad. Ello ha permitido depurar el listado eliminando los locales en los que la actividad no se corresponde con el epígrafe o en los que no hay actividad alguna (viviendas, solares…). En paralelo, en el trabajo de campo se ha peinado buena parte de la ciudad a fin de identificar aquellos establecimientos en los que se practican juegos de azar y/o apuestas pero que figuran con otro epígrafe en el Censo o incluso que no están (o no ha sido posible hallarlos) en él. Estas incorporaciones han sido fotografiadas y rastreadas en el Censo a fin de acotar la actividad dada de alta. En muchos casos, como se verá, se corresponden con los epígrafes 920001 (juegos de azar y apuestas de gestión pública) o 932007 (salones de recreo, diversión y otras actividades recreativas).</p>
        <p>El trabajo de campo se ha realizado en poco tiempo y gracias a la aportación voluntaria de muchas personas en los 21 distritos, bajo la supervisión de la FRAVM. Esto nos asegura que el universo sobre el que se trabaja aquí es aproximado al real o, dicho de otra manera, todos los establecimientos incluidos son salones de apuestas-locales de juego, pero seguramente han quedado establecimientos sin identificar. Cabe confiar que el número de éstos no sea grande. En cualquier caso, esta circunstancia obliga a aplicar la cautela en el examen de los datos.</p>
        <!-- end intro -->

        <!-- start implantacion -->
        <h3 ref="implantacion">Implantacion</h3>
        <p>Según el Censo de Locales y Actividades del Ayuntamiento de Madrid, en la ciudad hay, a julio de 2019, 378 locales abiertos cuya actividad es la de «juegos de azar y apuestas de gestión privada»<sup>1</sup>, que incluye bingos, casinos y máquinas tragaperras, y excluye los juegos de azar y apuestas de gestión pública o autorización especial, tales como las administraciones de lotería o la ONCE. Son locales con entrada directa desde la calle o insertos en una agrupación de locales (centros comerciales).</p>

        <div class="legend">
          <div class="legend__wrap">
            <sup>1</sup> La información está tomada del <a href="https://datos.madrid.es/portal/site/egob/.">portal de datos abiertos del Ayuntamiento de Madrid</a>.
          </div>
        </div>

        <p>En el trabajo de campo se han dado de baja 52 establecimientos. La mayoría de ellos bien no han abierto, bien han cerrado la actividad en el último año. Algunos desarrollan otros negocios (bares, restaurantes…) o son las oficinas de empresas de juegos… En algún caso son viviendas. En el lado contrario, se han añadido 74 establecimientos. Buena parte de ellos son administraciones de loterías en las que -además de la actividad propia- se practican otras apuestas-juegos y, asimismo, salones de recreo en los que -además de actividades recreativas- se realizan apuestas-juegos de azar. En pocos casos, la licencia de actividad es de bares, restaurantes… En un número reducido de locales no ha sido posible asociarlos a una licencia, sea porque carecen de ella, sea porque operan a partir de una declaración responsable, sea porque las direcciones de la licencia y la localización efectiva no coinciden, sea por otras razones, sin descartar las dificultades del rastreo en campo.</p>
        <p>El universo, por tanto, queda formado por 400 locales y salones. En el cuadro se especifica la titularidad del negocio para los casos en que ha sido posible concretarla. Dos empresas (Codere y Sportium) ejercen un fuerte dominio: sea en solitario, sea asociadas con otros operadores, están presentes en, al menos, el 75% de los locales. En tercer lugar, pero muy lejos de las anteriores, está Luckia, en la que participan Egasa y Cafeterías Nebraska. Es indiscutible, por tanto, la situación de duopolio sobre la que se organiza el mercado del juego en la ciudad, tanto más si se considera que Sportiun es propiedad, el 100%, del fondo de inversión Blackstone y que Codere pertenece a Silver Point, Prudential PLC, Abrams Capital, Contrarian y Martínez Sampedro.</p>

      </section>
    </div>

    <div class="page__wrap page__wrap--big">
      <section class="page__section page__section--text">
        <table-locals-by-distric-company/>
      </section>
    </div>

    <div class="page__wrap">
      <section class="page__section page__section--text">
        
        <p>En los dos mapas que siguen se representan por distritos y barrios:</p>

        <p>MAPAS</p>

        <p>Una rápida inspección de los mapas muestra una pauta de acusada concentración de los locales en los distritos/barrios de la margen occidental de la almendra central y en la periferia sur próxima a la M-30.</p>
        <p>En concreto, la distribución por distritos permite a simple vista diferenciar cuatro grandes grupos. Carabanchel, Puente de Vallecas, Tetuán, Centro, Usera, Latina y Ciudad Lineal absorben el 61% de los establecimientos. Arganzuela, Chamberí y Villaverde aparecen algo despegados de los anteriores, en una segunda posición. San Blas-Canillejas, Salamanca, Chamartín y Fuencarral-El Pardo se distancian en la tercera posición del ranking. Cierran, con pocos locales de juego, siete distritos, entre ellos los más periféricos (Villa de Vallecas, Vicálvaro y Barajas), más uno céntrico (Retiro) y dos intermedios (Hortaleza y Moncloa-Aravaca), junto a Moratalaz.</p>

      </section>
    </div>

    <div class="page__wrap page__wrap--big">
      <section class="page__section page__section--text">
        <locals-by-distric/>
      </section>
    </div>

    <div class="page__wrap">
      <section class="page__section page__section--text">

        <p>Más interés reviste el examen de la distribución del número de locales por barrios<sup>2</sup>, ya que permite un mayor detalle. Aquélla tiene una forma muy asimétrica a la izquierda: el valor modal o más frecuente es cero (en 37 barrios no hay establecimientos), mientras que la media de locales por barrio es 3,1 y la mediana o valor que divide la distribución en dos mitades es 2. La dispersión es muy alta, como lo muestra el rango, con un mínimo en cero locales y un máximo en 21 y, sobre todo, el coeficiente de variación (126,5%, esto es, la desviación típica es superior a la media).</p>

        <div class="legend">
          <div class="legend__wrap">
            <sup>2</sup> Existe alguna discrepancia entre el número de locales por barrios según la localización que ofrece el Censo de Locales y el recuento directo que hace el GIS. En el texto, salvo indicación en contrario, se utiliza la que ofrece el archivo de Datos Abiertos del Ayuntamiento de Madrid. 
          </div>
        </div>

        <p>En la distribución destaca la treintena (37) de barrios en los que no hay locales, completada por otros 40 en los que hay 1-2. Son barrios muy periféricos, mayoritariamente localizados en el norte y oeste y a lo largo de la margen oriental de La Castellana. En cambio, 18 barrios, con 7 y más locales absorben la mitad. En particular, Vista Alegre y San Diego, con 21, y Sol, con 20 encabezan la lista.  Detrás, a bastante distancia, aparecen Moscardó, Aluche, Bellas Vistas, Embajadores, Palos de Moguer, Quintana… En el mapa se observa que mayoritariamente son barrios meridionales ubicados en los bordes de la M-30.</p>

        <neighborhoods-by-locals/>

        <p>MAPA</p>

        <p>Siguiendo con el último mapa, por otra parte, se aprecia que no se producen grandes manchas de color, esto es, los barrios con muchos-pocos locales están rodeados por otros barrios con muchos-pocos locales pero sin definir una pauta. De ahí la apariencia de tablero de ajedrez. Esta situación queda bien reflejada por el llamado índice de autocorrelación espacial de Moran, que mide en qué grado un barrio es parecido a los barrios vecinos: arroja un valor muy bajo (0,11, sobre un máximo posible de 1).</p>

        <p>SCATTERPLOT</p>

        <p>Siguiendo el método de los cortes naturales de Jenks<sup>3</sup>, los 131 barrios administrativos de la ciudad se han agrupado en seis tipos según el número de establecimientos. Los dos primeros cogen los barrios con valores por debajo de la media, esto es, sin locales o con muy pocos. El tercero representa aquellos que arrojan valores en el entorno de la media. En el cuarto están los que localizan más locales que la media, pero sin apartarse de manera muy significativa de ella. El quinto y el sexto tipos identifican los barrios que concentran más de la mitad del total de establecimientos abiertos en la ciudad. En particular, el último reúne, por así decirlo, los lugares con valores atípicos estadísticamente: 20 y 21 locales.</p>

        <div class="legend">
          <div class="legend__wrap legend__wrap--left">
            <sup>3</sup> El método sirve para generar intervalos de valores. Se basa en la ordenación de los datos de menos a más y atiende a los saltos en la secuencia numérica. De manera iterativa va produciendo grupos-intervalos distintos entre sí hasta maximizar las diferencias entre ellos. 
          </div>
        </div>

        <p>MAPA</p>

        <p>Atendiendo a los dos últimos tipos, vemos que destacan claramente siete ámbitos espaciales como los grandes referentes del juego en la ciudad. En las páginas que siguen se hace un zoom sobre cada uno de ellos<sup>4</sup>.</p>

        <div class="legend">
          <div class="legend__wrap">
            <sup>4</sup> Como quiera que, en el archivo de datos abiertos del ayuntamiento, las coordenadas son aproximadas, en el presente trabajo se ha prescindido de ellas. Las coordenadas de los locales se corresponden con la dirección de los puntos de acceso. 
          </div>
        </div>

        <h4 ref="latina">Latina-Carabanchel</h4>
        <p>Se aprecia una especial concentración en varias calles-zonas de claro carácter comercial. Destacan el paseo de Extremadura, localizaciones diversas de Aluche (Illescas…), Vía Carpetana (tramo sur), la calle Oca-zona próxima al metro de Vista Alegre, de manera muy particular el eje longitudinal de la calle General Ricardos, con un racimo importante en torno a la plaza de Oporto, y la calle Camino Viejo de Leganés. También destaca Antonio López, junto a Madrid Río. En general, los locales están en ámbitos bien comunicados, con fuerte componente comercial.</p>

        <figure>
          <img src="/static/img/maps/latina.jpg" alt="Mapa de locales de Latina-Carabanchel">
          <figcaption>Mapa de locales de Latina-Carabanchel. FRAVM.</figcaption>
        </figure>

        <h4 ref="usera">Usera</h4>
        <p>En Usera se produce una gran concentración de locales en la calle Marcelo Usera y aledaños, con acusado carácter comercial. Llama la atención la proliferación de algunos locales en una ubicación muy local, como Meseta de Orcasitas.</p>

        <figure>
          <img src="/static/img/maps/usera.jpg" alt="Mapa de locales de Usera">
          <figcaption>Mapa de locales de Usera. FRAVM.</figcaption>
        </figure>

        <h4 ref="puente">Puente de Vallecas</h4>
        <p>Aquí la concentración se da en los alrededores del primer tramo de la avenida de la Albufera, entre las estaciones de metro de Puente de Vallecas y Nueva Numancia, así como en las cercanías de la estación de Portazgo. También destacan Pedro Laborde y Martínez de la Riva. Igual que en los casos anteriores, sobresalen el carácter comercial de las zonas de implantación y la buena comunicación.</p>

        <figure>
          <img src="/static/img/maps/puente.jpg" alt="Mapa de locales de Puente de Vallecas">
          <figcaption>Mapa de locales de Puente de Vallecas. FRAVM.</figcaption>
        </figure>

        <h4 ref="arganzuela">Arganzuela</h4>
        <p>La mayoría de los locales se ubican en el norte de la calle Embajadores, cerca de la plaza del mismo nombre, en los extremos de la calle Delicias, cerca de la plaza de Atocha y en Legazpi, y en el eje de Nuestra Señora de la Cabeza. Se repite el carácter comercial. Aquí hay que enfatizar la proximidad a lugares de gran afluencia de público (glorieta de Embajadores y estación de Atocha).</p>

        <figure>
          <img src="/static/img/maps/arganzuela.jpg" alt="Mapa de locales de Arganzuela">
          <figcaption>Mapa de locales de Arganzuela. FRAVM.</figcaption>
        </figure>

        <h4 ref="centro">Centro-Chamberí</h4>
        <p>Como cabía esperar, la mayor concentración se produce en las calles aledañas a la Puerta del Sol (Montera, Mayor, Carretas, Preciados, Espoz y Mina…). También sobresalen la calle Atocha y el entorno de la plaza Mayor. Asimismo, destacan el ámbito de las plazas de San Bernardo-Quevedo-Bilbao y el tramo de Bravo Murillo próximo a la plaza de Cuatro Caminos.</p>

        <figure>
          <img src="/static/img/maps/chamberi.jpg" alt="Mapa de locales de Centro-Chamberí">
          <figcaption>Mapa de locales de Centro-Chamberí. FRAVM.</figcaption>
        </figure>

        <h4 ref="tetuan">Tetuán</h4>
        <p>Justo Bravo Murillo y calles aledañas absorben buena parte de los locales situados en Tetuán. A ellos se suman algunos en Orense-General Perón. Se observa también la concentración en el entorno de La Vaguada, ya en el distrito de Fuencarral-El Pardo.</p>

        <figure>
          <img src="/static/img/maps/tetuan.jpg" alt="Mapa de locales de Tetuán">
          <figcaption>Mapa de locales de Tetuán. FRAVM.</figcaption>
        </figure>

        <h4 ref="ciudadlineal">Ciudad Lineal</h4>
        <p>Como en Tetuán, gran parte de los locales se localizan en la calle Alcalá (tramo entre Ventas y Arturo Soria) y aledañas. Es la zona que más se aparta del patrón de concentración dominante. Define el espacio de mayor acumulación en el este del municipio.</p>

        <figure>
          <img src="/static/img/maps/tetuan.jpg" alt="Mapa de locales de Ciudad Lineal">
          <figcaption>Mapa de locales de Ciudad Lineal. FRAVM.</figcaption>
        </figure>

        <p>En resumen, en los espacios de referencio citados sobresalen los grandes ejes comerciales de distrito, muy consolidados y con radios de influencia amplios, que desbordan incluso los entornos distritales. Tal es el caso de Bravo Murillo, Alcalá, General Ricardos o la avda. de la Albufera. En el resto de los distritos, la presencia de locales es menor que en los ámbitos que se acaba de describir. En ellos se repite la pauta que se ha destacado: ubicación en calles-plazas principales y sus proximidades, todas ellas con marcado carácter comercial, bien comunicadas y con afluencia de público. Así, por ejemplo, Monforte de Lemos, Alberto Palacios, López de Hoyos, Doctor Esquerdo, Francisco Silvela, San Cipriano…</p>

        <table-streets-by-number/>

        <p>Un dato digno de subrayar es que todos los grandes intercambiadores de transporte, salvo las terminales aeroportuarias, tienen cerca o muy cerca al menos una casa de juegos.</p>

        <figure>
          <img src="/static/img/maps/intercambiadores.jpg" alt="Mapa de locales e intercambiadores">
          <figcaption>Mapa de locales e intercambiadores. FRAVM.</figcaption>
        </figure>

        <p>En el siguiente mapa se observa, asimismo, que la mayoría de los locales de juego y apuestas están cerca de grandes centros comerciales y/o galerías de alimentación, si bien no sucede lo mismo al revés, es decir, muchos centros-galerías no tienen cerca un local de juegos.</p>

        <figure>
          <img src="/static/img/maps/centroscomerciales.jpg" alt="Mapa de locales y centros comerciales">
          <figcaption>Mapa de locales y centros comerciales. FRAVM.</figcaption>
        </figure>

        <p>Por último, merece la pena fijarse en la discordancia entre la localización de los locales de juego de gestión pública o sometidos a autorización especial (administraciones de lotería) y los locales de gestión privada. Aunque los primeros también tienden a instalarse en los ejes comerciales y zonas de gran afluencia de público, es claro que ofrecen una pauta de mayor dispersión y ocupación del espacio edificado.</p>

        <figure>
          <img src="/static/img/maps/gestionpublica.jpg" alt="Mapa de locales de gestión pública">
          <figcaption>Mapa de locales de gestión pública (administraciones de lotería). FRAVM.</figcaption>
        </figure>
        <!-- end implantacion -->


        <!-- start determinantes -->
        <h3 ref="determinantes">Determinantes de la localización</h3>
        <p>Aparte la relación fundamental con los ejes comerciales y espacios de aglomeración, ¿qué otras variables inciden en la localización de los locales de juego de gestión privada? La hipótesis por la que nos guiamos se basa en el hecho de que las casas de juego son negocios en el sentido más estricto del término. Como tales, la estrategia de localización deberá responder a dos fuerzas: por una parte, el acercamiento a la demanda actual y potencial y, por otra parte, la reducción de los costes de implantación. En la medida en que ambos se contradigan, se formarán soluciones de compromiso, intermedias.</p>
        <p>En las páginas que siguen se indagan ambos supuestos relacionando la distribución de los establecimientos por barrios con un abanico de características socioeconómicas y demográficas de los mismos. En concreto, se evalúa la relación de dependencia bivariada del número de locales con dos variables de estatus (la renta media de los hogares y el nivel de estudios de la población de 25 y más años), una de actividad económica (la tasa absoluta de desempleo), cinco demográficas (población, densidad, peso porcentual de los segmentos de jóvenes y de 65 y más años y tasa de extranjería) y una geográfica (distancia de los barrios a la Puerta del Sol).</p>
        <p>En todos ellos se sigue el mismo procedimiento de aproximación. Se aplica un enfoque doble. Por una parte, el análisis de contingencia permite establecer si existe asociación entre las variables y, en su caso, medir el grado o la fuerza de la misma. Por otra parte, los diagramas de dispersión y los gráficos sirven para examinar la linealidad de las asociaciones bivariadas. Al final del apartado se completa este enfoque mediante un análisis de regresión múltiple.</p>

        <h4 ref="rentabarrios">Renta media de los hogares por barrios</h4>

        <p>Sin duda, una de las primeras a estudiar es la renta neta media de los hogares. En la tabla que sigue se cruza el número de barrios según la renta y según el número de locales. La distribución de la renta está agrupada en cinco intervalos, de los cuales, en el tercero está la media simple de los barrios. Existe una asociación moderada entre ambas variables, pues se obtiene un valor alto del chi cuadrado (38,2, con una probabilidad muy baja de obtener un valor más alto, p = 0.005). A su vez, el coeficiente de contingencia, que mide la fuerza de la relación, es 0.46, sobre un coeficiente máximo posible de 0.89. La gran mayoría de los barrios que se hallan por encima de la renta media municipal o no tienen casas de juego o a lo sumo localizan 1 o 2. En cambio, la mayoría de los barrios que están por debajo de la media municipal tienen 3 o más. Más de la mitad de los barrios con 3 o más establecimientos se clasifican en los dos intervalos más bajos de la escala de rentas. En la segunda tabla se recogen los residuos tipificados corregidos de Haberman. Para un nivel de confianza de 0,95, se puede decir que los residuos mayores de 1,96 señalan los cruces de variables con más casos observados que los esperados si aquéllas fueran independientes o no estuvieran asociadas en una relación de dependencia y los residuos negativos mayores en valor absoluto de –1,96 apuntan los cruces con menos casos observados que los esperados. Para niveles de confianza inferiores sendos valores serían menores en valor absoluto (por ejemplo, para un nivel de confianza del 0,9, serían +/- 1,64). La interpretación de los residuos confirma de manera palmaria la asociación entre las variables y subraya el fuerte protagonismo en la distribución de las casas de juego de la polaridad barrios con rentas bajas y medio bajas y barrios con rentas medias altas y muy altas.</p>

        <p>TABLA</p>

        <p>TABLA</p>

        <p>En el siguiente mapa se recoge la distribución de los barrios según la renta neta media en 2015. La información incide en los resultados que se han subrayado arriba. Se observa que la mayoría de los barrios con números altos de locales, a su vez, son barrios con rentas netas por hogar residente bajas o medio bajas. Las excepciones se producen en Trafalgar y Argüelles, en el distrito de Chamberí, y Castillejos, en el de Tetuán. En general, en los barrios con rentas medias altas o no hay locales o hay muy pocos. No obstante, entre ambas variables la correlación es débil, aunque significativa. La correlación de Pearson es -0.39, sobre un máximo de -1, esto es, a mayor renta menor frecuencia de locales. Ahora bien, igualmente es cierto que muchos barrios con rentas bajas alojan pocos locales o ninguno, tal como se ve en el gráfico de dispersión adjunto. El valor absoluto del coeficiente aumenta algo si nos deshacemos de los barrios más periféricos, acotando el mapa a la almendra central y a la órbita de barrios perimetrales o próximos a la M-30.</p>

        <p>MAPA</p>
        
        <p>SCATTERPLOT</p>

        <p>El diagrama de cajas ilustra perfectamente la situación. En él se agrupan los barrios en cinco niveles de renta (de menos a más) y para cada uno se cuenta con la distribución del número de locales, señalando el valor máximo, mínimo, la mediana y los percentiles 25 y 75. A mayor amplitud de la caja, mayor dispersión de la variable. El máximo y la mediana son elevados en los estratos bajos de renta y desciende muy significativamente al pasar de uno al siguiente. Nótese la desemejanza extrema entre el primer y el quinto estratos.</p>

        <p>BOXPLOT</p>

        <p>En el gráfico siguiente se representa el promedio no ponderado de los ingresos medios de los hogares de los barrios clasificados según el número de locales de juego. El sentido descendente de la curva es palmario.</p>

        <locals-by-rent/>

        <h4 ref="paro">Tasa absoluta de paro</h4>

        <p>Otra variable a considerar es la tasa de desempleo por barrios: número de personas desempleadas/población activa de 16 y más años. No se cuenta con ese dato, sino con uno aproximado: la tasa absoluta de paro. Por ella se entiende la proporción de paro registrado de cada barrio sobre el total de la población (activa más inactiva) de 16 y más años. Se aprecia una asociación moderada entre la tasa y el número de locales: chi cuadrado igual a 36,8, con p = 0.002, y coeficiente de contingencia igual a 0,48 sobre un máximo de 0,89. Se cumple que los barrios con menor intensidad del desempleo tienen pocas casas de juego, mientras que éstas se concentran en los barrios con tasas altas y medias.</p>
        
        <p>TABLA</p>
        
        <p>TABLA</p>

        <p>Las tasas de paro más altas se producen en los barrios del sur y este de la ciudad, donde también se localizan más locales de juego. La correlación no es alta, sin embargo, como se observa en el diagrama de dispersión. En éste no se delinea una curva bien definida, sino que la nube de puntos es amorfa. La curva de promedios no ponderados de la tasa de paro muestra un ascenso según aumenta el número de locales hasta 8. Ahí baja, para luego volver a subir. Muchos barrios con tasas medias tienen bastantes establecimientos. La misma información se observa en el diagrama de cajas.</p>
        
        <p>MAPA</p>

        <p>SCATTERPLOT</p>

        <p>BOXPLOT</p>

        <p>FEVER</p>
        
        <h4 ref="educacion">Nivel educativo</h4>

        <p>Una variable con acusado poder de discriminación del estatus social de los barrios es el nivel de estudios acabados de la población residente. La web municipal ofrece ese dato referido a la población de 25 y más años. A partir de él se ha elaborado para cada barrio el índice de proporción de población de 25 y más años analfabeta, sin estudios o solo con estudios primarios. La tabla de contingencia que sigue muestra una leve relación entre ambas variables, pues el chi cuadrado asciende a 31,1, que es significativo para un valor p = 0.05. El coeficiente de contingencia sube a 0,44, sobre un máximo de 0,89. Se observa que en los barrios en los que la población tiene un nivel educativo elevado hay pocos locales y, al revés, en los barrios con proporciones superiores a la media municipal de habitantes con bajo nivel de estudios hay muchos locales.</p>

        <p>TABLA</p>

        <p>TABLA</p>

        <p>Pero, como ocurre a propósito de las variables ya analizadas, el grado de la asociación no es fuerte en tanto que también hay muchos barrios con bajo nivel de estudios y pocos locales y al revés, barrios con nivel medio o alto y muchos locales. La asociación «bajo nivel-muchos locales» es clara a propósito de Latina, Carabanchel, Usera y Puente de Vallecas, no así a propósito de Centro, Chamberí y Tetuán. A su vez, la asociación «alto nivel-pocos locales» es cierta para Salamanca, Chamartín, Moncloa y barrios periféricos de Hortaleza y Fuencarral, no así para Villaverde, Villa de Vallecas, Casco Histórico de Vicálvaro o el Gran San Blas. Se repiten aquí grosso modo los resultados que destacamos respecto de las variables renta media y tasa absoluta de paro. A mayor abundamiento, en el último gráfico que se inserta a continuación se aprecia cómo, en particular, son los barrios con 9-10 y 20 locales los que más rompen la linealidad de la relación, a saber, entre otros, Sol, Palos de Moguer, Castillejos, Quintana, Gaztambide, Cuatro Caminos… Todos ellos, barrios céntricos con niveles educativos en la media o por encima de la media, pero con muchos locales. </p>
        
        <p>MAPA</p>

        <p>SCATTERPLOT</p>

        <p>BOXPLOT</p>

        <p>FEVER</p>
        
        <h4 ref="distanciasol">Distancia de los barrios a la Puerta del Sol</h4>

        <p>Las relaciones que se han analizado hasta aquí sugieren la influencia de una cuarta variable: la menor-mayor centralidad de los barrios. Para estudiarla se ha medido la distancia de cada barrio a la Puerta del Sol: en concreto, se ha medido la distancia en línea recta de ésta a los centroides de cada barrio, según los determina QGIS. En el siguiente mapa se han clasificado los barrios en cinco coronas según la distancia al centro y sobre ellos se impresionan las casas de juego según su localización. Se observa que la mayoría caen dentro de la primera y la segunda corona, es decir, en los barrios más céntricos. Aún hay un número significativo en la tercera, En la cuarta y quinta, en cambio, hay muy pocos. Buena parte de los establecimientos están dentro de un radio de 6 Km alrededor de la Puerta del Sol. Supóngase que el origen de coordenadas cartesianas se coloca en la plaza de Colón. La mayoría de las casas caen al sur (eje de Carranza-Sagasta-Goya) y al oeste (eje de La Castellana-paseo de Recoletos-El Prado).</p>

        <p>MAPA</p>

        <p>El análisis de contingencia repite los resultados hasta ahora obtenidos: la relación de dependencia (distancia-locales) no es significativa, (chi cuadrado = 23.5, con p = 0.102), el coeficiente de contingencia es moderado (0,39 sobre un máximo de 0,89, pero con una p demasiado alta). Sucede que, si bien la mayoría de los locales se localizan en las dos primeras coronas, en ellas, asimismo, están muchos barrios sin o con muy pocos locales. Aquí la polarización sur-norte, en relación a Sol, es muy importante. En el diagrama de cajas se observa cómo la mayor dispersión se produce en la segunda y tercera coronas, en las que se localizan preferentemente los barrios con 5 y más locales.</p>

        <p>TABLA</p>

        <p>TABLA</p>

        <p>SCATTERPLOT</p>

        <p>BOXPLOT</p>

        <p>FEVER</p>
        
        <h4 ref="poblacion">Población</h4>

        <p>Se toma la población de los barrios como un indicador de tamaño. La relación es claramente significativa, ya que alcanza un chi cuadrado muy significativo (53,1, con p muy bajo), si bien el coeficiente que mide el grado de la relación es moderado (0,54, sobre un máximo de 0,89). Se produce la polaridad barrios pequeños-pocos locales y barrios grandes- muchos locales. Aun así, hay que destacar los residuos positivos muy elevados de los barrios grandes en el intervalo de 4-6 locales.</p>

        <p>TABLA</p>

        <p>TABLA</p>

        <p>La media no ponderada del tamaño según el número de locales aumenta en los tramos más bajos del número de locales, para luego zigzaguear. Nótese en el diagrama de cajas que la mediana aumenta significativamente en los barrios medianos y grandes respecto de los pequeños y muy pequeños y, asimismo, nótese que todos los barrios a partir de 20.000 habitantes tienen al menos un local.</p>

        <p>MAPA</p>

        <p>SCATTERPLOT</p>

        <p>BOXPLOT</p>

        <p>FEVER</p>
        
        <h4 ref="densidad">Densidad</h4>

        <p>La densidad, igualmente, muestra una relación de dependencia moderada con la distribución del número de locales. Así, el chi cuadrado sube a 51,5 (p = muy baja) y el coeficiente de contingencia es 0,53, sobre un máximo de 0,89. A más densidad, más locales. Pero, como en los casos anteriores, hay muchos barrios con densidades elevadas y pocos locales. De ahí la moderación de la fuerza de la relación.</p>

        <p>TABLA</p>

        <p>TABLA</p>

        <p>MAPA</p>

        <p>SCATTERPLOT</p>

        <p>BOXPLOT</p>

        <p>FEVER</p>

        <h4 ref="jovenes">Proporción de jóvenes</h4>

        <p>Se aprecia una asociación muy débil entre el peso de la población de 16-29 años por barrios y el número de locales: el chi cuadrado sube a 24,8, con un p = 0.074, significativo para un nivel de confianza del 92,6%. A su vez, el coeficiente de contingencia es bajo: 0,4, sobre un máximo de 0,89. No se perfila una tendencia clara, como muestra el diagrama de dispersión. El número de locales aumenta según lo hace el peso de la juventud. La presencia de casas de juego es más probable en los barrios que se mueven alrededor de la media o algo por encima en cuanto al % de jóvenes.</p>

        <p>TABLA</p>

        <p>TABLA</p>

        <p>MAPA</p>

        <p>SCATTERPLOT</p>

        <p>BOXPLOT</p>

        <p>FEVER</p>

        <h4 ref="senilidad">Tasa de senilidad</h4>

        <p>Como en el caso anterior, la asociación entre el peso de la población de 65 y más años y el número de locales es muy débil: el chi cuadrado es igual a 26,6, con p = 0,046, y el coeficiente de contingencia sube a 0,41, con un máximo posible de 0,89. El diagrama de dispersión no muestra una tendencia clara, mientras que la curva en el último gráfico sigue una trayectoria paralela al eje horizontal. La presencia de casas de juego es más probable en los barrios que se mueven alrededor de la media o algo por debajo en cuanto al % de mayores de 64 años.</p>

        <p>TABLA</p>

        <p>TABLA</p>

        <p>MAPA</p>

        <p>SCATTERPLOT</p>

        <p>BOXPLOT</p>

        <p>FEVER</p>

        <h4 ref="extranjeros">Tasa de extranjería</h4>

        <p>Al contrario que en los casos anteriores, el peso de la población extranjera por barrios sí se relaciona claramente con el número de locales. El chi cuadrado es 69,5 (con p muy baja) y el coeficiente de contingencia 0,59, sobre un máximo de 0,89. A mayor proporción de extranjeros más locales, si bien igualmente ocurre que hay barrios con pocos extranjeros y muchos locales y viceversa. La mayoría de los barrios con ningún local o a lo sumo 1-2 tienen proporciones bajas de inmigrantes, mientras que la mayoría de los barrios con 7 o más locales tienen proporciones altas.</p>

        <p>TABLA</p>

        <p>TABLA</p>

        <p>MAPA</p>

        <p>SCATTERPLOT</p>

        <p>BOXPLOT</p>

        <p>FEVER</p>

        <h4 ref="preciovivienda">Precio de las viviendas</h4>

        <p>Para medir la variable coste de instalación se ha tomado la media del precio de venta por metro cuadrado de las viviendas a finales de 2018, según el portal de Idealista.com. No se observa relación definida de esta variable y el número de locales por barrios, pues el chi-cuadrado suma tan solo 15,36, con una p muy alta = 0,498. Por ello se obvia reproducir las tablas de contingencia y de residuos típicos corregidos.</p>

        <p>MAPA</p>

        <p>SCATTERPLOT</p>

        <p>FEVER</p>

        <!-- end determinantes -->


        <!-- start recopilacion -->
        <h3 ref="recopilacion">Recopilación</h3>
        <p>Si se centra la atención en las características de los espacios en que se localizan la mayoría de los locales de juego y apuestas hay que subrayar su clarísima preferencia por los ejes comerciales distritales y ámbitos de gran afluencia de público, bien comunicados.</p>
        <p>Dando un paso más allá, cabe interrogarse por las características socioeconómicas y demográficas de los barrios en que se ubican. Entre la sección censal, demasiado pequeña, y el distrito, demasiado grande, la unidad geográfica intermedia es el barrio. Sería bueno trabajar con barrios naturales, pero, al no existir información estadística para ellos, hay que conformarse con los barrios administrativos.</p>
        <p>Pues bien, tenemos que los barrios en los que se localizan las casas de juego, preferentemente, se hallan dentro de la margen occidental de la almendra central y en los barrios periféricos del sur próximos a la M-30. En posiciones periféricas hay pocos locales. En general, son barrios de tamaño medio y grande, medidos por el número de habitantes, y con ratios de densidad poblacional elevados. Parece, así pues, que los establecimientos buscan la proximidad de un tejido urbano muy consolidado, con actividad, saturado.</p>
        <p>Por otra parte, en general, son barrios con niveles de renta neta de las familias inferiores a la media municipal o en torno a ella. Dada la asociación obvia entre el nivel de renta y el nivel de estudios de la población, son barrios en los que el peso de los mayores de 25 años sin estudios o con estudios acabados de bajo nivel es elevado. Lo mismo ocurre a propósito de la relación entre la distribución de los locales y la tasa de paro. Hay que llamar la atención sobre la significativa asociación existente entre el peso de la población inmigrante y la distribución espacial de las casas de juego.</p>
        <p>Son barrios con precios de las viviendas -euros por metro cuadrado- más económicos que en el resto de la ciudad, con la excepción de los más céntricos (distritos de Centro, Chamberí y, en parte, Tetuán).</p>
        <p>De tal modo, parece que los locales buscan zonas en las que la localización sea más barata y, al tiempo, zonas en las que la población residente tiene un nivel adquisitivo inferior a la media y un estatus social menos privilegiado, si bien por encima de los barrios más vulnerables.</p>
        <p>Surge la pregunta: la elección de estos barrios, ¿Ocurre porque los costes de instalación -alquileres y precios de venta de los inmuebles- son más asequibles o porque se trata de estar cerca de la clientela actual y potencial? O, más bien, ¿Inciden sendas dimensiones?</p>
        <p>Con la información empírica disponible no es fácil contestar. En realidad, los barrios con dotaciones amplias de establecimientos son minoría:  el 70% de los locales están en el 30% de los barrios. Hoy por hoy, es una dotación con una cobertura territorial limitada. No son negocios de proximidad en sentido estricto. La lógica de implantación no es la de, por así decirlo, una tienda de barrio.</p>
        <p>Así las cosas, hemos de guardarnos de conclusiones precipitadas. El fenómeno de los locales de juego es reciente, probablemente no ha tocado techo. Las pautas de localización ahora conocidas dan pistas sobre el futuro previsible.</p>
        <p>Así, encontramos muchos barrios con un perfil socioeconómico y demográfico parecido al de los barrios con muchos locales que, sin embargo, carecen de ellos o que a lo sumo alojan 1-2. De ahí que los análisis de contingencia, así como los diagramas de dispersión, que se han realizado arriba muestran relaciones bivariadas significativas, pero con coeficientes que miden la relación de dependencia moderados o incluso débiles. Significativamente no se ha encontrado relación alguna entre la dotación de locales por barrios y los precios, a la vez que la relación con la estructura de edades es muy leve.</p>
        <p>Abundando sobre la cuestión, en las páginas que siguen se aborda un análisis de regresión múltiple. La variable dependiente es el número de locales por barrios y las variables explicativas son los indicadores que se han estudiado. Las correlaciones de Pearson de las diferentes variables con la dependiente son, en general, bajas o insignificantes. Mejoran algo si se toman las correlaciones parciales, esto es, si sobre cada asociación bivariada se introduce una variable de control. Ambas correlaciones se recogen en la siguiente tabla: en la segunda columna están las correlaciones de número de locales con las demás variables y en las columnas restantes están las parciales de número de locales con las demás controlando por la variable que aparece en cabecera. Las primeras se leen en vertical y las segundas en horizontal. La estimación de relaciones curvilíneas (logarítmicas, cúbicas, cuadradas, inversas, logísticas…) no ofrece mejores resultados.</p>

        <p>TABLA</p>

        <p>Después de ensayar diversos modelos de regresión, uno de los que mejores resultados arrojan es el que liga a la raíz cuadrada del número de locales con las variables densidad, % de inmigrantes y población. Los modelos alternativos examinados, por unas u otras razones, incumplen los criterios del análisis de mínimos cuadrados<sup>5</sup>. La correlación múltiple es alta (0,721), lo que significa que el 52% de la varianza está explicada. Las variables renta, distancia y precios no aparecen, cuando sí lo hacen en los análisis de contingencia y en las correlaciones bivariadas. Sucede que su influencia es canalizada por las tres variables introducidas en el modelo, con las que están correlacionadas.</p>

        <div class="legend">
          <div class="legend__wrap">
            <sup>5</sup> El escogido cumple el criterio de normalidad de los residuos (Jarque-Bera = 4,93, con p = 0,085), el de no heterocedasticidad (contraste de heterocedasticidad de White = 13,49, inferior al valor crítico de 16,92) y el de no colinealidad (los factores de inflación de la varianza de las tres variables son muy inferiores a 10). A su vez, el modelo está bien especificado, según el contraste de Ramsey (F = 1,57 y p = 0,212, superior, pues, a 0.05). Todos los coeficientes son significativos individualmente (valores de t) y en conjunto (valor de F). 
          </div>
        </div>

        <table-regression/>
        <!-- end recopilacion -->

        <!-- start othercities -->
        <h3 ref="othercities">La localización en otras grandes ciudades</h3>
        <p>A partir de las web de las 3 empresas más importantes del sector (Sportium, Codere y Luckia) se han extraído las direcciones de sus locales en España. La relación no es completa. En particular, faltan muchos de los locales de Luckia. No obstante, la información es valiosa, al menos, a efectos ilustrativos. En el <router-link :to="{name:'map'}">mapa general</router-link> se aprecia la especial concentración de los locales en la Comunidad de Madrid, Galicia, Euzkadi y el litoral mediterráneo.</p>
        <p>El descenso a las grandes capitales confirma la principal conclusión a que se ha llegado más atrás: la concentración en los distritos céntricos y la ausencia o escasa presencia en los distritos periféricos, en enclaves con claro carácter comercial, bien comunicados y con afluencia de público.</p>

        <h4 ref="barcelona">Barcelona</h4>
        <p>En Barcelona, la mayor concentración se da en los distritos de Ciutat Vella y Eixample. Destacan calles como Vía Laitena, travesera de Gracia, Gran Vía de les Corts Catalanes y la avda. Diagonal.</p>

        <figure>
          <img src="/static/img/maps/barcelona.jpg" alt="Mapa de locales de Barcelona">
          <figcaption>Mapa de locales de Barcelona. Dadasign y FRAVM.</figcaption>
        </figure>

        <h4 ref="valencia">Valencia</h4>
        <p>En la capital valenciana, 8 distritos concentran el 60% de los locales detectados. De ellos destacan Rascanya, Quatro Carreres, Camins al Grau y la Saidia. No obstante, se observa una extensión-cobertura territorial muy superior a la vista en Madrid y Barcelona y a la que se verá en Sevilla, Málaga, Zaragoza y Bilbao. Significativamente Ciutat Vella tiene pocos locales.</p>

        <figure>
          <img src="/static/img/maps/valencia.jpg" alt="Mapa de locales de Valencia">
          <figcaption>Mapa de locales de Valencia. Dadasign y FRAVM.</figcaption>
        </figure>

        <h4 ref="malaga">Málaga</h4>
        <p>En Málaga, más de la mitad de los locales se localizan en los distritos de Centro y Carretera de Cádiz, con una especial concentración sobre el eje longitudinal de la avda. Velázquez-Héroes de Sostoa.</p>

        <figure>
          <img src="/static/img/maps/malaga.jpg" alt="Mapa de locales de Málaga">
          <figcaption>Mapa de locales de Málaga. Dadasign y FRAVM.</figcaption>
        </figure>

        <h4 ref="sevilla">Sevilla</h4>
        <p>En Sevilla, las mayores concentraciones se producen al este del río (distritos de Triana-Remedios, sobre el eje de la avda. República Argentina) y en el distrito de Macarena (especialmente en el eje de la avda. Miraflores).</p>

        <figure>
          <img src="/static/img/maps/sevilla.jpg" alt="Mapa de locales de Sevilla">
          <figcaption>Mapa de locales de Sevilla. Dadasign y FRAVM.</figcaption>
        </figure>

        <h4 ref="zaragoza">Zaragoza</h4>
        <p>En Zaragoza se repite la concentración en los distritos céntricos: Centro y Delicias, seguidos por Casco Histórico y Universidad.</p>

        <figure>
          <img src="/static/img/maps/zaragoza.jpg" alt="Mapa de locales de Zaragoza">
          <figcaption>Mapa de locales de Zaragoza. Dadasign y FRAVM.</figcaption>
        </figure>

        <h4 ref="bilbao">Bilbao</h4>
        <p>En Bilbao, la mayor concentración tiene lugar en el distrito de Abando, en pleno centro de la ciudad, al que se suman los locales situados en el eje de la N-634, en el distrito de Recalde.</p>

        <figure>
          <img src="/static/img/maps/bilbao.jpg" alt="Mapa de locales de Bilbao">
          <figcaption>Mapa de locales de Bilbao. Dadasign y FRAVM.</figcaption>
        </figure>

        <p>Por último, vemos que las casas de juego en la región se distribuyen -además de por Madrid- por los municipios del corredor del Henares y la zona sur metropolitana. Hay pocos en el oeste y norte. De tal modo, se hace notar la asociación con las variables nivel de renta de las familias (rentas más bajas, más locales) y tasa de extranjería (proporciones más altas, más locales). En el interior de los diferentes municipios se repite la concentración en las zonas centrales.</p>

        <figure>
          <img src="/static/img/maps/cmadrid.jpg" alt="Mapa de locales de la Comunidad de Madrid">
          <figcaption>Mapa de locales de la Comunidad de Madrid. Dadasign y FRAVM.</figcaption>
        </figure>

        <figure>
          <img src="/static/img/maps/metromadrid.jpg" alt="Mapa de locales del área metropolitana de Madrid">
          <figcaption>Mapa de locales del área metropolitana de Madrid. Dadasign y FRAVM.</figcaption>
        </figure>
        <!-- end othercities -->

        <!-- start educationcenters -->
        <h3 ref="educationcenters">Cercanía a los institutos públicos</h3>
        <p>Uno de los aspectos de los locales de juego y las casas de apuestas que más preocupa a la ciudadanía es la cercanía de éstas a los institutos. El Real Decreto 42/2019 del Consejo de Gobierno de la Comunidad de Madrid da nueva redacción al artículo 34 del Reglamento de Juego, regulando que cualquier establecimiento ha de estar a una distancia no inferior a 100 metros respecto de los colegios en que se impartan enseñanzas regladas y obligatorias (primaria o secundaria). A su vez, la disposición transitoria sexta dice que los locales que estén dentro de ese radio disponen de un periodo de 10 años para adaptarse.</p>

        <p>Según los datos del IECM, en la ciudad hay 863 colegios públicos y privados que imparten primaria y/o secundaria. En esa cifra se incluyen, además de los colegios, los institutos, los centros de educación especial y los centros extranjeros en España. Identificamos 53 colegios con locales dentro del radio de los 100 metros, un 6,1% del total de centros. De ellos, 30 son privados y 23 públicos<sup>6</sup>. En el siguiente cuadro se ofrece el detalle de los colegios afectados. Los locales «mal colocados» suman 61.</p>

        <div class="legend">
          <div class="legend__wrap">
            <sup>6</sup> Estas cifras las tomamos como una estimación aproximada. El dato real variará algo hacia arriba, en tanto es probable que el universo de locales que hemos reconstruido esté incompleto.
          </div>
        </div>

        <table-locals-by-educationcenters/>

        <p>A continuación se incluyen tres mapas del mayor interés. El primero arroja una vista panorámica de la confluencia de los locales y los colegios. Es muy significativo el contraste entre la amplia cobertura territorial de los centros educativos y la concentración de los locales y salones. La superposición de radios entre sendas redes se produce en el ámbito de éstos. En el segundo mapa  se recoge, a modo de ejemplo, un colegio que tiene en su entorno inmediato tres establecimientos. Nótese cómo dos de ellos están a bastante menos de 100 metros. En el tercero mapa, por último, se concretan los colegios en cuyo radio de 100 metros a la redonda hay uno o más establecimientos. Centro, Puente de Vallecas y Latina son los tres distritos con más colegios afectados.</p>

        <figure>
          <img src="/static/img/maps/localescolegios.jpg" alt="Mapa de locales y colegios de la Comunidad de Madrid">
          <figcaption>Mapa de locales y colegios de la Comunidad de Madrid. FRAVM.</figcaption>
        </figure>

        <figure>
          <img src="/static/img/maps/localescolegiosarea.jpg" alt="Colegio con 3 locales en menos de 100m">
          <figcaption>Colegio con 3 locales en menos de 100m. FRAVM.</figcaption>
        </figure>

        <figure>
          <img src="/static/img/maps/localescolegiosmadrid.jpg" alt="Colegios con alǵun local a menos de 100m">
          <figcaption>Colegios con alǵun local a menos de 100m. FRAVM.</figcaption>
        </figure>

        <p>Aunque la normativa vigente fija una distancia mínima de 100 metros de cada local y salón a un colegio, es indudable que el caso más preocupante y sobre el que merece la pena enfatizar la atención es el de la distancia respecto de los centros de secundaria. La regla de los 100 metros parece muy tímida. En el siguiente cuadro se estima el número de locales y salones que tienen algún colegio dentro de su área considerando varios radios.</p>

        <locals-by-educationcenters/>
        <!-- end educationcenters -->

      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'report-page',
  created: function(){
    window.scrollTo(0,0);
  },
  methods: {
    scrollTo(refName) {
      let element = this.$refs[refName];
      window.scrollTo(0, element.offsetTop - 60);
    }
  }
}

</script>