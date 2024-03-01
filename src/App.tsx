import style from './app.module.css';
import { useEffect, useState } from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { ChooseCurrencyButtons } from './components/Buttons/chooseCurrencyButtons';
import { ReactECharts } from './Echarts/ReactECharts';
import { mockData } from './data/data';
import { chartPropsCoocking } from './utils/function/chartPropsCoocking';
import { averagePrice } from './utils/function/averagePrice';
import { ChartDataItem, ChartProps } from './utils/types/utilsInterfaces';
import { useGetData } from './hooks/useGetData';

function App() {
  // Стейт который харнит в себе сортированную по валюте Data, по умолчанию доллары
  const [sortedCurrencyData, setSortedCurrencyData] = useState<ChartDataItem[]>(
    mockData.filter(
      (el: ChartDataItem) => el.indicator.toLowerCase() === 'курс доллара'
    )
  );

  // Не успеваю прокинуть currencyData
  // const { currencyData, isLoading } = useGetData();

  // Стейт для хранения Options для eCharts
  const [chartOption, setChartOption] = useState<ChartProps>();

  // Обработка изменения options
  useEffect(() => {
    const option = chartPropsCoocking(sortedCurrencyData);
    setChartOption(option);
  }, [sortedCurrencyData]);

  return (
    <main className={style.window}>
      <section className={style.headerOfGraphic}>
        {/* Формирование заголовка */}
        <h1>
          {`${!!chartOption && chartOption.indicator.toUpperCase()}, ${
            !!chartOption && chartOption.currencyMark
          }`}
        </h1>
        {/* Компонент выбора валюты */}
        <Theme preset={presetGpnDefault}>
          <ChooseCurrencyButtons
            setSortedCurrencyData={setSortedCurrencyData}
          />
        </Theme>
      </section>
      <div className={style.representation}>
        <div>
          {/* Компонент графика в который передаем options и размеры */}
          {!!chartOption && (
            <ReactECharts
              style={{ height: '360px', width: '1000px' }}
              option={chartOption.option}
            />
          )}
        </div>
        <section className={style.average}>
          <h2>Среднее за период</h2>
          <p>
            {/* Рассчет средней цены для валюты */}
            {averagePrice(sortedCurrencyData)}{' '}
            <span className={style.currency}>₽</span>
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
