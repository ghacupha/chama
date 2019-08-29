import { Component, OnInit } from '@angular/core';

import { ChamaConfigurationService } from './configuration.service';

@Component({
  selector: 'chama-configuration',
  templateUrl: './configuration.component.html'
})
export class ChamaConfigurationComponent implements OnInit {
  allConfiguration: any = null;
  configuration: any = null;
  configKeys: any[];
  filter: string;
  orderProp: string;
  reverse: boolean;

  constructor(private configurationService: ChamaConfigurationService) {
    this.configKeys = [];
    this.filter = '';
    this.orderProp = 'prefix';
    this.reverse = false;
  }

  keys(dict): Array<string> {
    return dict === undefined ? [] : Object.keys(dict);
  }

  ngOnInit() {
    this.configurationService.get().subscribe(configuration => {
      this.configuration = configuration;

      for (const config of configuration) {
        if (config.properties !== undefined) {
          this.configKeys.push(Object.keys(config.properties));
        }
      }
    });

    this.configurationService.getEnv().subscribe(configuration => {
      this.allConfiguration = configuration;
    });
  }
}
