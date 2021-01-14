<template>
  <div>
    pomo
    <timer />
    <basket />
  </div>
</template>

<script>
import Timer from "@/components/timer.vue";
import Basket from "@/components/basket.vue";

export default {
  name: "pomodoro",
  components: { Timer, Basket },
};
</script>

<style>
</style>