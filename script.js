jQuery(document).ready(function() {
  var cityP = "", pais = "";
  $.ajax({
  url: "http://api.wunderground.com/api/7a5b845d5ffe609d/geolookup/conditions/q/Canada/Toronto.json",
  dataType : "jsonp",
  success : function(parsed_json) {
    // alert(url);
      var location = parsed_json['location']['city'];
      var temp = parsed_json['current_observation']['temp_c'];
      var el = parsed_json['current_observation']['display_location']['elevation'];
      var icon = parsed_json['current_observation']['icon_url'];
      var weather = parsed_json['current_observation']['weather'];
      var Barometer = parsed_json['current_observation']['pressure_mb'];
      var Visibility = parsed_json['current_observation']['visibility_km'];['visibility_km'];
      el = Math.floor(el);
    
          $(".respuesta").html("<section><div class='img'></div><div class='city'>" + location + " " + temp + " °C </div> <div class='altura'>" + el + " m </div> </div class='weather'>" + weather + "</div><div>Barometer "+Barometer+" mb</div><div>Visibility "+Visibility+" km</div></section>");
          $(".img").append("<img src='" + icon + "'/>");//
        
  }
  }); 
  
  $("#buscar").click(function(){
      $(".respuesta").html(" ");
      
      pais = $("#pais").val();
      cityP =$("#ciudad").val();
   //alert(city +""+pais);
     var url = "http://api.wunderground.com/api/7a5b845d5ffe609d/geolookup/conditions/q/"+pais+"/"+cityP+".json"
$.ajax({
  url :url,
 
  dataType : "jsonp",
  success : function(parsed_json) {
    // alert(url);
      var location = parsed_json['location']['city'];
      var temp = parsed_json['current_observation']['temp_c'];
      var el = parsed_json['current_observation']['display_location']['elevation'];
      var icon = parsed_json['current_observation']['icon_url'];
      var weather = parsed_json['current_observation']['weather'];
      var Barometer = parsed_json['current_observation']['pressure_mb'];
      var Visibility = parsed_json['current_observation']['visibility_km'];['visibility_km'];
      el = Math.floor(el);
    
          $(".respuesta").html("<section><div class='img'></div><div class='city'>" + location + " " + temp + " °C </div> <div class='altura'>" + el + " m </div> </div class='weather'>" + weather + "</div><div><p>Barometer</p>"+Barometer+" mb</div><div><p>Visibility</p>"+Visibility+" km</div></section>");
          $(".img").append("<img src='" + icon + "'/>");//
        
  }
  });
 
  });
});
  
