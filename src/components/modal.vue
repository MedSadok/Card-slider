<script>
export default {
    name: 'Modal',
    props: {
        modalContent: {
            type: Object,
            default: () => ({}),
        },
        methods: {
            handleClick() {
                console.log('close')
                this.$emit('close');
            }
        }
    }
}
</script>

<template>
    <h1>{{ modalContent.title }}</h1>
    <div class="card-body">
        <p>{{ modalContent.content }}</p>
    </div>
    <button @click="handleClick">Close</button>
</template>