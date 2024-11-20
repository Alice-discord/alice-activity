<script setup>

import { onMounted } from 'vue';
import { animate, spring } from 'motion';

onMounted(() => {
  const animation = animate(".box", {scale: 1.1},
    {
      duration: 1,
      easing: spring(),
      repeat: Infinity,
      direction: "alternate"
    }
  )
})

</script>

<template>

  <div class="box">
    </div>

  <div>

    <Transition name="slide-down" appear>
      <img src="/Alice.svg" alt="Alice A.I Logo" class="hidden-top logo" style="
      width: 15.809vw;
      height: 19.722vh;
      margin-top: 2.5em;
      ">
    </Transition>

    <Transition name="slide-down" appear>
      <img src="./assets/Alice&Aff.svg" alt="Alice Disocrd A.I & Aff Text" class="logo" style="
      width: 13.3vw;
      height: 5.7vh;
      margin-top: -3.15em;
      ">
    </Transition>

    <Transition name="slide-down" appear>
      <img src="./assets/Presents.svg" alt="Presents Text" class="logo" style="
      width: 14.6vw;
      height: 2.5vh;
      margin-top: -2.75em;
      ">
    </Transition>

    <Transition name="bounce" appear>
      <h1 style="
      text-align: center;
      margin-top: -1.75em;
      padding: 1.5em;
      font-size: 3.2;
      line-height: 1.1;
      ">
        %PlaceholderTEXT%
      </h1>
    </Transition>

  </div>

  <div style="padding-top: 10vh;" class="centerdiv">
      
    <div class="buttons">

      <Transition name="slide-up" appear>
        <button style="margin-top: -1.75em;">
          <p class="🥴">
            <img src="./assets/Placeholder.svg" alt="Place Holder Image 1" style="
              width: 7.95vw;
              height: 9.9vh;
            ">
            <br>AI or 
            <br>Grass toucher
            <br>[Coming soon]
          </p>
        </button>
      </Transition>

      <Transition name="slide-up" appear>
        <button style="margin-top: -1.75em;">
          <p class="🥴">
            <img src="./assets/Placeholder.svg" alt="Place Holder Image 2" style="
              width: 7.95vw;
              height: 9.9vh;
            ">
            <br>Guess the 
            <br>A.I Celebrity
            <br>[Coming soon]
          </p>
        </button>
      </Transition>

      <Transition name="slide-up" appear>
        <button style="margin-top: -1.75em;">
          <p class="🥴">
            <img src="./assets/Placeholder.svg" alt="Place Holder Image 3" style="
              width: 7.95vw;
              height: 9.9vh;
            ">
            <br>AI Garlic
            <br>Telephone
            <br>[Coming soon]
          </p>
        </button>
      </Transition>

      </div>

  </div>

</template>

<style scoped>

.box {
  width: 80vw;
  background-color:darkorange
}

.buttons { 
  width: 80vw;
  max-width:max-content;
  max-height:max-content;
  table-layout: fixed;
  border-collapse: collapse; 
}

.buttons button { 
  width: 17vw;
  max-width:max-content;
  max-height:max-content;
  margin: 2vw;
  font-size: 2vw;
  border: 4px solid #BB3539;
  background-color: #bb353975;
  border-radius: 20%;
}

.buttons button:hover { 
  transition: all 1s ease-in-out;
  background-color: #BB3539;
}

.🥴 {
  max-width:max-content;
  max-height:max-content;
  padding-left: 1.3vw;
  padding-right: 1.3vw;
}

.logo {
  padding: 1.5em;
  display: flex;
  margin-left: auto;
  margin-right: auto;
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

.slide-down-enter-active {
  transition: all 1s ease-out;
}
.slide-down-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-30vh);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 1s ease-out;
}
.slide-up-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(30vh);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

</style>