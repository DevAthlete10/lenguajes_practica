import { Router } from 'express';
import { AuthRouter } from './auth/routes';
import { ProductRoutes } from './product/routes';
import { CategoryRouter } from './category/routes';
import { FileUploadRouter } from './file-upload/routes';
import { ImageRoutes } from './images/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/api/auth', AuthRouter.router );
    router.use('/api/categories', CategoryRouter.router );
    router.use('/api/products', ProductRoutes.router );
    router.use('/api/upload', FileUploadRouter.router );
    router.use('/api/images', ImageRoutes.router );

    return router;
  }


}

