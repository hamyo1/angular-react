import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as React from 'react';

import * as ReactDOM from 'react-dom';
import ErrorPageCompnent from './react/reactComponents/tsx/react_errorPageCompnent';

import React_App_Component from './react/react_app_component';
import { Diamond, DiamondsList } from './shared/models/diamond.model';


@Component({
  selector: 'app-root',
  template: '<div [id]="rootId"></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, AfterViewInit, OnDestroy  {
  title = 'angularreactapp';
  public rootId = 'root';
  
  constructor( ) {}


  ngOnChanges(changes: SimpleChanges) {
    debugger;
    this.render();

  }

   async ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {

  }

  private async render() {
    var diamondsList: DiamondsList= await this.GetAllDiamonds();
    if(diamondsList.length>0)
    {
      ReactDOM.render(React.createElement(React_App_Component,diamondsList), document.getElementById(this.rootId));
    }
    else
    {
      ReactDOM.render(React.createElement(ErrorPageCompnent), document.getElementById(this.rootId));
    }
  }

  async GetAllDiamonds() {
    var diamondsList1: DiamondsList=[]
   await fetch('http://localhost:4200/GetAllDiamonds', {
    method: 'get',
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
    // (var) payload looks like this {Header: "Sending", . . .} 
  })
    .then(res => {
      if(res.ok)
      {
        return res.json();
      }
      alert(`error when trying get data: api return error status: ${res.status}`);
      throw res.statusText;
    })
    .then(resp => {
      if(resp.errorCode=='500'){
        throw resp.errorDesc;
      }
      resp.forEach((element: Diamond) => {
        diamondsList1.push(element);
      });
      //return diamondsList1;
  }).catch(err =>alert(`error when trying get data: ${err}`));
  
    return diamondsList1;
}

}