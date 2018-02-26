describe('angularjs homepage', function() {
   it('should greet the named user', function() {
	
	
	browser.waitForAngularEnabled(false);
	
	
	browser.sleep(3500);
	element(by.xpath("//*[@id='tab-t0-1']")).click();
	element(by.xpath("//page-recipes[@class='ion-page show-page']//ion-buttons[2]/button[1]")).click();
	// element(by.xpath('//*[@class="disable-hover button button-md button-default button-default-md button-block button-block-md"]/span')).click();
	element(by.xpath("//input[@ng-reflect-name='title']")).sendKeys('Test');
	element(by.xpath("//textarea[@ng-reflect-name='description']")).sendKeys('Test');
	element(by.xpath("//form[@class='ng-touched ng-dirty ng-valid']//button[2]")).click();
	browser.sleep(3500);

	var expectedResult1 = "Test";
	
	var actureResult = element(by.xpath("//*[@class='list list-md']/button[1]//ion-label/h2")).getText();
	
	expect(actureResult).toEqual(expectedResult1);
	
	browser.sleep(3500);
   
  });
	
});