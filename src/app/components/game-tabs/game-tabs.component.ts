import { Component, Input, OnInit } from '@angular/core';
import { Game } from  '../../model'

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
  @Input() game: Game =<Game>{};

  constructor() { }

  ngOnInit(): void {
  }

}
