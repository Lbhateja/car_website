$(document).ready(function() {
    $("#search").on("keyup", function() {
      var query = $(this).val().toLowerCase();
      $.ajax({
        url: "car-api2.p.rapidapi.com",
        dataType: "jsonp",
        success: function(data) {
          var results = $("#results");
          results.empty();
          $.each(data.Models, function(i, model) {
            if (model.make_name.toLowerCase().indexOf(query) !== -1 ||
                model.model_name.toLowerCase().indexOf(query) !== -1 ||
                model.model_trim.toLowerCase().indexOf(query) !== -1) {
              var row = $("<tr>");
              $("<td>").text(model.make_name).appendTo(row);
              $("<td>").text(model.model_name).appendTo(row);
              $("<td>").text(model.model_year).appendTo(row);
              $("<td>").text(model.model_trim).appendTo(row);
              $("<td>").text(model.model_engine_cc).appendTo(row);
              $("<td>").text(model.model_fuel_efficiency_city + "/" + model.model_fuel_efficiency_highway).appendTo(row);
              $("<td>").text(model.model_engine_power_ps).appendTo(row);
              $("<td>").text(model.model_top_speed_kph).appendTo(row);
              results.append(row);
            }
          });
        }
      });
    });
  });
  
