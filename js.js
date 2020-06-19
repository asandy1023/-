
var restaurant = [], ff;

function enterstore() {
  $.getJSON('restaurant.json', function (data) {
    $.each(data.restaurant, function (i, f) {
      var tblRow = '<span class="thisspan" onclick="clickspan(' + f.id + ')"><div style="margin-top:60px;width=600px; border-radius:10px;" class=row>' + "<img width=500 height=500 src=" + f.picture + " class=img-thumbnail col-6>" + " </img>" +
        '<h3 style=" padding-bottom:40px;">' + f.name + "<br>" + f.location + "</h3>" /*+ "<p>" + f.location + "</p>"*/ + "</div></span>" /*+ "<div><iframe src= " + f.map + " width=600 height=450 frameborder=0 style=border:0; allowfullscreen= aria-hidden=false tabindex=0></iframe></div>"*/
      $(tblRow).appendTo("#restaurantData");
    });

  });

}

/*var fso = new ActiveXObject(Scripting.FileSystemObject);
var f = fso.createtextfile("aa.txt", 2, true);*/

function clickspan(f) {

  ff = f;
  //alert("I am an alert box!");
  $("#restaurantData").empty();
  $("#menu").empty();
  $("#item").empty();
  //a = [];
  //restaurantData
  $.getJSON('restaurant.json', function (data) {
    $.each(data.restaurant, function (i, d) {
      if (f == d.id) {
        var tblRow = '<span class="thisspan" onclick="clickspan(' + d.id + ')"><div class="row">' + "<img src=" + d.picture + " class=img-thumbnail col-6>" + " </img>" +
          "<h3 col-2 style=padding-bottom:40px;>" + d.name + "</h3>" + "<p col-4 style=padding-bottom:40px;>" + d.location + "</p>" + "</div></span>" + "<div><iframe src= " + d.map + " width=600 height=450 frameborder=0 style=border:0; allowfullscreen= aria-hidden=false tabindex=0></iframe></div>"
        $(tblRow).appendTo("#restaurantData");
      }
    });

  });
  var menu = [];
  //var ad = ['A', 'B', 'C', 'D'];
  //menu

  $.getJSON('restaurant.json', function (data) {
    $.each(data.menu, function (i, d) {

      if (f == d.id) {
        var key, count = 0;
        for (key in d) {
          if (d.hasOwnProperty(key)) {
            count++;
          }
        }
        for (var y = 1; y < count - 1; y++) {

          var tblRow = '<p style=" padding-bottom:40px;" id="iton' + y + '" >'
            + '<button type="button" class="btn btn-primary" onclick="itonminus(' + y + ');"> - </button>'
            + " " + d[y] + " " + '<button type="button" class="btn btn-primary" onclick="itonplus(' + y + ');"> + </button></p>'
          $(tblRow).appendTo("#menu");
          console.log(1);
        }
        /*var gg = "ABCDEFG";
        for (var y = 0; y < 6; y++) {
            var tblRow = '<p style=" padding-bottom:40px;" id="iton' + y + '" onclick="itonplus()">' + gg[y] + '</p>'
            $(tblRow).appendTo("#menu");
        }*/

      }
    });

  });
  //f.close();
}
var menu_amount = new Int32Array(100),
  tt = 0;
var b = [0];

for (var zero = 0; zero < 100; zero++) {
  menu_amount[zero] = 0;
}

function itonplus(y) {
  menu_amount[y]++;

  //var fso = new ActiveXObject(Scripting.FileSystemObject);
  //var f = fso.opentextfile("aa.txt", 1, true);
  //times++;
  $(".partb").hide();
  console.log(y);
  updata(y);
  $(".partb").show();
}

function itonminus(y) {
  if (menu_amount[y] > 0) menu_amount[y]--;
  else;
  //var fso = new ActiveXObject(Scripting.FileSystemObject);
  //var f = fso.opentextfile("aa.txt", 1, true);
  //times++;
  $(".partb").hide();
  console.log(y);
  updata(y);
  $(".partb").show();
}

function updata(y) {

  $("#item").empty();

  $.getJSON('restaurant.json', function (data) {
    $.each(data.menu, function (i, d) {

      if (ff == d.id) {
        for (var u = new Number(1); u < 100; u++) {

          if (menu_amount[u] != 0) {
            var tblRow = '<p style=" padding-bottom:40px;">' + d[u] + "數量:" + menu_amount[u] + '</p>'
            $(tblRow).appendTo("#item");
          }

        }

      }
      /*var gg = "ABCDEFG";
      for (var y = 0; y < 6; y++) {
          var tblRow = '<p style=" padding-bottom:40px;" id="iton' + y + '" onclick="itonplus()">' + gg[y] + '</p>'
          $(tblRow).appendTo("#menu");
      }*/
    });

  });

}
function shopping_car_click(){
  var item_txt=document.getElementById("#item").innerHTML;
  
}