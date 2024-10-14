import express, { Router, Request, Response } from 'express';
import path from 'path';

interface Options {
    PORT: number;
    ROUTES: Router;
    PUBLIC_PATH?: string;
}

export class Server {
    private app = express();
    private readonly port:number;
    private readonly routes:Router;
    private readonly publicPath:string;
    constructor(options:Options) {
        const {PORT,PUBLIC_PATH = 'public',ROUTES} = options;
        this.port = PORT;
        this.routes = ROUTES;
        this.publicPath = PUBLIC_PATH;
    }
    async start(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));

        this.app.use(express.static(this.publicPath));

        this.app.use(this.routes);

        this.app.get('*', (req: Request, res: Response) => {
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
            res.sendFile(indexPath);
            return;
        });
        this.app.listen(this.port, () => {
            console.log(`Server ${this.port}`);
        });
    }
}