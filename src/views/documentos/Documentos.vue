<template>
  <div>
    <div class="row mt-3">
      <div class="col-lg-6">
        <button class="btn btn-light mr-1">Factura <i class="fa fa-plus-circle"></i></button>
        <button class="btn btn-light">Boleta <i class="fa fa-plus-circle"></i></button>
      </div>
      <div class="col-lg-6 ">
        <div class="form-row">
          <input type="text" class="form-control offset-md-5 mr-1 col" placeholder="Numero, dni, ruc o Fecha">
          <button class="btn btn-primary col-2"><i class="fa fa-search"></i> Buscar</button>
        </div>
      </div>
    </div>
    <table class="table table-sm table-hover mt-5">
      <tr>
        <th>Fecha</th>
        <th>Tipo</th>
        <th>Serie</th>
        <th>Numero</th>
        <th>Ruc,Dni,Etc</th>
        <th>Denominacion</th>
        <th>Opciones</th>
        <th>Moneda</th>
        <th class="text-right">Total</th>
      </tr>
      <tr v-for="doc in docs">
        <td>{{doc.documentoFecha}}</td>
        <td>{{doc.documentoTipo}}</td>
        <td>{{doc.documentoSerie}}</td>
        <td>{{doc.documentoSerie}}</td>
        <td>{{doc.clienteDniRuc}}</td>
        <td>{{doc.clienteRazon.substring(0,35)}}</td>
        <td><button class="btn btn-sm btn-light"><i class="fa fa-cog"></i></button></td>
        <td>{{doc.documentoMoneda}}</td>
        <td>{{doc.documentoTotal}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        docs: []
      }
    },
    methods: {
      getDocs: function () {
        axios.get('/api/documentos').then(res => {
          this.docs = res.data;
          console.log(this.docs)
        })
      }
    },
    created: function(){
      this.getDocs();
    }
  }
</script>