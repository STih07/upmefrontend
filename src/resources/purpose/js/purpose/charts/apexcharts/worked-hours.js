//
// Worked hours chart
//

'use strict';

var WorkedHoursChart = (function() {

	// Variables

	var $chart = $('#apex-worked-hours');

	// Methods
	function init($this) {

		// Options
		var options = {
			chart: {
				width: '100%',
				type: 'bar',
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
			plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '30%',
                    endingShape: 'rounded'
                },
            },
			stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
			series: [{
				name: 'Worked hours',
				data: [40, 30, 100, 90, 20]
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
				categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000'],
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
