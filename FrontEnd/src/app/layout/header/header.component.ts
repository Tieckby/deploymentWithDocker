import { DOCUMENT } from "@angular/common";
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  AfterViewInit,
} from "@angular/core";
import { ConfigService } from "src/app/config/config.service";
import { Role } from "src/app/core/models/role";
import { AuthService } from "src/app/core/service/auth.service";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
const document: any = window.document;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"],
})
export class HeaderComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit, AfterViewInit
{
  public config: any = {};
  homePage: string;
  isNavbarCollapsed = true;
  defaultFlag: string;
  isOpenSidebar: boolean;
  public currentUser: any;
  // cpteDemande: any;
  // public myAllRDV: any = new MatTableDataSource([]);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private configService: ConfigService,
    private authService: AuthService,
    // private restApi: RestApiService
  ) {
    super();
  }
  ngOnInit() {

    this.config = this.configService.configData;

    const userRole = localStorage.getItem("userRole");
    if (userRole === Role.SUPERADMIN || userRole === Role.ADMIN) {
      this.homePage = "admin/dashboard/main";
    } else if (userRole === Role.PATIENT) {
      this.homePage = "patient/dashboard";
    } else if (userRole === Role.MEDECIN) {
      this.homePage = "doctor/dashboard";
    } else {
      this.homePage = "/authentication/signin";
    }

    // this.refreshList();
  }

  ngAfterViewInit() {
    if (localStorage.getItem("choose_logoheader")) {
      this.renderer.addClass(
        this.document.body,
        localStorage.getItem("choose_logoheader")
      );
    } else {
      this.renderer.addClass(
        this.document.body,
        "logo-" + this.config.layout.logo_bg_color
      );
    }
  }

  //Full Screen View pseudo code
  callFullscreen() {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
  mobileMenuSidebarOpen(event: any, className: string) {
    const hasClass = event.target.classList.contains(className);
    if (hasClass) {
      this.renderer.removeClass(this.document.body, className);
    } else {
      this.renderer.addClass(this.document.body, className);
    }
  }
  callSidemenuCollapse() {
    const hasClass = this.document.body.classList.contains("side-closed");
    if (hasClass) {
      this.renderer.removeClass(this.document.body, "side-closed");
      this.renderer.removeClass(this.document.body, "submenu-closed");
    } else {
      this.renderer.addClass(this.document.body, "side-closed");
      this.renderer.addClass(this.document.body, "submenu-closed");
    }
  }

  // refreshList()
  // {
  //   this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe(
  //     {
  //       next: (result: any)=>{
  //         this.currentUser = result;
  //         console.log("userrrr", this.currentUser);
          
  //         if(this.currentUser.person_type == 'MEDECIN'){
  //           let postBody = {"idPerson": this.currentUser.idPerson, "person_type": "MEDECIN"};
          
  //           //Get all RDV for the current medecin
  //           this.restApi.getRDVByMedecin(postBody, localStorage.getItem("token")).subscribe(
  //             {
  //               next: (result: any) =>{
  //                 for(let i=0; i<result.length; i++){
  //                  if(result[i].isValid == null){
  //                    this.myAllRDV.data.push(result[i])
  //                  }
                    
  //                 }
  //                 this.cpteDemande = this.myAllRDV.data.length
  //                 console.log(this.cpteDemande);
                  
  //                // this.myAllRDV.data = result;
  //               }
  //             }
  //           ); 
  //         }

  //         if(this.currentUser.person_type == 'PATIENT'){
  //           let postBody = {"idPerson": this.currentUser.idPerson, "person_type": "PATIENT"};
          
  //           //Get all RDV for the current medecin
  //           this.restApi.getRDVByPatient(postBody, localStorage.getItem("token")).subscribe(
  //             {
  //               next: (result: any) =>{
  //                 for(let i=0; i<result.length; i++){
  //                  if(result[i].isValid != null){
  //                    this.myAllRDV.data.push(result[i])
  //                  }
                    
  //                 }
  //                 this.cpteDemande = this.myAllRDV.data.length
  //                 console.log(this.cpteDemande);
                  
  //                // this.myAllRDV.data = result;
  //               }
  //             }
  //           ); 
  //         }
          
                
  //       }
  //     }
  //   );
  // }

  logout() {
    this.authService.logout();
  }
}
