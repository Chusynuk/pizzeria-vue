<style lang="stylus">

@import './stylus/main'

</style>

<template>

<v-app light>
    <main>
        <v-container fluid>

                <v-flex xs12 sm6 offset-sm3>
                  <my-base></my-base>
                  </v-flex>
                    <v-flex d-flex xs12 sm6 offset-sm3 style="text-align:center;" class="text-xs-center">
                        <my-ingredients></my-ingredients>
                    </v-flex>
            
        </v-container>
    </main>
    <v-footer></v-footer>
</v-app>

</template>

<script>

export default {
    data: () => ({}),

    methods: {
        clickMethod() {}
    }
}

</script>
