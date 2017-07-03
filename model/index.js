/*--------------------------------------------------------------------------------
 Author: Sean Goresht
 www: http://seangoresht.com/
 github: https://github.com/srsgores
 twitter: http://twitter.com/S.Goresht

 Modified by: Alejo Sotelo
 Web: http://alejosotelo.com.ar
 github: https://github.com/alejoasotelo

 generator-joomla-component
 Do What the Fuck You Want License

 =============================================================================
 Filename: index.js
 =============================================================================
 Scaffold out new models
 -------------------------------------------------------------------------------*/

'use strict';

var yeoman = require('yeoman-generator');
var path = require('path');
var _ = require('underscore.string');

var ModelGenerator = module.exports = yeoman.extend({

	main: function() {
		this.name = typeof this.options.name != 'undefined' ? this.options.name : this.options._[0];

		var pkg = require(path.join(process.cwd(), './package.json'));

        var modelName = _.slugify(this.name);
        var modelClassName = _.classify(this.name);

		console.log('Generando model ' + this.name + '.');

		this.fs.copyTpl(
			this.templatePath('_model.php'),
			this.destinationPath('models/' + modelName + '.php'),
			{
                _: _,
				name: 					this.name,
				componentName: 			pkg.componentName,
				description:			pkg.description,
				requireManageRights:	pkg.requireManageRights,
				authorName:	 			pkg.author.name,
				authorEmail:	 		pkg.author.email,
				authorURL: 				pkg.author.url,
				license: 				pkg.licenses[0].type,
				currentDate:			new Date().getUTCDate(),
				modelName: 				modelName,
				modelClassName:			modelClassName
			}
		);
	}

});
