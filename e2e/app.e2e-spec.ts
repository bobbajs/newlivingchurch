import { NlcPage } from './app.po';

describe('nlc App', () => {
  let page: NlcPage;

  beforeEach(() => {
    page = new NlcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
