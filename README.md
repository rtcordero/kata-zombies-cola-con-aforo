# Kata ZOMBIES: cola de espera con aforo

Al empezar con TDD, la pregunta más habitual es por qué test empezar. **ZOMBIES**, la técnica de James Grenning, responde con un orden: primero el caso cero, luego uno, luego muchos, vigilando en cada paso los límites, la interfaz y los errores. Este repositorio la aplica a una `ColaDeEspera` con capacidad máxima, como la cola de una tienda con aforo.

Lo que demuestra está en el **historial**: un commit por paso del ciclo rojo-verde, en el orden ZOMBIES, y cada commit falla o pasa exactamente como dice su mensaje.

Es el código del artículo [ZOMBIES en TDD: qué tests escribir primero, con ejemplo](https://rubentejera.com/tdd-zombies/), que explica cada paso.

## Cómo ejecutarlo

Necesitas Node.js 24 o posterior (la versión fijada está en `.node-version`). No hay dependencias: los tests usan `node:test`.

1. Clona el repositorio y entra en la carpeta.
2. Pasa los tests:

   ```bash
   npm test
   ```

3. Recorre el historial de la kata, del primer paso al último:

   ```bash
   git log --oneline --reverse
   git checkout <commit>   # y npm test en cada paso
   git checkout main       # para volver
   ```

## Qué mirar primero

1. El historial: `git log --reverse --format=%s`. Cada mensaje empieza por la letra ZOMBIES del paso y acaba en su fase: `(rojo)`, `(verde)` o `(verde a la primera)`, para el test de límites que ya pasaba al escribirlo.
2. [`cola.test.js`](cola.test.js): los diez tests, que se leen como la especificación de la cola.
3. [`cola.js`](cola.js): la implementación final, y cómo creció con `git log -p cola.js`.
4. [`scripts/comprobar-historial.sh`](scripts/comprobar-historial.sh): recorre el historial y falla si un commit «(rojo)» pasa o uno «(verde…)» falla. La CI lo ejecuta en cada push; en local, con `npm run test:historial`.

Las letras I (interfaz) y S (simple) no tienen commits propios: no son pasos, sino lo que se vigila en todos. No hay commits de refactor porque, en cada ciclo, el artículo concluye que no había nada que limpiar.

## Versiones

- Node.js 24.22.2 (`.node-version`). Cada commit se ha comprobado también con Node.js 26.13.0, y la CI pasa los tests en las dos versiones.
- Tests con `node:test` y `node:assert/strict`, sin librerías.

## Cómo se hizo

Desarrollado con el enfoque [IA Limpia](https://rubentejera.com/que-es-la-ia-limpia/): un agente de IA escribe el código siguiendo los pasos del artículo, los tests validan cada paso y el resultado se revisa y se aprueba a mano antes de publicarlo.

El historial reconstruye los pasos del artículo en su mismo orden, para poder recorrerlos uno a uno. La CI comprueba en cada push que cada rojo falla y cada verde pasa (`npm run test:historial`).

## Licencia

[MIT](LICENSE).
