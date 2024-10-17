import { Router } from "express";
import { TicketController } from "./controller";

export class TicketRoutes {
    constructor() {
        
    }

    static get routes():Router{
        const router = Router();
        const ticketContrller = new TicketController();
        router.get('/',ticketContrller.getTickets);
        router.get('/last',ticketContrller.getLastTicketNumber);
        router.get('/pending',ticketContrller.pendingTickets);

        router.post('/',ticketContrller.createTicket);

        router.get ('/draw/:desk',ticketContrller.drawTicket);
        router.put('/done/:ticketId',ticketContrller.ticketFinished);

        router.get('/working-on',ticketContrller.workingOn);

        return router;
    }
}