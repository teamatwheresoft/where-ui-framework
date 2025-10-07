import {WhereCollection} from "../Utils/WhereCollections"

export class WhereEventSystem {
    constructor() {
        this.EventStore = new WhereCollection();
        this.UnRegisteredEventStore = new WhereCollection();
    }

    registerForEvent(eventName, callback) {
        this.EventStore.add(eventName, { eventName: eventName, callback: callback, tag: '', disabled: false });
        let event = this.UnRegisteredEventStore.get(eventName);

        if (!event) {
            return;
        }

        callback(event.eventData);
        this.UnRegisteredEventStore.remove(eventName);
    }

    registerForEventWithTag(eventName, callback, tag) {
        this.EventStore.add(eventName, { eventName: eventName, callback: callback, tag: tag, disabled: false });
        let event = this.UnRegisteredEventStore.get(eventName);

        if (!event) {
            return;
        }

        callback(event.eventData);
        this.UnRegisteredEventStore.remove(eventName);
    }

    raiseEvent(eventName, eventData) {
        let eventClients = this.EventStore.get(eventName);

        if (!eventClients) {
            if (!eventData) {
                return;
            }

            //If this event should be called after client register
            if (eventData.shouldCallAfterClientRegister) {
                this.UnRegisteredEventStore.add(eventName, {eventData });
            }

            return;
        }

        for (let i = 0; i < eventClients.length; i++) {
            if (eventClients[i].disabled) {
                continue;
            }

            eventClients[i].callback(eventData, eventClients[i]);
        }
    }
    unregisterEvent(eventName, tag) {
        let eventClients = this.EventStore.get(eventName);

        if (!eventClients) {
            return;
        }

        for (let i = 0; i < eventClients.length; i++) {
            if (eventClients[i].tag === tag) {
                eventClients[i].disabled = true;
            }
        }
    }
}