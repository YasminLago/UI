import { ImatiaProjectPage } from './app.po';

describe('imatia-project App', function() {
  let page: ImatiaProjectPage;

  beforeEach(() => {
    page = new ImatiaProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
