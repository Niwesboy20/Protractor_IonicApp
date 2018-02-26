describe('angularjs homepage', function() {
   it('should greet the named user', function() {
	
	
	browser.waitForAngularEnabled(false);
	
	// element(by.xpath('//ion-input[@name="email"]/input')).sendKeys('');
	element(by.xpath("//ion-input[@name='email']/input")).sendKeys('');
	// element(by.xpath("//ion-input[@name='password']/input")).sendKeys('');
	element(by.xpath("//ion-input[@name='password']/input")).sendKeys('');
	element(by.xpath("//*[@class='login-button disable-hover button button-md button-outline button-outline-md button-block button-block-md button-outline-md-light']/span")).click();
	browser.sleep(3500);

	// var expectedResult1 = '';
	var expectedResult2 = '';
		
	// var actureResult1 = element(by.xpath("//*[@id='alert-subhdr-0']")).getText();
	var actureResult2 = element(by.xpath("//h2[@class='header-menu']")).getText();

	// expect(actureResult1).toEqual(expectedResult1);
	expect(expectedResult2).toEqual(actureResult2);
  
	browser.sleep(3500);
   
  });
	
});