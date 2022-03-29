import { Component, OnInit } from '@angular/core';
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";
import * as Leaflet from 'leaflet';
import 'leaflet.locatecontrol';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit{
  map: Leaflet.map;
  propertyList = [];

  latitude: any;
  longitude: any;
  coords: any;
 

  constructor(private restApiService: RestApiService) { }

  ngOnInit(): void {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pos =>{
        this.coords = pos.coords;
        // this.latitude = pos.coords.latitude;
        // this.longitude = pos.coords.longitude;
        console.log(this.coords.latitude);
      });
      this.map = new Leaflet.Map('mapId').setView([12.63078, -8.026994], 16);
    }
    
    // this.map = new Leaflet.Map('mapId').setView([12.630432, -8.0304374], 16);
  }
  
  ngAfterViewInit() {
    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3JheWhhbWlsdG9uIiwiYSI6ImNpbHFxZmFpNzA4bW52dmx5eTY5YW5ia2EifQ.hoCUaTVuAJqLlSchwzwAGQ', {   
      maxZoom:20,
      
    }).addTo(this.map);
    
    Leaflet.control.locate().addTo(this.map);

    this.restApiService.getAllCabinet().subscribe((data:any)=> {
      this.propertyList = data;
      this.leafletMap();
    })


  }

  leafletMap() {
    for (const property of this.propertyList) {
      Leaflet.marker([property.latitude, property.longitude]).addTo(this.map)
        .bindPopup(property.rive.nomRive+', '+property.nom)
        .openPopup();
    }
    //google street
  //   this.leafletMap = this.map.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
  //     maxZoom: 20,
  //     subdomains:['mt0','mt1','mt2','mt3']
  // }).addTo(this.map);
  }

  ngViewWillLeave() {
    this.map.remove();
  };
}


