import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

// vai criar o produto e já fazer o relacionamento
export class CreateProductWithExistCategory {
  async handle(request: Request, response: Response) {
    const { name, price, bar_code, id_category } = request.body;

    const product = await prismaClient.productCategory.create({
      data: {
        product: {
          create: {
            bar_code,
            name,
            price
          }
        },
        category: {
          /* a categoria já existe eu quero pegar e atrelar ela para o novo
          produto */
          connect: {
            id: id_category
          }
        }
      }
    });

    return response.json(product);
  };
};