<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Card from './card.vue';
import Modal from './modal.vue';

export default {
  name: 'sliderCard',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Card,
    Modal,
  },
  data() {
    return {
      slideData: [{title: 'title 1', content: 'content 1'}, {title: 'title 2', content: 'content 2'}, {title: 'title 3', content: 'content 3'}, {title: 'title 4', content: 'content 4'}],
      modalContent: null,
      showModal: false,
    }
  },
  methods: {
    openModal(slide) {
      this.modalContent = slide;
      this.showModal= true;
    },
    closeModal() {
      console.log('closed')
      this.modalContent = {};
      this.showModal= false;
    }
  }
};
</script>

<template>
  <carousel :items-to-show="3">
    <slide v-for="slide in slideData" :key="slide">
      <Card :slide-data="slide" @clicked="openModal(slide)" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  
  <Modal v-if="showModal" :modal-content="modalContent" @close="closeModal" />
</template>


