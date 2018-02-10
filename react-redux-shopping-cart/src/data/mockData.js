const mockData = {
  items: [
    {
      id: 0,
      name: 'Product 1',
      details:
        'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.',
      image: 'http://placehold.it/100x100',
      quantity: 1,
      price: 5
    },
    {
      id: 1,
      name: 'Product 2',
      details:
        'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.',
      image: 'http://placehold.it/100x100',
      quantity: 1,
      price: 10
    },
    {
      id: 2,
      name: 'Product 3',
      details:
        'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.',
      image: 'http://placehold.it/100x100',
      quantity: 1,
      price: 3
    }
  ],
  columns: [
    {
      title: 'ID',
      key: 'id',
      display: false
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Details',
      key: 'details',
      display: false
    },
    {
      title: 'Image',
      key: 'image',
      display: false
    },
    {
      title: 'Price',
      key: 'price'
    },
    {
      title: 'Quantity',
      key: 'quantity'
    }
  ]
};

export default mockData;
