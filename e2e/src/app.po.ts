import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getInput() {
    return element(by.css('#search-input'));
  }

  getButton() {
    return element(by.css('button'));
  }

  getTable() {
    return element(by.css('table'));
  }
}
