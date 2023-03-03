import {reactive} from 'vue';

export const simpleCounter = reactive({
    count: 0,
    increment(i = 1) {
        this.count += i;
    }
})