import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateProductCategoryController {
  async handle(request: Request, response: Response) {
    const { idProduct, idCategory } = request.body;

    const productCategory = await prismaClient.productCategory.create({
      data: {
        id_category: idCategory,
        id_product: idProduct
      }
    });

    return response.json(productCategory);
  };
};