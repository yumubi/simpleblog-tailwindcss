<template>
<!--  <div class="w-full md:max-w-4xl">-->

  <div class="flex flex-col gap-6 py-3">
    <template v-for="(item, index) in pagedPost" :key="index">
      <router-link class="card w-full shadow-xl flex flex-col text-black sm:flex-row dark:bg-white"
      :to="{
        name: 'detail',
        params: {
          id: item.id
        }
      }">
        <div class="shadow-blackA7 w-full sm:w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]">
          <AspectRatio :ratio="16 / 9" class="hover:opacity-90">
            <img
                class="h-full w-full object-cover"
                :src="covers[index]?.imgurl"
                alt="article cover"
            >
          </AspectRatio>
        </div>
        <div class="card-body hover:bg-slate-50 rounded-b-box">
          <h2 class="card-title">{{item.source.length > 23 ? item.source.substring(20).concat("...") : item.source}}</h2>
          <p>{{item.vhan.length > 33 ? item.vhan.substring(0, 30).concat("...") : item.vhan}}</p>
          <div class="flex flex-col items-end">
            <div class="flex max-[991px]:flex-col items-start lg:items-center">
              <p class="text-[#636262] text-sm sm:text-sm">6 mins read</p>
            </div>
          </div>
        </div>
      </router-link>
    </template>
  </div>



<!--  </div>-->


<div class="flex flex-row justify-center text-black dark:text-white">
  <PaginationRoot :total="posts.length" :items-per-page="pageSize"
                  v-model:page="currPage"
                  :sibling-count="1"
                  show-edges
                  :default-page="1">
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">

      <PaginationFirst class="w-9 h-9 flex items-center justify-center  disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        <Icon icon="radix-icons:double-arrow-left" />
      </PaginationFirst>
      <PaginationPrev class="w-9 h-9  flex items-center justify-center mr-4  disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        <Icon icon="radix-icons:chevron-left" />
      </PaginationPrev>


      <template v-for="(page, index) in items">
        <PaginationListItem v-if="page.type === 'page'" :key="index" class="w-9 h-9 border rounded  data-[selected]:bg-slate-200 data-[selected]:font-bold font-mono hover:bg-white/10 transition " :value="page.value">
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis v-else :key="page.type" :index="index" class="w-9 h-9 flex items-center justify-center">
          &#8230;
        </PaginationEllipsis>
      </template>


      <PaginationNext class="w-9 h-9  flex items-center justify-center  ml-4 disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        <Icon icon="radix-icons:chevron-right" />
      </PaginationNext>
      <PaginationLast class=" w-9 h-9 flex items-center justify-center disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        <Icon icon="radix-icons:double-arrow-right"/>
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</div>
</template>
<script setup>
import {AspectRatio, PaginationRoot} from "radix-vue";
import axios from "axios";
import {computed, onMounted, ref} from "vue";
import {Icon} from "@iconify/vue";

// const posts = ref([
//   {
//       creator: "测试",
//       post: {
//         id: 100,
//         source: "乔布斯",
//         content: "全人类感谢你!!!",
//         cover: ""
//       }
//   },
//   {
//     creator: "测测你的",
//     post: {
//       id: 200,
//       source: "麦克阿瑟",
//       content: "给他一个支点,他能整个地球",
//       cover: ""
//     }
//   }
//
// ])


const posts = ref([{
  id: 200,
  vhan: "v-model收集的是被选中的多个复选框的值时，默认将收集到的多个值放到一个数组中保存。所以v-model绑定的变量需要是一个数组。默认没有一个被选中，则变量对应的是一个[]空数组。\n" +
      "收集时，要知道每个复选框的值，则需要在复选框上添加vaule属性。",
  source: "测测你的",
  creator: "1000"
}])

const covers = ref([{
  imgurl: "https://cdn.jsdelivr.net/gh/yumubi/Image-hosting-service@main/covers/banner.59r933wrxbs0.webp",
}])



const pageSize = ref(3)

const currPage = ref(1)



const pagedPost = computed(() => {
  return posts.value
      .slice((currPage.value - 1) * pageSize.value,
      currPage.value * pageSize.value
      )
      // .reduce((prev, cur) => {
      //
      // })
})


onMounted(() => {
  fetchPosts()
  fetchPosts()
  fetchPosts()
  fetchPosts()
  fetchPosts()
  fetchPosts()
  fetchPosts()
  fetchPosts()
  fetchPosts()
  fetchPosts()
  fetchCover()
  fetchCover()
  fetchCover()
})



function fetchPosts() {
  axios
      .get("https://api.vvhan.com/api/ian?cl=ac&type=json")
      .then((res) => {
        // posts.value = res.data.data
        posts.value.push(res.data.data)

      })
      .catch(err => {
        console.log(err)
      })
}

function fetchCover() {
  axios
      .get("https://api.vvhan.com/api/acgimg?type=json")
      .then(res => {
        covers.value.push(res.data)
      })
      .catch(err => {
        console.log("img loading error------->" + err)
      })
}

function viewUrl(url) {
  window.open(url);
}



// function handlePosts(posts) {
//   posts.value.forEach(p => {
//     if(p.source.length > 20) return p.source.concat("...")
//
//     if(p.vhan.length > 30) return p.vhan.concat("...")
//   })
//   return posts
// }




</script>
