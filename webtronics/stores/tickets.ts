import { defineStore } from 'pinia'
import axios from 'axios'

export const useTickets = defineStore('tickets', {
    state: () => ({
        tickets: []
    }),

    actions: {
        async getTickets() {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12')
                this.tickets = data
            } catch (e) {
                throw e
            }
        }
    },

    getters: {
        ticketsGetter: s => s.tickets
    }
})