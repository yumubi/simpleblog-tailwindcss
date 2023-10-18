<template>
<!--  <div class="w-full md:max-w-4xl">-->

  <div class="flex flex-col gap-3 py-3 dark:bg-white">
    <div class="card w-full bg-base-100 shadow-xl flex flex-col sm:flex-row dark:bg-white">
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
        <div class="flex flex-col items-end">
          <div class="flex max-[991px]:flex-col items-start lg:items-center">
            <p class="text-[#636262] text-sm sm:text-sm">6 mins read</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card w-full bg-base-100 shadow-xl flex flex-col sm:flex-row dark:bg-white">
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
        <div class="flex flex-col items-end">
          <div class="flex max-[991px]:flex-col items-start lg:items-center">
            <p class="text-[#636262] text-sm sm:text-sm">6 mins read</p>
          </div>
        </div>
      </div>
    </div>

  </div>



<!--  </div>-->


<div class="flex flex-row justify-center text-black dark:text-white">
  <PaginationRoot :total="100" :sibling-count="1" show-edges :default-page="2">
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst class="w-9 h-9  flex items-center justify-center  disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        <Icon icon="radix-icons:double-arrow-left" />
      </PaginationFirst>
      <PaginationPrev class="w-9 h-9  flex items-center justify-center mr-4  disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        <Icon icon="radix-icons:chevron-left" />
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem v-if="page.type === 'page'" :key="index" class="w-9 h-9 border rounded  data-[selected]:bg-slate-200 data-[selected]:text-blackA11 hover:bg-white/10 transition focus-within:outline focus-within:outline-1 focus-within:outline-offset-1" :value="page.value">
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis v-else :key="page.type" :index="index" class="w-9 h-9 flex items-center justify-center">
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext class="w-9 h-9  flex items-center justify-center  ml-4 disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        <Icon icon="radix-icons:chevron-right" />
      </PaginationNext>
      <PaginationLast class="w-9 h-9  flex items-center justify-center disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        <Icon icon="radix-icons:double-arrow-right" />
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</div>
</template>
<script setup>
import {AspectRatio, PaginationRoot} from "radix-vue";
</script>
