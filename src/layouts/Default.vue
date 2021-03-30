<template>
  <div class="layout min-h-screen bg-yellow-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
    <header class="flex justify-end items-center h-12 px-5">
      <nav class="flex items-center">
        <a aria-label="Github" href="https://github.com/DanielOrtez" rel="noopener noreferrer"
          target="_blank">
          <github-logo height="20px" width="20px" />
        </a>
        <a href="mailto:daniortez882@gmail.com" class="tracking-tighter ml-5 cursor-pointer">Contact Me</a>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<script>
import GithubLogo from '../assets/github-logo.svg'

export default {
  components: { GithubLogo },
}
</script>
    FormModal

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
* {
  margin:0;
  padding:0;
  outline: none;
  box-sizing: border-box;
}
body {
  font-family: "Space Mono","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}
</style>
