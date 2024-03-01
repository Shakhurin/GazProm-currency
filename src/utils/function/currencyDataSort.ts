import { ChartDataItem } from '../types/utilsInterfaces';

// Создаю отдельную функцию сортировки данных
export const currencyDataSort = (
  data: ChartDataItem[],
  currency: string,
  setSortedCurrencyData: (data: ChartDataItem[]) => void
) => {
  if (currency === '$') {
    setSortedCurrencyData(
      data.filter(
        (el: ChartDataItem) => el.indicator.toLowerCase() === 'курс доллара'
      )
    );
  } else if (currency === '€') {
    setSortedCurrencyData(
      data.filter(
        (el: ChartDataItem) => el.indicator.toLowerCase() === 'курс евро'
      )
    );
  } else {
    setSortedCurrencyData(
      data.filter(
        (el: ChartDataItem) => el.indicator.toLowerCase() === 'курс юаня'
      )
    );
  }
};
