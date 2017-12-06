import { Component, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DTRService } from '../../app/dtr.service';
import { TranslateService } from '@ngx-translate/core';
import { Batch } from '../../app/shared/sdk/models';


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

	public texts: any = {};

	private getLineChartData() {
		let loadingArr = this.batches.map((batch)=>{return batch.Loading?Number(batch.Loading):0});
		let waterArr = this.batches.map((batch)=>{return batch.Water_Vol1_Total?Number(batch.Water_Vol1_Total):0});
		let steamArr = this.batches.map((batch)=>{return batch.Steam_Vol_Total?Number(batch.Steam_Vol_Total):0});
		let powerArr = this.batches.map((batch)=>{return batch.Power_Total?Number(batch.Power_Total):0});
		return [
			{data: loadingArr, label: this.texts.Loading + '(' + this.texts.kg + ')'},
			{data: waterArr, label: this.texts.Water + '(' + this.texts.ton + ')'},
			{data: steamArr, label: this.texts.Steam + '(' + this.texts.ton + ')'},
			{data: powerArr, label: this.texts.Power + '(' + this.texts.kwh + ')'}
		];
	} 

	private getLineChartLabels(){
		return this.batches.map((batch)=>{return batch.MachineNumber + '_' + batch.BatchName});
	} 

	private update(){
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
	}

	private filterBatches(oldBatches:Batch[]){
		if (this.state == "completed"){
			return oldBatches.filter(batch => {return batch.completed == 1});
		} else {
			return oldBatches.filter(batch => {return batch.completed == 0});
		}		
	}

	private getLoadingTotal(){
	    return this.batches.reduce((sum,batch)=>{return sum + Number(batch.Loading?batch.Loading:0) },0).toFixed(1);
	}

	private getWaterTotal(){
	    return this.batches.reduce((sum,batch)=>{return sum + Number(batch.Water_Vol1_Total?batch.Water_Vol1_Total:0) },0).toFixed(1);
	}

	private getSteamTotal(){
	    return this.batches.reduce((sum,batch)=>{return sum + Number(batch.Steam_Vol_Total?batch.Steam_Vol_Total:0) },0).toFixed(1);
	}

	private getPowerTotal(){
	    return this.batches.reduce((sum,batch)=>{return sum + Number(batch.Power_Total?batch.Power_Total:0) },0).toFixed(1);
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

	private subscription;
	private state:string;
	private batchesSubscription;

	constructor(public navCtrl: NavController, private dtr: DTRService, private navParams: NavParams, private translate: TranslateService) {
		this.state = navParams.data.state;	
		this.batchesSubscription = dtr.batchesObservable.subscribe(batches => {
			this.batches = this.filterBatches(batches);
			this.update();
		});	
		this.subscription = this.translate.stream(['Loading', 'Water', 'Steam', 'Power', 'kg', 'ton', 'kwh'])
		    .subscribe(texts => {
		    	this.texts = texts;
		    });

		this.update();
	}

	ngOnDestroy(){
		this.batchesSubscription.unsubscribe();
		this.subscription.unsubscribe();
	}
}