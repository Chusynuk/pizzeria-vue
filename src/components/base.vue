<style lang="css">



</style>

<template lang="html">

<v-card class="text-xs-center">

    <v-toolbar class="red" dark>
        <v-toolbar-title class="headline mb-0 text-xs-center">Grab your slice</v-toolbar-title>
    </v-toolbar>
    <v-card-media src="/static/pizza.jpg" height="200px">
    </v-card-media>
    <h2 class="headline mb-2 text-xs-center">Choose your base:</h2>
    <v-layout row wrap class="text-xs-center">
        <v-card-title primary-title v-for="pizza in pizzas" :key="pizza.id">
            <v-flex xs6>
                <v-avatar size="8vw" class="grey lighten-1">
                    <img v-bind:src="`${pizza.href}`"  alt="avatar">
                </v-avatar>
            </v-flex>
            <v-flex xs6>
                <v-subheader>{{pizza.price}}€</v-subheader>
            </v-flex>
        </v-card-title>
    </v-layout>
</v-card>

</template>

<script>

export default {

    data: () => ({

        pizzas: [{
            id: 1,
            name: "Margarita",
            price: 4,
            href: "../../static/margarita.jpg"
        }, {
            id: 2,
            name: "Salami",
            price: 6,
            href: "../../static/margarita.jpg"
        }]
    })
}

</script>
