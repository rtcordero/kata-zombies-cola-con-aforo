// cola.js
export class ColaDeEspera {
  #personas = [];

  constructor(capacidad) {}

  entrar(persona) {
    this.#personas.push(persona);
  }

  atender() {
    return this.#personas.shift();
  }

  estaVacia() {
    return this.#personas.length === 0;
  }

  estaLlena() {
    return false;
  }
}
