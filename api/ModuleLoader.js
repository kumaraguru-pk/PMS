
var fs = require('fs');
var path_module = require('path');


var ModuleLoader = function (modulestr, routepfx) {
    this.modulename = modulestr;
    this.routePrefix = routepfx;
};
ModuleLoader.prototype.LoadModule = function (path, vendor_module_list, moduleloader) {
    
    fs.lstat(path, function (err, stat) {
        if (stat.isDirectory()) {
            // we have a directory: do a tree walk
            fs.readdir(path, function (err, files) {
                var f, l = files.length;
                for (var i = 0; i < l; i++) {
                    f = path_module.join(path, files[i]);
                    moduleloader.LoadModule(f, vendor_module_list, moduleloader);
                }
            });
        } else {
            // check whether the the file ends with API, if yes then thats the vendor API module load it. 
            var name = path_module.basename(path, path_module.extname(path));
            var dir = path_module.dirname(path);
            var finaldir = path_module.basename(dir);
             
            if (name == finaldir + moduleloader.routePrefix) {
               
                require('./vendor_modules/' + finaldir + '/' + name)(vendor_module_list, moduleloader.modulename); 
                console.log(moduleloader.routePrefix + " Module Loaded From " + name);
             
            }
        }
    });
}

module.exports = ModuleLoader;