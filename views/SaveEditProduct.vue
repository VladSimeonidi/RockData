<template>
  <div class="container">
    <p class="h1 mt-3">Edit/Save Product</p>
    <form v-if="CurrentItem" class="pt-3 pb-3">
      <div class="mb-3">
        <label for="input3" class="form-label">Name</label>
        <input
          type="text"
          v-model="Name"
          class="form-control form-control-sm"
          id="input3"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Body</label>
        <input
          type="text"
          class="form-control form-control-sm"
          id="exampleInputPassword1"
          v-model="Body"
        />
      </div>
      <div class="btn-group">
        <button @click.prevent="saveData" type="submit" class="btn btn-primary">
          Submit
        </button>
        <button @click="$router.push(`/products`)" class="btn btn-info">
          Back
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      actionSaveItem: "products/ACTION_SAVE_ITEM",
      actionGetCurrentItem: "products/ACTION_CURRENT_ITEM",
      actionEditCurrentItem: "products/ACTION_EDIT_ITEM",
    }),
    ...mapMutations({
      mutationAddItem: "products/SET_ADD_NEW_ITEM",
      SetName: "products/SetName",
      SetBody: "products/SetBody",
    }),
    saveData() {
      if (this.$route.params.id === "new") {
        this.actionSaveItem().then(() => {
          this.mutationAddItem();
        });
      } else {
        this.actionEditCurrentItem(this.$route.params.id);
      }
    },
  },
  computed: {
    ...mapState({
      CurrentItem: (state) => state.products.currentItem,
    }),
    Name: {
      get() {
        return this.$store.state.products.currentItem.title;
      },
      set(value) {
        this.SetName(value);
      },
    },
    Body: {
      get() {
        return this.$store.state.products.currentItem.body;
      },
      set(value) {
        this.SetBody(value);
      },
    },
  },
  created() {
    if (this.$route.params.id === "new") {
      this.mutationAddItem();
    } else {
      this.actionGetCurrentItem(this.$route.params.id)
        .then((result) => {
          result;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>
