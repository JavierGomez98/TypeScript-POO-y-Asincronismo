import axios from "axios"
import { UpdateProductDto } from "../dtos/product.dto"
import { Category } from "../models/category.model"
import { Product } from "../models/product.model"

export class BaseHttpService<T> {
  constructor(
    protected url: string
  ) {}

  async getAll() {
    const { data } = await axios.get<T[]>(this.url)
    return data
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes)
    return data
  }
}

// const service = new BaseHttpService<string>()
// service.getAll()

// const serviceCategory = new BaseHttpService<Category>()
// serviceCategory.getAll()

(async () => {
  const productsServices = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/products')
  const rta = await productsServices.getAll()
  console.log(rta);
  productsServices.update<Product['id'], UpdateProductDto>(1, {
    title: 'New title'
  })
})()
