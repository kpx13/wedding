$(document).ready(function() {
    /*
     *  Simple image gallery. Uses default settings
     */

    $('.fancybox').fancybox();

    /*
     *  Different effects
     */

    // Change title type, overlay closing speed
    $(".fancybox-effects-a").fancybox({
        helpers: {
            title : {
                type : 'outside'
            },
            overlay : {
                speedOut : 0
            }
        }
    });

    // Disable opening and closing animations, change title type
    $(".fancybox-effects-b").fancybox({
        openEffect  : 'none',
        closeEffect	: 'none',

        helpers : {
            title : {
                type : 'over'
            }
        }
    });

    // Set custom style, close if clicked, change title type and overlay color
    $(".fancybox-effects-c").fancybox({
        wrapCSS    : 'fancybox-custom',
        closeClick : true,

        openEffect : 'none',

        helpers : {
            title : {
                type : 'inside'
            },
            overlay : {
                css : {
                    'background' : 'rgba(238,238,238,0.85)'
                }
            }
        }
    });

    // Remove padding, set opening and closing animations, close if clicked and disable overlay
    $(".fancybox-effects-d").fancybox({
        padding: 0,

        openEffect : 'elastic',
        openSpeed  : 150,

        closeEffect : 'elastic',
        closeSpeed  : 150,

        closeClick : true,

        helpers : {
            overlay : null
        }
    });

    /*
     *  Button helper. Disable animations, hide close button, change title type and content
     */

    $('.fancybox-buttons').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',

        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,

        helpers : {
            title : {
                type : 'inside'
            },
            buttons	: {}
        },

        afterLoad : function() {
            this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }
    });


    /*
     *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
     */

    $('.fancybox-thumbs').fancybox({
        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,
        arrows    : false,
        nextClick : true,

        helpers : {
            thumbs : {
                width  : 50,
                height : 50
            }
        }
    });

    /*
     *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
     */
    $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            prevEffect : 'none',
            nextEffect : 'none',

            arrows : false,
            helpers : {
                media : {},
                buttons : {}
            }
        });

    /*
     *  Open manually
     */

    $("#fancybox-manual-a").click(function() {
        $.fancybox.open('1_b.jpg');
    });

    $("#fancybox-manual-b").click(function() {
        $.fancybox.open({
            href : 'iframe.html',
            type : 'iframe',
            padding : 5
        });
    });

    $("#fancybox-manual-c").click(function() {
        $.fancybox.open([
            {
                href : '1_b.jpg',
                title : 'My title'
            }, {
                href : '2_b.jpg',
                title : '2nd title'
            }, {
                href : '3_b.jpg'
            }
        ], {
            helpers : {
                thumbs : {
                    width: 75,
                    height: 50
                }
            }
        });
    });


});
function countdown(){   /* создадим функцию countdown */
    var today = new Date().getTime();   /* определим сколько милисекунд прошло с 1970 года до данного момента и запишем в переменную today */
    var end = new Date(2013,10,1).getTime();   /* определим сколько милисекунд пройдет c 1970 до указанного в скобках числа (1 января 2013) и запишем в переменную end */
    var dateX = new Date(end-today);   /* узнаем разницу в милисекундах и запишем в переменную dateX */
    var perDays = 60*60*1000*24;   /* произведем расчет милисекунд в сутки и запишем в переменную perDays */
    date_to_write =
        '<div id="d-timer">' + (Math.round(dateX/perDays)) + '</div>'+
    '<div id="h-timer">' + dateX.getUTCHours().toString() + '</div>'+
            '<div id="m-timer">' + dateX.getMinutes().toString() + '</div>'+
            '<div id="s-timer">' + dateX.getSeconds().toString() + '</div>';   /* определяем количество дней путем деления dateX на perDays и округляем это значение. А из остатка вычисляем сколько часов, дней, минут и секунд осталось и приводим в строковые данные */
    var result = document.getElementById('rezult-timer');   /* создадим переменную result, в которую выберем элемент с id rezult */
    result.innerHTML = date_to_write;    /* вставляем в div rezult результат вычислений */
}
