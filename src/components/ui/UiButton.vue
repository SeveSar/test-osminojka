<template>
  <component
    :is="currentComponent"
    :class="classes"
    :to="to ? to : null"
    :type="to ? null : type"
    class="inline-flex items-center min-h-[4rem] justify-center text-base py-[0.75rem] px-[1.3rem]"
    @click="emit('click')"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, defineComponent } from 'vue';
import type { ButtonHTMLAttributes } from 'vue';

interface Props {
  variant?: 'default' | 'text' | 'border';
  color?: 'primary' | 'secondary';
  size?: 'medium' | 'small';
  rounded?: boolean;
  type?: ButtonHTMLAttributes['type'];
  disabled?: boolean;
  isLoading?: boolean;
  to?: { name: string } | string | null;
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'medium',
  color: 'primary',
  rounded: false,
  type: 'button',
  disabled: false,
  isLoading: false,
  to: null,
});
const emit = defineEmits(['click']);

const classes = computed(() => ({
  'bg-dark text-white': props.variant === 'default',
  'border border-dark': props.variant === 'border',
}));

const currentComponent = computed(() => {
  return props.to ? 'router-link' : 'button';
});
</script>

<style scoped></style>
