import {StructureTypeEnum} from "~/interfaces/StructureTypeEnum";

export interface StructureInterface {
  id : number,
  title : string,
  type : StructureTypeEnum,
  value : any
}
