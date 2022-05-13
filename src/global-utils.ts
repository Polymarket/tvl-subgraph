import { BigInt } from '@graphprotocol/graph-ts';
import { Global } from '../generated/schema';
import { bigZero, CONDITIONAL_TOKENS_ADDRESS } from './constants';
export function requireGlobal(): Global {
  let global = Global.load('');
  if (global == null) {
    global = new Global('');
    global.openInterest = bigZero;
  }
  return global as Global;
}

export function updateOpenInterest(
  amount: BigInt,
  toAddress: string,
  fromAddress: string
): void {
  let global = requireGlobal();

  if (toAddress == CONDITIONAL_TOKENS_ADDRESS) {
    global.openInterest = global.openInterest.plus(amount);
  } else if (fromAddress == CONDITIONAL_TOKENS_ADDRESS) {
    global.openInterest = global.openInterest.minus(amount);
  }
  global.save();
}
