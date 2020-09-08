(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var data = [
    { name: "山东", value: 59 },
    { name: "河北", value: 6, level: 2 },
    { name: "吉林", value: 54 },
    { name: "黑龙江", value: 44 },
    { name: "辽宁", value: 59, mark: 34 },
    { name: "内蒙古", value: 87, level: 1, mark: 2 },
    { name: "新疆", value: 69, level: 1, mark: 2 },
    { name: "甘肃", value: 93 },
    { name: "宁夏", value: 32 },
    { name: "山西", value: 46 },
    { name: "陕西", value: 95 },
    { name: "河南", value: 26 },
    { name: "安徽", value: 38 },
    { name: "江苏", value: 75, level: 2 },
    { name: "浙江", value: 76 },
    { name: "福建", value: 68 },
    { name: "广东", value: 67 },
    { name: "江西", value: 73, level: 2 },
    { name: "海南", value: 88 },
    { name: "广西", value: 62 },
    { name: "贵州", value: 20 },
    { name: "湖南", value: 53, level: 2 },
    { name: "湖北", value: 25 },
    { name: "四川", value: 85, level: 1 },
    { name: "云南", value: 34 },
    { name: "西藏", value: 63, level: 1, mark: 10 },
    { name: "青海", value: 92, level: 1, mark: 20 },
    { name: "天津", value: 2 },
    { name: "上海", value: 91, level: 2 },
    { name: "重庆", value: 88 },
    { name: "北京", value: 91, level: 2 },
    { name: "台湾", value: 68 },
    { name: "香港", value: 91 },
    { name: "澳门", value: 9 },
  ];
  var geoCoordMap = {
    山东: [117.000923, 36.675807],
    河北: [115.48333, 38.03333],
    吉林: [125.35, 43.88333],
    黑龙江: [127.63333, 47.75],
    辽宁: [123.38333, 41.8],
    内蒙古: [111.670801, 41.818311],
    新疆: [87.68333, 43.76667],
    甘肃: [103.73333, 36.03333],
    宁夏: [106.26667, 37.46667],
    山西: [112.53333, 37.86667],
    陕西: [108.95, 34.26667],
    河南: [113.65, 34.76667],
    安徽: [117.283042, 31.86119],
    江苏: [119.78333, 32.05],
    浙江: [120.2, 30.26667],
    福建: [118.3, 26.08333],
    广东: [113.23333, 23.16667],
    江西: [115.9, 28.68333],
    海南: [110.35, 20.01667],
    广西: [108.320004, 22.82402],
    贵州: [106.71667, 26.56667],
    湖南: [113.0, 28.21667],
    湖北: [114.298572, 30.584355],
    四川: [104.06667, 30.66667],
    云南: [102.73333, 25.05],
    西藏: [91.0, 30.6],
    青海: [96.75, 36.56667],
    天津: [117.2, 39.13333],
    上海: [121.55333, 31.2],
    重庆: [106.45, 29.56667],
    北京: [116.41667, 39.91667],
    台湾: [121.3, 25.03],
    香港: [114.1, 22.2],
    澳门: [113.5, 22.2],
  };

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        const obj = {
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        };
        if (data[i].level) {
          obj.value = obj.value.concat(data[i].level);
        }
        if (data[i].mark) {
          obj.value = obj.value.concat(data[i].mark);
        }
        res.push(obj);
      }
    }
    console.log("完成", res);
    return res;
  };

  myChart.setOption(
    (option = {
      tooltip: {
        show: false,
      },
      geo: {
        map: "china",
        show: true,
        roam: false,
        zoom: 1.2,
        label: {
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            areaColor: "#041a50",
            borderColor: "#1773c3",
            shadowColor: "#1773c3",
            shadowBlur: 20,
          },
        },
      },
      series: [
        {
          type: "map",
          map: "china",
          geoIndex: 1,
          aspectScale: 0.75, //长宽比
          showLegendSymbol: true, // 存在legend时显示
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
              textStyle: {
                color: "#fff",
              },
            },
          },
          roam: false,
          zoom: 1.2,
          itemStyle: {
            normal: {
              areaColor: "#041a50",
              borderColor: "#016dbf",
              borderWidth: 1,
            },
            emphasis: {
              areaColor: "#0f2c70",
            },
          },
          data: [{ name: "北京", value: 21300 }],
        },
        {
          name: "三级",
          type: "scatter",
          coordinateSystem: "geo",
          data: convertData(data.filter((v) => v.level !== 2 && v.level !== 1)),
          symbolSize: 3,
          label: {
            normal: {
              formatter: "{b}",
              position: "left",
              show: true,
              fontSize: 10,
              color: "#fff",
            },
            emphasis: {
              show: true,
            },
          },
          itemStyle: {
            normal: {
              color: "#00d0f2",
            },
          },
        },
        {
          name: "一级或二级",
          type: "effectScatter",
          coordinateSystem: "geo",
          data: convertData(data.filter((v) => v.level === 2 || v.level === 1)),
          markPoint: {
            //数据全是markPoint
            symbolSize: 20, // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            itemStyle: {
              normal: {
                borderColor: "#87cefa",
                borderWidth: 1, // 标注边线线宽，单位px，默认为1
                label: {
                  show: false,
                },
              },
              emphasis: {
                borderColor: "#1e90ff",
                borderWidth: 5,
                label: {
                  show: false,
                },
              },
            },
            effect: {
              show: true,
              shadowBlur: 0,
            },
            data: []
          },
          symbolSize: function (val) {
            return val[3] === 2 ? 5 : 8;
          },
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke",
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: "{b}",
              position: "left",
              show: true,
              fontSize: 10,
              color: "#fff",
            },
          },
          itemStyle: {
            normal: {
              color: "#00d0f2",
              shadowBlur: 10,
              shadowColor: "#333",
            },
          },
          zlevel: 1,
        }
      ],
    })
  );
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
