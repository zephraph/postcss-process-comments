import { spy, extract } from './helpers';
import test from 'ava';

test('Extract all comments if not pattern given',
  spy,
  '/* hello world! */',
  'called'
);

test('Should not extract a comment that doesn\'t match the pattern',
  spy,
  { comment: '/* hello world */', pattern: /^TEST/ },
  'notCalled'
);

test('Should extract a comment that does match the pattern',
  spy,
  { comment: '/* TEST: hello world */', pattern: /^TEST/ },
  'called'
);

test('Should extract matching text from mixed comments',
  spy,
  { comment: '/* TEST: this */ /* Hello World */', pattern: /^TEST/ },
  'calledOnce'
);

test('Should extract multiple comment strings',
  spy,
  { comment: '/* TEST: hello */ /* TEST: world */', pattern: /^TEST/ },
  'calledTwice'
);

test('Should extract a single comment', extract, '/* hello */', 'hello');

test('Should extract multiple comments', extract, '/* hello */ /* world */', ['hello', 'world']);

test('Should extract comment with pattern',
  extract,
  { comment: '/* hello world */', pattern: /^hello/ },
  'hello world'
);
