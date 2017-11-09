import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
	selector: 'page-batches',
    templateUrl: 'batches.html'
})
export class BatchesPage {

	doRefresh(refresher) {
	    console.log('Begin async operation', refresher);

	    setTimeout(() => {
	      console.log('Async operation has ended');
	      refresher.complete();
	    }, 2000);
	}  
	
	  public lineChartData:Array<any> = [
	    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Loading'},
	    {data: [45, 59, 67, 81, 43, 55, 33], label: 'Water'},
	    {data: [77, 99, 12, 45, 78, 23, 56], label: 'Steam'},
	    {data: [56, 67, 34, 66, 44, 44, 77], label: 'Power'}
	  ];

	  public lineChartLabels:Array<any> = ['BH1101(1)', 'BH1102(3)', 'BH1103(8)', 'BH1104(10)', 'BH1105(11)', 'BH1106(12)', 'BH1107(7)'];

	  public lineChartOptions:any = {
	    responsive: true
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
 
	constructor(public navCtrl: NavController) {}
}