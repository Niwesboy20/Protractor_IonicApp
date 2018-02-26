exports.config = {
	capabilities: {
	'browserName' : '',
	'platformName' :'Android',
	'platformVersion': '6.0',
	'deviceName' : 'vbox36p',
    'autoWebview': true,
	'noReset': true,
	'app' : 'C:\\Users\\lnw_a\\Desktop\\APK Android\\shop.apk'
	// 'app' : 'C:\\Users\\lnw_a\\Desktop\\APK Android\\rmbk.apk'
	
	// 'app' : 'D:\\Tools Test\\Katalon\\programs\\apk\\shop.apk'
  },
  framework: 'jasmine',
  // seleniumAddress: 'http://172.17.4.56:4723/wd/hub',
  seleniumAddress: 'http://localhost:4723/wd/hub',
  // specs: ['signIn.js','addItem.js','addReciept.js']
  specs: ['signIn.js']
  // specs: ['loginRMBK.js']
  
  // 
}