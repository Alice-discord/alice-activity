<script setup>

</script>

<template>

  <div class="centerdiv">
    <img src="./assets/Presents.svg" class="logo" style="width: 30vw;height: 37.36vh;">
  </div>

  <div style="padding-top: 10vh;" class="centerdiv">
      
    <div class="buttons">

        <button>
          <p class="buttonpad">
            <img src="">
            <br>AI or 
            <br>Grass toucher
            <br>(Coming soon)
          </p>
        </button>

        <button>
          <p class="buttonpad">
            <img src="">
            <br>Guess the 
            <br>Celebrity
            <br>(In development)
          </p>
        </button>

        <button>
          <p class="buttonpad">
            <img src="">
            <br>AI Garlic
            <br>Telephone
            <br>(Coming soon)
          </p>
        </button>
      </div>
  </div>

</template>

<style scoped>
.buttons { 
  width: 800px;
  table-layout: fixed;
  border-collapse: collapse; 
}
.buttons button { 
  width: 200px;
  margin: 2vw;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #BB3539);
}
.centerdiv {
  display: flex;
  place-items: center;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
.buttonpad {
  font-size: x-large;
}
</style>