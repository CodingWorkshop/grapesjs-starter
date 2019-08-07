import grapesjs from 'grapesjs';
import './style.css';

var editor = grapesjs.init({
  container: '#gjs',
  components: '<div class="txt-red">Hello world!</div>',
  style: '.txt-red{color: red}',
  plugins: ['gjs-preset-webpage'],
  pluginsOpts: {
    'gjs-preset-webpage': {
    }
  }
});
