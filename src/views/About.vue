<script setup>
import vueDanmaku from 'vue3-danmaku'

import {ref} from "vue";

import {storeToRefs} from "pinia";
import {useMainStore} from "@/store/index.js";

const mainInfo = useMainStore()
const {barrage, customBarrage} = storeToRefs(mainInfo)
const barrages = ref( ['Ciallo～(∠・ω< )⌒★'])
const barrageStyle = ref('color: #ff7f50;')
const danmaku = ref(null)

</script>

<template>
  <div class="flex flex-col min-h-full items-center bg-white rounded-lg shadow-xl p-8">
    <p class="m-3 ciallo">
      Ciallo～(∠・ω&lt )⌒★
    </p>



    <h4 class="text-xl mt-3 ciallo font-bold animate-pulse">Ciallo～(∠・ω&lt )⌒★</h4>
    <div class="my-auto">
      <vue-danmaku
          v-model:danmus="barrages"
          :extraStyle="barrageStyle"
          loop
          speeds="120"
          right="4"
          style="
                   height:100px; width:600px;
                  ">
      </vue-danmaku>
    </div>



  </div>

</template>

<style scoped>
  .ciallo {
    @apply text-[#ff7f50]
  }
</style>
