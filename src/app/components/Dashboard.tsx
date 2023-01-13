import { Component, createEffect } from 'solid-js';

const Dashboard: Component = () => {
  const initChartsWidget3 = () => {
    var element = document.getElementById('kt_charts_widget_3_chart');

    if (!element) {
      return;
    }

    var chart = {
      self: null,
      rendered: false,
    };

    var initChart = function () {
      var height = parseInt(KTUtil.css(element, 'height'));
      var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
      var borderColor = KTUtil.getCssVariableValue('--kt-gray-200');
      var baseColor = KTUtil.getCssVariableValue('--kt-info');
      var lightColor = KTUtil.getCssVariableValue('--kt-info-light');

      var options = {
        series: [
          {
            name: 'Net Profit',
            data: [30, 40, 40, 90, 90, 70, 70],
          },
        ],
        chart: {
          fontFamily: 'inherit',
          type: 'area',
          height: 450,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {},
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'solid',
          opacity: 1,
        },
        stroke: {
          curve: 'smooth',
          show: true,
          width: 3,
          colors: [baseColor],
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            style: {
              colors: labelColor,
              fontSize: '12px',
            },
          },
          crosshairs: {
            position: 'front',
            stroke: {
              color: baseColor,
              width: 1,
              dashArray: 3,
            },
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: '12px',
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: labelColor,
              fontSize: '12px',
            },
          },
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0,
            },
          },
          hover: {
            filter: {
              type: 'none',
              value: 0,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0,
            },
          },
        },
        tooltip: {
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: function (val) {
              return '$' + val + ' thousands';
            },
          },
        },
        colors: [lightColor],
        grid: {
          borderColor: borderColor,
          strokeDashArray: 4,
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        markers: {
          strokeColor: baseColor,
          strokeWidth: 3,
        },
      };

      chart.self = new ApexCharts(element, options);
      chart.self.render();
      chart.rendered = true;
    };

    // Init chart
    initChart();
  };

  createEffect(() => initChartsWidget3());

  // prettier-ignore
  return (
    <div id="kt_app_content_container">
      <div class="row">
        <div class="col-12">
          <div class="card card-xl-stretch">
            <div class="card-header border-0 pt-5">
              <h3 class="card-title align-items-start flex-column">
                <span class="card-label fw-bold fs-3 mb-1">Últimas leituras</span>
                <span class="text-muted fw-semibold fs-7">Mais de 1000 novos registros</span>
              </h3>
              <div class="card-toolbar" data-kt-buttons="true">
                <a class="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1" id="kt_charts_widget_3_year_btn">Hoje</a>
                <a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1" id="kt_charts_widget_3_month_btn">Semana</a>
                <a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4" id="kt_charts_widget_3_week_btn">Mês</a>
              </div>
            </div>
            <div class="card-body">
              <div id="kt_charts_widget_3_chart"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
