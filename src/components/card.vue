<script>
    export default {
        name: 'Card',
        props: {
            slideData: {
                type: Array,
                default: () => [],
            }
        },
        methods: {
            handleClick(e) {
                this.$emit('clicked', e);
            }
        }
    }
</script>


<template>
    <div class="card">
        <h1>{{ slideData.title }}</h1>
        <div class="card-body">
            <p>{{ slideData.content }}</p>
        </div>
        <button @click="handleClick">click</button>
    </div>
</template>