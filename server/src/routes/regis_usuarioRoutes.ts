import { Router } from 'express';
import { regis_usuarioController } from '../controllers/regis_usuarioController';

class Regis_usuarioRoutes {

    public router: Router = Router();

    constructor() {
       this.config();
    }

    config(): void{
        this.router.get('/', regis_usuarioController.list);
        this.router.get('/:id', regis_usuarioController.getone);
        this.router.post('/', regis_usuarioController.create);
        this.router.delete('/:id', regis_usuarioController.delete);
        this.router.put('/:id', regis_usuarioController.update);
    }
}

  const  regis_usuarioRoutes = new Regis_usuarioRoutes();
  export default regis_usuarioRoutes.router;