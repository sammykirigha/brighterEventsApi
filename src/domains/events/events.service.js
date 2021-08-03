import { eventsResource } from './events.resource.js';

class EventsService{
    async create(createEventBody) {
        const event = eventsResource.create(createEventBody);
        return event;
    }

    async getEvents(reqQuery) {
        let events;
            const { page = 1, limit = 10 } = reqQuery;
            const offset = (page - 1) * limit;
            events = await eventsResource.getEvents(offset, limit)
        return events;
    }
    // get by id
    async getEvent(eventId) {
        return eventsResource.getEventById(eventId)
    }
    //get by title
    async getEventTitle(eventTitle) {

        return eventsResource.getEventByName(eventTitle)
    }

    async updateEvent(updateBody, eventId) {
        return eventsResource.updateEvent(updateBody, eventId)
    }

    async deleteEvent(eventId) {
        return eventsResource.deleteEvent(eventId);
    }
}

export const eventsService = new EventsService()