// cola.js
export class ColaDeEspera {
  #personas = [];
  #capacidad;

  constructor(capacidad) {
    this.#capacidad = capacidad;
  }

  entrar(persona) {
    if (this.estaLlena()) throw new Error('La cola está llena');
    this.#personas.push(persona);
  }

  atender() {
    if (this.estaVacia()) throw new Error('La cola está vacía');
    return this.#personas.shift();
  }

  estaVacia() {
    return this.#personas.length === 0;
  }

  estaLlena() {
    return this.#personas.length === this.#capacidad;
  }
}
