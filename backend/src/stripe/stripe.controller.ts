import { Body, Controller, Get, Param, Post, } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('payments')
export class stripeController {
    constructor(
        private readonly stripeService: StripeService
    ) { }

    @Get()
    getPayments() {
        return this.stripeService;
    }
    @Get('/:paymentId')
    getPaymentById(
        @Param() params: {paymentId: string}
    ){
        console.log(params);
        return "id";
    }
    @Post()
    createPayment(
        @Body() body: {
            paymentID: string,
            product : string,
        }
    ){
        console.log(body);
        return "paymentcreated"
    }
}