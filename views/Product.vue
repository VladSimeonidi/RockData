<template>
  <div class="container">
    <p class="h1 mt-3 mb-2">Product</p>
    <table v-if="CurrentItem" class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Product description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ CurrentItem.id }}</th>
          <td>{{ CurrentItem.title }}</td>
          <td>{{ CurrentItem.body }}</td>
        </tr>
      </tbody>
    </table>
    <table v-else class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colspan="3">Загрузка</th>
        </tr>
      </tbody>
    </table>
    <button @click="this.$router.go(-1)" type="button" class="btn btn-primary">
      Назад
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions({
      actionGetCurrentItem: "products/ACTION_CURRENT_ITEM",
    }),
  },
  computed: {
    ...mapState({
      CurrentItem: (state) => state.products.currentItem,
    }),
  },
  mounted() {
    this.actionGetCurrentItem(this.$route.params.id);
  },
};
</script>
