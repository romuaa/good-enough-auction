import { Component } from '@angular/core';

import { BidService } from './bid.service';





@Component({
  selector: 'my-app',
  providers: [BidService],
  template: `
  
  
	<h1>Good enough auction</h1>
  
	<h2>Top bids</h2>
	<bid-list></bid-list>
  
  
  `
})
export class AppComponent { }
