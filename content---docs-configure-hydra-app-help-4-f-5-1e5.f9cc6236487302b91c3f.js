(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{59:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return p})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return u}));r(0);var t=r(95);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p={id:"app_help",title:"Customizing Application's help",sidebar_label:"Customizing Application's help"},i=[],l={rightToc:i},c="wrapper";function u(e){var n=e.components,r=a(e,["components"]);return Object(t.b)(c,o({},l,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Hydra provides two different help options:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"--help")," : Application specific help"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"--hydra-help")," Hydra specific help. ")),Object(t.b)("p",null,"Example output of ",Object(t.b)("inlineCode",{parentName:"p"},"--help"),":"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-text"}),"$ python my_app.py --help\nmy_app is powered by Hydra.\n\n== Configuration groups ==\nCompose your configuration from those groups (group=option)\n\ndb: mysql, postgresql\n\n\n== Config ==\nOverride anything in the config (foo.bar=value)\n\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n\n\nPowered by Hydra (https://cli.dev)\nUse --hydra-help to view Hydra specific help\n")),Object(t.b)("p",null,"This output is generated from the following default configuration.\nYou can override the individual components like ",Object(t.b)("inlineCode",{parentName:"p"},"hydra.help.app_name")," or the whole template. "),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  help:\n    # App name, override to match the name your app is known by\n    app_name: ${hydra.job.name}\n\n    # Help header, customize to describe your app to your users\n    header: |\n      ${hydra.help.app_name} is powered by Hydra.\n\n    footer: |\n      Powered by Hydra (https://cli.dev)\n      Use --hydra-help to view Hydra specific help\n\n    # Basic Hydra flags:\n    #   $FLAGS_HELP\n    #\n    # Config groups, choose one of:\n    #   $APP_CONFIG_GROUPS: All config groups that does not start with hydra/.\n    #   $HYDRA_CONFIG_GROUPS: All the Hydra config groups (starts with hydra/)\n    #\n    # Configuration generated with overrides:\n    #   $CONFIG : Generated config\n    #\n    template: |\n      ${hydra.help.header}\n      == Configuration groups ==\n      Compose your configuration from those groups (group=option)\n\n      $APP_CONFIG_GROUPS\n\n      == Config ==\n      Override anything in the config (foo.bar=value)\n\n      $CONFIG\n\n      ${hydra.help.footer}\n")))}u.isMDXComponent=!0},95:function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return s}));var t=r(0),o=r.n(t),a=o.a.createContext({}),p=function(e){var n=o.a.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},i=function(e){var n=p(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),u=p(r),s=t,d=u[i+"."+s]||u[s]||c[s]||a;return r?o.a.createElement(d,Object.assign({},{ref:n},l,{components:r})):o.a.createElement(d,Object.assign({},{ref:n},l))}));function s(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,p=new Array(a);p[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[l]="string"==typeof e?e:t,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);