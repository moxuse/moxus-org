let yaml = require('front-matter');

class PostLoader {
  constructor(path) {
    return new Promise((resolve, reject) => {
      const get_post_request = new XMLHttpRequest();
      get_post_request.onreadystatechange = () => {
        if (get_post_request.status === 200) {
        } else {
          // reject(Error('erject at post request'));
        }
      };
      get_post_request.onload = () => {
        let res;
        try {
          res = yaml(get_post_request.responseText);
        } catch (error) {
          console.log('YAML PARSE ERROR in :', path, error.message);
          reject(Error('Reject at post request'));
        }
        res.path = path.slice(0, -3);
        resolve(res);
      };
      get_post_request.open('GET', '/posts/' + path, true);
      get_post_request.send(null);
    });
  }
}

export default PostLoader;
