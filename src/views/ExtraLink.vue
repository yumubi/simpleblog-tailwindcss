<script setup>

import {AvatarImage} from "radix-vue";
import blogAvatar from "@/assets/miku.png"
</script>

<template>

  <section>
    <!-- Container -->
    <div class="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10"><!-- Component -->
      <div class="relative pt-40">
        <div class="sticky bottom-60 z-[3] -mt-48 mb-36 bg-white py-10 rounded-xl px-5 sm:px-12">
          <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <div class="flex-col flex h-full justify-between max-[991px]:[grid-area:1/1/2/2] max-w-[720px] lg:max-w-[720px]">
              <h2 class="font-bold text-3xl md:text-5xl">Miku</h2>
              <div class="max-w-[480px] mt-2 p-1">
                <p class="text-[#636262] max-[479px]:text-sm">世界第一公主殿下</p>
                <p class="text-[#636262] max-[479px]:text-sm">世界第一公主殿下</p>
                <p class="text-[#636262] max-[479px]:text-sm">世界第一公主殿下</p>
                <p class="text-[#636262] max-[479px]:text-sm">世界第一公主殿下</p>
                <p class="text-[#636262] max-[479px]:text-sm">世界第一公主殿下</p>
              </div>
              <p class="text-2xl font-bold max-[991px]:hidden">// 01</p>
            </div>
            <div class="flex justify-center h-[100px] max-[991px]:w-full max-[991px]:w-96">
              <AvatarRoot class="bg-blackA3 inline-flex h-[100px] w-[100px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                <AvatarImage
                    class="h-full w-full rounded-[inherit] object-cover"
                    :src="blogAvatar"
                    alt="Colm Tuite"
                />
                <AvatarFallback
                    class="text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                    :delay-ms="600"
                >
                  CT
                </AvatarFallback>
              </AvatarRoot>
            </div>
            <p class="hidden text-2xl font-bold max-[991px]:block">// 01</p>
          </div>
        </div>
        <div class="sticky bottom-36 top-auto z-[2] -mt-24 mb-12 bg-[#e9e9f0] py-10 rounded-xl px-5 sm:px-12">
          <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <div class="flex-col flex h-full justify-between max-[991px]:[grid-area:1/1/2/2] max-w-[720px] lg:max-w-[720px]">
              <h2 class="font-bold text-3xl md:text-5xl">Miku</h2>
              <div class="max-w-[480px] mt-2 p-1">
                <p class="text-[#636262] max-[479px]:text-sm">Her Royal Highness the world</p>
                <p class="text-[#636262] max-[479px]:text-sm">Her Royal Highness the world</p>
                <p class="text-[#636262] max-[479px]:text-sm">Her Royal Highness the world</p>
                <p class="text-[#636262] max-[479px]:text-sm">Her Royal Highness the world</p>
                <p class="text-[#636262] max-[479px]:text-sm">Her Royal Highness the world</p>
              </div>
              <p class="text-2xl font-bold max-[991px]:hidden">// 02</p>
            </div>
            <div class="h-[100px] max-[991px]:w-full max-[991px]:w-96">
              <div class="mx-auto flex-col flex h-full w-full items-center justify-center object-cover text-[#858585]">
                <AvatarRoot class="bg-blackA3 inline-flex h-[100px] w-[100px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                  <AvatarImage
                      class="h-full w-full rounded-[inherit] object-cover"
                      :src="blogAvatar"
                      alt="Colm Tuite"
                  />
                  <AvatarFallback
                      class="text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                      :delay-ms="600"
                  >
                    CT
                  </AvatarFallback>
                </AvatarRoot>
              </div>
            </div>
            <p class="hidden text-2xl font-bold max-[991px]:block"></p>
          </div>
        </div>
        <div class="sticky bottom-12 top-auto mb-12 bg-[#f2f2f2] py-10 rounded-xl px-5 sm:px-12">
          <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <div class="flex-col flex h-full justify-between max-[991px]:[grid-area:1/1/2/2] max-w-[720px] lg:max-w-[720px]">
              <h2 class="font-bold text-3xl md:text-5xl">Miku</h2>
              <div class="max-w-[480px]">
                <p class="text-[#636262] max-[479px]:text-sm">ワールドイズマイン</p>
                <p class="text-[#636262] max-[479px]:text-sm">ワールドイズマイン</p>
                <p class="text-[#636262] max-[479px]:text-sm">ワールドイズマイン</p>
                <p class="text-[#636262] max-[479px]:text-sm">ワールドイズマイン</p>
                <p class="text-[#636262] max-[479px]:text-sm">ワールドイズマイン</p>
              </div>
              <p class="text-2xl font-bold max-[991px]:hidden">// 03</p>
            </div>
            <div class="h-[100px] max-[991px]:w-full max-[991px]:w-96">
              <div class="mx-auto flex-col flex h-full w-full items-center justify-center object-cover text-[#858585]">
                <AvatarRoot class="bg-blackA3 inline-flex h-[100px] w-[100px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                  <AvatarImage
                      class="h-full w-full rounded-[inherit] object-cover"
                      :src="blogAvatar"
                      alt="Colm Tuite"
                  />
                  <AvatarFallback
                      class="text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                      :delay-ms="600"
                  >
                    CT
                  </AvatarFallback>
                </AvatarRoot>
              </div>
            </div>
            <p class="hidden text-2xl font-bold max-[991px]:block">// 03</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
