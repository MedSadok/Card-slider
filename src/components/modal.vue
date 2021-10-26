<script>
import { ref, } from 'vue';
export default {
    name: 'Modal',
    props: {
        modalContent: {
            type: Object,
            default: () => ({}),
        },
    },
    setup(props){
        return props;
    },
    methods: {
        handleClick() {
            this.$emit('close');
        }
    }
}
</script>

<template>
    <div id="overlay">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header d-flex justify-content-end">
                    <button class="bg-transparent border-0" @click="handleClick">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body p-4">
                    <h1>{{ modalContent.title }}</h1>
                    <div class="card-body">
                        <p>{{ modalContent.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
   #overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);
        .modal-dialog{
            .card-body{
                padding-left: 0;
            }
        }
    }
</style>