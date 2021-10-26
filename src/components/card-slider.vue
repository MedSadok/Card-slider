<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Card from './card.vue';
import Modal from './modal.vue';
import { ref } from 'vue';
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
  setup(){
  },
  data() {
    return {
      slideData: [{title: 'Trip To Berlin', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                  {title: 'Trip To Istanbul', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                  {title: 'Trip To Tunisia', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                  {title: 'Trip To Casablanca', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                  {title: 'Trip To Paris', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                  {title: 'Trip To Manchester', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                  {title: 'Trip To Chicago', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                  {title: 'Trip To Los Angelos', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
                  ],
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
      this.modalContent = {};
      this.showModal= false;
    }
  }
};
</script>

<template>
  <div class="container">
    <carousel :items-to-show="3" class="py-5">
        <slide v-for="slide in slideData" :key="slide">
            <Card :slide-data="slide" @clicked="openModal(slide)" />
        </slide>

        <template #addons>
        <navigation />
        <pagination />
        </template>
    </carousel>

    <Modal v-if="showModal" :modal-content="modalContent" @close="closeModal" />
  </div>
</template>


