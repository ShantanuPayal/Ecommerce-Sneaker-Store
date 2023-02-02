const products = [
    { name: 'Product 1', cost: 3500, color: 'black', design: 2, type: 'Loafers' },
    { name: 'Product 2', cost: 6000, color: 'white', design: 3, type: 'Sneakers' },
    { name: 'Product 3', cost: 4500, color: 'red', design: 3, type: 'Loafers' },
    { name: 'Product 4', cost: 7500, color: 'blue', design: 3, type: 'Sneakers' },
    { name: 'Product 5', cost: 2500, color: 'green', design: 2, type: 'Loafers' },
    // add more products as needed
  ];
  
  const costFilters = [
    { id: 'cost-1', min: 1500, max: 4000 },
    { id: 'cost-2', min: 4001, max: 7000 },
    { id: 'cost-3', min: 7001, max: Number.MAX_SAFE_INTEGER },
  ];
  
  const colorFilters = [
    { id: 'color-1', color: 'black' },
    { id: 'color-2', color: 'white' },
    { id: 'color-3', color: 'red' },
    { id: 'color-4', color: 'blue' },
    { id: 'color-5', color: 'green' },
  ];
  
  const designFilters = [
    { id: 'design-1', design: 2 },
    { id: 'design-2', design: 3 },
    { id: 'design-3', design: 4 },
  ];
  
  const typeFilters = [
    { id: 'type-1', type: 'Loafers' },
    { id: 'type-2', type: 'Sneakers' },
  ];
  
  function filterProducts(products, costFilters, colorFilters, designFilters, typeFilters) {
    let filteredProducts = products;
  
    costFilters.forEach(filter => {
      if (document.getElementById(filter.id).checked) {
        filteredProducts = filteredProducts.filter(product => product.cost >= filter.min && product.cost <= filter.max);
      }
    });
  
    colorFilters.forEach(filter => {
      if (document.getElementById(filter.id).checked) {
        filteredProducts = filteredProducts.filter(product => product.color === filter.color);
      }
    });
  
    designFilters.forEach(filter => {
      if (document.getElementById(filter.id).checked) {
        filteredProducts = filteredProducts.filter(product => product.design === filter.design);
      }
    });
  
    typeFilters.forEach(filter => {
      if (document.getElementById(filter.id).checked) {
        filteredProducts = filteredProducts.filter(product => product.type === filter.type);
      }
    });
  
    return filteredProducts;
  }
  
  document.getElementById('apply-filters-btn').addEventListener('click', () => {
    const filteredProducts = filterProducts(products, costFilters, colorFilters, designFilters, type);
}
);

  


