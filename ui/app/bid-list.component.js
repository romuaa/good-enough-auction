"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var bid_service_1 = require('./bid.service');
var BidListComponent = (function () {
    function BidListComponent(bidService) {
        this.bids = bidService.getTopBids();
    }
    BidListComponent = __decorate([
        core_1.Component({
            selector: 'bid-list',
            template: "\n  <div *ngFor=\"let bid of bids\">\n    {{bid.id}} - {{bid.amount}} \u20AC\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [bid_service_1.BidService])
    ], BidListComponent);
    return BidListComponent;
}());
exports.BidListComponent = BidListComponent;
//# sourceMappingURL=bid-list.component.js.map