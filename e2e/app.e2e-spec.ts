import { LOTFAPage } from './app.po';

describe('lotfa App', function() {
  let page: LOTFAPage;

  beforeEach(() => {
    page = new LOTFAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
