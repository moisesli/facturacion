<template>
  <div>
    <div class="row pt-4">

      <!-- Botones Factura Boleta-->
      <div class="col-6">
        <b-button variant="light" class="mr-1">Factura <i class="fa fa-plus-circle"></i></b-button>
        <b-button variant="light">Boleta <i class="fa fa-plus-circle"></i></b-button>
      </div>

      <!-- Buscador -->
      <div class="col-6">
        <b-form inline>
          <b-form-input v-model="buscar" class="mr-1 ml-auto" placeholder="Factura a buscar"></b-form-input>
          <b-button variant="primary"><i class="fa fa-search"></i> Buscar</b-button>
        </b-form>
      </div>

    </div>
    <h1>Panel</h1>
    <b-alert show>Default Alert</b-alert>
  </div>
</template>

<script>
  console.log(window.location.pathname);
  export default {
    name: 'panel'
  }
</script>