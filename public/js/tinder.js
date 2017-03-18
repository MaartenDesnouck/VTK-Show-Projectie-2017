$('a[href*=#]').click(function() {
    return false;
});

var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var Person = {
    wrap: $('#people'),
    people: [
        {
            img: "/img/tinder/tinder_mario.png"
        }, {
            img: "/img/tinder/tinder_cooman.png"
        }, {
            img: "/img/tinder/tinder_dhoedt.png"
        }, {
            img: "/img/tinder/tinder_dewaele.png"
        }, {
            img: "/img/tinder/tinder_debie.png"
        }, {
            img: "/img/tinder/tinder_verbeken.png"
        }
    ],
    add: function(persoon) {
        var random = this.people[persoon];
        this.wrap.append("<div class='person'><img style='width: 100%; height: 100%;' alt='" + random.name + "' src='" + random.img + "' /></div>");
    }
}

var App = {
    yesButton: $('.button.yes .trigger'),
    noButton: $('.button.no .trigger'),
    blocked: false,
    like: function(liked) {
        var animate = liked ? 'animateYes' : 'animateNo';
        var self = this;
        if (!this.blocked) {
            this.blocked = true;
            $('.person').eq(0).addClass(animate).one(animationEndEvent, function() {
                $(this).remove();
                //Person.add();
                self.blocked = false;
            });
        }
    }
};

var Phone = {
    wrap: $('#phone'),
    clock: $('.clock'),
    updateClock: function() {
        var date = new Date();
        var hours = date.getHours();
        var min = date.getMinutes();
        hours = (hours < 10 ? "0" : "") + hours;
        min = (min < 10 ? "0" : "") + min;
        var str = hours + ":" + min;
        this.clock.text(str);
    }
}

App.yesButton.on('mousedown', function() {
    App.like(true);
});

App.noButton.on('mousedown', function() {
    App.like(false);
});

$(document).ready(function() {
    Phone.updateClock();
    setInterval('Phone.updateClock()', 1000);
    Person.add(0);
    Person.add(1);
    Person.add(2);
    Person.add(3);
    Person.add(4);
});
