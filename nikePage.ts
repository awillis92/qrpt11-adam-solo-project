import {By} from 'selenium-webdriver'
import { BasePage } from './basePage'
export class nikePage extends BasePage {
    mensTab: By=By.xpath('//a[@aria-label="Men"]');
    clothingTab: By=By.xpath('(//a[@class="JSftBPEZ"])[2]')
    techShorts: By=By.xpath('(//a[@class="product-card__link-overlay opt-mobs-set"])[2]');
    blueTechShorts: By=By.xpath('(//img[@alt="Diffused Blue/Diffused Blue"])');
    size: By=By.xpath('(//label[@for="skuAndSize__29446305"])');

}
