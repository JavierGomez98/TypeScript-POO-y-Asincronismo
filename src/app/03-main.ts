import { ProductHttpService } from './services/product-http.service'

(async () => {
  try {
    const productService = new ProductHttpService()
  
    console.log('init');
    const products = await productService.getAll()
    console.log(products.length);
    console.log(products.map(item => item.price));
  
    console.log('--------------');
  
    const productId = products[0].id
    await productService.update(productId, {
      price: 10000,
      title: 'new title',
      description: 'asdasf'
    })
    console.log('------- Updated -------');
    const product = await productService.findOne(productId)
    console.log(product);
  } catch (error) {
    console.error(error);
  }
})()
