import { Component } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {

  constructor (private loggingService: LoggingService,
    private accountService: AccountsService) {
      this.accountService.statusUpdated.subscribe(
        (status: string) => alert('new status: ' + status)
      );
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    //this.loggingService.logStatusChange('A server status changed, new status: ' + accountStatus);
  }
}
