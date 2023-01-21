const labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
const borderColor = KTUtil.getCssVariableValue('--kt-gray-200');
const baseColor = KTUtil.getCssVariableValue('--kt-info');
const lightColor = KTUtil.getCssVariableValue('--kt-info-light');

export const chartOptions = ({ data, categories }) => ({
  series: [
    {
      name: 'Leitura',
      data: data,
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
    categories: categories,
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
    min: 0,
    max: 14
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
        return val + ' pH';
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
});
