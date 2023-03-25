import {StructureTypeEnum} from "~/interfaces/StructureTypeEnum";

export function useAddBlockItem(base: any, name: string, item: any) {

    if (!base.hasOwnProperty(name)) base[name] = item;

    base[name].id = item.id;
    // base[name].title = item.title;


    if (base[name].type !== item.type) base[name].type = item.type;

    if (item.type === StructureTypeEnum.Image) {
        base[name].src = base[name].src || item.src;
        base[name].alt = base[name].src || item.alt;
    }

    if (item.type === StructureTypeEnum.List) {
        base[name].newItem = item.newItem;
        base[name].value.forEach((element: any, index: number) => {
            Object.keys(item.newItem).forEach((key: string) => {
                useAddBlockItem(base[name].value[index], key, JSON.parse(JSON.stringify(item.newItem[key])))
            })
        })
    }

    if (item.type === StructureTypeEnum.Object) {
        Object.keys(item.value).forEach((key: string) => {
            useAddBlockItem(base[name].value, key, item.value[key])
        })
    }

    if (item.type === StructureTypeEnum.Select) {
        base[name].items = item.items;
    }
}