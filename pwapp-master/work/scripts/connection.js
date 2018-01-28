$(document).ready(function()
      {
        $("#butAdd").click(function()
        {
          $stock = "sam";
          $.ajax({
            url: 'http://10.192.204.78:8080/Uhack1/ServIt',
            dataType: 'jsonp',
            data: {name: $stock},
            type: 'post',
            cache: false,
          });
        });
      });