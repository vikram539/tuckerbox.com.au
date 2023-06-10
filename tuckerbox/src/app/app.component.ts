import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuckerbox';
  
  pageScroll = () =>{
    window.scroll(0, 0);
  }
  
  ngOnInit(): void {
    $(function(){	
      "use strict";	
    //================= Main Menu fixed on scroll 
      $(window).on("scroll",function(){
        let sliderHeight:any = $(".carousel").outerHeight();
        let windowWidth:any = $(window).width();
        let posTop:any = $(window).scrollTop();
        if(posTop > 60){
          $(".top-primary-menu").addClass("menu-resize");
        }
        else{
          $(".top-primary-menu").removeClass("menu-resize");
        }
        
        if(windowWidth > 767){
          if(posTop  > sliderHeight){
            $("#b247SearchBoxContainer").addClass('widgetPos');
          }
          else{
            $("#b247SearchBoxContainer").removeClass('widgetPos');
          }
        }
      
      });
      setTimeout(function(){
        $(".tweenty4-outer").animate({right:"20px"}, 1000);
      }, 2000);
    });
  }
    
  }

