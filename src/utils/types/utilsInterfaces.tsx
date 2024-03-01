export interface ChartDataItem {
  date: string;
  month: string;
  indicator: string;
  value: number;
}

export interface ChartProps {
  option: object;
  indicator: string;
  currencyMark: string;
}

export interface ButtonValue {
  value: string;
}
