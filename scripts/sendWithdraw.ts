import { Address, address, toNano } from '@ton/core';
import { JettonMinterSale } from '../wrappers/JettonMinterSale';
import { NetworkProvider, sleep } from '@ton/blueprint';
import * as dotenv from 'dotenv';
dotenv.config();

export async function run(provider: NetworkProvider) {
    const ui = provider.ui();

    const minterAddress = await ui.input('Provide Minter address');
    const jettonAmount = await ui.input('Provide withdraw amount');
    const tons = parseInt(jettonAmount);
    const jettonMinter = provider.open(JettonMinterSale.createFromAddress(address(minterAddress)));
    if (typeof tons === 'number') {

        await jettonMinter.sendWithdrawFunds(provider.sender(), BigInt(tons));
    } else {
        ui.write('Provided withdraw amount is not a number!');
        return;
    }

    ui.write('Successfully withdrawn tons');
}