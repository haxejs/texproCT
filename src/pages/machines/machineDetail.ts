import { Component, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DTRService } from '../../app/dtr.service';
//import { Machine } from '../../app/shared/sdk/models';


@Component({
	selector: 'page-machineDetail',
    templateUrl: 'machineDetail.html'
})
export class MachineDetailPage implements OnDestroy{
	public lineChartData:Array<any> = [
		{data: [], label: 'Temperature'}
	];

	public machine:any = {tempArray:[]};

	public lineChartLabels:Array<any> = [];

	public lineChartOptions:any = {
		responsive: true,
		scales: {
		    xAxes: [{
		    	display: false,
		    	type: 'time',
	            time: {
	                beginAtZero:true,
	                unit: 'second',
	                displayFormats: {
	                  second: 'mm:ss',
	                  minute: 'mm:ss',
	                  hour: 'HH:mm'
	                }
	            },
	            ticks:{
	                autoSkip:true,
	                autoSkipPadding:25,
	                minRotation:45,
	            },
		        gridLines: {		          
		          color:'rgba(255,255,255,0.2)'
		        } 
		    }],
		    yAxes: [{
		    	ticks:{	                
	                beginAtZero:true
	            },
		        gridLines: {
		          color:'rgba(255,255,255,0.2)'
		        }
		    }]
		}
	};

	public lineChartColors:Array<any> = [
		{ // grey
		  	backgroundColor: 'rgba(148,159,177,0)',
		  	borderColor: 'rgba(148,159,177,1)',
		  	pointBackgroundColor: 'rgba(148,159,177,1)',
		  	pointBorderColor: '#fff',
		  	pointHoverBackgroundColor: '#fff',
		  	pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		}
	];
	public lineChartLegend:boolean = false;
	public lineChartType:string = 'line';

	private timeoutHandle;

	constructor(private navCtrl: NavController, private navParams: NavParams, private dtr: DTRService) {
	  	this.update();  	
	}

	ngOnDestroy(){
		if (this.timeoutHandle) clearTimeout(this.timeoutHandle);
	}

	private getLineChartData(){
		return [{data: this.machine.tempArray, label: 'Temperature'}];
	}

	private update(){
		let __machine = this.dtr.machines.find( (machine) => { return machine.id == this.navParams.data.machineId});
		this.machine = __machine?__machine:{tempArray:[]};
		this.lineChartData = this.getLineChartData();
		this.timeoutHandle = setTimeout(()=>{this.update()},5000);
	}
}