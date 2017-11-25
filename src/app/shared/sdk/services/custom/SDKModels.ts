/* tslint:disable */
import { Injectable } from '@angular/core';
import { Customer } from '../../models/Customer';
import { Company } from '../../models/Company';
import { Machine } from '../../models/Machine';
import { Batch } from '../../models/Batch';
import { Event } from '../../models/Event';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Customer: Customer,
    Company: Company,
    Machine: Machine,
    Batch: Batch,
    Event: Event,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
