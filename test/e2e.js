const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  function waitnext(ms){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(ms > 100){
          resolve();
        }
        else{
          reject();
        }
      }, ms);
    });
  }
  try {
    await driver.get('http://localhost:3000/index');
    const eleThubm = await driver.findElement(By.xpath('//*[@id="btnThumb"]/div'));
    // 等待页面获取初始值
    //await driver.wait(waitnext(1000), 1500);
    await waitnext(1500);
    // 测试click，count应该加1
    await eleThubm.click(); 
    // 测试click节流，count应该不变
    await eleThubm.click();

    // 1s后再测试click，count应该加1
    await waitnext(1500);
    await eleThubm.click();
  } finally {
    // 等待1s,避免有后台未返回的处理而使node报错
    await waitnext(1500);
    console.log('test end');
    await driver.quit();
  }
})();

