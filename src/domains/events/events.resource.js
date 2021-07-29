import { knexInstance } from '../../database/knexInstance.js';
import {EventNotFoundError} from './events.errors.js'

const EVENTS_TABLE = 'events';

class EventsResource{
    async create(createEventBody) {
        const created = await knexInstance(EVENTS_TABLE).insert(
            createEventBody,
            '*'
        )
        return created[0]
    }

    async getEvents(offset, limit) {
        const events = await knexInstance(EVENTS_TABLE)
            .select('*')
            .offset(offset)
            .limit(limit)
        return events
        
    }

    async getEventById(eventId) {
        const event = await knexInstance(EVENTS_TABLE)
            .select('*')
            .where('id', eventId)
            .first()
        if (!event) {
            throw new EventNotFoundError(404, `no event with id ${eventId} found`)
        }
        return event
    }

    async getEventByName(title) {
        const event = await knexInstance(EVENTS_TABLE)
            .select('*')
            .where('title', title)
            .first()
        if (!event) {
            throw new EventNotFoundError(404, `no event with title ${title} found `)
        }
        return event;
    }

    async updateEvent(updateBody, eventId) {
        const event = updateBody;
        const updatedEvent = await knexInstance(EVENTS_TABLE)
            .update(event)
            .where('id', eventId)
            .returning(['id', 'title', 'description', 'location', 'date', 'time'])
        return updatedEvent[0]
    }

    async deleteEvent(eventId) {
        await knexInstance(EVENTS_TABLE)
            .where('id', eventId)
            .delete()
        
    }
}

export const eventsResource = new EventsResource();