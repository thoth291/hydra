(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{50:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return o}),t.d(n,"rightToc",function(){return l}),t.d(n,"default",function(){return s});t(0);var a=t(70);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o={id:"config_file",title:"Config file",sidebar_label:"Config file"},l=[{value:"Configuration file",id:"configuration-file",children:[]},{value:"Strict mode",id:"strict-mode",children:[]}],c={rightToc:l},p="wrapper";function s(e){var n=e.components,t=i(e,["components"]);return Object(a.b)(p,r({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Your app evolves, and you now want to use a configuration file to make things more manageable:"),Object(a.b)("h3",{id:"configuration-file"},"Configuration file"),Object(a.b)("p",null,"Configuration file (",Object(a.b)("inlineCode",{parentName:"p"},"config.yaml"),"):"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"dataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),Object(a.b)("p",null,"You can pass in a config file for your app by specifying a config_path parameter to the ",Object(a.b)("inlineCode",{parentName:"p"},"@hydra.main()")," decoration.\nThe location of the ",Object(a.b)("inlineCode",{parentName:"p"},"config_path")," is relative to your python file."),Object(a.b)("p",null,"Python file (",Object(a.b)("inlineCode",{parentName:"p"},"experiment.yaml"),"):"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-python"}),"import hydra\n\n\n@hydra.main(config_path='config.yaml')\ndef experiment(cfg):\n    print(cfg.pretty())\n\n\nif __name__ == \"__main__\":\n    experiment()\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"config.yaml")," gets loaded automatically when you run the app."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"$ python experiment.py\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),Object(a.b)("p",null,"You can override values in the loaded config from the command line:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"$ python experiment.py dataset.path=/datasets/new_imagenet\ndataset:\n  name: imagenet\n  path: /datasets/new_imagenet\n")),Object(a.b)("h3",{id:"strict-mode"},"Strict mode"),Object(a.b)("p",null,"Enabling strict mode will change the behavior of the ",Object(a.b)("inlineCode",{parentName:"p"},"cfg")," object in the following way:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Reading a key that is not there will result in a KeyError instead of returning None"),Object(a.b)("li",{parentName:"ul"},"Writing key that is not there would result in a KeyError instead of inserting the key\nThis effects also command line overrides.")),Object(a.b)("p",null,"This is useful for catching mistakes in the code or in the command line earlier."),Object(a.b)("p",null,"You can learn more about this OmegaConf functionality here ",Object(a.b)("a",r({parentName:"p"},{href:"https://omegaconf.readthedocs.io/en/latest/usage.html#configuration-flags"}),"here")),Object(a.b)("p",null,"This can be turned on via a ",Object(a.b)("inlineCode",{parentName:"p"},"strict=True")," in your hydra.main decorator:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-python"}),"@hydra.main(config_path='config.yaml', strict=True)\ndef experiment(cfg):\n    # this would result in an exception\n    if cfg.bad_key:\n        pass\n    # this would also result in an aception\n    cfg.bad_key = True\n")),Object(a.b)("p",null,"As well as trying to insert new variables into the config via the command line:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-text"}),"$ python demos/3_config_file/strict_config.py dataset.oops=true\nTraceback (most recent call last):\n...\nKeyError: 'Accessing unknown key in a struct : dataset.oops'\ntext\n\nCheck the [runnable examples](https://github.com/facebookresearch/hydra/blob/master/demos/3_config_file).\n")))}s.isMDXComponent=!0},70:function(e,n,t){"use strict";t.d(n,"a",function(){return l}),t.d(n,"b",function(){return u});var a=t(0),r=t.n(a),i=r.a.createContext({}),o=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=o(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=function(e){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),c=o(n),s=t,u=c[i+"."+s]||c[s]||p[s]||a;return n?r.a.createElement(u,Object.assign({},l,{components:n})):r.a.createElement(u,l)};function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);