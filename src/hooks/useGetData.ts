import { useEffect, useState } from 'react';
import { GETDATA } from '../utils/const';
import { ChartDataItem } from '../utils/types/utilsInterfaces';

// Создал хук для запроса на сервер
export const useGetData = () => {
  // Стейты для отслеживания данных и индикации загрузки данных
  const [currencyData, setCurrencyData] = useState<ChartDataItem[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Через try catch ловлю ошибку и вывожу в консоль
    try {
      setIsLoading(true);
      fetch(GETDATA)
        .then((res) => res.json())
        .then((data) => {
          setCurrencyData(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { currencyData, isLoading };
};
