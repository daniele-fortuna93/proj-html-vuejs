
var app = new Vue (
    {
        el: '#root',
        data: {
            linkNav: ['HOME', 'COURSES', 'INSTRUCTORS', 'EVENTS', 'PAGES', 'ELEMENTS'],
            dotIndex: '3'
        },
        methods:{
            sliderBack: function (dot){
                this.dotIndex = dot;
            }
        }
});