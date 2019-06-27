"use strict";

function tipOperacion(documentoOp) {

    if (documentoOp == 'nuevaFactura'){
        documentoOp = 'Nueva Factura'
    }else if (documentoOp == 'editFactura'){
        documentoOp == 'Editar Factura'
    }else if (documentoOp == 'nuevaBoleta'){
        documentoOp = 'Nueva Boleta'
    }else if (documentoOp == 'editBoleta'){
        documentoOp == 'Editar Boleta'
    }else if (documentoOp == 'nuevaNotaCredito'){
        documentoOp == 'Nueva Nota de Credito'
    }else if (documentoOp == 'editNotaCredito'){
        documentoOp == 'Edit Nota de Credito'
    }else if (documentoOp == 'nuevaNotaDebito'){
        documentoOp == 'Nueva Nota de Debito'
    }else if (documentoOp == 'editNotaDebito'){
        documentoOp == 'Edit Nota de Debito'
    }
    return documentoOp
}

function nuevoDocumento(){
    var nuevoDocumento = {
        documentoOp: '',
        documentoAnticipo: '',
        documentoExonerada: '',
        documentoInafecta: '',
        documentoGravada: '',
        documentoIgv: '',
        documentoGratuito: '',
        documentoOtros: '',
        documentoDescuento: '',
        documentoTotal: ''
    }
    return nuevoDocumento
}



module.exports = {tipOperacion,nuevoDocumento}
