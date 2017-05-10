import { ProductCrudUIPage } from './app.po';

describe('product-crud-ui App', () => {
  let page: ProductCrudUIPage;

  beforeEach(() => {
    page = new ProductCrudUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
