<script setup lang="ts">
import ContactForm from '~/components/ContactForm.vue';
</script>

<template>
  <div>
    <section
      class="hero flex justify-center h-screen items-center text-center text-white bg-gradient-to-b from-gray-800 to-white"
    >
      <div
        class="bg-black bg-opacity-50 w-5/6 p-5 rounded-lg flex flex-col gap-y-12 lg:w-1/2 xl:w-1/3"
      >
        <div>
          <h1 class="text-4xl mb-4">Välkommen till AVAB AUTO!</h1>
          <h2 class="text-xl">Din säkra bilhandlare</h2>
        </div>
        <div
          class="flex lg:flex-row flex-col gap-y-12 lg:w-full lg:justify-between"
        >
          <div class="flex flex-wrap flex-col items-center gap-y-2 lg:w-1/4">
            <span class="material-icons">schedule</span>
            <span>Öppettider:</span>
            <span> Vardagar 10-18, Lördagar 10-15, Söndagar stängt. </span>
            <p>
              Visning utav bil sker enligt överrenskommelse. Tidsbokning krävs.
            </p>
          </div>
          <div class="flex flex-wrap flex-col items-center gap-y-2 lg:w-1/4">
            <span class="material-symbols-outlined">map</span>
            <span>Adress:</span>
            <span>Lektorsvägen 10C</span>
            <span>352 40 Växjö</span>
          </div>
          <div class="flex flex-wrap flex-col items-center gap-y-2 lg:w-1/4">
            <span class="material-symbols-outlined">payments</span>
            <span>Finansiering:</span>
            <span>Svea Bank</span>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-100 py-12">
      <ContactForm />
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: url('../assets/img/car-bg.jpg') no-repeat center center/cover;
}
</style>
