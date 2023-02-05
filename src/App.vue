<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Dibace from './components/Dibace.vue'
import Navigator from './components/Navigator.vue'
</script>

<template>
  <div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
    <div class="w-fixed w-full flex-shrink flex-grow-0 px-4 ">
        <div class="sticky top-0 p-4 bg-gray-100 rounded-xl w-full h-full">
            <ul class="flex sm:flex-col overflow-hidden content-center justify-center">
                <li class="py-2 hover:bg-indigo-300 rounded">
                    <a class="truncate" href="#">
                        <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" class="w-7 sm:mx-2 mx-4 inline" />
                        <span class="hidden sm:inline">Home</span>
                    </a>
                </li>
                <li class="py-2 hover:bg-indigo-300 rounded">
                    <a class="truncate" href="#">
                        <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/cog.svg" class="w-7 sm:mx-2 mx-4 inline" /> <span class="hidden sm:inline">Settings</span>
                    </a>
                </li>
                <li class="py-2 hover:bg-indigo-300 rounded">
                    <a class="" href="#">
                        <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/gift.svg" class="w-7 sm:mx-2 mx-4 inline" /> <span class="hidden sm:inline">Products</span>
                    </a>
                </li>
                <li class="py-2 hover:bg-indigo-300 rounded">
                    <a class="" href="#">
                        <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/chart-bar.svg" class="w-7 sm:mx-2 mx-4 inline" /> <span class="hidden sm:inline">Reports</span>
                    </a>
                </li>
                <li class="py-2 hover:bg-indigo-300 rounded">
                    <a class="" href="#">
                        <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/collection.svg" class="w-7 sm:mx-2 mx-4 inline" /> <span class="hidden sm:inline">Integrations</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <main role="main" class="w-full flex-grow pt-1 px-3">
        <h1 class="text-3xl md:text-5xl mb-4 font-extrabold" id="home">The Holy Grail Layout</h1>
        <p class="py-2">Are you in search of this? In terms of Web design, <a class="text-indigo-600" href="https://en.wikipedia.org/wiki/Holy_grail_(web_design)">the "holy grail" is
        page layout</a> that has 3 columns. It is commonly desired and implemented, but for many years, the various ways in which it could be 
        implemented with available technologies all had drawbacks. Because of this, finding an optimal implementation was likened to searching 
        for the elusive Holy Grail.
        </p>
        <p class="py-2">
        As of 2021, the Holy Grail layout is implemented using CSS Flexbox or CSS Grid display. For this example, we're using
        the <a class="text-indigo-600" href="https://tailwindcss.com/">Tailwind CSS</a> utility framework. As part of it's default classes, Tailwind includes
        <a class="text-indigo-600" href="https://tailwindcss.com/docs/flex-direction">Flexbox classes</a> which make this implementation possible. The holy grail 
        example is also responsive so that the layout stacks vertically on smaller mobile screens.
        </p>
        <p class="py-2">
        Many web pages require a layout with multiple (often three) columns, with the 
        main page content in one column (often the center), and supplementary content such as menus 
        and advertisements in the other columns (sidebars). These columns commonly require separate 
        backgrounds, with borders between them, and should appear to be the same height no matter 
        which column has the tallest content. A common requirement is that the sidebars have a fixed width, 
        with the center column adjusting in size to fill the window (fluid or liquid layout). 
        Another requirement is that, when a page does not contain enough content to fill the screen, 
        the footer should drop to the bottom of the browser window instead of leaving blank space underneath.
        </p>
        <div class="flex p-3 bg-indigo-600 rounded text-white hidden md:flex">
            <span class="flex-shrink overflow-hidden whitespace-nowrap">&lt;--------</span>
            <div class="flex-grow flex-shrink-0 overflow-ellipsis text-center">This center column is "fluid" so it grows in width as needed!</div>
            <span class="flex-shrink overflow-hidden whitespace-nowrap">--------&gt;</span>
        </div>
    </main>
    <div class="w-fixed w-full flex-shrink flex-grow-0 px-2">
        <div class="flex sm:flex-col px-2">
            <div class="bg-gray-50 rounded-xl border mb-3 w-full">
                <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span class="block text-indigo-600">Made with Tailwind CSS!</span>
                    </h2>
                </div>
            </div>
            <div class="p-2"><!--spacer--></div>
            <div class="bg-gray-100 rounded-xl mb-3 w-full">
                <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span class="block">Ready to dive in?</span>
                    </h2>
                </div>
            </div>
            <div class="p-2"><!--spacer--></div>
            <div class="bg-gray-50 rounded-xl border mb-3 w-full">
                <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span class="block text-indigo-600">Play free at Codeply today.</span>
                    </h2>
                </div>
            </div>
        </div>
    </div>
</div>
<footer class="bg-black mt-auto">
    <div class="p-5 text-white mx-auto">
        <h1 class="text-2xl">Footer</h1>
        <div class="flex">
            <div class="flex-grow flex flex-col">
                <a href="/#home">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
            </div>
            <div class="flex-grow flex flex-col">
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
            </div>
            <div class="flex-grow flex flex-col">
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
            </div>
            <div class="flex-grow flex flex-col">
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
            </div>
        </div>
        <div class="text-right text-xs py-4">
            <a href="">&copy;2021 Someco Inc.</a>
        </div>
    </div>
</footer>

<!--
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/rube">Ruhul Beyan</RouterLink>
        <RouterLink to="/page/11">page 11</RouterLink>
      </nav>
    </div>
  </header>
  <div class="grid grid-cols-1">
   <Dibace msg="Rûḥu'l-Beyân" /> 
      <Navigator msg="Rûḥu'l-Beyân" page-num=""/> 

   
  </div>

  <RouterView />
  -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
