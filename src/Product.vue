<script>
  export default {
    data () {
      return {
        products: [
          { 'id': 1, 'name': 'A', 'unit_price': 10, 'quantity': 10, description: '<b>genial</b>'},
          { 'id': 2, 'name': 'B', 'unit_price': 14, 'quantity': 5, description: '<b>genial 2</b>'},
          { 'id': 3, 'name': 'C', 'unit_price': 130, 'quantity': 3, description: '<b>genial 3</b>'},
          { 'id': 4, 'name': 'D', 'unit_price': 45, 'quantity': 9, description: '<b>genial 4</b>'},
          { 'id': 5, 'name': 'E', 'unit_price': 23, 'quantity': 15, description: '<b>genial 5</b>'},
          { 'id': 6, 'name': 'F', 'unit_price': 76, 'quantity': 19, description: '<b>genial</b>'},
          { 'id': 7, 'name': 'G', 'unit_price': 90, 'quantity': 12, description: '<b>genial</b>'},
          { 'id': 8, 'name': 'H', 'unit_price': 84, 'quantity': 45, description: '<b>genial</b>'},
          { 'id': 9, 'name': 'I', 'unit_price': 1, 'quantity': 90, description: '<b>genial</b>'},
          { 'id': 10, 'name': 'J', 'unit_price': 29, 'quantity': 2, description: '<b>genial</b>'},
        ]
      }
    }
  }
</script>

<template>
  <div>
    <h1>Nos produits</h1>
    <div>
      <div class="product" v-for="product in products" :key="product.id">
        <h3>{{product.name}}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
