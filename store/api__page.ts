import {defineStore} from "pinia";
// import {ApiConfiguration} from "~/utils/apiConfiguration";
import {HUSAAPIsApiFactory/*, PageApiFactory*/} from "~/api";
import {useApiConfiguration} from "#imports";
import {useCookie} from "#app";

export const api__page = defineStore('api__page', {
    state: () => ({
        loading: <boolean>false,
        all: <any>[],
        config: useApiConfiguration,
    }),
    getters: {},
    actions: {
        startLoading() {
            this.loading = true;
        },
        stopLoading() {
            this.loading = false;
        },
        getAllPages() {
            this.startLoading();
            return HUSAAPIsApiFactory(
                this.config()
            )
                .getAllPages()
                .then(res => {
                    this.all = res.data.data
                    return res;
                })
                .finally(() => this.stopLoading())
        },
    }
})