// cola.js
export class ColaDeEspera {
  #persona;

  constructor(capacidad) {}

  entrar(persona) {
    this.#persona = persona;
  }

  estaVacia() {
    return this.#persona === undefined;
  }

  estaLlena() {
    return false;
  }
}
