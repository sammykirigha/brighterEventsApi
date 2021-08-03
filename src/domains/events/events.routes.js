import { Router } from 'express';
import { protectedAsyncRequestHandler } from '../../lib/util/protectedAsyncHandler.js';
import { eventsResource } from './events.resource.js';
import { eventsService } from './events.service.js';

export function getEventsRouter() {
    const eventsRouter = Router();

    eventsRouter.post(
        '/events',
        protectedAsyncRequestHandler(async (req, res) => {
            const event = await eventsService.create(req.body);
            res.status(201).json({ message: 'event created', event })
        })
    );

    eventsRouter.put(
        '/events/:id',
        protectedAsyncRequestHandler(async (req, res) => {
            const updatedEvent = await eventsService.updateEvent(
                req.body,
                req.params.id
            );
            res.status(200).json({ message: 'event updated', event: updatedEvent })
        })
    );

    eventsRouter.get(
        '/events',
        protectedAsyncRequestHandler(async (req, res) => {
            const events = await eventsService.getEvents(req.query);
            res.status(200).json({ message: 'success', events })
        })
    );

    eventsRouter.get(
        '/events/:id',
        protectedAsyncRequestHandler(async (req, res) => {
            const event = await eventsService.getEvent(req.params.id);
            res.status(200).json({message: 'success', event})
        })
    )

    eventsRouter.get(
        '/events/search/:title',
        protectedAsyncRequestHandler(async (req, res) => {
            const event = await eventsService.getEventTitle(req.params.title);
            res.status(200).json({message: 'success', event})
        })
    )

    eventsRouter.delete(
        '/events/:id',
        protectedAsyncRequestHandler(async (req, res) => {
            await eventsService.deleteEvent(req.params.id);
            res.status(200).json({ message: 'event deleted successfully' })
        })
    );

    return eventsRouter;
}