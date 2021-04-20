
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
            autoplayCourses: null,
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
            ],
            indexChoose: 0,
            listChoose:[
                {
                    name: 'What We Do',
                    title: 'Learning Possibilities',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque deleniti nobis magni iure cupiditate nostrum fugit libero eum quibusdam consequuntur optio expedita repellendus, distinctio porro harum, nostrum fugit libero eum quibusdam consequuntur ipsam obcaecati amet? Ea.',
                    services: [
                        'We enrich lives through learning.',
                        'Maximizing potential through individual attention.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect'
                    ],
                    img: '1.png'
                },
                {
                    name: 'Degree Program',
                    title: 'Degree Program',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque deleniti nobis magni iure cupiditate nostrum cupiditate nostrum fugit libero eum quibusdam consequuntur optio expedita repellendus, distinctio cupiditate nostrum fugit libero eum quibusdam consequuntur optio expedita repellendus, distinctio cupiditate nostrum fugit libero eum quibusdam consequuntur optio expedita repellendus, distinctiofugit libero eum quibusdam consequuntur optio expedita repellendus, t? Ea.',
                    services: [
                        'We enrich lives through learning.',
                        'Maximizing potential through individual attention.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect'
                    ],
                    img: '2.png'
                },
                {
                    name: 'Career Achievements',
                    title: 'Career Achievements',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque deleniti nobis magni iure cupiditate nostrum fugit libero eum quibusdam consequuntur optio expedita repellendus, distinctio porro harum, ipsam obcaecati amet? Ea.',
                    services: [
                        'We enrich lives through learning.',
                        'Maximizing potential through individual attention.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect'
                    ],
                    img: '3.png'
                },
                {
                    name: 'Personal Management',
                    title: 'Personal Management',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque deleniti nobis magni iure equuntur optio expedita repellendus, distinctio porro harum, ipsam obcaecati amet? Ea.',
                    services: [
                        'We enrich lives through learning.',
                        'Maximizing potential through individual attention.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect'
                    ],
                    img: '4.png'
                },
                {
                    name: 'Steps To Success',
                    title: 'Steps To Success',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque deleniti nobis magni iure cupiditate cupiditate nostrum fugit libero eum quibusdam consequuntur optio expedita repellendus, distinctio cupiditate nostrum fugit libero eum quibusdam consequuntur optio expedita repellendus, distinctionostrum fugit libero eum quibusdam consequuntur optio expedita repellendus, distinctio porro harum, ipsam obcaecati amet? Ea.',
                    services: [
                        'We enrich lives through learning.',
                        'Maximizing potential through individual attention.',
                        'The trusted name for specialized training.',
                    ],
                    img: '5.png'
                },
                {
                    name: 'Knowledge Transfer',
                    title: 'Knowledge Transfer',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque deleniti nobis magni iure cupiditate nostrum fugit libero eum quibusdam consequuntur optio expedita repellendus, distinctio porro harum, cupiditate nostrum fugit libero eum quibusdam consequuntur optio expedita repellendus, distinctio ipsam obcaecati amet? Ea.',
                    services: [
                        'We enrich lives through learning.',
                        'Maximizing potential through individual attention.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect',
                        'People teach. People learn. This is where they connect'
                    ],
                    img: '6.png'
                }
            ],
            indexCourses: 0,
            listCourses: [
                [
                    {
                        title: 'Android Developer',
                        name: 'David Sanders',
                        img: '4',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos eius atque magnam eum natus ad sunt ut impedit vel qui, debitis maiores eveniet, assumenda temporibus voluptate sequi aliquid iusto?',
                        type: 'Programming',
                        price: 'Free'
                    },
                    {
                        title: 'Web Designing',
                        name: 'Jennifer Powell',
                        img: '5',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos eius atque magnam eum natus ad sunt ut impedit vel qui, debitis maiores eveniet, assumenda temporibus voluptate sequi aliquid iusto?',
                        type: 'Programming',
                        price: 'Free'
                    },
                    {
                        title: 'Financial Modeling',
                        name: 'Edward Bowman',
                        img: '6',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos eius atque magnam eum natus ad sunt ut impedit vel qui, debitis maiores eveniet, assumenda temporibus voluptate sequi aliquid iusto?',
                        type: 'Business',
                        price: '$20'
                    }
                ],
                [
                    {
                        title: 'Android Developer',
                        name: 'David Sanders',
                        img: '7',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos eius atque magnam eum natus ad sunt ut impedit vel qui, debitis maiores eveniet, assumenda temporibus voluptate sequi aliquid iusto?',
                        type: 'Programming',
                        price: 'Free'
                    },
                    {
                        title: 'Web Designing',
                        name: 'Jennifer Powell',
                        img: '8',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos eius atque magnam eum natus ad sunt ut impedit vel qui, debitis maiores eveniet, assumenda temporibus voluptate sequi aliquid iusto?',
                        type: 'Programming',
                        price: 'Free'
                    },
                    {
                        title: 'Basic Marketing',
                        name: 'Edward Bowman',
                        img: '9',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos eius atque magnam eum natus ad sunt ut impedit vel qui, debitis maiores eveniet, assumenda temporibus voluptate sequi aliquid iusto?',
                        type: 'Business',
                        price: '$20'
                    }
                ],
                [
                    {
                        title: 'Android Developer',
                        name: 'Jennie King',
                        img: '10',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos eius atque magnam eum natus ad sunt ut impedit vel qui, debitis maiores eveniet, assumenda temporibus voluptate sequi aliquid iusto?',
                        type: 'Programming',
                        price: '$50'
                    },
                    {
                        title: 'Python for Everybody',
                        name: 'Jennifer Powell',
                        img: '11',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos eius atque magnam eum natus ad sunt ut impedit vel qui, debitis maiores eveniet, assumenda temporibus voluptate sequi aliquid iusto?',
                        type: 'Programming',
                        price: 'Free'
                    },
                    {
                        title: 'Human-Centered Design',
                        name: 'Preston Marshall',
                        img: '12',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos eius atque magnam eum natus ad sunt ut impedit vel qui, debitis maiores eveniet, assumenda temporibus voluptate sequi aliquid iusto?',
                        type: 'Business',
                        price: '$40'
                    }
                ]


            ],
            listAffiliates: [
                '1.png',
                '2.png',
                '3.png',
                '4.png',
                '5.png'
            ]
            
        },
        mounted: function(){
            this.autoplayHeader = setInterval( ()=> {
                if ( this.dotIndex == 3){
                    this.dotIndex = 1;
                } else {
                    this.dotIndex++;
                }
                
            }, 3000);
            this.autoplayReviews = setInterval( ()=> {
                if ( this.dotReviews == 3){
                    this.dotReviews = 1;
                } else {
                    this.dotReviews++;
                }
                
            }, 3000);
            this.autoplayCourses = setInterval( ()=> {
                if ( this.indexCourses == 2){
                    this.indexCourses = 0;
                } else {
                    this.indexCourses++;
                }
                
            }, 3000);
        },
        methods:{
            sliderBack: function (dot){
                this.dotIndex = dot;
            }
        }
});