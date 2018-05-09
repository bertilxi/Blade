import { Controller, Get } from "@iguazu/puma";
import { Client } from "../entity";

@Controller()
export class CustomerController {
  @Get("/")
  public async all() {
    return Client.findAll();
  }
}

export const customerController = new CustomerController();
