import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date | string | number): string {
    if (!value) return '';

    const date = new Date(value); // تحويل القيمة إلى كائن Date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // إضافة صفر إلى الشهر إذا كان أقل من 10
    const day = String(date.getDate()).padStart(2, '0'); // إضافة صفر إلى اليوم إذا كان أقل من 10

    return `${year}-${month}-${day}`;
  }
}
