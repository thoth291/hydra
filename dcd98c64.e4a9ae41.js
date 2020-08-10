(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{230:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return b}));var n=t(2),r=t(10),i=(t(0),t(251)),l={id:"joblib_launcher",title:"Joblib Launcher plugin",sidebar_label:"Joblib Launcher plugin"},o={id:"plugins/joblib_launcher",isDocsHomePage:!1,title:"Joblib Launcher plugin",description:"PyPI",source:"@site/docs/plugins/joblib_launcher.md",permalink:"/docs/next/plugins/joblib_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/joblib_launcher.md",version:"next",lastUpdatedBy:"Shagun Sodhani",lastUpdatedAt:1597090006,sidebar_label:"Joblib Launcher plugin",sidebar:"docs",previous:{title:"Colorlog plugin",permalink:"/docs/next/plugins/colorlog"},next:{title:"Nevergrad Sweeper plugin",permalink:"/docs/next/plugins/nevergrad_sweeper"},latestVersionMainDocPermalink:"/docs/intro"},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],s={rightToc:c};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypi.org/project/hydra-joblib-launcher/"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-joblib-launcher",alt:"PyPI"}))),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-joblib-launcher",alt:"PyPI - License"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-joblib-launcher",alt:"PyPI - Python Version"})),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-joblib-launcher"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-joblib-launcher.svg",alt:"PyPI - Downloads"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_joblib_launcher/example"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_joblib_launcher"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(i.b)("p",null,"The Joblib Launcher plugin provides a launcher for parallel tasks based on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://joblib.readthedocs.io/en/latest/parallel.html"}),Object(i.b)("inlineCode",{parentName:"a"},"Joblib.Parallel")),"."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("p",null,"This plugin requires Hydra 1.0 (Release candidate)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-joblib-launcher --pre\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher=joblib")," to your command line. Alternatively, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/launcher: joblib\n")),Object(i.b)("p",null,"By default, process-based parallelism using all available CPU cores is used. By overriding the default configuration, it is e.g. possible limit the number of parallel executions."),Object(i.b)("p",null,"The default configuration packaged with the plugin is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'@dataclass\nclass JobLibLauncherConf(PluginConf):\n    cls: str = "hydra_plugins.hydra_joblib_launcher.JoblibLauncher"\n    params: JobLibConf = JobLibConf() \n')),Object(i.b)("p",null,"The JobLibConf class is defined ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_joblib_launcher/hydra_plugins/hydra_joblib_launcher/config.py"}),"here"),":"),Object(i.b)("p",null,"It looks like this: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'@dataclass\nclass JobLibConf:\n    # maximum number of concurrently running jobs. if -1, all CPUs are used\n    n_jobs: int = -1\n\n    # allows to hard-code backend, otherwise inferred based on prefer and require\n    backend: Optional[str] = None\n\n    # processes or threads, soft hint to choose backend\n    prefer: str = "processes"\n\n    # null or sharedmem, sharedmem will select thread-based backend\n    require: Optional[str] = None\n\n    # if greater than zero, prints progress messages\n    verbose: int = 0\n\n    # timeout limit for each task\n    timeout: Optional[int] = None\n\n    # number of batches to be pre-dispatched\n    pre_dispatch: str = "2*n_jobs"\n\n    # number of atomic tasks to dispatch at once to each worker\n    batch_size: str = "auto"\n\n    # path used for memmapping large arrays for sharing memory with workers\n    temp_folder: Optional[str] = None\n\n    # thresholds size of arrays that triggers automated memmapping\n    max_nbytes: Optional[str] = None\n\n    # memmapping mode for numpy arrays passed to workers\n    mmap_mode: str = "r"\n')),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://joblib.readthedocs.io/en/latest/parallel.html"}),Object(i.b)("inlineCode",{parentName:"a"},"Joblib.Parallel")," documentation")," for full details about the parameters above."),Object(i.b)("div",{class:"alert alert--info",role:"alert"},"NOTE: The only supported JobLib backend is Loky (process-based parallelism)."),Object(i.b)("br",null),Object(i.b)("p",null,"An ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_joblib_launcher/example"}),"example application")," using this launcher is provided in the plugin repository."),Object(i.b)("p",null,"Starting the app with ",Object(i.b)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will launch five parallel executions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py --multirun task=1,2,3,4,5\n[HYDRA] Joblib.Parallel(n_jobs=-1,verbose=0,timeout=None,pre_dispatch=2*n_jobs,batch_size=auto,temp_folder=None,max_nbytes=None,mmap_mode=r,backend=loky) is launching 5 jobs\n[HYDRA] Launching jobs, sweep output dir : multirun/2020-02-18/10-00-00\n[__main__][INFO] - Process ID 14336 executing task 2 ...\n[__main__][INFO] - Process ID 14333 executing task 1 ...\n[__main__][INFO] - Process ID 14334 executing task 3 ...\n[__main__][INFO] - Process ID 14335 executing task 4 ...\n[__main__][INFO] - Process ID 14337 executing task 5 ...\n")))}b.isMDXComponent=!0},251:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return h}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=b(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(t),d=n,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return t?r.a.createElement(h,o(o({ref:a},s),{},{components:t})):r.a.createElement(h,o({ref:a},s))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);