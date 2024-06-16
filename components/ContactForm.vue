<script setup lang="ts">
import { ref } from 'vue';

const turnstileRef = ref();
const token = ref('');
const formSubmitting = ref(false);
const disableSubmitButton = ref(false);
const submittedFormMsg = ref('');
const submittedFormError = ref(false);

const form = ref({
  name: '',
  email: '',
  message: '',
  honeypot: '',
});

function resetForm() {
  form.value.name = '';
  form.value.email = '';
  form.value.message = '';
  form.value.honeypot = '';
  turnstileRef.value.reset();
}

function handleError(msg: string) {
  submittedFormMsg.value = msg;
  submittedFormError.value = true;
  formSubmitting.value = false;
  disableSubmitButton.value = false;
  turnstileRef.value.reset();
}

async function sendEmail() {
  formSubmitting.value = true;
  disableSubmitButton.value = true;
  submittedFormError.value = false;

  if (form.value.honeypot) {
    handleError('Spam detected.');
    return;
  }

  if (!token.value) {
    handleError('Vänligen verifiera att du inte är en robot!');
    return;
  }

  try {
    const { data: validationData, error: validationError } = await useFetch(
      '/_turnstile/validate',
      {
        method: 'POST',
        body: JSON.stringify({ token: token.value }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (validationError.value || !validationData.value?.success) {
      handleError(
        'Ogiltig verifiering! Vänligen kontakta Avin Baker direkt på 072-1588250 eller avin@avabauto.se',
      );
      return;
    }

    const { error: emailError } = await useFetch('/api/send-mail', {
      method: 'POST',
      body: JSON.stringify(form.value),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (emailError.value) {
      console.error('Email sending failed:', emailError);
      handleError(
        'Något gick fel! Vänligen försök igen senare, eller kontakta Avin Baker direkt på 072-1588250 eller avin@avabauto.se',
      );
    } else {
      submittedFormMsg.value = 'Tack för ditt meddelande!';
      submittedFormError.value = false;
      resetForm();
    }
  } catch (err) {
    console.error('An unexpected error occurred:', err);
    handleError(
      'Något gick fel! Vänligen försök igen senare, eller kontakta Avin Baker direkt på 072-1588250 eller avin@avabauto.se',
    );
  } finally {
    formSubmitting.value = false;
    disableSubmitButton.value = false;
  }
}
</script>

<template>
  <ClientOnly>
    <form
      @submit.prevent="sendEmail"
      class="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg"
    >
      <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">
        Kontakta AVAB Auto
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
      <!-- Honeypot field -->
      <div v-show="false">
        <input
          type="text"
          id="honeypot"
          v-model="form.honeypot"
          tabindex="-1"
          autocomplete="off"
        />
      </div>
      <div class="flex flex-col gap-y-4">
        <NuxtTurnstile
          ref="turnstileRef"
          v-model="token"
          :options="{ theme: 'light' }"
        />
        <button
          :disabled="!token || formSubmitting || disableSubmitButton"
          type="submit"
          class="w-full disabled:bg-gray-300 disabled:cursor-not-allowed py-3 px-4 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
        >
          <span v-if="formSubmitting" class="flex items-center justify-center">
            <span class="material-symbols-outlined spin-icon text-2xl mr-2">
              sync
            </span>
            Skickar...
          </span>
          <span v-else>
            {{ token ? 'Skicka' : 'Vänligen verifiera dig som människa...' }}
          </span>
        </button>
      </div>
    </form>
  </ClientOnly>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spin-icon {
  display: inline-block;
  animation: spin 1s linear infinite;
  line-height: 1;
}
</style>
