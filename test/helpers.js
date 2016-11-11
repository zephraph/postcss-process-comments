import postcss from 'postcss';
import plugin from '../src';
import sinon from 'sinon';

function process(css, options) {
  return postcss(plugin(options)).process(css).css
}

function handleInput(input) {
  let comment = '';
  let pattern = null;

  if (typeof input === 'string') {
    comment = input;
  } else {
    comment = input.comment;
    pattern = input.pattern;
  }
  return { comment, pattern }
}

export function spy(t, input, expected) {
  const cb = sinon.spy();
  const { comment, pattern } = handleInput(input);

  process(comment, { process: cb, pattern });
  t.true(cb[expected]);
}

export function extract(t, input, expected) {
  const { comment, pattern } = handleInput(input);

  process(comment, { pattern, process: ({ text }) => {
    if (Array.isArray(expected)) {
      t.true(expected.indexOf(text) !== -1);
    } else {
      t.is(text, expected)
    }
  }});
}
