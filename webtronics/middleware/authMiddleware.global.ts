import { useIAm } from "@/stores/iam"

export default defineNuxtRouteMiddleware(async (to) => {
    if (process.client) {
        const iamStore = useIAm()
        const router = useRouter()

        const token = iamStore.getToken()

        if (!token) {
            if (to.path.startsWith('/login')) {
                return
            } else {
                const redirectPath = encodeURIComponent(router.currentRoute.value.fullPath)

                return router.replace(`/login?redirect=${redirectPath}`)
            }
        } else {
            if (to.path !== 'login') return
            return await navigateTo('/')
        }
    }
})