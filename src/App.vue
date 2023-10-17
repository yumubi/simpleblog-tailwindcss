<script setup>
import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'radix-vue'
import {ref} from "vue";
const hoverState = ref(false)
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-0">
      <a class="btn btn-ghost normal-case text-xl">Blog</a>
    </div>
    <div class="flex-1 justify-center menu menu-horizontal px-1">
      <li><a>首页</a></li>
      <li><a>归档</a></li>
      <li><a>关于</a></li>
      <li><a>友链</a></li>
    </div>


    <div class="">
        <HoverCardRoot v-model:open="hoverState">
          <HoverCardTrigger
              class="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
              href="/"
              target="_blank"
              rel="noreferrer noopener"
          >
            <img
                class="block h-[30px] w-[30px] rounded-full"
                src="https://cdn.jsdelivr.net/gh/yumubi/Image-hosting-service@main/covers/image.4v93impigvs0.png"
                alt="Radix UI"
            >
          </HoverCardTrigger>
          <HoverCardPortal>
            <HoverCardContent
                class="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
                :side-offset="5"
            >
              <div class="flex flex-col gap-[5px]">
                <div class="mx-auto">
                  <img
                      class="object-cover h-[100px] w-[100px] rounded-full"
                      src="https://cdn.jsdelivr.net/gh/yumubi/Image-hosting-service@main/covers/image.4v93impigvs0.png"
                      alt="Radix UI"
                  >
                  <div class="text-sm font-normal mb-2">Stellar Nolan</div>
                </div>
                <div class="mt-1 ml-2 text-lg font-mono">Settings</div>
                <div class="mt-1 ml-2 text-lg font-mono">Sign out</div>
              </div>
              <HoverCardArrow class="fill-cyan-200" size="8" />
            </HoverCardContent>
          </HoverCardPortal>
        </HoverCardRoot>

    </div>
  </div>
  <div class="divider my-0"/>
  <main class="min-h-screen container mx-auto flex">
    <div class="mx-auto">
      <router-view />
    </div>
  </main>

</template>

<style scoped>

</style>
