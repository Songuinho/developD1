<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <!-- <transition name="fade" appear>
      <div class="ui message success" v-if="visible">
        <h1>First text</h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      
      <div class="ui message success" v-else>
        <h1>Second text</h1>
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </transition>
    <button @click="toggle">Toggle</button> -->
    <div class="stock">
      <p v-if="inStock >= 20">{{inStock}} marchandises en stock.</p>
      <p v-else-if="inStock >= 1 ">{{inStock}} marchandises en stock.</p>
      <p v-else>Pas de marchandises en stock.</p> 
    </div>
    <br />
    <br />
    <br />
    <ul>
      <li v-for="typeVoiture, index in typeVoitures" :key="typeVoitureId">
        {{ index+1 }} >> {{ typeVoiture }}
      </li>
    </ul>
    <ul>
      <li v-for="personne, key in personnes" :key="personneId">
        {{ key+1 }} >> {{ personne.name }} - {{personne.age}} ans - sexe: {{personne.sexe}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AlertVue",
  data() {
    return {

      visible: true,

      typeVoitures: [
        "Mercedes",
        "Chevrolet",
        "Range Rover",
        "Porche",
        "BMW GX8",
      ],

      personnes: [
        { name: "alex", age: 25, sexe: "M" },
        { name: "Jovanie", age: 22, sexe: "M" },
        { name: "Espoir", age: 19, sexe: "M" },
        { name: "Florida", age: 32, sexe: "F" },
      ],

      inStock: 0
    };
  },

  methods: {
    toggle: function () {
      this.visible = !this.visible;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 1s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

ul > li{
  list-style: none;
  text-align: left;
}
</style>
