
var app = new Vue (
    {
        el: '#root',
        data: {
            linkNav: ['HOME', 'COURSES', 'INSTRUCTORS', 'EVENTS', 'PAGES', 'ELEMENTS'],
            dotIndex: 1,
            categoriesList:[
                {
                    name: 'Languages',
                    icon: '1.png'
                },
                {
                    name: 'Software',
                    icon: '2.png'
                },
                {
                    name: 'Business',
                    icon: '3.png'
                },
                {
                    name: 'Chemistry',
                    icon: '4.png'
                },
                {
                    name: 'Science',
                    icon: '5.png'
                },
                {
                    name: 'DIY&Craft',
                    icon: '6.png'
                },

            ],
            autoplayHeader: null
            // footerLink: {
            //     {
            //         name: 'iAcademy',
            //         link: [
            //             'Providing Life Changing Experiences Through Education. Class Tha Fit Your Busy Life. Closer to Home'
            //         ]
            //     }
            // }
                
            
        },
        mounted: function(){
            this.autoplayHeader = setInterval( ()=> {
                if ( this.dotIndex == 3){
                    this.dotIndex = 1;
                } else {
                    this.dotIndex++;
                }
                
            }, 2000);
        },
        methods:{
            sliderBack: function (dot){
                this.dotIndex = dot;
            }
        }
});