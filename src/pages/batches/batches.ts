import { Component, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DTRService } from '../../app/dtr.service';



@Component({
	selector: 'page-batches',
    templateUrl: 'batches.html'
})
export class BatchesPage implements OnDestroy{
	public lineChartData: Array<any> = [
		{data: [], label: 'Loading'},
		{data: [], label: 'Water'},
		{data: [], label: 'Steam'},
		{data: [], label: 'Power'}];

	public lineChartLabels: Array<string> = [];	
	public loadingTotal: number =0;
	public waterTotal: number =0;
	public steamTotal: number =0;
	public powerTotal: number =0;

	public batches: Array<any> = [];

	private getLineChartData() {
		let loadingArr = this.batches.map((batch)=>{return batch.Loading?Number(batch.Loading):0});
		let waterArr = this.batches.map((batch)=>{return batch.Water_Vol1_Total?Number(batch.Water_Vol1_Total):0});
		let steamArr = this.batches.map((batch)=>{return batch.Steam_Vol_Total?Number(batch.Steam_Vol_Total):0});
		let powerArr = this.batches.map((batch)=>{return batch.Power_Total?Number(batch.Power_Total):0});
		return [
			{data: loadingArr, label: 'Loading'},
			{data: waterArr, label: 'Water'},
			{data: steamArr, label: 'Steam'},
			{data: powerArr, label: 'Power'}
		];
	} 

	private getLineChartLabels(){
		return this.batches.map((batch)=>{return batch.MachineNumber + '_' + batch.BatchName});
	} 

	private update(){
		this.batches = this.getBatches();
		this.loadingTotal = this.getLoadingTotal();
		this.waterTotal = this.getWaterTotal();
		this.steamTotal = this.getSteamTotal();
		this.powerTotal = this.getPowerTotal();
		this.lineChartData = this.getLineChartData();

		//trick to update labels:https://github.com/valor-software/ng2-charts/issues/650
		let __lineChartLabels = this.getLineChartLabels();
		if (__lineChartLabels.toString() != this.lineChartLabels.toString()){
			setTimeout(()=>{this.lineChartLabels = __lineChartLabels},0);
		}
		
		this.timeoutHandle = setTimeout(()=>{this.update()},5000);
	}

	private getBatches(){
		if (this.state == "completed"){
			return this.dtr.batches.filter(batch => {return batch.completed == 1});
		} else {
			return this.dtr.batches.filter(batch => {return batch.completed == 0});
		}		
	}

	private getLoadingTotal(){
	    return this.batches.reduce((sum,batch)=>{return sum + Number(batch.Loading?batch.Loading:0) },0);
	}

	private getWaterTotal(){
	    return this.batches.reduce((sum,batch)=>{return sum + Number(batch.Water_Vol1_Total?batch.Water_Vol1_Total:0) },0);
	}

	private getSteamTotal(){
	    return this.batches.reduce((sum,batch)=>{return sum + Number(batch.Steam_Vol_Total?batch.Steam_Vol_Total:0) },0);
	}

	private getPowerTotal(){
	    return this.batches.reduce((sum,batch)=>{return sum + Number(batch.Power_Total?batch.Power_Total:0) },0);
	}

	public lineChartOptions:any = {
		responsive: true,
		scales: {
		    // xAxes: [{
		    //     gridLines: {		          
		    //       color:'rgba(0,0,0,0.2)'
		    //     } 
		    // }],
		    yAxes: [{		    	
		        // gridLines: {
		        //   color:'rgba(0,0,0,0.2)'
		        // },
		        ticks:{	                
	                beginAtZero:true
	            }
		    }]
		}
	};

	public lineChartColors:Array<any> = [
		{ // LightGreen 
		  backgroundColor: '#90EE90',
		  borderColor: '#90EE90'
		},
		{ // LightPink
		  backgroundColor: '#FFB6C1',
		  borderColor: '#FFB6C1'
		},
		{ // LightSalmon
		  backgroundColor: '#FFA07A',
		  borderColor: '#FFA07A'
		},
		{ // LightSeaGreen  
		  backgroundColor: '#20B2AA',
		  borderColor: '#20B2AA'
		}
	];
	public lineChartLegend:boolean = true;
	public lineChartType:string = 'horizontalBar';

	private timeoutHandle;
	private state:string;

	constructor(public navCtrl: NavController, private dtr: DTRService, private navParams: NavParams) {
		this.state = navParams.data.state;		
		this.update();
	}

	ngOnDestroy(){
		if (this.timeoutHandle) clearTimeout(this.timeoutHandle);
	}
}