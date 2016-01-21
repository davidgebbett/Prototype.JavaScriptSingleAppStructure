(function($, undef) {
    'use strict';
    var $Dom = $('html'),
        app = {
        helpers: { 
            ExecuteModule: function (selector, module, args){
                if ($Dom.find(selector).length > 0) {
                    module.init($Dom.find(selector), args);
                }
            }
        },
        init: function (){ 
            app.start();
        },
        start: function () {
            app.helpers.ExecuteModule('.static-chat', app.modules.staticChat, {});
        },
        modules: { 
            staticChat: (function (){ 
                var staticChat = {
                    init: function(componentElement, args) { //Poor example you would use OOP for this and create objects
                        var $component = $(componentElement);
                        //Here you would get the selectors/events through args
                        $component.find('input.default').on('click', staticChat.events.SubmitButtonEvent);
                        $component.find('input.username').on('click.UserName', { username: 'Mr Y' }, staticChat.events.SubmitButtonEventWithUsername);

                        $component.find('.combo').on({
                            "click": staticChat.events.SubmitButtonEvent,
                            "mouseover": staticChat.events.ClearText
                        });

                        //Good practice clean up your events if they are never needed again

                        $component.find('.removeallclicks').on('click', function() {
                            var $this = $(this);
                            $this.parent().find('input').off('click');
                        });

                        //Uses namespace
                        $component.find('.removeonlyusernameclicks').on('click', function () {
                            var $this = $(this);
                            $this.parent().find('input').off('click.UserName');
                        });

                        $component.find('.one-time-click').one('click', function () {
                            var $this = $(this);
                            $this.parent().find('ul').append('<li>You clicked the one time only btn</li>');
                            $this.click(function () { alert('You cant click this again'); });
                        });

                        $component.find('.adddynamic').on('click', staticChat.events.AddDynamicElement);
                        
                    },
                    events: {
                        SubmitButtonEvent: function(evt) {
                            var $this = $(this);
                            $this.parent().find('ul').append('<li>' + $this.siblings('input[type=text]').val() + '</li>');
                        },
                        SubmitButtonEventWithUsername: function(evt) {
                            var $this = $(this);
                            var preText = evt.data.username;
                            var comment = $this.siblings('input[type=text]').val();
                            $this.parent().find('ul').append('<li>' + preText  + ' says : ' + comment + '</li>');
                        },
                        ClearText: function (evt) {
                            var $this = $(this);
                            $this.parent().find('ul').append('<li>Hovered red box</li>');
                        },
                        AddDynamicElement: function() {
                            var $this = $(this);
                            var $container = $this.parent().find('.dynamicElements');
                            $container.append('<div style="background:green; height:100px; width: 100px; float:left;">Hello</div>');
                            //COMMON Mistake with dynamic elements
                            alert(1);
                            $container.find('div').on('click', staticChat.events.AddDynamicElement);
                        }
                    }
                },
				api = { 
				    init: function ($components, args) {
				        for (var componentNo = 0; componentNo < $components.length; componentNo += 1) {
				            staticChat.init($components[componentNo], args);
				        }
				    }
				}
				
                return api;
            }())
        }
    };
    app.init();
}(jQuery));

