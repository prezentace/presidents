$(function () {
    $('#ustava p').hide();
    $('#ustava h4').on('click', function () {
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({
                'background-color': '#38a'
            });
        } else {
            $(this).css({
                'background-color': '#444'
            });
        }
        $(this).nextUntil('h4').toggle(500);
    });

    var kviz = $('#kviz div.row');
    prezidenti.forEach(function (obj, idx) {
        console.log(obj.photo);
        /*kviz.append('<div class="col-sm-4"><figure><img src="img/'
        +obj.photo+'" alt="'+obj.name+'"><figcaption>'
        +obj.name+'</figcaption></figure></div>');*/
        kviz.append('<div class="col-sm-4"><figure id="' + idx + '"><img src="img/prezident0.jpg" alt="Prezident"><figcaption>' +
            obj.name + '</figcaption></figure></div>');
    });

    /* Po kliknutí na img se náhodně mění fotky */
    var photo = $('#kviz img');
    photo.on('click', function () {
        var index = Math.floor(Math.random() * prezidenti.length);
        $(this).attr('src', 'img/' + prezidenti[index].photo)
            .attr('alt', prezidenti[index].name);
    });

    /* Po kliknutí na tlačítko Ověřit ohraničí červeně špatné 
       a zeleně správné odpovědi  */
    var check = $('#kviz .btn-success');
    check.on('click', function () {
        $('#kviz figure').each(function (idx, obj) {
            var figcaption = $(obj).find('figcaption').text();
            var alt = $(obj).find('img').attr('alt');
            if (figcaption == alt) {
                $(obj).find('img').css({
                    'border': '2px solid green'
                });
            } else {
                $(obj).find('img').css({
                    'border': '2px solid red'
                });
            }
        });
    });

    var odkazy = $('#odkazy ul');
    prezidenti.forEach(function (obj, idx) {
        odkazy.append('<li><a href="' + obj.link + '" target="_blank">' +
            obj.name + '</a></li>');
    });
    
    var mista = $('#sidlo');
    var x = 0;
    window.setInterval(function () {
        mista.find('img').attr('src', 'img/' + sidla[x].photo);
        mista.find('figcaption').text(sidla[x].place);
        x == sidla.length-1 ? x = 0 : x++;
    }, 3000);

    var perly = $('#perlicky');
    function zmenaPerel(){
        perly.find('h4').text(perlicky[i].title);
        perly.find('p').text(perlicky[i].text);
    }
    var i = 0;
    zmenaPerel();
    $('#perlicky button').on('click', function() {
        i = $(this).text() == 'Další' ? i+1 : i-1;
        i = i <= 0 ? perlicky.length - 1 : i;
        i = i >= perlicky.length ? i = 0 : i;
        zmenaPerel();
    })
    
})