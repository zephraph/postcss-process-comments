import { spy, matches } from './helpers';
import test from 'ava';

test('Process all comments if not pattern given',
  spy,
  '/* hello world! */',
  'called'
);

test('Should not process a comment that doesn\'t match the pattern',
  spy,
  { comment: '/* hello world */', pattern: /^TEST/ },
  'notCalled'
);

test('Should process a comment that does match the pattern',
  spy,
  { comment: '/* TEST: hello world */', pattern: /^TEST/ },
  'called'
);

test('Should process matching text from mixed comments',
  spy,
  { comment: '/* TEST: this */ /* Hello World */', pattern: /^TEST/ },
  'calledOnce'
);

test('Should process multiple comment strings',
  spy,
  { comment: '/* TEST: hello */ /* TEST: world */', pattern: /^TEST/ },
  'calledTwice'
);

test('Should process a single comment', matches, '/* hello */', 'hello');

test('Should process multiple comments', matches, '/* hello */ /* world */', ['hello', 'world']);

test('Should process comment with pattern',
  matches,
  { comment: '/* hello world */', pattern: /^hello/ },
  'hello world'
);
