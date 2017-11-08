Below is my speaking to self writing, apprently, not suitable for everyone:)

> 基本框架是如何显示出来的，包括头部，以及左边的菜单和右边的内容？

执行`npm run dev`实际上是执行`node build/dev-server.js`这个文件。在`build/dev-server.js`中首先请出了几个大将，分别是：path, express, webpack, http-proxy-middleware。

build/dev-server.js
```
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')

```
还包括配置文件的引用：

```
var config = require('../config')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

```
这里不禁要问了，config目录中到底配置了哪些？

原来，config目录有一个`index.js`入口文件，通过这个文件提供给外界。这里提供了build和dev模式下的一些基本配置。

```
var path = required('path')
module.exports = {
	build: {
		env: require('./prod.env')
	},
	dev: {
		env: require('./dev.env')
	}
}
```

config/prod.env.js和config/dev.env.js文件实际是对NODE_ENV的配置。

回到`build/dev-server.js`文件。

通过`var port = process.env.PORT || config.dev.port`要到了端口，通过`var proxyTable = config.dev.proxyTable`要到了proxyTable。这个proxyTable可以存储本地api请求和远程api请求的映射关系。可以用到一个叫作http-proxy-middleware的插件，大致按如下用法：

```
var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/api', proxy({target: 'http://www.example.org', changeOrigin: true}));
app.listen(3000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
```

接着，在build/dev-server.js中往下走。通过`var app = express()`开启express,通过`var compiler = webpack(webpackConfig)`获得了webpack实例，webpack实例又交给了一个中间件：

```
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})
```

webpack实例还交给了另外一个中间件：

```
var hotMiddleware = require('webpack-hot-middleware')(compiler)
```

接着，让hotMiddleware在html-webpack-plugin template发生变化的时候重新加载。

接着遍历proxyTable中的主键，并告诉express:

```
// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})
```

把处理HTML5历史回滚的插件交给express:

```
// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())
```
有关webpack的插件，交给express:

```
// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)
```
有关静态文件，交给express:

```
// serve pure static assets
var staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
app.use(staticPath, express.static('./static'))
```

express开始工作：

```
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
```

而从express从配置到开始工作的整个过程中，用到了webpack的配置。有关webpack配置有3个文件：webpack.base.config.js, webpack.dev.config.js, webpack.prod.config.js。

webpack的配置如此重要，gonna know more.

webpack是一个bundler,是一个preprocessor可以预先执行很多任务。通过`npm install webpack --save-dev`进行安装，然后就可以在package.json中配置npm的命令来运行webpack:

```
"scripts": {
	"build": "webpack -p",
	"watch": "webpack --watch"
}

```
当然上面的运行要需要配合webpack.config.js中的配置：

```
var path = require('path');
module.exports = {
	entry: './asserts/js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};
```

以上的配置很好，因为把入口文件和目标文件、目标结果都定义出来了。多个文件又是如何处理的？

在asserts/js中添加一个greeter.js文件：

```
function greet(){
	console.log('have a nice day');
}

export default greet;
```

然后交给asserts/js中的index.js文件：

```
import greet from './greeter.js';
console.log('from entry js file');
greet();
```

这时候运行`npm run build`，即运行`webpack -p`，完全没问题。这里面的关系也是非常清晰的，所有的文件交给给根的js文件，然后webpack帮我们bundle，弄成一个bundle.js文件交给index.html。
这时候，如果我们需要用到一个插件：npm install --save moment

需要修改greeter.js：

```
import moment from 'moment';
function greet(){
	var day = moment().format('dddd');
	console.log('have a nice dat at ' + day);
}
export defautl greet;
```
使用插件后，整个路径还是清晰的，一层层依赖，最终都是要回归到项目的唯一的入口文件这里。

在bundle的过程中，我们需要执行一些任务，比如编译不同的文件，比如TypeScript, Vue.js文件，这时候需要用到Loaders了。比如，我们要对js文件使用linter的规则来检查。首先安装：npm install --save-dev jshint jshint-loader

安装完后，我们需要在webpack.cofig.js文件中设置“

```
var path = require('path');
module.exports = {
	entry:
	output: {},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'jshint-loader'
			}
		]
	}
};
```

整个过程还是很清晰的，就是在webpack进行bundle之前，使用loader对greeter.js和index.js文件进行检查。

再次回到项目。我们在main.js中的定义最终会和index.html页面中的id为app的元素配对起来，而APP就是我们的根组件。在App组件中包括了所有的单独组件和父组件。

以上，回答了自己的提问。


