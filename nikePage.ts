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
    



    constructor(){
        super({url:"https://www.nike.com/"})
    }
    async repeatClick(num, elementBy) {
        for (let i = 0; i < num; i++){
            await this.click(elementBy)
        }
    }
}
