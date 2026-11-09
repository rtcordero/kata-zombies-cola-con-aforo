// cola.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ColaDeEspera } from './cola.js';

test('Z: una cola recién creada está vacía', () => {
  const cola = new ColaDeEspera(3);
  assert.equal(cola.estaVacia(), true);
});

test('Z: una cola recién creada no está llena', () => {
  const cola = new ColaDeEspera(3);
  assert.equal(cola.estaLlena(), false);
});

test('O: con una persona dentro, la cola ya no está vacía', () => {
  const cola = new ColaDeEspera(3);
  cola.entrar('Ana');
  assert.equal(cola.estaVacia(), false);
});

test('O: se atiende a la única persona y la cola vuelve a quedar vacía', () => {
  const cola = new ColaDeEspera(3);
  cola.entrar('Ana');
  assert.equal(cola.atender(), 'Ana');
  assert.equal(cola.estaVacia(), true);
});

test('M: con varias personas, se atienden por orden de llegada', () => {
  const cola = new ColaDeEspera(3);
  cola.entrar('Ana');
  cola.entrar('Luis');
  cola.entrar('Marta');
  assert.equal(cola.atender(), 'Ana');
  assert.equal(cola.atender(), 'Luis');
  assert.equal(cola.atender(), 'Marta');
});
