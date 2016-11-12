# postcss-process-comments

A plugin to process text from css comments

## API

* options
  * process [_function_] **Required**
    - Method to process the comment matching _pattern_. Receives a postcss [comment node](http://api.postcss.org/Comment.html) as an argument.
  * pattern [_regex_]
    - Pattern to filter comments on for processing

## Usage

```javascript
import processComment from 'postcss-process-comments';
import postcss from 'postcss';

const process = ({ text }) => console.log(text);

// Prints all comments
postcss([ processComment({ process }) ]);

// prints all comments starting with the test TEST
postcss([ processComment({ process, pattern: /^TEST/ })]);
```
