import { eventsResource } from './events.resource.js';

class EventsService{
    async create(createEventBody) {
        const event = eventsResource.create(createEventBody);
        return event;
    }

    async getEvents(reqQuery) {
        let events;
        if (reqQuery.name) {
            events = await eventsResource.getEventByName(reqQuery.name)
        } else if (reqQuery.id) {
            events = await eventsResource.getEventById(reqQuery.id)
        } else {
            const { page = 1, limit = 10 } = reqQuery;
            const offset = (page - 1) * limit;
            events = await eventsResource.getEvents(offset, limit)
        }
        return events;
    }

    async updateEvent(updateBody, eventId) {
        return eventsResource.updateEvent(updateBody, eventId)
    }

    async deleteEvent(eventId) {
        return eventsResource.deleteEvent(eventId);
    }
}

export const eventsService = new EventsService()