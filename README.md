# postcss-extract-comment

A plugin to extract text from a comment if it matches a particular pattern

## Usage

```javascript
import extractComment from 'postcss-extract-comment';
import postcss from 'postcss';

const process = text => console.log(text);

postcss([ extractComment({ pattern: /.*/, process }) ]);
```
