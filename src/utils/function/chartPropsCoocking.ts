import { ChartDataItem, ChartProps } from '../types/utilsInterfaces';

// Создаю функцию для определения options для eCharts. Передаю массив сортированных данных
export const chartPropsCoocking = (sortedData: ChartDataItem[]): ChartProps => {
  // Создаю dataX в которую помещаю массив строк с обозначением времени, в которое оценивают
  // стоимость валюты
  const dataX = sortedData.map((item: ChartDataItem) => item.month);
  // Переменная dataY со стоимостью валюты
  const dataY = sortedData.map((item: ChartDataItem) => item.value);
  // indicator содержит знак валюты
  const indicator = sortedData[0].indicator;
  // currencyMark для форматирования заголовка
  const currencyMark =
    indicator.toLowerCase() === 'курс доллара'
      ? '$/₽'
      : indicator.toLowerCase() === 'курс евро'
      ? '€/₽'
      : '¥/₽';

  const option = {
    xAxis: {
      // передаем данные на ось X
      data: dataX,
      // сдвигаем дату на засечки
      boundaryGap: false,
    },
    yAxis: {},
    // Создаем тултип и триггерим его на весь график, а не точечно
    tooltip: {
      trigger: 'axis',
    },
    // Настраиваем отображение графика и передаем данные по оси Y
    series: [
      {
        name: indicator,
        type: 'line',
        showSymbol: false,
        data: dataY,
        itemStyle: {
          color: '#f38b00',
        },
      },
    ],
  };

  return { option, indicator, currencyMark };
};
