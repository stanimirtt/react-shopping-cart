import expect from 'expect';
import ShoppingCartHelper from './ShoppingCartHelper';
import mockData from '../data/mockData';

describe('Shopping cart helpers', () => {
  describe('should find value by key', () => {
    it('should find value by key', () => {
      const item = mockData.items[0];
      const { columns } = mockData;
      const key = 'name';
      const expected = 'Product 1';

      expect(ShoppingCartHelper.findValueByKey(item, columns, key)).toEqual(expected);
    });

    it('should format number', () => {
      const number = 5;
      const expected = '5.00';

      expect(ShoppingCartHelper.formatNumber(number)).toEqual(expected);
    });
  });
});
