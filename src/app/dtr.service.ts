import { Injectable, Inject } from '@angular/core';
import { FireLoopRef, Customer, Batch, Company, Machine } from './shared/sdk/models';
import { RealTime, CustomerApi } from './shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DTRService {
  private MachineReference: FireLoopRef<Machine>;
  private BatchReference: FireLoopRef<Batch>;
  private isLoginning: boolean = false;

  public machines:Array<Machine> = new Array<Machine>();
  public batches:Array<Batch> = new Array<Batch>();

  constructor(
    @Inject(CustomerApi) private customerApi: CustomerApi,
    @Inject(RealTime) private realtime: RealTime
  ) {
  	if (this.customerApi.isAuthenticated()) {
      this.isLoginning = true;
  		this.flashData();
  	} else {
      this.isLoginning = false;
    }
  }

  private flashData(){
  	if (this.MachineReference) this.MachineReference.dispose();
  	if (this.BatchReference) this.BatchReference.dispose();
    this.MachineReference = null;
    this.BatchReference = null;

    this.customerApi.getCompany(this.customerApi.getCurrentId()).subscribe((company:Company) => {
      this.realtime.onReady().subscribe(() => {
        this.realtime.onAuthenticated().subscribe(() => {
          //this.MachineReference = this.realtime.FireLoop.ref<Company>(Company).make(company).child<Machine>('machines');
          //this.BatchReference = this.realtime.FireLoop.ref<Company>(Company).make(company).child<Batch>('batches');

          this.MachineReference = this.realtime.FireLoop.ref<Machine>(Machine);
          this.BatchReference = this.realtime.FireLoop.ref<Batch>(Batch);

          this.MachineReference.on('change',{limit:1000,order:'id DESC',where:{companyId:company.id}}).subscribe((machines:Array<Machine>)=>{
            this.machines.splice(0,this.machines.length,...machines);
            
          });
          this.BatchReference.on('change',{limit:1000,order:'id DESC',where:{companyId:company.id}}).subscribe((batches:Array<Batch>)=>{
            this.batches.splice(0,this.batches.length,...batches);
          }); 
        });
      });
    },err => {
    	console.dir(err);
      this.isLoginning = false;
      //TODO:need a way to store credentials so user does not need to login again when token expires
      //this.login({"email": "dtr@ugen.cn","password":"123456"});
    });
  }

  public login(credentials: any){
  	this.customerApi.login(credentials).subscribe(()=>{
      this.machines.splice(0,this.machines.length);
      this.batches.splice(0,this.batches.length);
  		//if (this.realtime.connection) this.realtime.connection.disconnect();
      this.isLoginning = true;
  		this.flashData();
  	});
  }

  public isAuthenticated(){
    return this.isLoginning;
  }

  public getCachedCurrent(){
    return this.customerApi.getCachedCurrent()?this.customerApi.getCachedCurrent():{};
  }

  public logout(){
  	this.customerApi.logout().subscribe(()=>{
  		if (this.realtime.connection) this.realtime.connection.disconnect();
      if (this.MachineReference) this.MachineReference.dispose();
      if (this.BatchReference) this.BatchReference.dispose();
      this.MachineReference = null;
      this.BatchReference = null;
      this.machines.splice(0,this.machines.length);
      this.batches.splice(0,this.batches.length);
      this.isLoginning = false;
  	});
  }
}