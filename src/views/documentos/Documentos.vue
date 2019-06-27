<template>
  <div>
    <div class="row mt-3">
      <div class="col-lg-6">
        <button class="btn btn-light mr-1" @click="getModal('nuevaFactura')">Factura <i class="fa fa-plus-circle"></i></button>
        <button class="btn btn-light" @click="getModal('nuevaBoleta')">Boleta <i class="fa fa-plus-circle"></i></button>
      </div>
      <div class="col-lg-6 ">
        <div class="form-row">
          <input type="text" class="form-control offset-md-5 mr-1 col" placeholder="Numero, dni, ruc o Fecha">
          <button class="btn btn-primary col-2"><i class="fa fa-search"></i> Buscar</button>
        </div>
      </div>
    </div>


    <!-- Table -->
    <table class="table table-hover table-sm mt-4">
      <thead>
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
      </thead>
      <tbody>
        <tr v-for="doc in docs">
          <td>{{doc.documentoFecha}}</td>
          <td>{{doc.documentoTipo}}</td>
          <td>{{doc.documentoSerie}}</td>
          <td>{{doc.documentoSerie}}</td>
          <td>{{doc.clienteDniRuc}}</td>
          <td>{{doc.clienteRazon.substring(0,35)}}</td>
          <td class="mt-0 mb-0 pt-0 pb-0">
            <button class="btn btn-sm btn-light mr-2"><i class="fa fa-file-alt"></i></button>
            <!-- Opciones -->
            <button class="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-cog"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Enviar Factura</a>
              <a class="dropdown-item" href="#">Editar Factura</a>
              <a class="dropdown-item" href="#">Generar Nota Credito</a>
              <a class="dropdown-item" href="#">Generar Nota Debito</a>
              <a class="dropdown-item" href="#">Generar Baja</a>
            </div>

          </td>
          <td>{{doc.documentoMoneda}}</td>
          <td>{{doc.documentoTotal}}</td>
        </tr>
      </tbody>
    </table>

    <!-- getModal -->
    <div class="modal fade show" id="getModal" data-backdrop="true" tabindex="-1">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <!-- Header -->
          <div class="modal-header p-2">
            <h4 class="modal-title">{{doc.documentoOp}}</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- Body -->
          <div class="modal-body bg-light">

            <!-- PRIMERA FILA -->
            <div class="row pl-3 pr-3">

              <!-- Dni o Ruc -->
              <div style="width: 22%" class="input-group input-group-sm">
                <input type="search"
                       list="dniRucList"
                       placeholder="Dni o Ruc"
                       class="form-control">
                <datalist id="dniRucList" style="max-height: 20%;">
                </datalist>
                <div class="input-group-append">
              <span class="input-group-text">
                  <i class="fa fa-search"></i>
              </span>
                </div>
              </div>

              <!-- Nombre -->
              <div style="width: 38%;" class="pl-2">
                <input type="text"
                       class="form-control form-control-sm"
                       placeholder="Nombre y Apellido">
              </div>

              <!-- Direccion -->
              <div style="width: 30%;" class="pl-2">
                <input type="text"
                       class="form-control form-control-sm"
                       placeholder="Direccion">
              </div>

              <!-- Avanzadas -->
              <div class="dropdown dropleft pr-0 pl-2" style="width:5%">
                <button
                        class="btn btn-light btn-sm dropdown-toggle pl-1"
                        style="width: 100%"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                  <i class="fa fa-cog"></i>
                </button>
                <!-- Opciones Avanzadas -->
                <div class="dropdown-menu p-0 bg-light" style="max-width: 190px;">
                  <form class="p-3">
                    <h6 class="dropdown-header p-0 text-center">Opciones Avanzadas</h6>
                    <div class="dropdown-divider mb-0"></div>

                    <!-- Serie -->
                    <small class="text-muted">Serie</small>
                    <select class="form-control form-control-sm">
                    </select>

                    <!-- Fecha emision -->
                    <small class="text-muted">Fecha Emision</small>
                    <input type="date"
                           class="form-control form-control-sm">

                    <!-- Venta interna -->
                    <small class="text-muted">Tipo de Operacion</small>
                    <select class="form-control form-control-sm">
                      <option value="1">Venta Interna</option>
                      <option value="2">Anticipo o Deduccion de Anticipo en venta interna</option>
                      <option value="3">Exportacion</option>
                    </select>

                    <!-- Moneda -->
                    <small class="text-muted">Moneda</small>
                    <select class="form-control form-control-sm">
                      <option value="PEN">Soles (S/.)</option>
                      <option value="USD">Dolares ($)</option>
                    </select>

                    <!-- Tipo de cambio -->
                    <small class="text-muted">Tipo de Cambio</small>
                    <input type="text"
                           class="form-control form-control-sm"
                           placeholder="3.29" disabled>
                  </form>
                </div>
              </div>

              <!-- Agregar Item -->
              <div style="width: 5%">
                <button class="btn btn-sm btn-outline-secondary ml-2" style="width: 100%">
                  <i class="fa fa-plus"></i>
                </button>
              </div>

            </div>

            <!-- LINEA -->
            <hr class="mb-2">

            <!-- HEADER ITEMS-->
            <div class="row pr-3 pl-3">
              <div style="width: 35%"><span class="text-black-50">Producto</span></div>
              <div style="width: 5%"></div>
              <div class="text-center " style="width: 15%" ><span class="text-black-50">Cantidad</span></div>
              <div class="text-right " style="width: 15%" ><span class="text-black-50">P.Unitario</span></div>
              <div class="text-right " style="width: 15%" ><span class="text-black-50">Subtotal</span></div>
              <div class="text-right " style="width: 15%"><span class="text-black-50">Total</span></div>
            </div>

            <!-- ITEMS -->
            <div class="row bg-light pb-1 pl-3 pr-3">
              <!-- Producto -->
              <div style="width: 35%">
                <input type="search"
                       class="form-control form-control-sm"
                       placeholder="Producto o Codigo"
                       style="width: 100%">
                <!-- Codigo -->
                <input type="hidden">
                <!-- Descripcion -->
                <input type="hidden">
                <datalist>
                  <option></option>
                </datalist>
              </div>

              <!-- Avanzadas Item -->
              <div class="dropdown dropright pr-0 pl-2" style="width:5%">
                <button
                        class="btn btn-light btn-sm dropdown-toggle pl-1"
                        style="width: 100%"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                  <i class="fa fa-cog"></i>
                </button>
                <!-- Opciones Avanzadas -->
                <div class="dropdown-menu p-0 bg-light" style="max-width: 190px;">
                  <form class="p-3">
                    <h6 class="dropdown-header p-0 text-center">Item Avanzadas</h6>
                    <div class="dropdown-divider mb-0"></div>
                    <!-- Tipo IGV -->
                    <small class="text-muted">Tipo de IGV</small>
                    <select class="form-control form-control-sm">
                      <option value="1">Gravada</option>
                      <option value="2">Exonerada</option>
                      <option value="2">Inafecto</option>
                    </select>
                    <!-- Descuento -->
                    <small class="text-muted">Descuento</small>
                    <input type="text"
                           class="form-control form-control-sm"
                           placeholder="0.00">
                    <!-- IGV Linea -->
                    <small class="text-muted">IGV Linea</small>
                    <input type="text" disabled
                           class="form-control form-control-sm"
                           placeholder="0.00">
                    <!-- Eliminar -->
                    <button type="button"
                            class="btn btn-light btn-sm mt-1 btn-block dropdown-toggle"><i class="fa fa-trash"></i> Eliminar Fila</button>
                  </form>
                </div>
              </div>


              <!-- Cantidad -->
              <div class="pr-0 pl-2" style="width: 15%">
                <input type="text"
                       style="width: 100%"
                       class="form-control form-control-sm text-center"
                       placeholder="0">
              </div>

              <!-- Precio Unitario -->
              <div class="pr-0 pl-2" style="width: 15%">
                <input type="text" style="width: 100%;"
                       class="form-control form-control-sm text-right"
                       placeholder="0.00">

                <!-- Precio Sin Igv -->
                <input type="hidden">
              </div>

              <!-- Subtotal -->
              <div class="pr-0 pl-2" style="width: 15%">
                <input type="text" style="width: 100%;"
                       class="form-control form-control-sm text-right"
                       placeholder="0.00" disabled>
              </div>

              <!-- Total -->
              <div class="pr-0 pl-2" style="width: 15%">
                <input type="text" style="width: 100%;"
                       class="form-control form-control-sm text-right"
                       placeholder="0.00">
              </div>
            </div>

            <!-- LINEA -->
            <hr class="mb-2 mt-1">

            <!-- TOTALES -->
            <div class="row pb-1 pl-3 pr-3">
              <!-- Espacion para usar -->
              <div style="width: 60%"></div>
              <div style="width: 40%">

                <!-- Anticipo -->
                <div v-if="doc.documentoAnticipo != ''">
                  <div style="width: 59.9%; float: left;"
                       class="text-right pr-2 pb-1 text-muted">
                    Anticipo (-)
                  </div>
                  <div class="pl-3 pb-1" style="width: 40.1%; float: left;">
                    <input type="text" style="width: 100%;" class="form-control form-control-sm text-right"
                           placeholder="0.00">
                  </div>
                </div>

                <!-- Exonerada -->
                <div v-if="doc.documentoExonerada != ''">
                  <div style="width: 59.9%; float: left;"
                       class="text-right pr-2 text-muted pb-1">
                    Exonerada
                  </div>
                  <div class="pl-3 pb-1"
                       style="width: 40.1%; float: left;">
                    <input type="text" style="width: 100%;" class="form-control form-control-sm text-right"
                           placeholder="0.00">
                  </div>
                </div>

                <!-- Inafecta -->
                <div v-if="doc.documentoInafecta != ''">
                  <div style="width: 59.9%; float: left;"
                       class="text-right pr-2 text-muted pb-1">
                    Inafecta
                  </div>
                  <div class="pl-3 pb-1"
                       style="width: 40.1%; float: left;">
                    <input type="text" style="width: 100%;" class="form-control form-control-sm text-right"
                           placeholder="0.00">
                  </div>
                </div>

                <!-- Gravada -->
                <div v-if="doc.documentoGravada != ''">
                  <div style="width: 59.9%; float: left;"
                       class="text-right pr-2 text-muted pb-1">
                    Gravada
                  </div>
                  <div class="pl-3 pb-1"
                       style="width: 40.1%; float: left;">
                    <input type="text" disabled style="width: 100%;"
                           class="form-control form-control-sm text-right"
                           placeholder="0.00">
                  </div>
                </div>

                <!-- IGV -->
                <div v-if="doc.documentoIgv != ''">
                  <div style="width: 59.9%; float: left;"
                       class="text-right pr-2 text-muted pb-1">
                    IGV
                  </div>
                  <div class="pl-3 pb-1"
                       style="width: 40.1%; float: left;">
                    <input type="text" disabled style="width: 100%;"
                           class="form-control form-control-sm text-right"
                           placeholder="0.00">
                  </div>
                </div>

                <!-- Gratuita -->
                <div v-if="doc.documentoGratuito != ''">
                  <div style="width: 59.9%; float: left;"
                       class="text-right pr-2 text-muted pb-1">
                    Gratuita
                  </div>
                  <div class="pl-3 pb-1" style="width: 40.1%; float: left;">
                    <input type="text" style="width: 100%;" class="form-control form-control-sm text-right"
                           placeholder="0.00">
                  </div>
                </div>

                <!-- Otros Cargos -->
                <div v-if="doc.documentoOtros != ''">
                  <div style="width: 59.9%; float: left;" class="text-right pr-2 text-muted pb-1">
                    Otros Cargos
                  </div>
                  <div class="pl-3 pb-1"
                       style="width: 40.1%; float: left;">
                    <input type="text" style="width: 100%;" class="form-control form-control-sm text-right"
                           placeholder="0.00">
                  </div>
                </div>

                <!-- Descuento total -->
                <div v-if="doc.documentoDescuento !=''">
                  <div style="width: 59.9%; float: left;"
                       class="text-right pr-2 text-muted pb-1">
                    Descuento total (-)
                  </div>
                  <div class="pl-3 pb-1"
                       style="width: 40.1%; float: left;">
                    <input type="text"
                           style="width: 100%;"
                           class="form-control form-control-sm text-right"
                           placeholder="0.00">
                  </div>
                </div>

                <!-- Total -->
                <div v-if="doc.documentoTotal != ''">
                  <div style="width: 59.9%; float: left;"
                       class="text-right pr-2 pb-1">
                    <strong>Total</strong>
                  </div>
                  <div class="pl-3 pb-1" style="width: 40.1%; float: left;">
                    <input type="text" disabled style="width: 100%; font-weight: bold"
                           class="form-control form-control-sm text-right"
                           placeholder="0.00">
                  </div>
                </div>

              </div>
            </div>

          </div>
          <!-- Footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">
              Guardar
            </button>
            <button type="button" class="btn btn-success" data-dismiss="modal">Salir</button>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  const util1 = require('../documentos/documentoOp');
  export default {
    name: 'Documentos',
    data(){
      return{
        docs: [],
        doc: util1.nuevoDocumento()
      }
    },
    methods: {
      getDocs: function () {
        // axios.get('/api/documentos').then(res => {
        //   this.docs = res.data;
        // })
      },
      getModal: function (documentoOp) {
        this.doc.documentoOp = util1.tipOperacion(documentoOp);
        $('#getModal').modal('show')
      }
    },
    created: function(){
      this.getDocs();
    }
  }
</script>