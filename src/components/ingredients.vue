<style lang="css">



</style>

<template lang="html">

<v-card>

    <h2 class="headline mb-0">Extra ingredients:</h2>
    <v-layout row v-for="ingredient in ingredients" :key="ingredient.id">
        <v-layout column class="text-xs-center">
            <v-flex xs6 offset-xs5 class="text-xs-center">
                <v-card-text >
                <v-checkbox class="text-xs-center" name="checkbox" color="light-blue lighten-2" v-bind:label="`${ingredient.name}`" v-model="ingredient.checked" light></v-checkbox>
                </v-card-text>
            </v-flex>
        </v-layout>
        <v-layout column>
            <v-flex xs6 offset-xs5>
                <v-subheader>{{ingredient.price}} €</v-subheader>
            </v-flex>
        </v-layout>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap class="mb-3">
        <v-layout column>
            <v-flex xs6 offset-xs3>
                <h3 class="headline mb-0">Total price:</h3>
            </v-flex>
        </v-layout>
        <v-layout column>
            <v-flex xs6 offset-xs4>
                <v-subheader> {{sumTotal}} €</v-subheader>
            </v-flex>
        </v-layout>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap class="mb-3">
        <v-layout column>
            <v-flex xs6 offset-xs5>
                <v-checkbox label="Newsletter" color="pink lighten-3" v-model="checked1" light></v-checkbox>
            </v-flex>
        </v-layout>
        <v-layout column>
            <v-flex xs6 offset-xs4>
                <my-orderButton></my-orderButton>
            </v-flex>
        </v-layout>
    </v-layout>
</v-card>

</template>

<script>


export default {


    props: ['myBase'],


    data: () => ({

        checked1: '',
        showCart: false,
        ingredients: [{
            id: 1,
            name: "Mozzarella",
            price: 2,
            checked: '',
        }, {
            id: 2,
            name: "Cheddar",
            price: 2.0,
            checked: '',
        }, {
            id: 3,
            name: "Bacon",
            price: 2.25,
            checked: '',
        }, {
            id: 4,
            name: "Mushrooms",
            price: 1.6,
            checked: '',
        }, {
            id: 5,
            name: "Pepperoni",
            price: 2.5,
            checked: '',
        }, {
            id: 6,
            name: "Sucuk",
            price: 2.75,
            checked: '',
        }],
    }),

    computed: {

        total: function() {
            var total = 0;
            for (var i = 0; i < this.ingredients.length; i++) {
                if (this.ingredients[i].checked) {
                    total += this.ingredients[i].price;
                }

            }
            return total;
        },

        sumTotal: function() {

          return this.total + this.myBase;
        }
    },
}

</script>
