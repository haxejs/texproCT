/* tslint:disable */
import {
  Company
} from '../index';

declare var Object: any;
export interface CustomerInterface {
  "fullName"?: string;
  "roleName": string;
  "lastHeartBeat"?: Date;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: number;
  "companyId"?: number;
  "password"?: string;
  accessTokens?: any[];
  company?: Company;
}

export class Customer implements CustomerInterface {
  "fullName": string = '';
  "roleName": string = '';
  "lastHeartBeat": Date = new Date(0);
  "realm": string = '';
  "username": string = '';
  "email": string = '';
  "emailVerified": boolean = false;
  "id": number = 0;
  "companyId": number = 0;
  "password": string = '';
  accessTokens: any[] = null;
  company: Company = null;
  constructor(data?: CustomerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Customer`.
   */
  public static getModelName() {
    return "Customer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Customer for dynamic purposes.
  **/
  public static factory(data: CustomerInterface): Customer{
    return new Customer(data);
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
      name: 'Customer',
      plural: 'Customers',
      path: 'Customers',
      idName: 'id',
      properties: {
        "fullName": {
          name: 'fullName',
          type: 'string'
        },
        "roleName": {
          name: 'roleName',
          type: 'string'
        },
        "lastHeartBeat": {
          name: 'lastHeartBeat',
          type: 'Date'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "companyId": {
          name: 'companyId',
          type: 'number'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        company: {
          name: 'company',
          type: 'Company',
          model: 'Company',
          relationType: 'belongsTo',
                  keyFrom: 'companyId',
          keyTo: 'id'
        },
      }
    }
  }
}
