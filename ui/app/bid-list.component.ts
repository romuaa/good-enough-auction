import { Component }   from '@angular/core';
import { Bid }        from './bid';
import { BidService } from './bid.service';
@Component({
  selector: 'bid-list',
  template: `
  <div *ngFor="let bid of bids">
    {{bid.id}} - {{bid.amount}} €
  </div>
  `
})
export class BidListComponent {
  bids: Bid[];
  constructor(bidService: BidService) {
    this.bids = bidService.getTopBids();
  }
}
