import { Injectable, Inject } from '@angular/core';
import { Customer, Batch, Company, Machine } from './shared/sdk/models';
import { CompanyApi, CustomerApi } from './shared/sdk/services';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare var window: any;

@Injectable()
export class DTRService {
  private machinesSubject:BehaviorSubject<Machine[]> = new BehaviorSubject<Machine[]>([]);
  private batchesSubject:BehaviorSubject<Batch[]> = new BehaviorSubject<Batch[]>([]);
  public machinesObservable:Observable<Machine[]> = this.machinesSubject.asObservable();
  public batchesObservable:Observable<Batch[]> = this.batchesSubject.asObservable();

  private isLoginning: boolean = false;
  private timeoutHandle: any = null;
  private company:Company = null;
  private users:Customer[] = [];
  private _isPushEnabled:boolean = true;

  constructor(
    @Inject(CustomerApi) private customerApi: CustomerApi,
    @Inject(CompanyApi) private companyApi: CompanyApi
  ) {
  	if (this.customerApi.isAuthenticated()) {
      this.isLoginning = true;
  		this.retrieveCompany();
  	} else {
      this.isLoginning = false;
    }
  }

  private retrieveCompany(){
    this.customerApi.getCompany(this.customerApi.getCurrentId()).subscribe((company:Company) => {
      this.company = company;
      if (this._isPushEnabled){
        window.baiduPush.setTags(['' + this.company.id]);
      } else {
        window.baiduPush.delTags(['' + this.company.id]);
      }
      this.companyApi.getUsers(this.company.id).forEach(users => this.users = users);
      this.flashData();
    },err => {
    	console.dir(err);
      this.isLoginning = false;
      //TODO:need a way to store credentials so user does not need to login again when token expires
      //this.login({"email": "dtr@ugen.cn","password":"123456"});
    });
  }

  private flashData(){
    let func = async () => {
      try{
        if (this.company){
          await this.companyApi.getMachines(this.company.id).forEach(machines => this.machinesSubject.next(machines));
          await this.companyApi.getBatches(this.company.id).forEach(batches => this.batchesSubject.next(batches));
        }
      }catch(err){
        console.dir(err);
      }
      
      if (this.isLoginning) {
        this.timeoutHandle = setTimeout(()=>{this.flashData()},5000);
      }
    };
    func();
  }

  public login(credentials: any, errCallback:Function){
  	this.customerApi.login(credentials).subscribe(()=>{
      this.isLoginning = true;
  		this.retrieveCompany();
  	}, (err) => {if (errCallback) errCallback(err)});
  }

  public isAuthenticated(){
    return this.isLoginning;
  }

  public getUsers(){
    return this.users;
  }

  public getCompany(){
    return this.company;
  }

  public getCachedCurrent(){
    return this.customerApi.getCachedCurrent()?this.customerApi.getCachedCurrent():{};
  }

  public stopPush(){
    this._isPushEnabled = false;
    if (this.company){
      window.baiduPush.delTags(['' + this.company.id]);
    }
  }

  public resumePush(){
    this._isPushEnabled = true;
    if (this.company){
      window.baiduPush.setTags(['' + this.company.id]);
    }
  }

  public isPushEnabled():boolean{
    return this._isPushEnabled;
  }

  public logout(){
    this.isLoginning = false;
    if (this.timeoutHandle){
      clearTimeout(this.timeoutHandle);
      this.timeoutHandle = null;
    }
    this.users = [];

    this.machinesSubject.next([]);
    this.batchesSubject.next([]);

  	this.customerApi.logout().subscribe();
  }
}