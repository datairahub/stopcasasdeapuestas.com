<template>
  <div class="page page--home" ref="page" :class="{'page--wide': width>=minWidthWide}">

    <div class="page__wrap">
      
      <section class="page__section page__section--head">
        <img class="page__logo" src="/static/logo.svg" alt="Stop Casas de Apuestas Logo">
        <h1 class="page__title" style="display: none;">Stop Casas de Apuestas</h1>
      </section>

      <section class="page__section page__section--text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi culpa et, deleniti iusto omnis facilis fuga eius nisi dolorum consectetur ut iste laborum a, temporibus sint quo, rem mollitia.</p>
      </section>

    </div>

    <div class="page__map" v-if="width>=minWidthWide">
      page__map
    </div>

  </div>
</template>

<script>
export default {
  name: 'home-page',
  data() {
    return {
      width: 700,
      height: 700,
      minWidthWide: 760,
    }
  },
  created: function() {},
  mounted: function() {
    window.addEventListener("resize", () => {
      this.getCanvasSize();
    });
    this.getCanvasSize();
  },
  methods: {
    getCanvasSize(){
      this.width = this.$refs.page ? parseInt(this.$refs.page.offsetWidth) : 700;
      this.height = this.$refs.page ? parseInt(this.$refs.page.offsetHeight) : 700;
    }
  }
}

</script>