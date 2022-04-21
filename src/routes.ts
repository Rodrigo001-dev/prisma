import { Router } from 'express';

import { CreateCategoryController } from './controllers/CreateCategoryController';
import { CreateProductController } from './controllers/CreateProductController';

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();

router.post('/product', createProduct.handle);
router.post('/category', createCategory.handle);

export { router };