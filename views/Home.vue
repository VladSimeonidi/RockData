<template>
  <div class="home">
    <!-- <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
          <router-link :to="{ name: 'ProductList' }"
            >Список продуктов</router-link
          >
        </li>
      </ol>
    </nav> -->

    <div class="home d-flex h-100 text-center text-white bg-dark">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
          <div>
            <h3 class="float-md-start mb-0">Cover</h3>
          </div>
        </header>

        <main class="px-3">
          <h1>Cover your page.</h1>
          <p class="lead">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p class="lead">
            <router-link
              :to="{ name: 'ProductList' }"
              class="btn btn-lg btn-secondary fw-bold border-white bg-white"
              >Go to Product List</router-link
            >
          </p>
        </main>

        <footer class="mt-auto text-white-50">
          <p>
            Cover template for
            <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a
            >, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="css" scoped>
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none;
}

.home {
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
}

.cover-container {
  max-width: 42em;
  min-height: 100vh;
}

/*
 * Header
 */

.nav-masthead .nav-link {
  padding: 0.25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}
</style>
