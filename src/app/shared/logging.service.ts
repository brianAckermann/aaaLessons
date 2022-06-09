export class LoggingService {

    logStatusChange(status: string ) {

        console.log('LS:  -> A server status changed, new status: ' + status);
    }
}