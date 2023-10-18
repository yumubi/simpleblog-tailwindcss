<script setup>
import {
  AspectRatio, AvatarImage, AvatarRoot,
  HoverCardArrow,
  HoverCardContent,
  HoverCardPortal,
  HoverCardRoot,
  HoverCardTrigger
} from 'radix-vue'
import {ref} from "vue";
import avatarImg from "@/assets/miku.png"
import {Icon} from "@iconify/vue";
const hoverState = ref(false)
</script>

<template>

  <div class="navbar bg-base-100 flex flex-col sm:flex-row">
    <div class="">
      <a class="btn btn-ghost normal-case text-xl">Blog</a>
    </div>
    <div class="flex-1 justify-center menu menu-horizontal px-1 space-x-1 text-lg font-extrabold md:space-x-14">
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
              class="block h-[48px] w-[48px] rounded-full"
              src="https://cdn.jsdelivr.net/gh/yumubi/Image-hosting-service@main/covers/image.4v93impigvs0.png"
              alt="avatar"
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
                    alt="avatar"
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


  <main class="relative flex min-h-screen flex-row flex-wrap justify-center mx-auto bg-slate-100">
     <div class="mx-2.5 w-full md:max-w-4xl">
       <router-view />
     </div>

      <div class="hidden xl:flex flex-col items-center gap-4 max-w-xs bg-white mx-2.5 mt-3 px-5 py-2 mb-2 rounded-box ">
        <div class="bg-slate-100 w-full flex flex-col dark:bg-white">
          <div class="avatar mt-2 mx-auto">
            <div class="w-20 rounded-full">
              <img :src="avatarImg"  alt="avatar"/>
            </div>
          </div>
          <div class="desc flex flex-col items-center">
            <div class="text-gray-700 dark:text-white ">初音未来</div>
            <div class="text-sm font-light text-gray-400 dark:text-gray-300">既见未来,为何不拜</div>
          </div>
        </div>

        <div class="block my-0">
          <span class="w-full px-3 py-1 text-sm text-white bg-miku rounded-full">二次元</span>
        </div>
        <div class="text-miku">
          <div class="flex flex-row">
            <div class="flex flex-col gap-2">
              <div>文章</div>
              <div>数量</div>
            </div>
            <div class="divider divider-horizontal"></div>
            <div class="flex flex-col gap-2">
              <div>分类</div>
              <div>数量</div>
            </div>
            <div class="divider divider-horizontal"></div>
            <div class="flex flex-col gap-2">
            <div>标签</div>
            <div>数量</div>
          </div>
          </div>

          <div class="contact flex mt-2">
            <div >
              <a class="link link-hover hover:text-teal-200" href="/"><Icon icon="mingcute:qq-line" height="32"/></a>
            </div>
            <div class="divider-horizontal"></div>
            <div>
              <a class="link link-hover hover:text-teal-200" href="https://github.com/yumubi"> <Icon icon="mingcute:github-line" height="32" /></a>
            </div>
            <div class="divider-horizontal"></div>
            <div>
              <a class="link link-hover hover:text-teal-200" href="/"><Icon icon="mingcute:mail-line" height="32" /></a>
            </div>
          </div>
        </div>

      </div>

  </main>

  <footer class="footer footer-center p-4 bg-base-200 text-base-content">
    <aside>
      <p>Copyright © 2023 - All right reserved by Gojiberries</p>
    </aside>
  </footer>



</template>

<style scoped>

</style>
