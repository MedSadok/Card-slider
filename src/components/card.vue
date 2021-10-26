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
    <div class="card" @click="handleClick">
        <div class="card-top">
            <h1>{{ slideData.title }}</h1>
        </div>
        <div class="card-body">
            <p>{{ slideData.content }}</p>
        </div>
    </div>
</template>

<style lang="scss">
    .card{
        width: 85%;
        padding: 24px 36px;
        cursor: pointer;
        min-height: 350px;
        justify-content: space-between;
        border-color: var(--vc-nav-background-color);
        -webkit-box-shadow: 1px 4px 14px -6px  var(--vc-nav-background-color);
        -moz-box-shadow: 1px 4px 14px -6px  var(--vc-nav-background-color);
        box-shadow: 1px 4px 14px -6px  var(--vc-nav-background-color);
       .card-top{
            h1{
            font-size: 24px;
            font-weight: bold;
        }
       }
       .card-body{
           padding: 24px;
           font-size: 16px;
           color: var(--bs-gray-600);
       }
    }
</style>