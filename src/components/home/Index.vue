<template>
  <div class="container maintenance-container">
    <div class="row text-center maintenance-row">
      <div class="col-12">
        <img class="maintenance-logo" src="./../../assets/logo.png" alt="">
      </div>
      <div class="col-12 maintenance-col-tit">{{tit}}</div>
      <div class="col-12 font-weight-light maintenance-col-txt">{{txt}}</div>
      <div class="col-12 font-weight-light maintenance-col-url">
        {{urlTxt1}}<a :href="url">{{urlName}}</a>{{urlTxt1}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        tit: 'Down for Maintenance',
        txt: 'Ontology-Explorer is currently down for maintenance.',
        url: 'https://discordapp.com/invite/4TQujHj',
        urlTxt1: 'Follow us on ',
        urlName: 'Discord',
        urlTxt2: ' for updates.'
      }
    }
  }
</script>

<style>
  .maintenance-container {
    width:70%;
  }

  .maintenance-row {
    height: 360px;
    margin-top: 30%;
    border: white solid 1px;
    border-radius: 5px;
    padding: 30px;
    color: white;
  }

  .maintenance-logo {
    max-width: 100%;
    margin-top: 15px;
  }

  .maintenance-col-tit {
    margin-top: 5%;
    font-size: 32px;
  }

  .maintenance-col-txt {
    margin-top: 5%;
    font-size: 16px;
  }

  .maintenance-col-url {
    margin-top: 1%;
    font-size: 16px;
  }
</style>
