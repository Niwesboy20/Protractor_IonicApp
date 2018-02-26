describe('angularjs homepage', function() {
   it('should greet the named user', function() {
	
	
	browser.waitForAngularEnabled(false);
	
	element(by.xpath('//ion-input[@name="email"]/input')).sendKeys('Niwesboy20@gmail.com');
	element(by.xpath('//ion-input[@name="password"]/input')).sendKeys('123456');
	element(by.xpath('//*[@class="disable-hover button button-md button-default button-default-md button-block button-block-md"]/span')).click();
	browser.sleep(3500);

	expectedResult1 = "The password is invalid or the user does not have a password.";
	
	var actureResult = element(by.xpath("//*[@id='alert-msg-0']")).getText();
	console.log(actureResult);
  //  expect(actureResult.toEqual(expectedResult1);
	

	browser.sleep(3500);
    browser.close;
	
  });
	
	

  


});
