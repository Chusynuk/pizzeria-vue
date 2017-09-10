<style>

.custom-loader {
    animation: loader 1s infinite;
    display: flex;
}

@-moz-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}

@-o-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}

</style>

<template lang="html">

<div class="text-xs-center">
    <v-btn secondary :loading="loading" @click.native="loader = 'loading'" :disabled="loading">
        Order
    </v-btn>
</div>

</template>

<script>

export default {
    data() {
            return {
                loader: null,
                loading: false,
                loading2: false,
                loading3: false,
                loading4: false,
            }
        },
        watch: {
            loader() {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this[l] = false), 3000)

                this.loader = null
            }
        },
}

</script>
