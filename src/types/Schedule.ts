import { Client } from "./Client"
import { Product } from "./Product"
import { Service } from "./Service"

export interface Schedule {
    id:number
    start: string
    finish: string
    client: Client
    Services: Service[]
    Products: Product[]
  }