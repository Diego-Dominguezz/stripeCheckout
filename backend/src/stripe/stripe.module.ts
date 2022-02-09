import { Module } from '@nestjs/common';
import { stripeController } from "../stripe/stripe.controller";
import { StripeService } from './stripe.service';

@Module({
    controllers: [stripeController],
    providers: [StripeService]
})
export class StripeModule { }
