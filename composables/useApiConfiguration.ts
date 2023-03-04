import {Configuration} from "~/api";
import {useAccessToken} from "~/composables/useAccessToken";

export function useApiConfiguration() {
    return new Configuration({
        accessToken: useAccessToken().value
    })
}