<style lang="css">



</style>

<template lang="html">

<v-container grid-list-md text-xs-center>
    <v-card class="">
        <h2 class="headline mb-0">Extra ingredients:</h2>
        <v-layout row wrap class="text-xs-center" v-for="ingredient in ingredients" :key="ingredient.id">
            <v-layout column>
                <v-flex xs6>
                    <v-checkbox name="checkbox" color="light-blue lighten-2" v-bind:label="`${ingredient.name}`" v-model="ingredient.checked" light></v-checkbox>
                </v-flex>
            </v-layout>
            <v-layout column>
                <v-flex xs6>
                    <v-subheader>{{ingredient.price}} €</v-subheader>
                </v-flex>
            </v-layout>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap class="mb-3" >
            <v-flex xs6 v-show="ingredients.length > 0">
                <h3 class="headline mb-0">Total price:</h3>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap class="mb-3">
            <v-flex xs6>
                <v-checkbox label="Newsletter" color="pink lighten-3" v-model="checked1" light></v-checkbox>
            </v-flex>
            <v-flex xs6>
                <my-button></my-button>
            </v-flex>
        </v-layout>
    </v-card>

</v-container>

</template>

<script>

export default {
    data: () => ({

        amount: 0,
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

        total() {
            var total = 0;
            for (var i = 0; i < this.ingredients.length; i++) {

                total += this.ingredients[i].price;
            }
            return total;
        }
    },
    methods: {
        addToCart(item) {
            amount = 0;
            if (ingredient.checked == true) {
                amount += this.ingredient.price;
            } else {
                amount -= this.ingredient.price;
            }
            alert(amount);
        }
    }

}

</script>
