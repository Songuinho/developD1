<template>
  <div>
    <transition name="fade">
      <div class="message success" v-if="visible">
        loren ipsum dolor sit consecteur adipisicing elit. A Contactez Unilever
        et ses équipes de spécialistes ou trouvez des contacts du monde entier.
      </div>
    </transition>
    <button @click="toggle">Toggle</button>
  </div>
</template>


<script>
export default {
    data (){
        return {
            visible: true
        }
    },

    methods:{
        toggle: function () {
            this.visible = !this.visible  
        }
    }
};
</script>


<style>
 
.fade-enter-active .fade-leave-active{
    transition: opacity .5s, transform 1s;
}

.fade-enter .fade-leave{
    opacity: 0;
    transform: translateX(20px);
}

</style>
