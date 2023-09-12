<template>
  <div class="news text-dark text-xl mt-[4.5rem] sm:mt-[6.5rem]">
    <div class="flex items-center justify-between mb-[2.5rem] sm:mb-[4rem] flex-wrap">
      <h2 class="text-[2.4rem] md:text-xl order-1">Новости</h2>
      <div class="ml-auto flex order-3 sm:order-2 w-full sm:w-auto mt-[0.8rem] sm:mt-0">
        <router-link class="text-base transition-all border-b border-dark hover:border-[#fff]" to="#">
          Смотреть все
        </router-link>
      </div>
      <div class="flex gap-[2.2rem] sm:gap-[3.5rem] ml-[2.8rem] order-2 sm:order-3">
        <button class="slider-news-prev h-[1.5rem] sm:h-[2.1rem] sm:w-[2.1rem]">
          <IconArrowLeft class="w-full h-full" />
        </button>
        <button class="slider-news-next h-[1.5rem] sm:w-[2.1rem] sm:h-[2.1rem]">
          <IconArrowRight class="w-full h-full" />
        </button>
      </div>
    </div>
    <swiper
      class="swiper-news"
      :autoHeight="true"
      :speed="800"
      :spaceBetween="16"
      :modules="[Navigation]"
      :navigation="{
        nextEl: '.slider-news-next',
        prevEl: '.slider-news-prev',
      }"
      :breakpoints="{
        // when window width is >= 320px
        320: {
          slidesPerView: 1.2,
        },
        // when window width is >= 480px
        576: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        961: {
          slidesPerView: 3,
        },
      }"
    >
      <swiper-slide v-for="(slide, idx) in slidesNews" :key="idx" class="flex flex-col">
        <div class="text-dark border border-[#D9D9D9] flex flex-col flex-grow">
          <div class="relative pb-[55%] mb-[1.6rem]">
            <img
              class="absolute object-contain w-full h-full"
              :src="`/test-osminojka/images/${slide.img}.png`"
              alt=""
            />
          </div>
          <div class="px-[1.2rem] pb-[1.2rem] flex flex-col flex-grow">
            <div class="flex items-center text-sm mb-[1.2rem]">
              <span class="font-medium">СТАТЬИ</span>
              <span class="mx-[0.8rem]">•</span>
              <span class="text-gray">{{ slide.date }}</span>
            </div>
            <div class="flex flex-col flex-grow">
              <h1 class="text-base font-medium mb-[2.4rem]">
                {{ slide.title }}
              </h1>
              <p class="text-base">
                {{ slide.text }}
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import IconArrowRight from '@/assets/icons/arrow-right.svg';
import IconArrowLeft from '@/assets/icons/arrow-left.svg';

import { Navigation } from 'swiper/modules';

const slidesNews = [
  {
    title: '1Эпик Лончер: Так блейд Инфинити Надо еще не баттлил!',
    text: `Пусковые установки Эпик Лончер подарят совершенно новый опыт запуска волчка на арену даже самому умелому Игроку!`,
    date: '30.11.2022',
    img: '1',
  },
  {
    title: '2Эпик Лончер: Так блейд Инфинити Надо еще не баттлил!',
    text: `Пусковые установки Эпик Лончер подарят совершенно новый опыт запуска волчка на арену даже самому умелому Игроку!`,
    date: '30.11.2022',
    img: '2',
  },
  {
    title: '3Эпик Лончер: Так блейд Инфинити Надо еще не баттлил!',
    text: `Противоположная точка зрения подразумевает, что явные признаки победы институционализации лишь добавляют фракционных разногласий и объявлены нарушающими общечеловеческие нормы этики и морали.`,
    date: '30.11.2022',
    img: '3',
  },
  {
    title: '4Эпик Лончер: Так блейд Инфинити Надо еще не баттлил!',
    text: `Пусковые установки Эпик Лончер подарят совершенно новый опыт запуска волчка на арену даже самому умелому Игроку!`,
    date: '30.11.2022',
    img: '1',
  },
];
</script>

<style scoped></style>
