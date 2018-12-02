import { Funds } from './funds';
import { BackgroundCheck } from './backgroudCheck';
import { Fraud } from './fraud';

// Provides a simplified, unified interface to complex subsystem(s)
export class Facade {
  private funds: Funds = new Funds();
  private backgroundCheck: BackgroundCheck = new BackgroundCheck();
  private fraud: Fraud = new Fraud();

  checkEligibility() {
    if (this.funds.checkFunds() &&
      !this.backgroundCheck.criminalRecords() &&
      !this.fraud.checkFraud()) {
      console.log('Eligible');
    } else {
      console.log('Not eligible');
    }
  }
}