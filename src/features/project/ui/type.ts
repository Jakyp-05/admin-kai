export interface StatusCellProps {
    status?: string;
  }
  
  
 export const data = [
  { name: 'Computer store', direction: 'ТекстТекст  Текст ТекстТекст ТекстТекст Текст Текст  Текст Текст ТекстТекст', start: '11.04.2024', end: '11.12.2024' },
  { name: 'Computer store', direction: 'ТекстТекст  Текст ТекстТекст ТекстТекст Текст Текст  Текст Текст ТекстТекст', start: '11.04.2024', end: '11.12.2024' },
  { name: 'Computer store', direction: 'ТекстТекст  Текст ТекстТекст ТекстТекст Текст Текст  Текст Текст ТекстТекст', start: '11.04.2024', end: '11.12.2024' },
  { name: 'Computer store', direction: 'ТекстТекст  Текст ТекстТекст ТекстТекст Текст Текст  Текст Текст ТекстТекст', start: '11.04.2024', end: '11.12.2024' },

  ];
  

  export interface ServiceReq {
    title: string;
    description: string;
    price: number;
}

export interface ServiceRes {
    id: number;
    title: string;
    description: string;
    price: number;
}

export interface ApiError {
    [key: string]: any;
}