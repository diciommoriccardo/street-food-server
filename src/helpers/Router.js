import authMiddleware from '../middlewares/auth.js';
import notFoundMiddleware from '../middlewares/notFound.js';
import orderRouter from '../routes/Orders.js';
import productsRouter from '../routes/Products.js';

class Router {
    constructor( app ){
        this.app = app;
        this.routerSchema = {
            '/api/v1': [
                {  
                    '/orders': orderRouter,
                    '/products': productsRouter
                }
            ],
            '*': notFoundMiddleware,
        }
    }
    
    setAllRoutes(_route = '', routerSchema = this.routerSchema) {
        switch(routerSchema.constructor) {
            case ({}).constructor:
                Object.keys(routerSchema).forEach((route) => { this.setAllRoutes(_route + route, routerSchema[route]); });
                break;
            case ([]).constructor:
                routerSchema.forEach((element) => { this.setAllRoutes(_route, element); });
                break;
            default:  _route === '' ? this.app.use(routerSchema) : this.app.use(_route, routerSchema);
        }
    }
}

export default Router;