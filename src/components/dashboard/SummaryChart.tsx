import ReactECharts from "echarts-for-react";

function SummaryChart() {
  // const option = {
  //   xAxis: {
  //     type: "category",
  //     data: ["NOV", "DEC", "JAN", "FEB", "MAR", "APR"],
  //     tooltip: {
  //       trigger: "axis",
  //       axisPointer: {
  //         type: "shadow",
  //       },
  //     },
  //   },
  //   yAxis: {
  //     type: "value",
  //   },
  //   series: [
  //     {
  //       data: [30000, 30000, 20000, 20000, 25000, 35000, 45000],
  //       type: "line",
  //       symbol: "",
  //       symbolSize: 16,
  //       lineStyle: {
  //         color: "#277200",
  //         width: 3,
  //       },
  //       itemStyle: {
  //         borderWidth: 3,
  //         borderColor: "#277200",
  //         color: "white",
  //       },
  //     },
  //   ],
  // };
  const option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "30%"],
    },
    visualMap: {
      type: "piecewise",
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
        {
          gt: 1,
          lt: 2,
          color: "#277200",
        },
      ],
    },
    series: [
      {
        type: "line",
        smooth: 0.3,
        symbol: "",
        symbolSize: 16,
        lineStyle: {
          color: "#277200",
          width: 3,
        },
        itemStyle: {
          borderWidth: 5,
          borderColor: "#277200",
          color: "white",
        },
        areaStyle: {},
        data: [
          ["NOV", 30000],
          ["DEC", 30000],
          ["JAN", 20000],
          ["FEB", 20000],
          ["MAR", 25000],
          ["APR", 35000],
        ],
      },
    ],
  };
  return <ReactECharts option={option}  />;
}

export default SummaryChart;
