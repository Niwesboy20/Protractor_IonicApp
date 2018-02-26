describe('angularjs homepage', function() {
   it('should greet the named user', function() {
	
	
	browser.waitForAngularEnabled(false);
	
	// element(by.xpath('//ion-input[@name="email"]/input')).sendKeys('Niwesboy20@gmail.com');
	element(by.xpath("//ion-input[@name='email']/input")).sendKeys('pairoj.s');
	// element(by.xpath("//ion-input[@name='password']/input")).sendKeys('pairoj.ss');
	element(by.xpath("//ion-input[@name='password']/input")).sendKeys('pairoj.s');
	element(by.xpath("//*[@class='login-button disable-hover button button-md button-outline button-outline-md button-block button-block-md button-outline-md-light']/span")).click();
	browser.sleep(3500);

	// var expectedResult1 = 'กรุณาตรวจสอบชื่อผู้ใช้หรือรหัสผ่าน';
	var expectedResult2 = 'ไพโรจน์ สว่างภพ';
		
	// var actureResult1 = element(by.xpath("//*[@id='alert-subhdr-0']")).getText();
	var actureResult2 = element(by.xpath("//h2[@class='header-menu']")).getText();

	// expect(actureResult1).toEqual(expectedResult1);
	expect(expectedResult2).toEqual(actureResult2);
  
	browser.sleep(3500);
   
  });
	
});