<template>
    <div id="app">
        <Navigation />
        <div class="main">
            <router-view/>
        </div>
        <Footer />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import 'normalize.css'
import 'devicon'
import Navigation from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
	components: {
		Navigation, Footer
	},
	setup() {

	},
})
</script>

<style lang="scss">
    #app {
        font-family: "Sawarabi Gothic", sans-serif;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;

        display: flex;
        flex-direction: column;
    }
    .main {
        padding-top: $navheight;
    }
</style>
