import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as React from 'react';

import * as ReactDOM from 'react-dom';
import ErrorPageCompnent from './react/reactComponents/tsx/react_errorPageCompnent';

import React_App_Component from './react/react_app_component';
import { Diamond, DiamondsList } from './shared/models/diamond.model';


@Component({
  selector: 'app-root',
  template: '<div [id]="rootId"></div>',//(inject react root here)
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, AfterViewInit, OnDestroy  {
  title = 'angularreactapp';
  public rootId = 'root';
  
  constructor( ) {}


  ngOnChanges(changes: SimpleChanges) {
    this.render();
  }

   async ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {

  }
//rendering react React_App_Component
  private render() {
    ReactDOM.render(React.createElement(React_App_Component), document.getElementById(this.rootId));
  }

}
