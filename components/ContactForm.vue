<script setup lang="ts">
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const config = useRuntimeConfig();

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submittedFormMsg = ref('');
const submittedFormError = ref(false);

const sendEmail = () => {
  const serviceId = config.public.emailjsServiceId as string;
  const templateId = config.public.emailjsTemplateId as string;
  const publicKey = config.public.emailjsPublicKey as string;

  emailjs
    .send(serviceId, templateId, form.value, publicKey)
    .then((response) => {
      console.info('SUCCESS!', response);
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
      submittedFormMsg.value = 'Tack för ditt meddelande!';
      submittedFormError.value = false;
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      submittedFormMsg.value =
        'Något gick fel! Vänligen kontakta Avin Baker direkt på 070-1234567 eller avin@avabauto.se';
      submittedFormError.value = true;
    });
};
</script>

<template>
  <ClientOnly>
    <form
      @submit.prevent="sendEmail"
      class="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg"
    >
      <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">
        Kontakta Oss
      </h2>
      <p
        :class="{
          'text-red-500': submittedFormError,
          'text-green-500': !submittedFormError,
        }"
        class="text-center mb-4"
      >
        {{ submittedFormMsg }}
      </p>
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">
          Namn:
        </label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300 focus:border-blue-300"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">
          E-post:
        </label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300 focus:border-blue-300"
        />
      </div>
      <div class="mb-6">
        <label for="message" class="block text-sm font-medium text-gray-700">
          Meddelande:
        </label>
        <textarea
          id="message"
          v-model="form.message"
          required
          class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300 focus:border-blue-300"
          rows="5"
        />
      </div>
      <button
        type="submit"
        class="w-full py-3 px-4 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
      >
        Skicka
      </button>
    </form>
  </ClientOnly>
</template>
