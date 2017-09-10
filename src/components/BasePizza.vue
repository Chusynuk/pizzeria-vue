<style scoped>

img.selected {
    border: solid 2px green;
    /* and other styles ... */
}

</style>

<template lang="html">

<v-container fluid>
    <v-card class="text-xs-center">
        <v-toolbar class="red" dark>
            <v-toolbar-title class="headline mb-0 text-xs-center">Grab your slice</v-toolbar-title>
        </v-toolbar>
        <v-card-media src="/static/pizza.jpg" height="200px">
        </v-card-media>
        <h2 class="headline mb-2">Choose your base: </h2>
        <v-layout row wrap primary-title>
            <v-flex offset-xs5 offset-sm2 v-for="base in bases" :key="base.id">
                <v-flex xs6>
                    <v-avatar size="80px" class="grey lighten-1">
                        <img :src="base.href" :class="{selected: selectedBase.id == base.id}" @click="selectedBase = base" alt="avatar">
                    </v-avatar>
                </v-flex>
                <v-flex xs6>
                    <v-subheader>{{base.name}} {{base.price}}€ </v-subheader>
                </v-flex>
            </v-flex>
        </v-layout>
        <my-ingredients :myBase="selectedBase.price"></my-ingredients>
    </v-card>
</v-container>

</template>

<script>

import Ingredients from './Ingredients.vue';

export default {

    data: () => ({

        selectedBase: {
            price: 0
        },
        bases: [{
            id: 1,
            name: "Margarita",
            price: 4,
            href: "../../static/margarita.jpg"
        }, {
            id: 2,
            name: "Salami",
            price: 6,
            href: "../../static/salami.jpg"
        }]
    }),

    computed: {
        totalBase: function() {
            var totalBase = 0;
            for (var i = 0; i < this.bases.length; i++) {
                if (this.bases[i].selected) {
                    totalBase += this.bases[i].price;
                }
            }
            return totalBase;
        }
    },
    methods: {
        getSelectedBase() {
            return this.selectedBase;

        },
    }
}

</script>
