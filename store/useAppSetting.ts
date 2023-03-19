import {reactive} from 'vue';

export const useAppSetting = reactive({

    data : 'test data',

    log(text: String) {
        console.log(text)
    }
})