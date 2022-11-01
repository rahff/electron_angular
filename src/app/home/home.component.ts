import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileSystemAdapter } from '../../../shared/ElectronApi';
import { ElectronService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private electronService: ElectronService) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
    setTimeout(() => {
      this.electronService.saveFile('test.txt', "my super content");
    }, 2000);
  }

}
