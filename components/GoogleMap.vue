<template>
  <div class="map-container">
    <iframe
      width="600"
      height="450"
      style="border: 0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      :src="`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=123+Car+St,City,Country`"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapKey: process.env.GOOGLE_MAPS_API_KEY, // Make sure to set this in your .env file
    };
  },
};
</script>

<style scoped>
.map-container {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}
</style>
