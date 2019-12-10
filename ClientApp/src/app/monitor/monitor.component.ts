import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
    selector: 'app-monitor',
    templateUrl: './monitor.component.html',
    styleUrls: ['./monitor.component.css']
})

/** monitor component*/
export class MonitorComponent implements OnInit {
/** monitor ctor */
    // CPU usage chart
    isHome: boolean = false

    public cpuUsageOptions: ChartOptions = {
        responsive: true,
        legend: {
            position: 'top',
        },
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    const label = ctx.chart.data.labels[ctx.dataIndex];
                    return label;
                },
            },
        }
    };
    public cpuUsageLabels: Label[] = ['Cpu', 'Usage'];
    public cpuUsageData: number[] = [300, 500, 100];
    public cpuUsageType: ChartType = 'pie';
    public cpuUsageLegend = true;
    public cpuUsagePlugins = [pluginDataLabels];
    public cpuUsageColors = [
        {
            backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
        },
    ];

    // Memory usage chart
    public memUsageOptions: ChartOptions = {
        responsive: true,
        legend: {
            position: 'top',
        },
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    const label = ctx.chart.data.labels[ctx.dataIndex];
                    return label;
                },
            },
        }
    };
    public memUsageLabels: Label[] = ['Memory', 'Usage'];
    public memUsageData: number[] = [300, 500, 100];
    public memUsageType: ChartType = 'pie';
    public memUsageLegend = true;
    public memUsagePlugins = [pluginDataLabels];
    public memUsageColors = [
        {
            backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
        },
    ];

    ngOnInit() {
    }

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    //changeLabels() {
    //    const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
    //        'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
    //        'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
    //        'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
    //        'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
    //    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    //    this.cpuUsageLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
    //}

    //addSlice() {
    //    this.cpuUsageLabels.push(['Line 1', 'Line 2', 'Line 3']);
    //    this.cpuUsageData.push(400);
    //    this.cpuUsageColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
    //}

    //removeSlice() {
    //    this.cpuUsageLabels.pop();
    //    this.cpuUsageData.pop();
    //    this.cpuUsageColors[0].backgroundColor.pop();
    //}

    changeCpuUsageLegendPosition() {
        this.cpuUsageOptions.legend.position = this.cpuUsageOptions.legend.position === 'left' ? 'top' : 'left';
    }

    changeMemUsageLegendPosition() {
        this.memUsageOptions.legend.position = this.memUsageOptions.legend.position === 'left' ? 'top' : 'left';
    }


    constructor() {

    }
}
