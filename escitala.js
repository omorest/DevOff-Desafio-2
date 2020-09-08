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

    //Creamos matriz traspuesta
    let matrizMensajeTraspuesta = [this.N];
    
    for (let i = 0; i < this.L; i++) {
      matrizMensajeTraspuesta[i] = new Array(this.N);
    }

    
    for (let i = 0; i < this.L; i++) {
      for (let j = 0; j < this.N; j++) {
        matrizMensajeTraspuesta[i][j] = this.matrizMensaje[j][i];
      }
    }

    let result = '';
    for (let i = 0; i < this.L; i++) {
      for (let j = 0; j < this.N; j++) {
        if (matrizMensajeTraspuesta[i][j]) {
          result+= matrizMensajeTraspuesta[i][j];
        }
      }
    }
    
    return result;
  }


  descifrar(fraseCifrada) {
    
    

  }


}

const test = new Escitala(4, 'Devoff se puso ATR');
console.log(test.cifrar())
console.log(test.descifrar('DfesTef oRv p osuA'))