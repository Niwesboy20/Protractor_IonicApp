exports.config = {
	capabilities: {
	'browserName' : '',
	'platformName' :'Android',
	'platformVersion': '6.0',
	'deviceName' : 'vbox36p',
    'autoWebview': true,
	'noReset': true,
	'app' : 'path file apk'
	
  },
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4723/wd/hub',
  // specs: ['signIn.js','addItem.js','addReciept.js']
  specs: ['signIn.js']
  
  // 
}