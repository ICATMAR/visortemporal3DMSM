let en;
export default en = {
  "Date": "Date",

  "buoyButtonTitle": "Center the camera on the surface buoy",
  "baseButtonTitle": "Center the camera on the underwater observatory",

  "waveButtonTitle": "Set the ocean swell",
  "windButtonTitle": "Set the wind",

  "externalLinkButton": "Go to the data source",
  "measuresButton": "Open/Close the data panel",

  "compassButtonTitle": "Set the camera facing north",


  "WSPD": "Wind speed",
  "WDIR": "Wind direction",
  "Hm0": "Wave height (average)",
  "Hmax": "Wave maximum height",
  "Mdir": "Wave direction (average)",
  "Spr1": "Wave directional spreading",
  "AIRT": "Air temperature",
  "TEMP": "Temperature (underwater base)",
  "PSAL": "Salinity (underwater base)",

  "Wind": "Wind",
  "Waves": "Waves",

  "Wave height": "Wave height",
  "Swell direction": "Swell direction",
  "Wave steepness": "Wave steepness",

  "Wind speed": "Wind speed",
  "Wind direction": "Wind direction",
  "Wave significant height": "Wave significant height",
  "Air temperature": "Air temperature",
  "Atmospheric pressure": "Atmospheric pressure",
  "Sea surface temperature": "Sea surface temperature",
  "Sea bottom temperature": "Sea bottom temperature",
  "Salinity": "Salinity",


  infoPanel: {
    title: "About the application",
    p1: `This application is a 3D simulation of the meteorological and oceanographic conditions of the MSM buoys. The objective of this application is to transfer the knowledge and information acquired by the buoys. This application is being developed by Gerard Llorach-Tó, researcher at ICATMAR and the Institute of Marine Sciences (ICM-CSIC) of Barcelona."`,
    p1_2: `. The code for the application can be found at the `,
    github: `github repository.`,

    aboutObsea: `About the MSM buoys`,
    p2: `These buoys are installed at different points along the Catalan coast. They collect wave, wind, currents, temperature and salinity data. On the map you can see the location of the buoys.`,

    contact: "Contact",
    p3: `For inquiries about the application, contact Gerard Llorach-Tó <gerard.llorach at csic.es>. For questions about the MSM buoys, contact <observacions at icatmar.cat>.`,

    funding: "Funding",
    p4: `ICATMAR is funded by the Generalitat de Catalunya and the CSIC through the European Maritime, Fisheries and Aquaculture Fund (FEMPA) - BOE-A-2023-25106.`,

  },


  seaPanel: {
    title: "Sea simulation parameters",
    p1: "This simulation is made with Gestner waves, following the",
    p1_1: "tutorial by Jasper Flick",
    p2: `The simulation generates the parameters of 16 waves according to wave measurements, such as the mean
          wave height, the maximum wave height and the direction of the swell.`,
    oceanSteepness: "Set ocean chopiness",
    waveSignificantHeight: "Set wave significant height",
    meanWaveDirection: "Set the average direction of the waves",
    swellParams: "Set swell parameters",
  },

  windPanel: {
    title: "Wind simulation parameters",
    p1: "The cloth simulation is using verlet integration (Hitman's ragdoll), following the",
    p1_1: "tutorial by Jared Counts",
    p2: `The simulation is based on the wind speed and direction measurements, which modify
        the forces affecting the cloth.`,
    windParams: 'Set wind parameters',
  },


  timeControl: {
    "timeSliderTip": "Drag to select the date",
    "dailyMax": "Daily maximum (OBSEA)",
    "halfHourly": "30min average (OBSEA)",
    "playPause": "Play/Pause",
    "stepForward": "Step forward",
    "stepBackward": "Step backward",
    "forward": "Fast-forward",
    "backward": "Rewind"
  },
  
  


  "Data": "Data",


}