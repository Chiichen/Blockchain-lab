/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { Object, Property } from 'fabric-contract-api';

@Object()
export class MyAsset {

    @Property()
    public apartment_name: String;

    @Property()
    public project_name: String;

    @Property()
    public bills: Bill[];

}

@Object()
export class Bill {
    @Property()
    public bill_code: String;

    @Property()
    public bill_number: String;

    @Property()
    public bill_amount: Number;

    public equal(bill: Bill): boolean {
        return this.bill_code === bill.bill_code && this.bill_number === bill.bill_number;
    }

}