/*
generator-joomla-component

index.coffee

@author Sean Goresht

Modified by: Alejo Sotelo
Web: http://alejosotelo.com.ar
github: https://github.com/alejoasotelo

@note uses Codoc
@see https://github.com/mklabs/yeoman/wiki/generators coffeescript with yeoman
@see https://github.com/coffeedoc/codo
*/
'use strict';

var yeoman = require('yeoman-generator');
var path = require('path');
var _ = require('underscore.string');

var ViewGenerator = module.exports = yeoman.extend({

    main: function() {
		this.name = typeof this.options.name != 'undefined' ? this.options.name : this.options._[0];

        var pkg = require(path.join(process.cwd(), './package.json'));

        console.log('Generando view ' + this.name + '.');

        var viewFolderName = _.slugify(this.name);
        var viewClassName = _.classify(this.name);

        this.fs.copyTpl(
            this.templatePath('_view.html.php'),
            this.destinationPath('views/' + viewFolderName + '/view.html.php'),
            {
                _: _,
                name: this.name,
                componentName: pkg.componentName,
                description: pkg.description,
                requireManageRights: pkg.requireManageRights,
                authorName: pkg.author.name,
                authorEmail: pkg.author.email,
                authorURL: pkg.author.url,
                license: pkg.licenses[0].type,
                currentDate: new Date().getUTCDate(),
                viewFolderName: viewFolderName,
                viewClassName: viewClassName,
            }
        );

        this.fs.copyTpl(
            this.templatePath('_default.php'),
            this.destinationPath('views/' + viewFolderName + '/tmpl/default.php'),
            {
                _: _,
                name: this.name,
                componentName: pkg.componentName,
                description: pkg.description,
                requireManageRights: pkg.requireManageRights,
                authorName: pkg.author.name,
                authorEmail: pkg.author.email,
                authorURL: pkg.author.url,
                license: pkg.licenses[0].type,
                currentDate: new Date().getUTCDate(),
                modelName: this.name,
                viewFolderName: viewFolderName,
                viewClassName: viewClassName
            }
        );
    }

});
