<template>
    <input
    required
    v-model="number"
    @keypress="keypressEmit"
    @input="numberToParent"
    class="input"
     
    placeholder="Введите число">
</template>

<style scoped>

</style>

<script>
export default {
    data() {
        return {
            number: ''
        }
    },
    methods: {
        keypressEmit(){
            this.$emit('keypressemit', this.number);
        },
        numberToParent(){
            this.$emit('input', this.number)
        }
    }
}
</script>