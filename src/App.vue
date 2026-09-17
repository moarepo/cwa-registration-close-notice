<script setup lang="ts">
  import { motion, AnimatePresence } from "motion-v";
</script>
<template>
  <AnimatePresence>
    <motion.section
      class="flex w-full min-h-svh justify-center items-center p-1 bg-green-500"
    >
      <motion.div
       class="w-full h-[99vh] bg-white p-4 rounded-md border border-dashed flex justify-center items-center"
      >
        <h2>Welcome</h2>
      </motion.div>
    </motion.section>
  </AnimatePresence>
</template>
