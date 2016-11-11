import postcss from 'postcss';

export default postcss.plugin('export-json', ({ process } = {}) =>
  css => {
    css.walkComments(comment => {
      if (comment.text.startsWith('JSON')) {
        let json = comment.text.substring(4);
        process ? process(json) : console.log(json)
      }
    });
  }
);
