import { Server } from 'http';
import { WebSocketServer,WebSocket } from 'ws';

interface OptionsServer {
    server:Server;
    path?:string;
}

export class WssService {
    private static _instance:WssService;
    private wss:WebSocketServer;

    private constructor(options:OptionsServer){
        const {server, path = '/ws'} = options;
        this.wss = new WebSocketServer({server,path});
        this.start();
    }

    static get instance():WssService{
        if (!WssService._instance) {
            throw 'WssService is not initialized'
        }
        return WssService._instance;
    }    

    static initWss(options:OptionsServer) {
        WssService._instance = new  WssService(options);   
    }

    public sendMessage(type:string, payload:Object){
        this.wss.clients.forEach( client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({type,payload}));
            }
        })
    }

    public start(){
        this.wss.on('connection',(ws:WebSocket) => {
            console.log('Cliente connected');
            ws.on('close',() => console.log('Client disconnect'));
        });
    }



}