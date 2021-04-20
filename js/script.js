
var app = new Vue (
    {
        el: '#root',
        data: {
            linkNav: ['HOME', 'COURSES', 'INSTRUCTORS', 'EVENTS', 'PAGES', 'ELEMENTS'],
            dotIndex: 1,
            dotReviews: 1,
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
            autoplayHeader: null,
            autoplayReviews: null,
            studentReviews:[
                {
                    name: 'Maria Contrada',
                    reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam, cum dolorem laborum corrupti dolore expedita minima quos exercitationem dolores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam, cum dolorem laborum corrupti dolore expedita minima quos exercitationem dolores?',
                    img: '1.png'
                },
                {
                    name: 'Joan Collins',
                    reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam, cum dolorem laborum corrupti dolore expedita minima quos exercitationem dolores? amet consectetur adipisicing elit. Architecto numquam, cum dolorem laborum corrupti dolore expedita minima quos exercitationem dolores?',
                    img: '2.png'
                },
                {
                    name: 'Matt Drag',
                    reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam, cum dolorem laborum corrupti dolore expedita minima quos exercitationem dolores? amet consectetur adipisicing elit. Architecto numquam, cum dolorem laborum corrupti dolore expedita minima quos exercitationem dolores?',
                    img: '3.png'
                },
            ]
            
        },
        mounted: function(){
            this.autoplayHeader = setInterval( ()=> {
                if ( this.dotIndex == 3){
                    this.dotIndex = 1;
                } else {
                    this.dotIndex++;
                }
                
            }, 2000);
            this.autoplayReviews = setInterval( ()=> {
                if ( this.dotReviews == 3){
                    this.dotReviews = 1;
                } else {
                    this.dotReviews++;
                }
                
            }, 2000);
        },
        methods:{
            sliderBack: function (dot){
                this.dotIndex = dot;
            }
        }
});