// cola.js
export class ColaDeEspera {
  #persona;

  constructor(capacidad) {}

  entrar(persona) {
    this.#persona = persona;
  }

  atender() {
    const persona = this.#persona;
    this.#persona = undefined;
    return persona;
  }

  estaVacia() {
    return this.#persona === undefined;
  }

  estaLlena() {
    return false;
  }
}
