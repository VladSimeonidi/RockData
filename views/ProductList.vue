<template>
  <div class="container">
    <p class="h1 mt-3 mb-2">Product list</p>
    <table v-if="List.length !== 0" class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Product Body</th>
          <th scope="col">Editing</th>
          <th scope="col">Deleting</th>
        </tr>
        <tr>
          <th scope="col" colspan="5">
            <button type="button" @click="addNewItem" class="btn btn-primary">
              Add Product
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          @click="clicked(product.id)"
          v-for="product in List"
          :key="product.id"
        >
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.title }}</td>
          <td>{{ product.body }}</td>
          <td class="text-center align-middle">
            <button
              @click.stop="editItem(product.id)"
              type="button"
              class="btn btn-primary"
            >
              <img src="@/assets/images/pencil.svg" alt="" />
            </button>
          </td>
          <td class="text-center align-middle">
            <button
              @click.stop="deleteItem(product.id)"
              type="button"
              class="btn btn-danger"
            >
              <img src="@/assets/images/trash.svg" alt="" />
            </button>
          </td>
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
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions({
      actionGetProduct: "products/ACTION_GET_LIST",
      actionDeleteProduct: "products/ACTION_DELETE_ITEM",
    }),
    clicked(value) {
      this.$router.push(`/product/${value}`);
    },
    editItem(ID) {
      this.$router.push(`/saveeditproduct/${ID}`);
    },
    addNewItem() {
      this.$router.push(`/saveeditproduct/new`);
    },
    deleteItem(index) {
      this.actionDeleteProduct(index);
    },
  },
  computed: {
    ...mapState({
      List: (state) => state.products.list,
    }),
  },
  mounted() {
    this.actionGetProduct();
  },
};
</script>
<style lang="scss" scoped></style>
