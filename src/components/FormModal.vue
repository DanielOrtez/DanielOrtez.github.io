<template>
  <div
    class="modal absolute top-0 left-0 flex items-center justify-center w-full h-full"
  >
    <div
      class="h-auto w-2/5 p-8 text-left dark:text-gray-700 text-gray-200 dark:bg-white bg-gray-800 rounded shadow-xl"
    >
      <div class="text-left" v-if="!sent">
        <h3 class="text-lg font-bold leading-6">Contact Form</h3>

        <div>
          <div class="mt-2">
            <form name="contact" method="post" @submit.prevent="sendForm" data-netlify="true" data-netlify-honeypot="bot-field">
              <div class="flex flex-col">
                <label for="name">Name</label>
                <input
                  v-model="formData.name"
                  type="text"
                  id="name"
                  class="mt-1 px-2 py-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div class="mt-1 flex flex-col">
                <label for="email">Email</label>
                <input
                  v-model="formData.email"
                  type="text"
                  id="email"
                  class="mt-1 px-2 py-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div class="mt-1 flex flex-col">
                <label for="message">Message</label>
                <textarea
                  v-model="formData.message"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  class="mt-1 px-2 py-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                </textarea>
              </div>
            </form>
          </div>
        </div>

        <div class="mt-5 sm:mt-6">
          <span class="flex w-full rounded-md shadow-sm">
            <button
              @click="$emit('toggleModal')"
              class="inline-flex justify-center w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-blue-700"
            >
              Cancel
            </button>
            <button
              class="ml-2 inline-flex justify-center w-full px-4 py-2 text-white bg-gray-500 rounded hover:bg-blue-700"
              type="submit"
            >
              Send
            </button>
          </span>
        </div>
      </div>
      <div v-else class="text-center">
        <p class="text-green-700">Sent!</p>
        <button @click="$emit('toggleModal')" class="mt-4 inline-flex justify-center w-full px-4 py-2 text-white bg-gray-500 rounded hover:bg-blue-700">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["toggleModal"],
  data() {
    return {
      sent: false,
      formData: {}
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    },
    sendForm(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData
        })
      })
      .then(() => this.sent = true)
      .catch(error => alert(error))
    }
  }
}
</script>

<style>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}
textarea, input {
  resize: none;
  font-family: Helvetica, sans-serif;
}
</style>