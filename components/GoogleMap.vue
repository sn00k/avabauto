<script setup lang="ts">
const mapKey = process.env.GOOGLE_MAPS_API_KEY;
</script>

<template>
  <div class="flex justify-center my-10">
    Google-karta kommer snart...
    <!-- <iframe
      width="600"
      height="450"
      style="border: 0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      :src="`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=123+Car+St,City,Country`"
    ></iframe> -->
  </div>
</template>
