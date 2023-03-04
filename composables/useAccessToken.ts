import {useCookie} from "#app";

export function useAccessToken() {
    return useCookie<string>('access_token', {
        watch: true,
        default: () => {
            return ""
        }
    })
}