import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wish'
})
export class WishPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]) {
    return value 
  }

}
