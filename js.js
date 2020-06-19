
var restaurant = [], ff;

function enterstore() {
  $.getJSON('restaurant.json', function (data) {
    $.each(data.restaurant, function (i, f) {
      var tblRow = '<span class="thisspan" onclick="clickspan(' + f.id + ')"><div style="margin-top:60px;width=600px; border-radius:10px;" class=row>' + "<img src=" + f.picture + " class=img-thumbnail col-6>" + " </img>" +
        '<h3 style="padding-left:50px ; padding-top:40px;">' + f.name + "<br>" + f.location + "</h3>" /*+ "<p>" + f.location + "</p>"*/ + "</div></span>" /*+ "<div><iframe src= " + f.map + " width=600 height=450 frameborder=0 style=border:0; allowfullscreen= aria-hidden=false tabindex=0></iframe></div>"*/
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
  $("#菜單").show();
  //a = [];
  //restaurantData
  $.getJSON('restaurant.json', function (data) {
    $.each(data.restaurant, function (i, d) {
      if (f == d.id) {
        var tblRow = '<div class="row"style="padding-top:10px;" > <img src=' + d.picture +
          ' class=img-thumbnail col-6></img><iframe src= ' + d.map +
          ' width=600 height=450 frameborder=0 style="border:0;" allowfullscreen= aria-hidden=false tabindex="0"></iframe></div>' +
          '<div class="col"><h3 col-2 style=padding-top:40px;padding-left:10px;>' + d.name +
          "</h3>" + '<a col-4  style="padding-top:45px;padding-left:10px;">' + d.location + "</a>" + "</div>"
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
  //console.log(y);
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
  //console.log(y);
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
function shopping_car_click() {

  $('.bg').remove();
  $('.A0').show();
  

  $.getJSON('restaurant.json', function (data) {
    $.each(data.menu, function (i, d) {

      if (ff == d.id) {
        for (var u = new Number(1); u < 100; u++) {

          if (menu_amount[u] != 0) {
            var tblRow = '<p style=" padding-bottom:40px;font-size:30px;">' + d[u] + "數量:" + menu_amount[u] + '</p>'
            $(tblRow).appendTo("#A1-2-1");
          }

        }

      }
      /*var gg = "ABCDEFG";
      for (var y = 0; y < 6; y++) {
          var tblRow = '<p style=" padding-bottom:40px;" id="iton' + y + '" onclick="itonplus()">' + gg[y] + '</p>'
          $(tblRow).appendTo("#menu");
      }*/
    });
    $.each(data.restaurant, function (i, d) {
      if (ff == d.id) {
        var tblRow = '<div class="row"style="padding-top:10px;" > <iframe src= ' + d.map +
          ' frameborder=0 style="border:0; width:500px;height:500px;" allowfullscreen= aria-hidden=false tabindex="0"></iframe></div>' 
        $(tblRow).appendTo("#A2-1");
      }
    });

  });


  /*var BlobBuilder = BlobBuilder || WebKitBlobBuilder || MozBlobBuilder;
  var URL = URL || webkitURL || window;

  function saveAs(blob, filename) {
    var type = blob.type;
    var force_saveable_type = 'application/octet-stream';
    if (type && type != force_saveable_type) { // 強制下載，而非在瀏覽器中開啟
      var slice = blob.slice || blob.webkitSlice || blob.mozSlice;
      blob = slice.call(blob, 0, blob.size, force_saveable_type);
    }

    var url = URL.createObjectURL(blob);
    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    save_link.href = url;
    save_link.download = filename;

    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    save_link.dispatchEvent(event);
    URL.revokeObjectURL(url);
  }
  var bb = new BlobBuilder;
  bb.append('Hello, world!');
  saveAs(bb.getBlob('text/plain;charset=utf-8'), 'shopping_car.txt');*/
  /*var item_txt = document.getElementById("item").innerHTML;
  var fso = new ActiveXObject(Scripting.FileSystemObject);
  var f = fso.createtextfile("shopping_car.txt", 2, true);
  f.writeLine(item_txt);
  f.close();*/


}
function fu_ck(){
 alert("R");
}