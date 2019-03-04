import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('sample-assignment app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Git users in city app !');
  });

  it('should submit and display results', () => {
    page.navigateTo();
    page.getInput().sendKeys('ukraine');
    page.getButton().click();
    expect(page.getTable).toBeDefined();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      })
    );
  });
});
