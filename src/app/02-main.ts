import { ProductMemoryServices } from './services/product-memory.service'

const productService = new ProductMemoryServices()

productService.create({
  title: 'Product 1',
  price: 100,
  description: 'bla',
  categoryId: 12,
  images: []
})

const products = productService.getAll()
const productId = products[0].id

productService.update(productId, {
  title: 'Change name'
})

const rta = productService.findOne(productId)
console.log(rta);

