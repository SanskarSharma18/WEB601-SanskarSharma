// app-messages.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../app/services/message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.css']
})
export class AppMessagesComponent {

    constructor(public messageService: MessageService){}
}
