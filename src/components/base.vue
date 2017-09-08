<style scoped>

img.selected {
    border: solid 2px green;
    /* and other styles ... */
}

</style>

<template lang="html">

<v-card class="text-xs-center">

    <v-toolbar class="red" dark>
        <v-toolbar-title class="headline mb-0 text-xs-center">Grab your slice</v-toolbar-title>
    </v-toolbar>
    <v-card-media src="/static/pizza.jpg" height="200px">
    </v-card-media>
    <h2 class="headline mb-2">Choose your base:</h2>
    <v-layout row wrap primary-title v-for="base in bases" :key="base.id">
        <v-layout column>
            <v-flex xs6 offset-xs3>
                <v-avatar size="80px" class="grey lighten-1">
                    <img :src="base.href" :class="{selected: selectedBase.id == base.id}" @click="selectedBase = base" alt="avatar">
                </v-avatar>
            </v-flex>
        </v-layout>
        <v-layout column>
            <v-flex xs6 offset-xs4>
                <v-subheader>{{base.name}} {{base.price}}€ {{selectedBase.price}}</v-subheader>
            </v-flex>
        </v-layout>
    </v-layout>
</v-card>

</template>

<script>

import { EventBus } from '../event-bus.js';

export default {

    data() {

            return {
                selectedBase: {},
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
            }
        },

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
                    EventBus.$emit('i-got-price', this.selectedBase);
                },


        }
}

</script>
