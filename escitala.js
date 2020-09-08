class Escitala {

  constructor(L, mensaje) {
    this.L = L;
    this.mensaje = mensaje;
    this.N = Math.round(this.mensaje.length / this.L)
    this.matrizMensaje = this.crearMatriz(this.L, this.N);

  }


  crearMatriz(row, col = row) {
    let matriz = [row]
    for (let i = 0; i < col; i++) {
      matriz[i] = new Array(row)
    }

    return matriz
  }


  mostrarMatriz(matriz) {
    console.table( matriz )
  }


  cifrar() {
    //introducimos las letras en la matriz
    let j = 0, k = 0;
    for (let i = 0; i < this.mensaje.length; i++) {
      if (k < this.L) {
        this.matrizMensaje[j][k] = this.mensaje[i]; 
        k++; 
      } else {
          j++;
          k = 0;
          this.matrizMensaje[j][k] = this.mensaje[i]; 
          k++;
        }     
    }

    console.log('Matriz Mensaje Normal')
    this.mostrarMatriz(this.matrizMensaje)

    //Creamos matriz traspuesta
    let matrizMensajeTraspuesta = this.crearMatriz(this.N, this.L)
    
    //La rellenamos
    for (let i = 0; i < this.L; i++) {
      for (let j = 0; j < this.N; j++) {
        matrizMensajeTraspuesta[i][j] = this.matrizMensaje[j][i];
      }
    }

    console.log('Matriz Mensaje Traspuesta')
    this.mostrarMatriz(matrizMensajeTraspuesta)

    let mensajeCifrado = '';
    for (let i = 0; i < this.L; i++) {
      for (let j = 0; j < this.N; j++) {
        if (matrizMensajeTraspuesta[i][j]) {
          mensajeCifrado += matrizMensajeTraspuesta[i][j];
        }
      }
    }
    
    return mensajeCifrado;
  }


  descifrar(fraseCifrada) {
    
    

  }


}

const test = new Escitala(4, 'Devoff se puso ATR');
console.log(test.cifrar())
console.log(test.descifrar('DfesTef oRv p osuA'))