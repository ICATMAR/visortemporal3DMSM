<template>
  <div id="info-panel">
    <div class="content">
      <!-- About the app -->
      <h3>{{$t('infoPanel.title')}}</h3>
      <p> {{$t('infoPanel.p1')}} 
        {{$t('infoPanel.p1_2')}}
        <a href="https://github.com/ICATMAR/visortemporal3DMSM" target="_blank">{{$t('infoPanel.github')}}</a>
      </p>
      <!-- About obsea -->
      <h4>{{$t('infoPanel.aboutObsea')}}</h4>
      <p>{{$t('infoPanel.p2')}}</p>
      <img src="/visortemporal3DMSM/img/mapaboies.png" style="width: 80%; margin: auto; display: block; padding-bottom: 20px">
      
      <!-- Contact -->
      <h4>{{$t('infoPanel.contact')}}</h4>
      <p>{{$t('infoPanel.p3')}}</p>
      <!-- Funding -->
      <h4>{{$t('infoPanel.funding')}}</h4>
      <p>{{$t('infoPanel.p4')}}</p>
      <!-- Funding image -->
      <img src="/visortemporal3DMSM/img/Logos.png" style="max-width: 100%; filter: invert()">
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
p {
  text-align: justify;
}
</style>
