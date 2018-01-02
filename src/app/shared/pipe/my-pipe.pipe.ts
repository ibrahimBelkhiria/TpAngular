import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, args: string): any {

    const a = /_/gi;
         value = value.replace(a, args);

      return value;
  }

}
