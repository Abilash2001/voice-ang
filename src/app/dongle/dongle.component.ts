import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dongle',
  templateUrl: './dongle.component.html',
  styleUrls: ['./dongle.component.css']
})
export class DongleComponent implements OnInit {
 DAllPack= [{
    'plan_price':'',
    'plan_data':'',
    'plan_validity':'',
    'id':'',
    'plan_usage':''
  }]
  error: string="";
  success: string="";
  constructor(router: ActivatedRoute) {

    router.queryParams.subscribe((params) => {
      this.error=params['error'];
      this.success=params['success'];
    });
    (async () => {
      this.DAllPack = (await axios.get('http://localhost:8000/dongle?all=True')).data
    })() }

  ngOnInit(): void {
  }

}
