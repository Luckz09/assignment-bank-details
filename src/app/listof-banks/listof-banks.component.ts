import { BanksDataService } from './../services/banks-data.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-listof-banks',
  templateUrl: './listof-banks.component.html',
  styleUrls: ['./listof-banks.component.css']
})
export class ListofBanksComponent implements OnInit {
  bankslists:any;
  searchterm:any;
  selectedCity:any;
  p: number = 1;
  SlectedPageSize:number | undefined;

constructor(private bankData:BanksDataService)
  {
    this.selectedCity="MUMBAI";
    this.selectedBankDetails(this.selectedCity);

  }
  selectedBankDetails(slectedCityparameter:any)
   {
    this.bankData.selectBank(slectedCityparameter).subscribe((data)=>{
    this.bankslists=data;
    })
   }

  ngOnInit() {

}
}
