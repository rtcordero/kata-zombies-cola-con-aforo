// cola.js
export class ColaDeEspera {
  #personas = [];
  #capacidad;

  constructor(capacidad) {
    this.#capacidad = capacidad;
  }

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
    return this.#personas.length === this.#capacidad;
  }
}
