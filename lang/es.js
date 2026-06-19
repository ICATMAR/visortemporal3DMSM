let es;
export default es = {
  "Date": "Fecha",

  "buoyButtonTitle": "Centra la cámara en la boya de superfície",
  "baseButtonTitle": "Centra la cámara en el observatorio submarino",

  "waveButtonTitle": "Configura el oleaje",
  "windButtonTitle": "Modifica el viento",

  "externalLinkButton": "Ve a la fuente de datos",
  "measuresButton": "Obre/Cierra el panel de datos",

  "compassButtonTitle": "Orienta la camara hacia el norte",



  "WSPD": "Velocidad del viento",
  "WDIR": "Dirección del viento",
  "Hm0": "Altura oleaje (media)",
  "Hmax": "Altura máxima de oleaje",
  "Mdir": "Dirección oleaje (media)",
  "Spr1": "Difusión direccional oleaje",
  "AIRT": "Temperatura del aire",
  "TEMP": "Temperatura (base submarina)",
  "PSAL": "Salinidad (base submarina)",

  "Wind": "Viento",
  "Waves": "Oleaje",

  "Wave height": "Altura de oleaje",
  "Swell direction": "Dirección del oleaje",
  "Wave steepness": "Periodo",

  "Wind speed": "Velocidad del viento",
  "Wind direction": "Dirección del viento",
  "Wave significant height": "Altura significante de oleaje",
  "Air temperature": "Temperatura del aire",
  "Atmospheric pressure": "Pressión atmosférica",
  "Sea surface temperature": "Temperatura superficial del mar",
  "Sea bottom temperature": "Temperatura del fondo del mar",
  "Salinity": "Salinidad",



  infoPanel: {
    title: "Acerca de la aplicación",
    p1: `Esta aplicación es una simulación 3D de las condiciones meteorológicas y oceanográficas de las boyas MSM. El objetivo de esta aplicación es transferir el conocimiento y la información adquirida por las boyas. Esta aplicación está siendo desarrollada por Gerard Llorach-Tó, investigador de ICATMAR y el Instituto de Ciencias del Mar (ICM-CSIC) de Barcelona."`,
    p1_2: `. El código de la aplicación se puede encontrar en el `,
    github: `repositorio github.`,

    aboutObsea: `Acerca de las boyas MSM`,
    p2: `Estas boyas están instaladas en diferentes puntos de la costa catalana. Recogen datos de oleaje, viento, corrientes, temperatura y salinidad. En el mapa podéis ver la ubicación de las boyas.`,

    contact: "Contacto",
    p3: `Para consultas sobre la aplicación, póngase en contacto con Gerard Llorach-Tó <gerard.llorach at csic.es>. Para preguntas sobre las boyas MSM, póngase en contacto con <observacions at icatmar.cat>.`,

    funding: "Financiación",
    p4: `ICATMAR está financiado por la Generalitat de Catalunya y el CSIC a través del Fondo Europeo Marítimo, de Pesca y de Acuicultura (FEMPA) - BOE-A-2023-25106.`,

  },



  seaPanel: {
    title: "Parámetros de la simulación del mar",
    p1: "Esta simulación está hecha con olas de Gestner, según el",
    p1_1: "tutorial de Jasper Flick",
    p2: `La simulación genera los parámetros de 16 olas seguns las medidas de oleaje, tales com la altura media de oleaje,
    la altura máxima de oleaje y la dirección del oleaje.`,
    oceanSteepness: "Modifica como de picado está el mar",
    waveSignificantHeight: "Modifica la altura significante de oleaje",
    meanWaveDirection: "Modifica la dirección promedio de las olas",
    swellParams: "Modifica los parámetros del oleaje principal",
  },


  windPanel: {
    title: "Parámetros de la simulación de viento",
    p1: "La simulación de tejido está hecha con verlet integration (Hitman's ragdoll), siguiendo el",
    p1_1: "tutorial de Jared Counts",
    p2: `La simulación está basada en las medidas de la velocidad del viento y su dirección, que modifican
        las fuerzas que afectan la tela.`,
    windParams: 'Modifica el viento',
  },

  timeControl: {
    "timeSliderTip": "Arrastra para seleccionar la fecha",
    "dailyMax": "Máximo diario (OBSEA)",
    "halfHourly": "Promedio 30min (OBSEA)",
    "playPause": "Reproducir/Parar",
    "stepForward": "Desplázate al siguiente punto",
    "stepBackward": "Desplázate al punto anterior",
    "forward": "Avance rápido",
    "backward": "Marcha atrás"
  },  
  



  
    "January": "Enero",
    "February": "Febrero",
    "March": "Marzo",
    "April": "Abril",
    "May": "Mayo",
    "June": "Junio",
    "July": "Julio",
    "August": "Agosto",
    "September": "Septiembre",
    "October": "Octubre",
    "November": "Noviembre",
    "December": "Diciembre",
    "Jan": "Ene",
    // "Feb": ,
    // "Mar": ,
    "Apr": "Abr",
    // "May": "May",
    // "Jun": ,
    // "Jul": ,
    "Aug": "Ago",
    // "Sep": "Sep",
    // "Oct": ,
    // "Nov": ,
    "Dec": "Dic",
  
  

  "Data": "Datos",
}