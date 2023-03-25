<template>
    <div class="space-y-4">
        <h4 class="font-semibold">{{ block.name }}</h4>
        <!--        <pre>{{structureKeys}}</pre>-->
        <component v-for="(item , index) in structureKeys" :key="index" :is="item.component"
                   v-model="block.structure[item.key]"/>
    </div>
</template>

<script setup lang="ts">
import {computed, defineAsyncComponent} from "vue";
import {BlockInterface} from "~/interfaces/BlockInterface";
import {StructureTypeEnum} from "~/interfaces/StructureTypeEnum";
import {BuilderStructureString, BuilderStructureText} from "#components";

const props = defineProps({
    modelValue: {
        type: Object as PropType<BlockInterface>,
        required: true,
        default: () => {
        }
    }
})

const emit = defineEmits(['update:modelValue'])

const block = computed({
    get: () => props.modelValue,
    set: (newValue) => emit('update:modelValue', newValue)
});

const structureKeys = computed(() => {
    return block.value.structure ?
        Object.entries(block.value.structure)
            .sort((a: any, b: any) => {
                if (a[1].id < b[1].id) return -1; else if (a[1].id > b[1].id) return 1;
                return 0
            })
            .map((i: any) => {
                return {
                    key: i[0],
                    component: defineAsyncComponent(() => import("./" + i[1].type + '.vue')),
                    // component: getComponent(i[1].type)
                }
            })
        : [];
});

// function getComponent(type: string) {
//     let component: any = null;
//     switch (type as StructureTypeEnum) {
//         case StructureTypeEnum.String:
//             component = BuilderStructureString;
//             break;
//         case StructureTypeEnum.Text :
//             component = BuilderStructureText;
//             break;
//     }
//     return component
// }
</script>
