# Todo localstorage
AngularJs


ngStorage
=========

- [ngStorage](https://github.com/gsklee/ngStorage).

### Sobre o ngStorage

É Um [AngularJS](https://github.com/angular/angular.js) módulo que faz o Web Storage funcionar no * Angular Way *. Contém dois serviços: `$ localStorage` e` $ sessionStorage`.

### Diferenças com outras implementações

Install
=======

### Bower

```bash
bower install ngstorage --save
```
*Obs:* *--save* para salvar no nosso arquivo bower!

Html
====

### Injetando no nosso Html
Para usá-lo:

``` html
<script src="bower_components/ngstorage/ngStorage.min.js"></script>
```

Usage
=====

### Inject do Services ngStorage

```javascript
angular.module('todoApp', [
    'ngStorage'
]).controller('Ctrl', function(
    $localStorage,
    $sessionStorage
){});
```

