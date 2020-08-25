class CRUDRouter {

    constructor(app, controller, endPoint){
        this.app = app;
        this.controller = controller;
        this.endPoint = endPoint;
    }

    routesConfig = () => {    
    
        this.app.post('/' + this.endPoint, [
            this.controller.save
        ]);
        
        this.app.get('/' + this.endPoint, [
            this.controller.readAll
        ]);
        
        this.app.get('/' + this.endPoint + '/:id', [
            this.controller.findById
        ]);
        
        this.app.patch('/' + this.endPoint + '/:id', [
        ]);
        
        this.app.delete('/' + this.endPoint + '/:id', [ 
            this.controller.deleteById
        ]);
    }
}

module.exports = CRUDRouter