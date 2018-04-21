import { Pipe, PipeTransform } from '@angular/core';
import { defaultUrlMatcher } from '@angular/router/src/shared';

@Pipe({
  name: 'userType'
})
export class UserTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 'internal':
        return "Internal";
      case 'external':
        return "External";
      case 'student':
        return "Student";
      case 'other':
        return "Other";
      default:
        return value;
    }
  }

}
