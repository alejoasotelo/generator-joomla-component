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
		//this.argument('name', { type: String, required: true });
		var name = this.options._.length > 0 ? this.options._[0] : this.options.name;

        this.composeWith(require.resolve('../model'), {
            name: name
        });

        this.composeWith(require.resolve('../view'), {
            name: name
        });

        this.composeWith(require.resolve('../controller'), {
            name: name
        });
    }

});
