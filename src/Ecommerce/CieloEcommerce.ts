import Merchant from '../Merchant';

import Sale from './Sale';
import Environment from './Environment';
import CreateSaleRequest from './Request/CreateSaleRequest';
import QuerySaleRequest from './Request/QuerySaleRequest';

export default class CieloEcommerce {

    private _merchant: Merchant;
    private _environment: Environment;

    constructor(merchant: Merchant, env: Environment = Environment.production()) {

        this._merchant = merchant;
        this._environment = env;
    }

    prepare(sale: Sale) {
        return new CreateSaleRequest(this._merchant, this._environment);
    }

    async createSale(sale: Sale) {
        const createSaleRequest = new CreateSaleRequest(this._merchant, this._environment);
        return await createSaleRequest.execute(sale);
    }

    async getSale(paymentId: string){
        const querySaleRequest = new QuerySaleRequest(this._merchant, this._environment);
        return await querySaleRequest.execute(paymentId);
    }
}