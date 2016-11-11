import postcss from 'postcss';

export default postcss.plugin('extract-comment', ({ process, pattern } = {}) =>
  css => {

    if (!process) {
      throw new Error('postcss-extract-comment requires the process method to be passed to it');
    }

    if (!pattern) {
      css.walkComments(comment => process(comment));
    }

    if (pattern) {
      css.walkComments(comment => {
        if (comment.text.match(pattern)) {
          process(comment)
        }
      });
    }
  }
);
