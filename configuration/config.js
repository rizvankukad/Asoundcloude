/*
* Configurations JS file
*
* Application Configuration File
* Contains Application Settings & Database Configurations
*
* Author: Rizwan Kukad
* Date: 4-January-2014 05:17 AM IST
*/
module.exports = function( app ) {

  var config = this;

  app.set( 'port', 3000 );
  app.set( 'datasources',   {
    'dburl'   : 'mongodb://localhost/asoundcloude'
  });

  return config;
};