import { AiobeePage } from './app.po';

describe('aiobee App', () => {
  let page: AiobeePage;

  beforeEach(() => {
    page = new AiobeePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
