$(window).on("load", function(){
//   console.log(census_data);
    var chart;
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart2',
                type: 'bar'
            },
            title: {
              text:"Top 3 Pages",
            subtitle: "By Conversion"
            },
            xAxis: {
                categories: ['Page 1', 'Page 2','Page 3'],
                title: null
            },
            // http://stackoverflow.com/a/10878725/257568
            yAxis: {title: null, labels: {enabled: false}, showEmpty: false},
            tooltip: {
                formatter: function() {
                    return 'Page conversion rate for ' + this.series.name + ' ' + this.y + '%';
                }
            },
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            legend: {enabled: false},
            credits: {enabled: false},
            series: [
              {name: 'page1', data: [19]},
              {name: 'page2', data: [11]},
              {name: 'page3', data: [11]}
            ],
            colors: ['green', 'blue', 'red']
        });
     //line chart
  chart = new Highcharts.Chart({
  chart: {
    renderTo: 'chart1',
    marginBottom: 80
  },
     title: {
      text: "% Bounce Rate By Week"
    },
  xAxis: {
    categories: ["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10","W11","W12","W13","W14","W15","W16","W17","W17","W18","W19","W20","W21","W22","W23","W24","W25","W26","W27","W28","W29","W30","W31","W32","W33","W34","W35","W36","W37","W38","W39","W40","W41","W42","W43","W44","W45","W46","W47","W48","W49","W50","W51","W52"],
    labels: {
      // rotation: 90
    }
  },

  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0]        
  }]
});
   chart = new Highcharts.Chart({
            chart: {
              renderTo: 'chart3',
                type: 'pie'
            },
            colors: [
               '#ED5565',
               '#5D9CEC', 
               '#A0D468', 
               '#FFCE54',  
               '#48CFAD', 
               '#AC92EC',
               '#AAB2BD', 
               '#D770AD', 
               '#c42525', 
               '#a6c96a'
            ],
            title: {
                text: 'Most Accessed Pages',
                style: {
                  color: '#555'
                }
            },
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
                borderWidth: 0,
                backgroundColor: '#FFFFFF'
            },
          
            tooltip: {
                shared: false,
                valueSuffix: 'points'
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.1
                },
            series: {
                groupPadding: .15
            }
            },
            series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Home',   20.0],
                ['Product A',       16.8],
                ['Product B',       10.8],
                ['Contact',    8.5],
                ['Checkout',     6.2],
                ['About',   5]
            ]
            }]
        });
    });