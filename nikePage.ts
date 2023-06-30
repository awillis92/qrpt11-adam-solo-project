import {By} from 'selenium-webdriver'
import { BasePage } from './basePage'
export class nikePage extends BasePage {
    mensTab: By=By.xpath('//a[@aria-label="Men"]');
    clothingTab: By=By.xpath('(//a[@class="JSftBPEZ"])[2]')
    techShorts: By=By.xpath('(//a[@class="product-card__link-overlay opt-mobs-set"])[2]');
    blueTechShorts: By=By.xpath('(//img[@alt="Diffused Blue/Diffused Blue"])');
    size: By=By.xpath('(//label[@for="skuAndSize__29446305"])');
    addToBag: By=By.xpath('//button[@class="ncss-btn-primary-dark btn-lg add-to-cart-btn"]');
    bagItems: By=By.xpath('(//a[@title="Bag Items: 1"])[2]');
    checkOutBtn: By=By.xpath('(//button[@data-version="__VERSION_HERE__"])[3]');
    //2nd test selectors
    signInTab: By=By.xpath('(//span[@id="hf_title_signin_membership"])[1]');
    userNameInput: By=By.xpath('(//input[@type="text"])');
    continueBtn: By=By.xpath('(//button[@aria-label="continue"])');
    passWordInput: By=By.xpath('(//input[@type="password"])');
    signInBtn: By=By.xpath('(//button[@aria-label="Sign In"])');
    //3rd test selectors
    avatarBtn: By=By.xpath('(//p[@data-var="userName"])[1]');
    addInterestBtn: By=By.xpath('(//button[@type="button"])[2]');
    teamsBtn: By=By.xpath('(//span[@class="prl4-sm"])[10]');
    nflBtn: By=By.xpath('(//summary[@class="accordion-summary"])[4]');
    checkBoxBtn: By=By.xpath('(//input[@value="75c664d7-7071-45a3-b41e-d689a3920a3f"])');
    saveBtn: By=By.xpath('(//button[@type="submit"])[2]');
    //4th test selectors
    searchBox: By=By.xpath('(//input[@type="text"])[1]');
    searchBtn: By=By.xpath('(//button[@class="pre-search-btn ripple"])');
    airMAx90Btn: By=By.xpath('(//a[@aria-label="Nike Air Max 90 By You"])[2]');
    customizeBtm: By=By.xpath('(//button[@aria-label="Customize"])[2]');
    canvasBtn: By=By.xpath('(//button[@tabindex="0"])[4]');
    lilacBtn: By=By.xpath('(//button[@aria-label="Lilac"])');
    //5th test selectors
    removeBtn: By=By.xpath('(//button[@aria-label="Remove"])');
    airMax1Btn: By=By.xpath('(//div[@data-product-position="6"])');
    airMaxSize: By=By.xpath('(//label[@for="skuAndSize__29152894"])');
    airJordan1Btn: By=By.xpath('(//a[@aria-label="Air Jordan 1"])[2]');
    mensFilter: By=By.xpath('(//button[@aria-label="Filter for Men"])');
    retro1Btn: By=By.xpath('(//div[@data-product-position="5"])');
    retro1Size: By=By.xpath('(//label[@for="skuAndSize__29198004"])');
    fleeceShorts: By=By.xpath('(//div[@data-product-position="2"])');
    newAndFeaturedTab: By=By.xpath('(//a[@data-path="new featured"])');
    womensTab: By=By.xpath('(//a[@data-path="women"])');
    kidsTab: By=By.xpath ('(//a[@class="pre-desktop-menu-link headline-5 p3-lg pt4-sm d-sm-b no-outline"])[4]');
    accessoriesTab: By=By.xpath ('(//a[@class="pre-desktop-menu-link headline-5 p3-lg pt4-sm d-sm-b no-outline"])[5]');
    saleTab: By=By.xpath ('(//a[@class="pre-desktop-menu-link headline-5 p3-lg pt4-sm d-sm-b no-outline"])[6]');



    constructor(){
        super({url:"https://www.nike.com/"})
    }
    async repeatClick(num, elementBy) {
        for (let i = 0; i < num; i++){
            await this.click(elementBy)
        }
    }
    async mouseOver(elementBy: By) {
        const element = await this.getElement(elementBy);
        //Creating object of an Actions class
        const actions = this.driver.actions({bridge: true}); 
        await actions.move({duration:1000,origin:element,x:0,y:0}).perform(); }
}
