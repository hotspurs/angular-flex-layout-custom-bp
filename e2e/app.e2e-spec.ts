import { AngularFlexLayoutTestPage } from './app.po';

describe('angular-flex-layout-test App', () => {
  let page: AngularFlexLayoutTestPage;

  beforeEach(() => {
    page = new AngularFlexLayoutTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
