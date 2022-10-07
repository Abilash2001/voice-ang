import { Component, OnInit } from '@angular/core';
import { DefaultTitleStrategy } from '@angular/router';

@Component({
  selector: 'app-helpme',
  templateUrl: './helpme.component.html',
  styleUrls: ['./helpme.component.css']
})
export class HelpmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getTime = () => {
    const gotDate = new Date();
    return gotDate.getHours().toString() +":" +gotDate.getMinutes().toString();
  }
  message: string="";

  addBot= (message: string) => {
    const chatBody = document.getElementById('chatbody')
    const chatParentNode = document.createElement("span");

    const chatNode = document.createElement("p");
    chatNode.className="alert alert-danger";
    chatNode.setAttribute("style","width:30%")
    chatNode.textContent=message;

    const chatTime = document.createElement("span");
    chatTime.className="d-flex justify-content-end mt-1";
    chatTime.innerHTML=this.getTime();
    chatNode.appendChild(chatTime);

    chatParentNode.appendChild(chatNode)

    chatBody?.appendChild(chatParentNode);
    chatParentNode.scrollIntoView()
  }

  addChat = () => {
    const chatBody = document.getElementById('chatbody')
    const chatParentNode = document.createElement("span");
    chatParentNode.className="d-flex justify-content-end";

    const chatNode = document.createElement("p");
    chatNode.className="alert alert-primary";
    chatNode.setAttribute("style","width:30%")
    chatNode.textContent=this.message;

    const chatTime = document.createElement("span");
    chatTime.className="d-flex justify-content-end mt-1";
    chatTime.innerHTML=this.getTime();
    chatNode.appendChild(chatTime);

    chatParentNode.appendChild(chatNode)

    chatBody?.appendChild(chatParentNode);
    chatParentNode?.scrollIntoView()

    if(this.message=="hi"){
      this.addBot("Hello, How are you thanks for visiting voizfonica, how may i help you")
    }
    else if(this.message=='How to change from prepaid to postpaid'){
    this.addBot("")
    }
    else{
      this.addBot("You're welcome. Pleased to help")
    }

    this.message="";
  }
}
