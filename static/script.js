$(function() {
    $('nav a').not('#language').click(function(e) {
        e.preventDefault();
        var target = $($(this).attr('href')).first();
        $('html, body').animate({scrollTop: target.position().top - 25}, 3000);
    });

    $(window).scroll(function(e) {
        $('nav a.active').removeClass('active');
        if ($(window).scrollTop() < $('#vize').position().top - 25) {
            $('nav a:first').addClass('active');
            return;
        }

        var sections = $('section, header');
        for (var i = 0; i < sections.size(); i++) {
            if ($(sections[i]).position().top - 25 > $(window).scrollTop()) {
                if (i > 0) {
                    var section = sections[i-1];
                } else {
                    var section = sections[i];
                }

                $('nav a[href="#' + $(section).attr('id') + '"]').addClass('active');
                return;
            }
        }
        sections.first().addClass('active');
    });
});
