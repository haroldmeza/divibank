import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  medias = [
    {
      name : "linkedin",
      url: "https://www.linkedin.com/company/divibank/"
    },
    {
      name : "instagram",
      url: "https://www.instagram.com/divibank"
    },
    {
      name : "facebook",
      url: "https://www.facebook.com/divibank"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
