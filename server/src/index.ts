import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import contactoRoutes from './routes/contactoRoutes';
import regis_usuarioRoutes from './routes/regis_usuarioRoutes';
import establecimientoRoutes from './routes/establecimientoRoutes';

class Server {

    public app: Application;
    
    constructor() {
      this.app = express();
      this.config();
      this.routes();
    }

    config(): void {
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/contacto',contactoRoutes);
        this.app.use('/api/regis_usuario',regis_usuarioRoutes);
        this.app.use('/api/establecimiento',establecimientoRoutes);

    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'));

        });
    }

}

const server = new Server();
server.start();