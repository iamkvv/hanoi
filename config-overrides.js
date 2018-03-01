//const {injectBabelPlugin} = require('react-app-rewired');
const rewireEmotion = require('react-app-rewire-emotion');

module.exports = function override(config, env){
 
      console.log('overrides!!');
     // config = injectBabelPlugin('emotion/babel',config);
   // return config;
   return rewireEmotion(config, env, { inline: true });
}