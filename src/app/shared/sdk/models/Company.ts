/* tslint:disable */
import {
  Customer,
  Machine,
  Batch
} from '../index';

declare var Object: any;
export interface CompanyInterface {
  "name": string;
  "address"?: any;
  "email"?: string;
  "telephone"?: string;
  "id"?: number;
  users?: Customer[];
  machines?: Machine[];
  batches?: Batch[];
}

export class Company implements CompanyInterface {
  "name": string = '';
  "address": any = <any>null;
  "email": string = '';
  "telephone": string = '';
  "id": number = 0;
  users: Customer[] = null;
  machines: Machine[] = null;
  batches: Batch[] = null;
  constructor(data?: CompanyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Company`.
   */
  public static getModelName() {
    return "Company";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Company for dynamic purposes.
  **/
  public static factory(data: CompanyInterface): Company{
    return new Company(data);
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
      name: 'Company',
      plural: 'Companies',
      path: 'Companies',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'any'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "telephone": {
          name: 'telephone',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        users: {
          name: 'users',
          type: 'Customer[]',
          model: 'Customer',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'companyId'
        },
        machines: {
          name: 'machines',
          type: 'Machine[]',
          model: 'Machine',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'companyId'
        },
        batches: {
          name: 'batches',
          type: 'Batch[]',
          model: 'Batch',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'companyId'
        },
      }
    }
  }
}
