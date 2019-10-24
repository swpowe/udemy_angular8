import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <h3>Hello World</h3>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => this.allowNewServer = true, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    if (this.serverName !== '') {
      this.serverCreationStatus = `Server '${this.serverName}' was created.`;
      this.serverCreated = true;
      this.servers.push(this.serverName);
    } else {
      this.serverCreationStatus = 'Please enter a valid server name.';
    }
    setTimeout(() => {
      // this.serverCreationStatus = 'Waiting...';
      this.serverCreated = false;
      this.serverName = '';
    }, 5000);
  }

  onUpdateServerName(event: Event) {
    this.serverName = ( event.target as HTMLInputElement ).value; // this adds explicit type to event.target
  }

}
