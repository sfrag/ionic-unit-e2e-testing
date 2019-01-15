import { Page } from './app.po';
import { browser, by, element } from 'protractor';


describe('App', () => {
  let page: Page;
  browser.waitForAngularEnabled(false);

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Home Page', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('Home Page');
      });
    });
  })
});
