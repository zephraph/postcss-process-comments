import { process, processJSON } from './helpers';
import test from 'ava';
import { spy } from 'sinon';

test('Does not process a normal comment', t => {
  let cb = spy();
  process('/* hello world! */', { process: cb });
  t.falsy(cb.called);
});

test('Processes a comment starting with JSON', processJSON, '/* JSON{} */', {});

test(
  'Should match a single property',
  processJSON,
  '/* JSON{"test": true} */',
  { test: true }
);

test(
  'Should match a deep property',
  processJSON,
  '/* JSON{"test": {"deep": true}} */',
  { test: { deep: true } }
);
