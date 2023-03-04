import {reactive} from 'vue';
import {Configuration, HUSAAPIsApiFactory, HUSAAPIsApiFp, PageApiFactory} from "~/api";
import {useApiConfiguration} from "~/composables/useApiConfiguration";

export const api__page_reactive = reactive({
    loading: false,
    all: <any>[],
    config: useApiConfiguration,

    startLoading() {
        this.loading = true;
        console.log('starting loading ', this.loading);
    },
    stopLoading() {
        this.loading = false;
        console.log('stop loading ', this.loading);
    },

    getAllPages() {
        this.startLoading();
        return HUSAAPIsApiFactory(this.config())
            .getAllPages()
            .then(res => {
                this.all = res.data.data
                return res;
            })
            .finally(() => this.stopLoading())
    },
    getAll(brand_id: number,) {
        this.loading = true;
        return PageApiFactory(this.config())
            .getListAllPages(brand_id)
            .finally(this.stopLoading)
    }
})