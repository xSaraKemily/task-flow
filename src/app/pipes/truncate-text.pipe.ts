import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncateTextPipe implements PipeTransform {

  public transform(text: string, limit: number): unknown {
    return text?.length > limit ? text.substring(0, limit) + '...' : text;
  }

}
