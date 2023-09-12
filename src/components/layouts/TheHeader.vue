<template>
  <header
    class="header absolute z-40 w-full top-0 left-0 py-[1.2rem] sm:py-[3rem] px-[1.2rem] sm:px-[2.4rem] text-dark overflow-hidden bg-yellow sm:bg-white sm:bg-[url('@/assets/images/header.png')] bg-cover bg-no-repeat bg-center"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <router-link to="#" class="lg:mr-[6rem] mr-[2rem]">
          <IconLogo class="hidden sm:block" />
          <IconLogoMobile class="sm:hidden" />
        </router-link>
        <UiButton class="mr-[2.4rem] hidden sm:inline-flex" variant="border">
          <IconCatalog class="mr-[0.8rem]" />
          Каталог
        </UiButton>
        <nav class="menu gap-[3.2rem] hidden lg:flex">
          <div class="text-sm text-dark" v-for="link in links" :key="link.id">
            <div v-if="link.isSelect">
              <button class="items-center inline-flex">
                {{ link.title }}
                <IconArrow></IconArrow>
              </button>
            </div>
            <router-link v-else :to="{ name: link.to }">
              {{ link.title }}
            </router-link>
          </div>
        </nav>
      </div>
      <div class="flex items-center gap-[2.6rem] sm:gap-[3.4rem]">
        <div class="flex gap-[2rem]">
          <button class="inline-flex hover:translate-y-[-0.2rem] transition-all">
            <IconLoupe />
          </button>
          <button class="hidden md:inline-flex hover:translate-y-[-0.2rem] transition-all">
            <IconMicro />
          </button>
          <button class="inline-flex order-first md:order-none hover:translate-y-[-0.2rem] transition-all">
            <IconHeart />
          </button>
        </div>
        <button class="text-md order-first md:order-none font-medium">
          RU / <span class="text-dark opacity-[0.35]">ENG</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import IconArrow from '@/assets/icons/arrow.svg';
import IconLoupe from '@/assets/icons/loupe.svg';
import IconMicro from '@/assets/icons/micro.svg';
import IconHeart from '@/assets/icons/heart.svg';
import IconLogo from '@/assets/images/logo.svg';
import IconLogoMobile from '@/assets/images/logo-mobile.svg';
import IconCatalog from '@/assets/icons/catalog.svg';
import UiButton from '@/components/ui/UiButton.vue';

const links = [
  { title: 'Бренды', id: 1, to: 'Index' },
  { title: 'Новости', id: 2, to: 'Index' },
  { title: 'РОСМЭН', id: 3, isSelect: true },
  { title: 'Партнерам', id: 4, to: 'Index' },
];
</script>

<style scoped></style>
