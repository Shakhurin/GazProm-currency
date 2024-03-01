import { ChartDataItem } from './../types/utilsInterfaces';

// Создаю отдельную функцию для рассчета среднего значения в которую
// передаю сортированный массив для конкретной валюты
export const averagePrice = (sortedData: ChartDataItem[]) => {
  // Создаю переменную sum в которую, проходясь по массиву данных
  // с помощью reduce, помещаю сумму стоимости валюты за все года
  const sum = sortedData.reduce(
    (acc: number, cur: ChartDataItem) => acc + cur.value,
    0
  );
  // Вычисляю среднее округляя до десятых
  const fixedAverage = (sum / sortedData.length).toFixed(1);
  // Так как не было понятно стоит ли убирать десятую долю при 0
  // было решено сохранить без изменений
  // Согласно макету меняем . на , для презентации средних данных
  const stringAverage = String(fixedAverage).replace('.', ',');

  return stringAverage;
};
