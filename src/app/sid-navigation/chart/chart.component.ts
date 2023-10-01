import { Component, OnInit } from '@angular/core';
import Chart, { ArcElement, ChartItem } from 'chart.js/auto';
import { timer } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  // public chart: any;
  
  //selectedIndex = null;
  ngOnInit(): void {
    const ctx = document.getElementById("MyChart") as ChartItem;
    let selectedIndex: number = -1;

    const chart = new Chart(ctx, {
      type: 'doughnut', //this denotes tha type of chart
      data: {// values on X-Axis
      labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
	    datasets: [{
        label: 'My First Dataset',
        data: [300, 240, 100, 432, 253, 34],
        backgroundColor: [
          'red',
          'pink',
          'green',
          'yellow',
          'orange',
          'blue',			
        ],
        hoverOffset: 4
      }],
      },
      options: {
        onHover: function(evt, elements){
          if(elements && elements.length){
            console.log('El', elements[0].index);
            var segment = elements[0];
            console.log('Seg', segment.index);
            //console.log('A', a.outerRadius);
            chart.update();
            if (selectedIndex !== segment.index) {
                selectedIndex = segment.index;
                (segment.element as ArcElement).outerRadius += 20;
                //console.log('After', segment.element);
                chart.update();
            }
            else{
              selectedIndex = 0;     
            }
          }
        },
        layout: {
          padding: 30
        }
      }

    });
  }
}
