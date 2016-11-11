import postcss from 'postcss';
import plugin from '../src';

export function process(css, options) {
  return postcss(plugin(options)).process(css).css
}

export function processJSON(t, input, expected) {
  process(input, { process: result => t.deepEqual(JSON.parse(result), expected) });
}
