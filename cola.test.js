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
