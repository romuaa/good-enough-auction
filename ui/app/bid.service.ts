import { Injectable } from '@angular/core';

import { Bid } from './bid';

@Injectable()
export class BidService {
	getTopBids(): Bid[] {
		return [
			{
				id: 1,
				amount: 12,
				email: "foobar"
			},
			{
				id: 2,
				amount: 120,
				email: "foobar"
			}
		]
	}
}
