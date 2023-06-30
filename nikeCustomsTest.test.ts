import { nikePage } from "./nikePage"
const nike = new nikePage()

describe("Add to cart", ()=> {
    beforeEach(async () => {
        await nike.navigate()
    }) 
    afterAll(async () => {
        await nike.driver.quit()
    })
test("Add to Cart",async ()=> {
    await nike.driver.manage().window().maximize();
    await nike.click(nike.searchBox);
    await nike.setInput(nike.searchBox, "Air Max 1");
    await nike.click(nike.searchBtn);
    await nike.click(nike.airMax1Btn);
    await nike.click(nike.airMaxSize);
    await nike.driver.sleep(3000)
    await nike.click(nike.addToBag);
});
test("Remove from Cart",async ()=> {
    await nike.click(nike.airJordan1Btn);
    await nike.click(nike.mensFilter);
    await nike.click(nike.retro1Btn);
    await nike.click(nike.retro1Size);
    await nike.click(nike.addToBag);
    await nike.driver.sleep(1200);
});
test("Search Test",async ()=> {
    await nike.click(nike.searchBox);
    await nike.setInput(nike.searchBox, "Fleece Shorts\n");
    await nike.driver.sleep(3000)
    await nike.click(nike.fleeceShorts);
    
});
test("Menu Hovers",async ()=> {
    await nike.mouseOver(nike.newAndFeaturedTab);
    await nike.mouseOver(nike.mensTab);
    await nike.mouseOver(nike.womensTab);
    await nike.mouseOver(nike.kidsTab);
    await nike.mouseOver(nike.accessoriesTab);
    await nike.mouseOver(nike.saleTab);
});
});