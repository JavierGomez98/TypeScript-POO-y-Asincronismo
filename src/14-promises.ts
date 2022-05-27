import axios from 'axios'

(async () => {

  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, time)
    })
    return promise
  }

  function getProducts() {
    return axios.get('https://api.escuelajs.co/api/v1/products')
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products')
    return  rta.data
  }

  console.log('init');
  const rta = await delay(3000)
  console.log(rta);
  const products = await getProducts()
  console.log(products.data);
  const productsV2 = await getProductsAsync()
  console.log(productsV2);

})()
