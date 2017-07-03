/*
generator-joomla-component

index.coffee

@author Alejo Sotelo
@web: http://alejosotelo.com.ar
@github: https://github.com/alejoasotelo

@note uses Codoc
@see https://github.com/mklabs/yeoman/wiki/generators coffeescript with yeoman
@see https://github.com/alejoasotelo/codo
*/
'use strict';

var	Generator = require('yeoman-generator');

var MVCGenerator = module.exports = Generator.extend({

    initialize: function() {
        this.composeWith('joomla-component:model ' + this.name);
        this.composeWith('joomla-component:view ' + this.name);
        this.composeWith('joomla-component:controller ' + this.name);
    }

});
