# postcss-extract-comment

A plugin to extract text from css comments

## API

* options
  * process [_function_] **Required**
    - Method to process the comment matching _pattern_. Receives a postcss [comment node](http://api.postcss.org/Comment.html) as an argument.
  * pattern [_regex_]
    - Pattern to filter comments on for processing

## Usage

```javascript
import extractComment from 'postcss-extract-comment';
import postcss from 'postcss';

const process = ({ text }) => console.log(text);

// Prints all comments
postcss([ extractComment({ process }) ]);

// prints all comments starting with the test TEST
postcss([ extractComment({ process, pattern: /^TEST/ })]);
```
