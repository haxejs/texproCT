/* tslint:disable */

declare var Object: any;
export interface BatchInterface {
  "updatedAt"?: Date;
  "companyName"?: string;
  "dtrSenderName"?: string;
  "BatchName": string;
  "MachineNumber": number;
  "MachineName": string;
  "Loading"?: number;
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

export class Batch implements BatchInterface {
  "updatedAt": Date = new Date(0);
  "companyName": string = '';
  "dtrSenderName": string = '';
  "BatchName": string = '';
  "MachineNumber": number = 0;
  "MachineName": string = '';
  "Loading": number = 0;
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
  constructor(data?: BatchInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Batch`.
   */
  public static getModelName() {
    return "Batch";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Batch for dynamic purposes.
  **/
  public static factory(data: BatchInterface): Batch{
    return new Batch(data);
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
      name: 'Batch',
      plural: 'Batches',
      path: 'Batches',
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
        "BatchName": {
          name: 'BatchName',
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
        "Loading": {
          name: 'Loading',
          type: 'number'
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
