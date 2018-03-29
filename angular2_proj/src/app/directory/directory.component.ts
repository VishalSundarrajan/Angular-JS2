import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { LoggingService} from '../logging.service';
import { HttpModule} from '@angular/http';
import { DataService} from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers:[DataService]
})


export class DirectoryComponent implements OnInit {

  qualities=[];

  constructor(private logger:LoggingService, private dataSer:DataService){
  }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
    /*this.dataSer.fetchData().subscribe(
      (data)=>this.qualities=data
    );*/
    this.fbGetData();
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added', (snapshot =>{
      this.qualities.push(snapshot.val())
    })
  }

  fbPostData(name,intent){
    firebase.database().ref('/').push({name:name,intent:intent});
  }

}
