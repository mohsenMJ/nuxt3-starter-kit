import {StructureInterface} from "~/interfaces/StructureInterface";

export interface BlockInterface {
    id: number,
    name: string,
    title: string,
    structure?: any,
    image: string
    selected?: boolean,
}
