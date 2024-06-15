<script setup lang="ts">
import ContactForm from '~/components/ContactForm.vue';
</script>

<template>
  <div>
    <section class="lg:py-20 lg:px-10">
      <div class="flex flex-col lg:block w-full items-center gap-y-4">
        <div class="p-10 lg:p-0 lg:text-center lg:mb-4">
          <p class="text-xl">
            Använd formuläret nedan för att komma i kontakt med oss
          </p>
          <p>
            Vill du hellre ringa? Slå en pling till Avin direkt på 072-1588250
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  </div>
</template>
