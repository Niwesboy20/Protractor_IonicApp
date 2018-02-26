describe('angularjs homepage', function() {
   it('should greet the named user', function() {
	
	
	browser.waitForAngularEnabled(false);
	
	element(by.xpath("//ion-input[@name='ingredientName']/input")).sendKeys('Salad');
	element(by.xpath("//ion-input[@name='amount']/input")).sendKeys('5000');
	element(by.xpath("//*[@class='disable-hover button button-md button-default button-default-md button-block button-block-md']/span")).click();
	browser.sleep(3500);

	var expectedResult1 = "5000";
	
	var actureResult = element(by.xpath("//*[@class='item-inner']//ion-badge[1]")).getText();

	expect(actureResult).toEqual(expectedResult1);

	browser.sleep(3500);
   
  });

});