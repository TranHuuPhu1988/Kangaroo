//Điều chỉnh độ rộng và chiều cao cho overlay
var sizeTheOverlays = function() {
    $(".overlay").resize().each(function() {
    var h = $(this).parent().height();
    var w = $(this).parent().width();
    $(this).css("height", h);
    $(this).css("width", w);
    });
};

sizeTheOverlays();
    
//Hiển thị tooltip
$('[data-toggle="tooltip"]').tooltip();   