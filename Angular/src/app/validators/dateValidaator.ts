import { FormControl } from '@angular/forms';
import * as moment from 'moment';

export class DateValidator {

    static localeDate(control: FormControl): { [key: string]: any } {
        
        if (!moment(control.value, true).isValid())
            return { "ptDate": true };
 
        return null;
    }

   static ptDate(control: FormControl): { [key: string]: any } {
        
       if (!moment(control.value, 'YYYY-DD-MM', true).isValid())
           return { "ptDate": true };

       return null;
   }

   static usDate(control: FormControl): { [key: string]: any } {
        moment.locale('de');
       if (!moment(control.value, 'YYYY-DD-MM', true).isValid()!)
           return { "usDate": true };

       return null;
   }
}