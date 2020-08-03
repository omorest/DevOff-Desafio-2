class Escitala {

  constructor(L, mensaje) {
    this.L = L;
    this.mensaje = mensaje;
    this.N = Math.round(this.mensaje.length / this.L)
    this.matrizMensaje = [this.L];
    
    for (let i = 0; i < this.N; i++) {
      this.matrizMensaje[i] = new Array(this.L)
    }
  }

  cifrar() {
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

  descifrar() {

  }


}

const test = new Escitala(4, 'Devoff se puso ATR');
console.log(test.cifrar())