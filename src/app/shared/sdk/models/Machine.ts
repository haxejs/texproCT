/* tslint:disable */

declare var Object: any;
export interface MachineInterface {
  "updatedAt"?: Date;
  "companyName"?: string;
  "dtrSenderName"?: string;
  "MachineNumber": number;
  "MachineName": string;
  "MachineState"?: string;
  "MachineMode"?: string;
  "MachineCallState"?: string;
  "BatchName"?: string;
  "DyeProgName"?: string;
  "DyeProgNumber"?: number;
  "DyeProgStep"?: number;
  "Loading"?: number;
  "Ratio_1"?: string;
  "Ratio_2"?: string;
  "MachineIns1_Text"?: string;
  "MachineIns1_Value"?: string;
  "MachineIns2_Text"?: string;
  "MachineIns2_Value"?: string;
  "MachineIns3_Text"?: string;
  "MachineIns3_Value"?: string;
  "MachineIns4_Text"?: string;
  "MachineIns4_Value"?: string;
  "MachineIns5_Text"?: string;
  "MachineIns5_Value"?: string;
  "MachineIns6_Text"?: string;
  "MachineIns6_Value"?: string;
  "MachineMainTemp"?: string;
  "MachineTemp2"?: string;
  "MachineTemp3"?: string;
  "MachineTemp4"?: string;
  "MachineAIn1"?: string;
  "MachineAIn2"?: string;
  "MachineAIn3"?: string;
  "MachineAIn4"?: string;
  "MachineAIn5"?: string;
  "MachineAIn6"?: string;
  "MachineAIn7"?: string;
  "MachineAIn8"?: string;
  "MachineAOut1"?: string;
  "MachineAOut2"?: string;
  "MachineAOut3"?: string;
  "MachineAOut4"?: string;
  "MachineAOut5"?: string;
  "MachineAOut6"?: string;
  "MachineAOut7"?: string;
  "MachineAOut8"?: string;
  "Water_Vol1_Total"?: string;
  "Water_Vol2_Total"?: string;
  "Water_Vol3_Total"?: string;
  "Water_Vol4_Total"?: string;
  "Steam_Vol_Total"?: string;
  "Power_Total"?: string;
  "id"?: number;
  "companyId"?: number;
  "dtrSenderId"?: number;
  company?: any;
  dtrSender?: any;
}

export class Machine implements MachineInterface {
  "updatedAt": Date = new Date(0);
  "companyName": string = '';
  "dtrSenderName": string = '';
  "MachineNumber": number = 0;
  "MachineName": string = '';
  "MachineState": string = '';
  "MachineMode": string = '';
  "MachineCallState": string = '';
  "BatchName": string = '';
  "DyeProgName": string = '';
  "DyeProgNumber": number = 0;
  "DyeProgStep": number = 0;
  "Loading": number = 0;
  "Ratio_1": string = '';
  "Ratio_2": string = '';
  "MachineIns1_Text": string = '';
  "MachineIns1_Value": string = '';
  "MachineIns2_Text": string = '';
  "MachineIns2_Value": string = '';
  "MachineIns3_Text": string = '';
  "MachineIns3_Value": string = '';
  "MachineIns4_Text": string = '';
  "MachineIns4_Value": string = '';
  "MachineIns5_Text": string = '';
  "MachineIns5_Value": string = '';
  "MachineIns6_Text": string = '';
  "MachineIns6_Value": string = '';
  "MachineMainTemp": string = '';
  "MachineTemp2": string = '';
  "MachineTemp3": string = '';
  "MachineTemp4": string = '';
  "MachineAIn1": string = '';
  "MachineAIn2": string = '';
  "MachineAIn3": string = '';
  "MachineAIn4": string = '';
  "MachineAIn5": string = '';
  "MachineAIn6": string = '';
  "MachineAIn7": string = '';
  "MachineAIn8": string = '';
  "MachineAOut1": string = '';
  "MachineAOut2": string = '';
  "MachineAOut3": string = '';
  "MachineAOut4": string = '';
  "MachineAOut5": string = '';
  "MachineAOut6": string = '';
  "MachineAOut7": string = '';
  "MachineAOut8": string = '';
  "Water_Vol1_Total": string = '';
  "Water_Vol2_Total": string = '';
  "Water_Vol3_Total": string = '';
  "Water_Vol4_Total": string = '';
  "Steam_Vol_Total": string = '';
  "Power_Total": string = '';
  "id": number = 0;
  "companyId": number = 0;
  "dtrSenderId": number = 0;
  company: any = null;
  dtrSender: any = null;
  constructor(data?: MachineInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Machine`.
   */
  public static getModelName() {
    return "Machine";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Machine for dynamic purposes.
  **/
  public static factory(data: MachineInterface): Machine{
    return new Machine(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Machine',
      plural: 'Machines',
      path: 'Machines',
      idName: 'id',
      properties: {
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
        "companyName": {
          name: 'companyName',
          type: 'string'
        },
        "dtrSenderName": {
          name: 'dtrSenderName',
          type: 'string'
        },
        "MachineNumber": {
          name: 'MachineNumber',
          type: 'number'
        },
        "MachineName": {
          name: 'MachineName',
          type: 'string'
        },
        "MachineState": {
          name: 'MachineState',
          type: 'string'
        },
        "MachineMode": {
          name: 'MachineMode',
          type: 'string'
        },
        "MachineCallState": {
          name: 'MachineCallState',
          type: 'string'
        },
        "BatchName": {
          name: 'BatchName',
          type: 'string'
        },
        "DyeProgName": {
          name: 'DyeProgName',
          type: 'string'
        },
        "DyeProgNumber": {
          name: 'DyeProgNumber',
          type: 'number'
        },
        "DyeProgStep": {
          name: 'DyeProgStep',
          type: 'number'
        },
        "Loading": {
          name: 'Loading',
          type: 'number'
        },
        "Ratio_1": {
          name: 'Ratio_1',
          type: 'string'
        },
        "Ratio_2": {
          name: 'Ratio_2',
          type: 'string'
        },
        "MachineIns1_Text": {
          name: 'MachineIns1_Text',
          type: 'string'
        },
        "MachineIns1_Value": {
          name: 'MachineIns1_Value',
          type: 'string'
        },
        "MachineIns2_Text": {
          name: 'MachineIns2_Text',
          type: 'string'
        },
        "MachineIns2_Value": {
          name: 'MachineIns2_Value',
          type: 'string'
        },
        "MachineIns3_Text": {
          name: 'MachineIns3_Text',
          type: 'string'
        },
        "MachineIns3_Value": {
          name: 'MachineIns3_Value',
          type: 'string'
        },
        "MachineIns4_Text": {
          name: 'MachineIns4_Text',
          type: 'string'
        },
        "MachineIns4_Value": {
          name: 'MachineIns4_Value',
          type: 'string'
        },
        "MachineIns5_Text": {
          name: 'MachineIns5_Text',
          type: 'string'
        },
        "MachineIns5_Value": {
          name: 'MachineIns5_Value',
          type: 'string'
        },
        "MachineIns6_Text": {
          name: 'MachineIns6_Text',
          type: 'string'
        },
        "MachineIns6_Value": {
          name: 'MachineIns6_Value',
          type: 'string'
        },
        "MachineMainTemp": {
          name: 'MachineMainTemp',
          type: 'string'
        },
        "MachineTemp2": {
          name: 'MachineTemp2',
          type: 'string'
        },
        "MachineTemp3": {
          name: 'MachineTemp3',
          type: 'string'
        },
        "MachineTemp4": {
          name: 'MachineTemp4',
          type: 'string'
        },
        "MachineAIn1": {
          name: 'MachineAIn1',
          type: 'string'
        },
        "MachineAIn2": {
          name: 'MachineAIn2',
          type: 'string'
        },
        "MachineAIn3": {
          name: 'MachineAIn3',
          type: 'string'
        },
        "MachineAIn4": {
          name: 'MachineAIn4',
          type: 'string'
        },
        "MachineAIn5": {
          name: 'MachineAIn5',
          type: 'string'
        },
        "MachineAIn6": {
          name: 'MachineAIn6',
          type: 'string'
        },
        "MachineAIn7": {
          name: 'MachineAIn7',
          type: 'string'
        },
        "MachineAIn8": {
          name: 'MachineAIn8',
          type: 'string'
        },
        "MachineAOut1": {
          name: 'MachineAOut1',
          type: 'string'
        },
        "MachineAOut2": {
          name: 'MachineAOut2',
          type: 'string'
        },
        "MachineAOut3": {
          name: 'MachineAOut3',
          type: 'string'
        },
        "MachineAOut4": {
          name: 'MachineAOut4',
          type: 'string'
        },
        "MachineAOut5": {
          name: 'MachineAOut5',
          type: 'string'
        },
        "MachineAOut6": {
          name: 'MachineAOut6',
          type: 'string'
        },
        "MachineAOut7": {
          name: 'MachineAOut7',
          type: 'string'
        },
        "MachineAOut8": {
          name: 'MachineAOut8',
          type: 'string'
        },
        "Water_Vol1_Total": {
          name: 'Water_Vol1_Total',
          type: 'string'
        },
        "Water_Vol2_Total": {
          name: 'Water_Vol2_Total',
          type: 'string'
        },
        "Water_Vol3_Total": {
          name: 'Water_Vol3_Total',
          type: 'string'
        },
        "Water_Vol4_Total": {
          name: 'Water_Vol4_Total',
          type: 'string'
        },
        "Steam_Vol_Total": {
          name: 'Steam_Vol_Total',
          type: 'string'
        },
        "Power_Total": {
          name: 'Power_Total',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "companyId": {
          name: 'companyId',
          type: 'number'
        },
        "dtrSenderId": {
          name: 'dtrSenderId',
          type: 'number'
        },
      },
      relations: {
        company: {
          name: 'company',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'companyId',
          keyTo: 'id'
        },
        dtrSender: {
          name: 'dtrSender',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'dtrSenderId',
          keyTo: 'id'
        },
      }
    }
  }
}