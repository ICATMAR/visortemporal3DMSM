<template>
  <!-- Container -->
  <div id="app-manager" ref="appManager">

    <!-- Canvas 3D -->
    <canvas3D></canvas3D>

    <!-- Left Icons -->
    <instruments-menu></instruments-menu>

    <!-- Bottom Bar -->

    <!-- Top right icons -->
    <top-right-nav></top-right-nav>

    <bottom-section></bottom-section>


    <!-- Central Panel -->
    <central-panel></central-panel>



    <!-- OBSEA Title -->
    <img class="OBSEABanner" src="/visortemporal3DMSM/Assets/icatmar-mini-logo.svg">
  </div>
</template>



<script>
/*
                                APP MANAGER
              /            /          \            \             \
    LEFT MENU        CANVAS       RIGHTTOPICONS    CURRENTDATA    LANGUAGE-SELECTOR
        |
    LEFT PANEL

*/

// Import components
import Canvas3D from "/visortemporal3DMSM/Components/Canvas3D.vue"
import InstrumentsMenu from "/visortemporal3DMSM/Components/Instruments/InstrumentsMenu.vue"
import TopRightNav from "/visortemporal3DMSM/Components/TopRight/TopRightNav.vue"
import BottomSection from "/visortemporal3DMSM/Components/Bottom/BottomSection.vue"
import CentralPanel from "/visortemporal3DMSM/Components/CentralPanel.vue"

export default {
  name: "AppManager",
  created() {
    
  },
  mounted() {
    // Mobile bottom bar full height fix
    // https://dev.to/admitkard/mobile-issue-with-100vh-height-100-100vh-3-solutions-3nae
    this.$refs.appManager.style.height = window.innerHeight + 'px';
    window.onresize =  () => {
      this.$refs.appManager.style.height = window.innerHeight + 'px';
    }; 
  },
  data (){
    return {

    }
  },
  methods: {
    //onclick: function(e){},
  },
  components: {
    "canvas3D": Canvas3D,
    "instruments-menu": InstrumentsMenu,
    "top-right-nav": TopRightNav,
    "bottom-section": BottomSection,
    "central-panel": CentralPanel,
  }
}
</script>


<style scoped>
#app-manager {
    width: 100vw;

    height: 100vh;
    position: fixed;
    /*height: 100%;
    position: absolute;*/

  }

  .OBSEABanner {
    width: 80px;
    position:absolute;
    top: 10px;
    left: 10px;
  }
  @media screen and (max-width: 800px) {
    .OBSEABanner {
      width: 40px;
    }
  }
</style>