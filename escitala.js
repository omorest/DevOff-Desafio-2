class Escitala {

  constructor(L, mensaje) {
    this.L = L;
    this.mensaje = mensaje;
    this.N = Math.round(this.mensaje.length / this.L)
    
  }
  
  
  crearMatriz(row, col ) {
    let matriz = []
    for (let i = 0; i < row; i++) {
      matriz[i] = new Array(col)
    }
    
    return matriz
  }


  rellenarMatriz(mensaje, matriz, numCols) {
    let row = 0, col = 0;
    for (const letra of mensaje) {
      if (col < numCols) {
        matriz[row][col] = letra; 
        col++; 
      } else {
          row++;
          col = 0;
          matriz[row][col] = letra; 
          col++;
        }     
    }
  }
  
  
  cifrar() {
    let matrizMensaje = this.crearMatriz(this.N, this.L); //5,4

    //introducimos las letras en la matriz
    this.rellenarMatriz(this.mensaje, matrizMensaje, this.L)

    console.log('Matriz Mensaje Normal')
    console.table(matrizMensaje);

    //Creamos matriz traspuesta
    let matrizMensajeTraspuesta = this.crearMatriz(this.L, this.N) 

    //Rellenamos la traspuesta
    for (let i = 0; i < this.L; i++) {
      for (let j = 0; j < this.N; j++) {
        matrizMensajeTraspuesta[i][j] = matrizMensaje[j][i];
      }
    }

    console.log('Matriz Mensaje Traspuesta')
    console.table(matrizMensajeTraspuesta);

    // Sacamos el mensaje cifrado de la matriz traspuesta
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


  descifrar(mensajeCifrado) {
    let matrizMensaje = this.crearMatriz(this.L, this.N); //4, 5
    
    this.rellenarMatriz(mensajeCifrado, matrizMensaje, this.N)

    console.table(matrizMensaje);

    let matrizMensajeTraspuesta = this.crearMatriz(this.N, this.L) 

    //Rellenamos la traspuesta
    for (let i = 0; i < this.N; i++) {
      for (let j = 0; j < this.L; j++) {
        matrizMensajeTraspuesta[i][j] = matrizMensaje[j][i];
      }
    }
    console.table(matrizMensajeTraspuesta);

  }


}

const test = new Escitala(4, 'Devoff se puso ATR');
console.log(test.cifrar())
console.log(test.descifrar('DfesTef oRv p osuA'))