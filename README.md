# node-context

> A simple, Promise-based nodejs wrapper for the awesome [ConTeXt](http://contextgarden.net) document language.

Compiles your ConTeXt-flavored tex files to PDF, with all the same options available natively.


## Install
> **Note:** This module assumes that context is in your `$PATH`. I recommend using [ConText Standalone](http://wiki.contextgarden.net/ConTeXt_Standalone) to get the latest version.

With npm...
```
$ npm install --save context
```

...or with yarn 
```
$ yarn add context
```

## Usage

```js
const context = require('context');
\\ Simple example...
context('hello.tex')

\\ With options...
context('hello.tex', {interface: 'en', purge: true}).then(() => {
	console.log('Document compiled!');
});
```


## API

### context(filepath, [options])

Returns a promise that fulfills when compiling is complete..

#### options

##### interface
> CLI equivalent: `--interface`

Type: `string`
Default: `en`

**Valid options:**

| `en`  | English           |
| `uk`  | British English   |
| `de`  | German            |
| `fr`  | French            |
| `nl`  | Dutch             |
| `cs`  | Czech             |
| `it`  | Italian           |
| `ro`  | Romanian          |
| `pe`  | Farsi             |

##### autopdf
> CLI equivalent: `--autopdf`

Type: `boolean`
Default: `false`

Close pdf file in viewer and start pdf viewer afterwards.  
*Note: ConTeXt command does not work on macOS.*

##### purge
> CLI equivalent: `--purgeall`

Type: `boolean`
Default: `false`

Purge accessory files after compile (`.log`, `.tuc`).

##### module
> CLI equivalent: `--usemodule=list`

Type: `string` or `array` 

List the [modules](http://wiki.contextgarden.net/Modules) to use in compiling your document.


##### environment
> CLI equivalent: `--environment=list`

Type: `string` or `array` 

Load the given environment file(s) first.

##### mode
> CLI equivalent: `--mode=list`

Type: `string` or `array` 

Enable modes for conditional processing in your context file.

##### path
> CLI equivalent: `--path=list`

Type: `string` or `array` 

Additional paths where context should look for files.

##### variables
> CLI equivalent: `--arguments=list`

Type: `string` or `object` 

Variables that can be accessed in your context file.

## License

MIT © [Luke Wilson](http://derbingle.blog)
