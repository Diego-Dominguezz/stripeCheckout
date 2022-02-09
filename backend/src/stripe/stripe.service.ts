import { Injectable } from '@nestjs/common';
import { students } from 'src/db';

@Injectable()
export class StripeService {
    private students = students;
    getPayments(){
        return this.students
    }
}
