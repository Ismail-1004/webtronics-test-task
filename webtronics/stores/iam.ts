import { defineStore } from 'pinia'

export const useIAm = defineStore('iam', {
    state: () => ({
        userData: {
            login: 'admin',
            password: 'admin'
        }
    }),

    actions: {
        login (data: iAmType):iAmType | boolean {
            if (this.userData.login === data.login && this.userData.password === data.password) {
                return data
            }

            return false
        },

        getToken (): iAmType | string {
            return localStorage.getItem('token') || '' 
        }
    }
})