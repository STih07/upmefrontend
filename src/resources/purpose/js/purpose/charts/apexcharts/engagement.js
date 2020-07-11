//
// Engagement chart
//

'use strict';

var EngagementChart = (function() {

	// Variables

	var $chart = $('#apex-engagement');

	// Methods
	function init($this) {

		// Options
		var options = {
			chart: {
				width: '100%',
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				},
				shadow: {
					enabled: false,
				},
			},
			stroke: {
				width: 7,
				curve: 'smooth'
			},
			series: [{
				name: 'Likes',
				data: [4, 3, 10, 9, 29, 19, 22, 9]
			}],
			xaxis: {
				labels: {
                    format: 'MMM',
					style: {
						colors: PurposeStyle.colors.gray[600],
						fontSize: '14px',
						fontFamily: PurposeStyle.fonts.base,
						cssClass: 'apexcharts-xaxis-label',
					},
				},
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: true,
                    borderType: 'solid',
                    color: PurposeStyle.colors.gray[300],
                    height: 6,
                    offsetX: 0,
                    offsetY: 0
                },
				type: 'datetime',
				categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000'],
			},
            yaxis: {
				labels: {
					style: {
						color: PurposeStyle.colors.gray[600],
						fontSize: '12px',
						fontFamily: PurposeStyle.fonts.base,
					},
				},
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: true,
                    borderType: 'solid',
                    color: PurposeStyle.colors.gray[300],
                    height: 6,
                    offsetX: 0,
                    offsetY: 0
                }
			},
			fill: {
				type: 'solid'
			},
			markers: {
				size: 4,
				opacity: 0.7,
				strokeColor: "#fff",
				strokeWidth: 3,
				hover: {
					size: 7,
				}
			},
			grid: {
				borderColor: PurposeStyle.colors.gray[300],
				strokeDashArray: 5,
			},
			dataLabels: {
				enabled: false
			}
		}

		// Get data from data attributes
		var dataset = $this.data().dataset,
			labels = $this.data().labels,
			color = $this.data().color,
			height = $this.data().height,
			type = $this.data().type;

		// Inject synamic properties
        options.colors = [
            PurposeStyle.colors.theme[color]
        ];

        options.markers.colors = [
            PurposeStyle.colors.theme[color]
        ];

		options.chart.height = height ? height : 350;

		options.chart.type = type ? type : 'line';

		// Init chart
		var chart = new ApexCharts($this[0], options);

		// Draw chart
		setTimeout(function() {
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
