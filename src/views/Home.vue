<template>
<!--  <div class="w-full md:max-w-4xl">-->

    <div class="card w-full bg-base-100 shadow-xl flex flex-row">
      <div class="shadow-blackA7 w-full sm:w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]">
        <AspectRatio :ratio="16 / 9">
          <img
              class="h-full w-full object-cover"
              src="https://cdn.jsdelivr.net/gh/yumubi/Image-hosting-service@main/covers/banner.59r933wrxbs0.webp"
              alt="article cover"
          >
        </AspectRatio>
      </div>
      <div class="card-body">
        <h2 class="card-title">文章标题</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
<!--  </div>-->



</template>
<script setup>
import {AspectRatio} from "radix-vue";
</script>
