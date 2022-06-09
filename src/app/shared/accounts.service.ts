import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      constructor(private logger: LoggingService) {}

      addAccount(name: string, status: string) {
        this.logger.logStatusChange(status);
        this.accounts.push({name: name, status: status})
      }
      
      
      updateStatus(id: number, status: string) {
        this.logger.logStatusChange(status);
        this.accounts[id].status = status;
      }
}