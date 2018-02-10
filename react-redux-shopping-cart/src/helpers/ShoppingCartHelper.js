class ShoppingCartHelper {
  static findValueByKey(item, columns, key) {
    const searchedColumn = columns.filter(column => column.key === key)[0];

    return item[searchedColumn.key];
  }

  static formatNumber(value) {
    return Number(value).toFixed(2);
  }
}

export default ShoppingCartHelper;
