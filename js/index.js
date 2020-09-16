// 合约交易量柱形图
(function () {
  var myChart = echarts.init(document.querySelector('.bar .chart'))
  var option = {
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter: '{c}',
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: [5, 20]
    },
    color: ['#00d0f2'],
    grid: {
      left: '0%',
      bottom: '0%',
      top: 30,
      right: '0%',
      containLabel: true
    },
    legend: {
      right: '0%',
      textStyle: {
        color: '#c5ccff',
        fontSize: 10
      },
      icon: 'rect'
    },
    xAxis: {
      data: ['合约1', '合约2', '合约3', '合约4', '合约5', '合约6', '合约7', '合约8', '合约9'],
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        lineStyle: {
          color: 'rgb(4, 67, 136)'
        }
      },
      axisLabel: {
        color: '#c5ccff',
        fontSize: 10
      }
    },
    yAxis: {
      type: 'value',
      name: '单位（个）',
      minInterval: 80,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      nameTextStyle: {
        color: '#c5ccff',
        fontSize: 10,
        padding: [0, 0, 0, 40]
      },
      axisLabel: {
        color: '#c5ccff',
        fontSize: 10
      },
      splitLine: {
        lineStyle: {
          color: ['rgba(2, 58, 121, 1)']
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(4, 42, 105,.0)', 'rgba(4, 42, 105,.4)']
        }
      },
    },
    series: [{
      name: '交易量',
      type: 'bar',
      data: [260, 290, 240, 290, 200, 180, 220, 210, 150],
      barWidth: '20%'
    }]
  }
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();

// 实时链上交易数据折线图
(function () {
  var myChart = echarts.init(document.querySelector('.line .chart'))
  var option = {
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter: `
        <div style="text-align: center; font-size: 0.2125rem; color: #00e4ff;margin-bottom: 0.0625rem">
        {c}
        </div>
        <div style="text-align: center;font-size: 0.1375rem">
        17:53:15
        </div>
      `,
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: [5, 20]
    },
    grid: {
      left: '0%',
      bottom: '0%',
      top: 30,
      right: '0%',
      containLabel: true
    },
    legend: {
      show: true,
      right: '0%',
      icon : 'image://images/line.png',
      textStyle: {
        color: '#c5ccff',
        fontSize: 10
      }
    },
    xAxis: {
      data: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"],
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        lineStyle: {
          color: 'rgb(4, 67, 136)'
        }
      },
      axisLabel: {
        color: '#c5ccff',
        fontSize: 10
      }
    },
    yAxis: {
      type: 'value',
      name: '单位（个）',
      minInterval: 0.4,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      nameTextStyle: {
        color: '#c5ccff',
        fontSize: 10,
        padding: [0, 0, 0, 40]
      },
      axisLabel: {
        color: '#c5ccff',
        fontSize: 10
      },
      splitLine: {
        lineStyle: {
          color: ['rgba(2, 58, 121, 1)']
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(4, 42, 105,.0)', 'rgba(4, 42, 105,.4)']
        }
      },
    },
    series: [{
      name: '交易量',
      type: 'line',
      data: ["0.18", "0.86", "0.63", "0.69", "0.28", "0.56", "0.52", "0.24", "0.03", "1.40", "1.14", "1.11", "0.34", "0.26", "0.82", "1.38", "1.22", "1.23", "0.76", "0.83", "0.89", "1.23", "1.21"],
      smooth: true,
      symbol: 'none',
      lineStyle: {
        color: 'rgba(126, 136, 63, 1)'
      },
      itemStyle: {
        color: 'rgba(126, 136, 63, 1)'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(126, 136, 63, 1)' // 0% 处的颜色
          }, {
            offset: 0.5, color: 'rgba(126, 136, 63, .5)' // 50% 处的颜色
          }, {
            offset: 1, color: 'transparent' // 100% 处的颜色
          }]
        }
      }
    }]
  }
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();