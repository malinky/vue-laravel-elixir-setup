<template>
    <p>{{ name }} {{ surname }}</p>
</template>

<script>
export default {
    props: [
        'surname'
    ],
    data () {
        return {
            name: 'Craig'
        }
    },
}
</script>

<style>
p {
    color: red;
}
</style>
