// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Retornos de chamada para executar código específico para páginas específicas , por exemplo, para Sobre a página:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
myApp.onPageInit('gradehoraria', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
myApp.onPageInit('secretaria', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
myApp.onPageInit('ajuda', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
// myApp.onPageInit('configuracoes', function (page) {
//     // run createContentPage func after link was clicked
//     $$('.create-page').on('click', function () {
//         createContentPage();
//     });
// });

// // Open Links popover
// $$('.open-links').on('click', function () {
//     var clickedLink = this;
//     myApp.popover('.popover-links', clickedLink);
// });      

var myApp=new Framework7({animateNavBackIcon:true});
var $$=Dom7;var mainView=myApp.addView('.view-main',{dynamicNavbar:true,domCache:true});

var myApp = new Framework7();
 
var $$ = Dom7;
 
$$('.open-about').on('click', function () {
  myApp.popup('.popup-about');
});

$$('.open-portugues').on('click', function () {
  myApp.popup('.popup-portugues');
});
$$('.open-fisica').on('click', function () {
  myApp.popup('.popup-fisica');
});

// Calendario 

var $$ = Dom7;
var monthNames =  ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto' , 'Setembro' , 'Outubro', 'Novembro', 'Dezembro'];
 
var calendarInline = myApp.calendar({
    container: '#calendar-inline-container',
    value: [new Date()],
    weekHeader: false,
    toolbarTemplate: 
        '<div class="toolbar calendar-custom-toolbar">' +
            '<div class="toolbar-inner">' +
                '<div class="left">' +
                    '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
                '</div>' +
                '<div class="center"></div>' +
                '<div class="right">' +
                    '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
                '</div>' +
            '</div>' +
        '</div>',
    onOpen: function (p) {
        $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
        $$('.calendar-custom-toolbar .left .link').on('click', function () {
            calendarInline.prevMonth();
        });
        $$('.calendar-custom-toolbar .right .link').on('click', function () {
            calendarInline.nextMonth();
        });
    },
    onMonthYearChangeStart: function (p) {
        $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
    }
    
});






// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}