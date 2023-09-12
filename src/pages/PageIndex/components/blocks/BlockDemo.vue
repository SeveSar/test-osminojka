<template>
  <div class="pt-[8.2rem] sm:pt-[19.2rem] max-w-[105.6rem] w-full mx-auto">
    <swiper
      class="swiper-demo"
      :slidesPerView="1"
      :speed="800"
      :crossFade="true"
      :spaceBetween="30"
      effect="fade"
      :modules="[Pagination, Navigation, EffectFade]"
      navigation
      :pagination="{
        type: 'custom',
        renderCustom: function (_, current, total) {
          return current + ' из ' + total;
        },
      }"
    >
      <swiper-slide v-for="(slide, idx) in slidesDemo" :key="idx">
        <div class="flex flex-col md:flex-row text-dark items-start gap-[3rem] sm:gap-[4.8rem]">
          <div class="mx-auto md:w-[40%] relative md:pb-[46.5%]">
            <img class="w-full h-full md:absolute object-contain object-center" src="@/assets/images/img.png" alt="" />
          </div>
          <div class="md:w-[60%] order-first md:order-2">
            <h1 class="text-[2.7rem] sm:text-2xl font-medium mb-[1.8rem]">
              {{ slide.title }}
            </h1>
            <p class="text-base mb-[1.6rem]">
              {{ slide.text1 }}
            </p>
            <p class="text-base">
              {{ slide.text2 }}
            </p>
            <div class="flex gap-[2.4rem] mt-[2.4rem] sm:mt-[3.2rem]">
              <UiButton class="w-[50%] sm:min-w-[16rem] sm:w-auto">Смотреть</UiButton>
              <UiButton class="w-[50%] sm:min-w-[16rem] sm:w-auto" variant="border">На сайт</UiButton>
            </div>
            <div class="text-dark mt-[2.4rem] sm:mt-[3.2rem]">
              <h3 class="mb-[1.6rem] text-base">Мы в соцсетях</h3>
            </div>
            <div class="flex items-center gap-[2rem]">
              <a
                class="flex hover:translate-y-[-0.2rem] transition-all"
                href="#"
                v-for="(social, idx) in socialsLink"
                :key="idx"
              >
                <component :is="social" />
              </a>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import UiButton from '@/components/ui/UiButton.vue';
import IconVk from '@/assets/icons/socials/vk.svg';
import IconM from '@/assets/icons/socials/m.svg';
import IconFacebook from '@/assets/icons/socials/f.svg';
import IconHeart from '@/assets/icons/socials/heart.svg';
import IconYoutube from '@/assets/icons/socials/you.svg';
import IconIn from '@/assets/icons/socials/in.svg';
import IconTwitter from '@/assets/icons/socials/tw.svg';

import { Pagination, Navigation, EffectFade } from 'swiper/modules';

const slidesDemo = [
  {
    title: 'Джия',
    text1: `Животное в опасности? Команда Петроникс, вперед, на помощь!Игрушки Петроникс – персонажи одноименного мультсериала и их робо-питомцы! Отправляйся на миссии по спасению животных вместе с твоими любимыми героями!`,
    text2:
      'Джия – веселая и отважная участница команды.Фигурка подвижна, за счет чего ты сможешь придать ей нужную позу. Вращай головой, двигай руками, сгибай ноги и колени! В набор также входит Петроникс-рюкзак, его можно снять и надеть обратно в любой момент.',
  },
  {
    title: 'Title2',
    text1: `Животное в опасности? Команда Петроникс, вперед, на помощь!Игрушки Петроникс – персонажи одноименного мультсериала и их робо-питомцы! Отправляйся на миссии по спасению животных вместе с твоими любимыми героями!`,
    text2:
      'Title2 – веселая и отважная участница команды.Фигурка подвижна, за счет чего ты сможешь придать ей нужную позу. Вращай головой, двигай руками, сгибай ноги и колени! В набор также входит Петроникс-рюкзак, его можно снять и надеть обратно в любой момент.',
  },
  {
    title: 'Title3',
    text1: `Животное в опасности? Команда Петроникс, вперед, на помощь!Игрушки Петроникс – персонажи одноименного мультсериала и их робо-питомцы! Отправляйся на миссии по спасению животных вместе с твоими любимыми героями!`,
    text2:
      'Title3 – веселая и отважная участница команды.Фигурка подвижна, за счет чего ты сможешь придать ей нужную позу. Вращай головой, двигай руками, сгибай ноги и колени! В набор также входит Петроникс-рюкзак, его можно снять и надеть обратно в любой момент.',
  },
];
const socialsLink = {
  IconVk,
  IconM,
  IconFacebook,
  IconHeart,
  IconYoutube,
  IconIn,
  IconTwitter,
};
</script>

<style scoped></style>
