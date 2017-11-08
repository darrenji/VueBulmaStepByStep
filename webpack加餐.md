创建文件。

```
index.js
index.html
```

index.html	
```
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="id=edge">
		
	</head>
	<body>
		<div id="app"></div>
		<script src="index.js"></script>
	</body>
</html>
```

index.js

```
var app = document.getElementById('app');
app.innerHtml = '<p>Hi there</p>';
```

初始化npm,即给根目录添加package.json文件：npm install


> 查看webpack的版本：npm view webpack versions

> 安装某个版本的webpack:npm install --save-dev webpack@2.1.0-beta.25 

> 运行webpack命令：./node_modules/webpack/bin/webpack.js ./index.js bundle.js,现在项目下的文件结构变成了：

```
index.html
index.js
bundle.js
node_modules
package.json
```
修改index.html	
```
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="id=edge">
		
	</head>
	<body>
		<div id="app"></div>
		<script src="bundle.js"></script>
	</body>
</html>
```

来npm执行webpack的命令：

```
"scripts": {
	"build": "webpack index.js bundle.js"
}
```

npm会自动去node_modules文件中去找webpack.js文件。


> 想要在运行npm run build命令之前先删除bundle.js,为此需要安装一个插件：npm install --save-dev rimraf

```
"scripts": {
	"build": "rimraf budnle.js && webpack index.js bundle.js"
}
```
改变文件结构：

```
src
	index.js
index.html
node_modules
dist
```
```
"scripts": {
	"build": "rlmraf dist && webpack src/index.js dist/bundle.js"
}
```
在src下创建messages.js

```
module.exports = {
	hi: '',
	event: 'Update JS'
};
```

在src下的index.js

```
var messages = require('./messages');
var app = document.getElementById('app');
appinnerHTML = '<p>' + messages.hi + '</p>';
```

> 如果想侦听变化

```
"scripts": {
	"build": "rlmraf dist && webpack src/index.js dist/bundle.js --watch"
}
```
我们总不至于不所有的命令都像上面的的写法。添加一个webapck.config.js文件。

```
var path = require('path');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	}
};
```

修改package.json

```
"scripts": {
	"build": "rlmraf dist && webpack --watch"
}
```
> 有了这样的需求：当js文件改变，希望rebuild生成bundle.js文件，并且刷新浏览器。这里用到一个插件：HOT MODULE REPLACEMENT(HRM)

> 查看webpack-dev-server版本：npm view webpack-dev-server versions

> 安装某个版本的webpack-dev-server: npm install --save-dev webpack-dev-server@2.1.0-beta.10

修改webpack.config.js

```
"scripts": {
	"build": "rimraf dist && webpack",
	"dev": "webpack-dev-server"
}
```

> 运行webpack-dev-server: npm run dev

> 创建dev-server.js文件

```
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
	hot: true,
	filename: config.output.filename,
	publicPath: config.outpu.publicPath,
	stats: {
		colors: true
	}
});

server.listen(8080, 'localhost',, function(){});

```

> webpack.config.js文件中需要加上些入口文件和插件

```
module.exports = {
	entry: [
		'./src/index.js',
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080'
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	output: {

	}
};
```

index.js

```
varmessage = require();
var app = document.getElemntByI的（'app'）；
app.innerHTML =
if(module.hot) {
	module.hot.accept();
}
```

> 在package.json中需要定义自定义的dev-server

```
"scripts": {
	"build": 'rimraf dist && webpack',
	"dev": "node dev-server.js"
}
```


> dev-server.js做了什么呢？dev-server拿到了webpack进行了侦听，其中用到了hot,而这个hot需要在webpack.config.js中文件的plugins属性中定义。并且现在还取得了一种神奇的效果，当修改js文件并保存浏览器就自动刷新了。这和dev-sever中使用webpack的hot，以及在webpack.config.js中plugins属性中有关的配置相关。

> 在webpack.config.js文件的入口文件设置中，现在还有有关dev-server的配置，如果运行`npm run build`命令的话，bundle.js文件会变得最够大？如何解决这个问题呢？

> 解决思路是：在运行npm命令的时候加上条件，定义什么条件下运行什么命令。

package.json

```
"scripts": {
	"build": "rimraf dist && NODE_ENV=production webpack",
	"dev": "NODE_ENV=development node dev-server.js"
}
```

在webpack.config.js中也做相应的处理：

```
var path = require();
var webpack = require();

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = PROCESS.ENV.NODE_ENV === 'production';

var entry = PRODUCTION
	? ['./src/index.js']
	: [
		'./src/index.js',
		'webpack/hot/dev-server',
		'webpack-dev-serer/client?http://localhost:8080'
	];

var plugins = PRODUCTION
	? []
	: [new webpack.HotModuleReplacementPlugin()];

module.exports = {
	entry: entry,
	plugins: plugins,
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	}
};
```
> npm run dev, 因为已经加上了条件，所以这次得到的bundle.js文件中包含dev-server的相关代码。

> npm run build, 因为加上了NODE_ENV=production,得到的bundle.js文件中就变得更轻了。

> 新需求又来了：现在我们想使用ES6的语法，这时候需要安装babel

> npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-stage-0

> touch .babelrc

```
{
	"presets": ["es2015", "stage-0"]
}
```

> 然后告诉webpack.config.js中需要使用babel

```
modu.exports = {
	entry:
	plugins:
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: '/node_modules/'
			}
		]
	},
	output:{}
};
```

在message.js中使用ES6的语法

```
var messages = require('./messages');
var newMessage = () => (`<p>${messages.hi} ${messages.event}</p>`);
var app = document.getElementById('app');
app.innerHTML = newMessage();

```

创建一个button.js

```
const Button = {
	button: '<button id="myButton">Press me</button>',
	attacheEl: () => {
		document.getElementById('myButton').addEventListener('click', ()=>{
			consle.log('clicked');
		})
	}
};
export default Button;
```

在index.js中

```
var messages = require('./messages');
import Button from './button';

var newMessage = () => (Button.button);
var app = document.getElementById('app');
app.innerHTML = newMessage();
Button.attachEl();
```

> 如何增加sourcemap呢？有了sourcemap就可以在工具调试中的Sources中，当出现错误可以定位到具体的位置。还可以加断点调试。或者在js文件中直接加debugger关键字也可以进行断点调试。

webpack.config.js

```
module.exports = {
	devtool: 'source-map',
	entry:
	plugins:
	module:
	output:
};
```

整理一下文件结构：

```
dist
node_modules
src
	img
	button.js
	index.js
	messages.js
	image.js
.babelrc
dev-server.js
index.html
package.json
webpack.config.js
```
images.js

```
const kitten = require('./img/kitten.jpg');
const Image = `<img src="${kitten}">`;
export default Image;
```

> 如何告诉webpack加载.jpg文件呢？

> npm install --save-dev file-loader

webpack.config.js
```
module.exprts = {
	devtool:
	entry:
	plugins:
	module: {
		loaders: [
			{},
			{
				test: /\.(png|jpg|gif)$/,
				loaders: ['file-loader'],
				exclude: '/node_modules/'
			}
		]
	}
};
```

src/index.js

```
var messages = require();

import Kitten from './image';

var newMessage = () => (`
	<p>
		${message.hi} asdd ${messages.event}
		${Kitten}
	</p>
`);
var app = document.getElementById('app');
app.innerHTML = newMessage();
```

> 如果对img元素，有`<img src="/dist/images/....jpg">`和`<img src="data:image/ong:base...">`，同时出现这两种表达式，就需要使用url-loader这个插件：npm install --save-dev url-loader

webpack.config.js

```
module.exports = {
	module: {
		loaders: [
			test: /\.(jpg|gif|png)$/,
			loaders: ['url-loader?limit=10000$name=images/[hash:12].[ext]']
			excluce:
		]
	}
};
```

src/mathStuff.js

```
export function add(a, b) {
	return a + b;
}

export function subtract(a, b) {
	return a -b;
}

export function multiply(a, b) {
	return a*b;
}
```

index.js

```
import {multiply} from './mathStuff';
const newMessage = () => (multiply(3, 3));

var app = document.getElementById('app');
app.innerHTML = newMessage();
```

> webpack2自己能处理es6的module，可以在babel中设置，让babel不要处理es6的module.

.babelrc

```
{
	"presets": [
		["es2015", {"modules": false}],
		"stag-0"
	]
}
```

> 再一个需求：有时候导出来的bundle.js中包含无用的代码，这时候就需要使用uglify插件，webpack中已经包含了。

> 另外，在webpack的全局需要定义一个对象，用来获取Development或者production的状态。放到bundle.js中的source code中。

webpack.config

```
var DEVEOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION
	? []
	: [];

var plugins = PRODUCTION
	?   [
			new webpack.optimize.UglifyJsPlugin({
				comments: true,
				mangle: false,
				compress: {
					warnings: true
				}
			})
		]
	: 	[
			new webpack.HotModuleReplacementPlguin()
		];

plugins.push(
	new webpack.DefinePlugin({
		DEVELOPMENT: JSON.stringify(DEVELOPMENT),
		PRODUCTION: JSON.stringify(PRODUCTION)
	});
);

module.exports = {};
```

现在，就可以在js代码中调用刚才设置的变量DEVELOPMENT和PRODUCTION。

src/index.js

```
var messages = require();
const newMessage = () => (`
	DEV: ${DEVELOPMENT.toString()}<br>
	PROD: ${PRODUCTION.toString()}<br>
`);
var app = document.getElementById('app');
app.innerHTML = newMessage();
```

添加css文件。

index.js

```
require('./style/globalStyle.css');

```

> css文件需要安装的插件：npm install --save-dev css-loader style-loader

webpack.config.js

```
module.exports = {
	devtool:
	entry:
	plugins:
	module: {
		loaders: [
			{},
			{
				test:/\.css$/,
				loaders: ['style-loader', 'css-loader']
				exclude:
			}
		]
	}
};
```

> 如何在js文件中读取出css内容呢？

globalStyle.css

```
body {}

:local(.box) {
	background-color:white;
	padding:1em;
	border:1px solid red;
}
```

src/index.js

```
var style = require('./style/globalStyle.css');
cost newMessage = () => (`
	<div class="${style.box}">
		DEV: ${DEVELOPMENT.toString()}<br>
		PROD: ${PRODUCTION.toString()}<br>
	</div>
`);

var app = document.getElementById('app');
app.innerHTML = newMessage();
```

> 如何定义css文件的后缀名呢？

webpack.config.js

```
module.exports = {
	module: {
		loaders: [
			{},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader?localIdentName=[path][name]--[local]']
			}
		]
	}
};
```

> 如果想根据环境再来决定css文件后缀名呢？

webpack.config.js

```
const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]==[local]';

module.exports = {
	loaders: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader?localIdentityName=' + cssIdentifier],
				exclude: '/node_modules/'
			}
		]
	}
};
```

> 有一个插件, extract-text-webpack-plugin,可以用来提取text,我们可以用它来提取加载哪个具体的loader。先查看它的信息：npm info extract-text-webpack-plugin

>安装某个版本：npn install --save-dev extract-text-webpack-plugin@2.0.0-beta.4

> 希望在PRODUCTION的情况下使用该插件

webpack.config.js

```
var path = require();
var webpack = require();
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

...

var plugins = PRODUCTION
	? [new webpack.optimize.UglifyJsPlugin(), new ExtractTextPlugin('styles-[contenthash:10].css')]
	: [new webpack.HotModuleReplacementPlugin()];

const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]==[local]';

const cssLoader = PRODUCTION
	? 	ExtractTextPlugin.extract({
			loader: 'css-loader?localIdentityName=' + cssIdentifier
		})
	:   ['style-loader', 'css-loader?localIdentiName=' + cssIdentifier];

module.exports = {
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: cssLoader,
				exclude: '/node_modules/'
			}
		]
	}
};
```

> 现在问题出现了：生成的css文件时动态的名称，如何引用呢？需要用到一个插件：npm install --save-dev html-webpack-plugin

webpack.config.js

```
var HTMLWebpackPlugin = require('html-webpack-plugin');
var plugins = PRODUCTION
	? [
			new webpack.optimize.UgilifyJsPlugin(),
			new ExtractTextPlugin('style-[contenthash:10].css'),
			new HTMLWebpackPlugin({
				template: 'index-template.html'
			})
		]
	: [];

module.exports = {
	output: {
		path:
		publicPath:PRODUCTION ? '/' : '/dist/'
		filename:PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
	}
};
```

> System.import('')实现动态加载module

page1.js

```
const page1 = `<h1>this is page 1</h1>`;
export default page1;
```

page2.js

```
const page2 = `<h1>this is page 2</h1>`;
export default page2;
```

index.js

```
var app = document.getElementById('app');
app.innerHTML = `
	<div id="menu">
		<button id="loadPage1">Load Page1</button>
		<buttonn id="loadPage2">Load Page2</button>
	</div>
	<div id="content">
		<h1>Home</h1>
	</div>
`;

document.getElementById('LoadPage1').addEventListener('click', () => {
	System.import('./page1')
		.then(pageModule => {
			document.getElementById('content').innerHTML = pageModule.default;
		});
});

document.getElementById('LoadPage2').addEventListener('click', () => {
	System.import('./page1')
		.then(pageModule => {
			document.getElementById('content').innerHTML = pageModule.default;
		});
});
```