import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { useState } from 'react';
import { mockData } from '../../data/data';
import { currencyDataSort } from '../../utils/function/currencyDataSort';
import { ButtonValue } from '../../utils/types/utilsInterfaces';

type Item = string;

const items: Item[] = ['$', '€', '¥'];

// Создаю отдельный компонент из UI библиотеки для отрисовки кнопок выбора валюты
// принимаю в него сортированную по валюте Data
export const ChooseCurrencyButtons = ({ setSortedCurrencyData }) => {
  // Создаю State для отслеживания и отрисовки выбранной валюты
  // по умолчанию - доллар
  const [currency, setCurrency] = useState<Item>(items[0]);

  return (
    <ChoiceGroup
      value={currency}
      onChange={(value: ButtonValue) => {
        // При изменении валюты меняем значение
        setCurrency(value.value);
        // Передаем в функцию сортировки: данные, валюту и функцию установки
        // сортированных данных
        currencyDataSort(mockData, value.value, setSortedCurrencyData);
      }}
      items={items}
      getItemLabel={(item) => item}
      name="ChooseCurrencyButtons"
      // Устанавливаю стили для кнопок
      view="primary"
      multiple={false}
      size="xs"
    />
  );
};
