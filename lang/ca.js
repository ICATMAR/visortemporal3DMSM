let ca;
export default ca = {
  "Date": "Data",

  "buoyButtonTitle": "Centra la càmara a la boia de superficie",
  "baseButtonTitle": "Centra la càmara a l'observatori submarí",

  "waveButtonTitle": "Configura l'onatge",
  "windButtonTitle": "Modifica el vent",

  "externalLinkButton": "Ves a la font de dades",
  "measuresButton": "Obre/Tanca el panell de dades",

  "compassButtonTitle": "Orienta la càmara cap al nord",


  "WSPD": "Velocitat del vent",
  "WDIR": "Direcció del vent",
  "Hm0": "Altura d'onatge (mitja)",
  "Hmax": "Altura màxima d'onatge",
  "Mdir": "Direcció d'onatge (mitja)",
  "Spr1": "Difusió direccional d'onatge",
  "AIRT": "Temperatura de l'aire",
  "TEMP": "Temperatura (base submarina)",
  "PSAL": "Salinitat (base submarina)",

  "Wind": "Vent",
  "Waves": "Onatge",

  "Wave height": "Altura d'onatge",
  "Swell direction": "Direcció de l'onatge",
  "Wave steepness": "Període",

  "Wind speed": "Velocitat del vent",
  "Wind direction": "Direcció del vent",
  "Wave significant height": "Altura significant d'onatge",
  "Air temperature": "Temperatura de l'aire",
  "Atmospheric pressure": "Pressió atmosfèrica",
  "Sea surface temperature": "Temperatura superficial del mar",
  "Sea bottom temperature": "Temperatura del fons del mar",
  "Salinity": "Salinitat",


  infoPanel: {
    title: "Sobre l'aplicació",
    p1: `Aquesta aplicació és una simulació en 3D de les condicions meteorològiques i oceanogràfiques 
    de les boies MSM. L'objectiu d'aquesta aplicació és transferir el coneixement i la informació adquirida 
    per les boies. Aquesta aplicació està sent desenvolupada per en Gerard Llorach-Tó, investigador de l'ICATMAR i l'Institut de Ciències del mar (ICM-CSIC) de Barcelona.
        `,
    p1_2: `. El codi de l'aplicació es pot trobar al `,
    github: `repositori github.`,

    aboutObsea: `Sobre les boies MSM`,
    p2: `Aquestes boies estan instal·lades a diferents punts de la costa catalana. Recullen dades d'onatge, vent, corrents, temperatura i salinitat de l'aigua.
    En el mapa podeu veure la ubicació de les boies.`,

    contact: "Contacte",
    p3: `Per a consultes sobre l'aplicació, poseu-vos en contacte amb Gerard Llorach-Tó <gerard.llorach at csic.es>. Per preguntes sobre les boies MSM, poseu-vos en contacte amb <observacions at icatmar.cat>.`,

    funding: "Finançament",
    p4: `L'ICATMAR està finançat per la Generalitat de Catalunya i el CSIC a través del Fons Europeu Marítim, de Pesca i d'Aqüicultura (FEMPA) - BOE-A-2023-25106.`,

  },


  seaPanel: {
    title: "Paràmetres de la simulació del mar",
    p1: "Aquesta simulació està fet amb onades de Gestner, seguint el",
    p1_1: "tutorial de Jasper Flick",
    p2: `La simulació genera els paràmetres de 16 onades segons les mesures d'onatge, tals com l'altura mitjana d'onatge,
    l'altura màxima d'onatge i la direcció de l'onatge.`,
    oceanSteepness: "Modifica com de picat está el mar",
    waveSignificantHeight: "Modifica l'altura significant d'onatge",
    meanWaveDirection: "Modifica la direcció promig de les onades",
    swellParams: "Modifica els paràmetres de l'onatge principal",
  },


  windPanel: {
    title: "Paràmetres de la simulació de vent",
    p1: "La simulació de tela està feta amb verlet integration (Hitman's ragdoll), seguint el",
    p1_1: "tutorial de Jared Counts",
    p2: `La simulació està basada en les mesures de la velocitat del vent i la seva direcció, que modifiquen
        les forces que afecten la tela.`,
    windParams: 'Modifica el vent',
  },

  timeControl: {
    "timeSliderTip": "Arrossega per seleccionar la data",
    "dailyMax": "Màxim diari (OBSEA)",
    "halfHourly": "Mitjana 30min (OBSEA)",
    "playPause": "Reproduïr/Aturar",
    "stepForward": "Ves al següent punt",
    "stepBackward": "Ves al punt anterior",
    "forward": "Avanç rápid",
    "backward": "Rebobinar"
  },


    "January": "Gener",
    "February": "Febrer",
    "March": "Març",
    "April": "Abril",
    "May": "Maig",
    "June": "Juny",
    "July": "Juliol",
    "August": "Agost",
    "September": "Setembre",
    "October": "Octubre",
    "November": "Novembre",
    "December": "Desembre",
    "Jan": "Gen",
    // "Feb": ,
    // "Mar": ,
    "Apr": "Abr",
    "May": "Maig",
    // "Jun": ,
    // "Jul": ,
    "Aug": "Ago",
    "Sep": "Set",
    // "Oct": ,
    // "Nov": ,
    "Dec": "Des",
  

  "Data": "Dades",
}