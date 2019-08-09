import grapesjs from 'grapesjs';
import './style.css';
import 'grapesjs-preset-webpage';
import 'grapesjs-lory-slider';
import 'grapesjs-tabs';
import pluginCustomCode from 'grapesjs-custom-code';
import pluginTooltip from 'grapesjs-tooltip';

var editor = grapesjs.init({
  container: '#gjs',
  components: '<div class="txt-red">Hello world!</div>',
  style: '.txt-red{color: red}',
  plugins: [
    'gjs-preset-webpage',
    'grapesjs-lory-slider',
    'grapesjs-tabs',
     pluginCustomCode,
     pluginTooltip
  ],
  pluginsOpts: {
    'grapesjs-lory-slider': {
      sliderBlock: {
        category: 'Extra'
      }
    },
    'grapesjs-tabs': {
      tabsBlock: {
        category: 'Extra'
      }
    },
    [pluginCustomCode]: {
      blockCustomCode: {
        category: 'Extra'
      }
    },
    [pluginTooltip]: {
      blockTooltip: {
        category: 'Extra'
      }
    }
  }
});