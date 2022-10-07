import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as FormData from 'form-data';

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

  public addBot= (message: string) => {
    const chatBody = document.getElementById('chatbody')
    const chatParentNode = document.createElement("span");

    const chatNode = document.createElement("p");
    chatNode.className="alert alert-danger";
    chatNode.setAttribute("style","width:40%")
    chatNode.textContent=message;

    const chatTime = document.createElement("span");
    chatTime.className="d-flex justify-content-end mt-1";
    chatTime.innerHTML=this.getTime();
    chatNode.appendChild(chatTime);

    chatParentNode.appendChild(chatNode)

    chatBody?.appendChild(chatParentNode);
    chatParentNode.scrollIntoView()
  }

  public addChat = async () => {
    if(this.message.length!=0)
    {
      const chatBody = document.getElementById('chatbody')
      const chatParentNode = document.createElement("span");
      chatParentNode.className="d-flex justify-content-end";

      const chatNode = document.createElement("p");
      chatNode.className="alert alert-primary";
      chatNode.setAttribute("style","width:40%")
      chatNode.textContent=this.message;

      const chatTime = document.createElement("span");
      chatTime.className="d-flex justify-content-end mt-1";
      chatTime.innerHTML=this.getTime();
      chatNode.appendChild(chatTime);

      chatParentNode.appendChild(chatNode)

      chatBody?.appendChild(chatParentNode);
      chatParentNode?.scrollIntoView()

      this.message = this.message.trim().toUpperCase();
      const newUserMessage = removeUnwantedWords(this.message);
      this.message = "";
      let newMessage = new FormData();
      newMessage.append("newchat", newUserMessage);
      
      const resp = (await axios.post("http://localhost:8000/chatResponse",newMessage)).data; 
      this.addBot(resp);
    }
    
  }
}

function removeUnwantedWords(message: string): string
{
  const stopWords = ["ALSO","ALTHOUGH","ALWAYS","AM","AN","AND","ANY","ARE","AS","BE","AT","I",
    "BECAME","BECOME","BUT","BY","CAN","COULD","DID","DO","DOES","EACH","EITHER","ELSE","FOR","FROM",
    "HAD","HAS","HAVE","HENCE","IF","IN","IS","IT","ITS","JUST","MAY","MAYBE","ME","MIGHT","MINE",
    "MUST","MY","MINE","MUST","MY","NEITHER","NOR","NOT","OF","OH","OK","WHEN","WHERE","WHEREAS","WHEREVER",
    "WHENEVER","WHETHER","WHICH","WHILE","WHO","WHOM","WHOEVER","WHOSE","WHY","WILL","WITH","WITHIN","WITHOUT",
    "WOULD","YES","YET","YOU","YOUR","IT","?","@","!","$","%","^","&","*","(",")","[","]","+","-","\\",";",":",".",
    "/","~"
  ]
  let filterMessage: string[] =[];
  for(let i of message.split(" ")){
    
  }
  console.log(filterMessage)
  return filterMessage.join("")
}