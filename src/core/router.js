class Router{
    static routeConfig = (app) => {
        const ItemRouter = require('../item/item.router');
        const itemRouter = new ItemRouter(app);
        itemRouter.routesConfig();

        const SpecRouter = require('../spec/spec.router');
        const specRouter = new SpecRouter(app);
        specRouter.routesConfig();

        const StoreRouter = require('../store/store.router');
        const storeRouter = new StoreRouter(app);
        storeRouter.routesConfig();

        const ItemSpecMappingRouter = require('../item-spec-mapping/item-spec-mapping.router');
        const itemSpecMappingRouter = new ItemSpecMappingRouter(app);
        itemSpecMappingRouter.routesConfig();

        const SpecValueRouter = require('../spec-value/spec-value.router');
        const specValueRouter = new SpecValueRouter(app);
        specValueRouter.routesConfig();
    }
}

module.exports = Router