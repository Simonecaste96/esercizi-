import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePersonal'
})
export class PipePersonalPipe implements PipeTransform {

  transform(value: string[]): string[] {
    return value.map(e=>e.toUpperCase());
  }

}
