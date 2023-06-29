import { nikePage } from "./nikePage";
const nike = new nikePage()
const fs = require('fs')

describe("Selecting shorts from Men Page", ()=> {
beforeEach(async () => {
    await nike.navigate()
})
afterAll(async () => {
    await nike.driver.quit()
})
test("Selecting an item and proceeding to checkout",async () => {
    await nike.click(nike.mensTab);
    await nike.click(nike.clothingTab);
    await nike.driver.sleep(1500)
    await nike.click(nike.techShorts);
    await nike.driver.manage().window().maximize()
    await nike.click(nike.blueTechShorts);
    await nike.click(nike.size);
    await nike.driver.sleep(3000);
    await nike.repeatClick(10, nike.addToBag);
    fs.writeFile(`${__dirname}/addToBag.png`,
    await nike.driver.takeScreenshot(), "base64",
    (e) =>{
        if (e) console.log(e)
        else console.log("screenshot saved")
    })
   });
test("Removing item from Bag", async () => {
    await nike.click(nike.bagItems);
    await nike.click(nike.removeBtn)
})
});