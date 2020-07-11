//
// Spark chart
//

'use strict';

var SparkChart = (function() {

	// Variables

	var $chart = $('[data-toggle="spark-chart"]');

	// Methods
	function init($this) {

        // Options
		var options = {
			chart: {
                width: '100%',
				sparkline: {
					enabled: true
				}
			},
			series: [],
			labels: [],
			stroke: {
				width: 2,
				curve: "smooth"
			},
			markers: {
				size: 0
			},
            colors: [],
			tooltip: {
				fixed: {
					enabled: false
				},
				x: {
					show: false
				},
				y: {
					title: {
						formatter: function(e) {
							return ""
						}
					}
				},
				marker: {
					show: !1
				}
			}
		}

        // Get data from data attributes
        var dataset = $this.data().dataset,
			labels = $this.data().labels,
            color = $this.data().color,
            height = $this.data().height,
            type = $this.data().type;

        // Inject synamic properties
        options.series = [{
            data: dataset
        }];

		if(labels) {
			options.labels = [labels];	
		}

        options.colors = [
            PurposeStyle.colors.theme[color]
        ];

        options.chart.height = height ? height : 35;

        options.chart.type = type ? type : 'line';

        // Init chart
        var chart = new ApexCharts($this[0], options);

        // Draw chart
		setTimeout(function(){
			chart.render();
		}, 300);

	}

	// Events

	if ($chart.length) {
		$chart.each(function() {
            init($(this));
        });
	}

})();
