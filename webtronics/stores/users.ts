import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsers = defineStore('users', {
    state: () => ({
        user: {}
    }),

    actions: {
        async getUser (id: string) {
            try {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                this.user = {...data}
            } catch (e) {
                throw e
            }
        }
    },

    getters: {
        userGetter: s => s.user
    }
})