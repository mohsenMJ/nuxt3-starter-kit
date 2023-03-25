import {defineAsyncComponent} from "vue";

export function useBlockLoader(name : string) {
    return defineAsyncComponent(() => import("../components/builder/blocks/" + name + '.vue'))
}