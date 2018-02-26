describe('angularjs homepage', function() {
   it('should greet the named user', function() {
	
	
	browser.waitForAngularEnabled(false);
	
	// element(by.xpath('//ion-input[@name="email"]/input')).sendKeys('Niwesboy20@gmail.com');
	element(by.xpath('//ion-input[@name="email"]/input')).sendKeys('Niwesboy21@gmail.com');
	element(by.xpath('//ion-input[@name="password"]/input')).sendKeys('123456');
	element(by.xpath('//*[@class="disable-hover button button-md button-default button-default-md button-block button-block-md"]/span')).click();
	browser.sleep(3500);

	var expectedResult1 = 'The password is invalid or the user does not have a password.';
	var expectedResult2 = "Shopping List";
	
		
	// var actureResult1 = element(by.xpath("//*[@id='alert-msg-0']")).getText();
	var actureResult2 = element(by.xpath("//*[@id='tab-t1-0']//span")).getText();
	
	expect(actureResult2).toEqual(expectedResult2);
	// expect(actureResult1).toEqual(expectedResult1);
  
	browser.sleep(3500);
   
  });
	
});