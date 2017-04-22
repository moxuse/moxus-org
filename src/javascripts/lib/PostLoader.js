import $ from 'jquery';
let yaml = require('front-matter');

class PostLoader {
  constructor(path) {
    return new Promise ((resolve) => {
      $.get('posts/' + path, (result) => {              
        try{
        var res = yaml(result);
        } catch (error) {
          console.log('YAML PARSE ERROR:',error)
        }
        resolve(res);
      })
    });
  }
}

export default PostLoader