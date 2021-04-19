
var app = new Vue (
    {
        el: '#root',
        data: {
            linkNav: ['HOME', 'COURSES', 'INSTRUCTORS', 'EVENTS', 'PAGES', 'ELEMENTS'],
            dotIndex: '3',
            // footerLink: {
            //     {
            //         name: 'iAcademy',
            //         link: [
            //             'Providing Life Changing Experiences Through Education. Class Tha Fit Your Busy Life. Closer to Home'
            //         ]
            //     }
            // }
                
            
        },
        methods:{
            sliderBack: function (dot){
                this.dotIndex = dot;
            }
        }
});