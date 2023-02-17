import {reactive} from 'vue';

export const store = reactive({
    count: 0,
    increment(i = 1) {
        this.count += i;
    }
})