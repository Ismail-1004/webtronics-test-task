import { defineStore } from 'pinia'
import axios from 'axios'

export const useTickets = defineStore('tickets', {
    state: () => ({
        tickets: [],
        ticket: {}
    }),

    actions: {
        async getTickets() {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12')
                this.tickets = data
            } catch (e) {
                throw e
            }
        },

        async getTicket (id: string) {
            try {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                this.ticket = {...data}
            } catch (e) {
                throw e
            }
        }
    },

    getters: {
        ticketsGetter: s => s.tickets,
        ticketGetter: s => s.ticket
    }
})