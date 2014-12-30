$(document).foundation({

            accordion: {
                // specify the class used for accordion panels
                content_class: 'content',
                // specify the class used for active (or open) accordion panels
                active_class: 'active',
                // allow multiple accordion panels to be active at the same time
                multi_expand: false,
                // allow accordion panels to be closed by clicking on their headers
                // setting to false only closes accordion panels when another is opened
                toggleable: true,
            }
        });


        $(".accordion dd").on("click", "a:eq(0)", function (event)
      {
        var dd_parent = $(this).parent();

        if(dd_parent.hasClass('active'))
          $(".accordion dd div.content:visible").slideToggle("normal");
        else
        {
          $(".accordion dd div.content:visible").slideToggle("normal");
          $(this).parent().find(".content").slideToggle("normal");
        }
      });

// this works for some reason...find out why
