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
    </table>
  </div>
</template>