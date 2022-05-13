import { Transfer } from '../generated/ERC20/ERC20';
import { updateOpenInterest } from './global-utils';

export function handleERC20Transfer(event: Transfer): void {
  let toAddress = event.params.to.toHexString();
  let fromAddress = event.params.from.toHexString();
  let amount = event.params.value;
  updateOpenInterest(amount, toAddress, fromAddress)
  
}
