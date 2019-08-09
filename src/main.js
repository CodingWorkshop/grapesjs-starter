import grapesjs from 'grapesjs';
import './style.css';
import 'grapesjs-preset-webpage';
import 'grapesjs-lory-slider';
import 'grapesjs-tabs';
import grapesjsCustomCode from 'grapesjs-custom-code';
import grapesjsTooltip from 'grapesjs-tooltip';

var editor = grapesjs.init({
  container: '#gjs',
  components: '<div class="txt-red">Hello world!</div>',
  style: '.txt-red{color: red}',
  plugins: [
    'gjs-preset-webpage',
    'grapesjs-lory-slider',
    'grapesjs-tabs',
    grapesjsCustomCode,
    grapesjsTooltip,
  ],
  pluginsOpts: {
    'grapesjs-lory-slider': {
      sliderBlock: {
        category: 'Extra',
      },
    },
    'grapesjs-tabs': {
      tabsBlock: {
        category: 'Extra',
      },
    },
  }
});