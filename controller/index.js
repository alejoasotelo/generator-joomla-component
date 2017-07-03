/*
    generator-joomla-component

    index.coffee

    @author Sean

    Modified by: Alejo Sotelo
    Web: http://alejosotelo.com.ar
    github: https://github.com/alejoasotelo

    @note Created on 2014-10-03 by PhpStorm
    @note uses Codoc
    @see https://github.com/mklabs/yeoman/wiki/generators coffeescript with yeoman
    @see https://github.com/coffeedoc/codo
*/
'use strict';

var yeoman = require('yeoman-generator');
var path = require('path');
var _ = require('underscore.string');

var ControllerGenerator = module.exports = yeoman.extend({

    main: function() {
        this.argument('name', { type: String, required: true });
        this.name = this.options.name;

        var pkg = require(path.join(process.cwd(), './package.json'));

        console.log('Generando controller ' + this.name + '.');

        var controllerName = _.slugify(this.name);
        var controllerClassName = _.classify(this.name);

        this.fs.copyTpl(
            this.templatePath('_controller.php'),
            this.destinationPath('controllers/' + controllerName + '.php'),
            {
                _: _,
                name:                   this.name,
                componentName:          pkg.componentName,
                description:            pkg.description,
                requireManageRights: 	pkg.requireManageRights,
                authorName: 			pkg.author.name,
                authorEmail: 			pkg.author.email,
                authorURL:              pkg.author.url,
                license: 				pkg.licenses[0].type,
                currentDate:            new Date().getUTCDate(),
                controllerClassName:    controllerClassName
            }
        );
    }

});
