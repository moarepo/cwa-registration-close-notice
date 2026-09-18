<script setup lang="ts">
  import { motion, AnimatePresence } from "motion-v";
  import { useThemeComposable } from "./composables/useComposables"
  import { page_indcator_animation, button_animation_normal } from "./anime/anime_config"
</script>
<template>
  <AnimatePresence>
    <motion.section
      class="flex w-full min-h-svh justify-center items-center p-3.5 font-Rubik overflow-hidden"
      :class="useThemeComposable() ? 'bg-Dark'
      :'bg-[url(/src/assets/karsten-wurth-UbGYPMbMYP8-unsplash.jpg)]'"
    >
      <motion.div
       :initial="page_indcator_animation.initial"
       :animate="page_indcator_animation.animate"
       :transition="page_indcator_animation.transition"
       :exit="page_indcator_animation.exist"
       class="lg:w-1/2 border p-4 rounded-md flex flex-col space-y-4 justify-center items-center"
       :class="useThemeComposable() ? ''
       :'bg-white border-green-500 text-teal-800 shadow-gre'"
      > 

        <img
          src="/Caribbean-Week-of-Agriculture-2026.png" 
          class="h-72" 
          alt="logo"
        />

        <motion.h2 
         class="text-5xl font-light overline"
        > 
         Notice
        </motion.h2>

        <motion.p>
          Please be advised that registration for the CWA Event is now closed.
        </motion.p>

        <motion.a 
         :initial="button_animation_normal.initial"
         :transition="button_animation_normal.transition"
         :while-hover="button_animation_normal.hover"
         :while-press="button_animation_normal.pressed"
         href="https://cwa2026.caricom.org/"
         class=" border-2 p-2 flex space-x-2 justify-center items-cente rounded-2xl"
         :class="useThemeComposable() ? ''
         :'border-teal-100 bg-off_white'"
        > 
          <img class="h-6" src="/plant.png" alt="cwa">
          <h2>Home</h2>
          <img class="h-6" src="/plant.png" alt="cwa">
        </motion.a>

      </motion.div>
    </motion.section>
  </AnimatePresence>
</template>
