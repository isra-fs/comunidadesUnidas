import { ComunidadesPage } from './app.po';

describe('comunidades App', () => {
  let page: ComunidadesPage;

  beforeEach(() => {
    page = new ComunidadesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
