import { Component, OnInit } from '@angular/core';

import { XMLService } from "../../services/XMLService";


@Component({
  selector: 'my-xml-button',
  templateUrl: './xml-button.component.html',
  styleUrls: ['./xml-button.component.css',
              '../../styles/buttonStyle.css'],
})
export class XmlButtonComponent {
  
  constructor(private xmlService: XMLService){}

  createXML () {
    this.xmlService.createXML();
   // this.xmlService.getXMLValues();
  }


}
