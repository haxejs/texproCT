/* tslint:disable */

declare var Object: any;
export interface AgendaJobsInterface {
  "name"?: string;
  "data"?: any;
  "type"?: string;
  "priority"?: number;
  "nextRunAt"?: Date;
  "lastModifiedBy"?: Date;
  "lockedAt"?: Date;
  "lastRunAt"?: Date;
  "lastFinishedAt"?: Date;
  "id"?: number;
}

export class AgendaJobs implements AgendaJobsInterface {
  "name": string = '';
  "data": any = <any>null;
  "type": string = '';
  "priority": number = 0;
  "nextRunAt": Date = new Date(0);
  "lastModifiedBy": Date = new Date(0);
  "lockedAt": Date = new Date(0);
  "lastRunAt": Date = new Date(0);
  "lastFinishedAt": Date = new Date(0);
  "id": number = 0;
  constructor(data?: AgendaJobsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AgendaJobs`.
   */
  public static getModelName() {
    return "AgendaJobs";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AgendaJobs for dynamic purposes.
  **/
  public static factory(data: AgendaJobsInterface): AgendaJobs{
    return new AgendaJobs(data);
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
      name: 'AgendaJobs',
      plural: 'AgendaJobs',
      path: 'AgendaJobs',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "data": {
          name: 'data',
          type: 'any'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "priority": {
          name: 'priority',
          type: 'number'
        },
        "nextRunAt": {
          name: 'nextRunAt',
          type: 'Date'
        },
        "lastModifiedBy": {
          name: 'lastModifiedBy',
          type: 'Date'
        },
        "lockedAt": {
          name: 'lockedAt',
          type: 'Date'
        },
        "lastRunAt": {
          name: 'lastRunAt',
          type: 'Date'
        },
        "lastFinishedAt": {
          name: 'lastFinishedAt',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
