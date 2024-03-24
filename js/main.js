const App = {
    components: {
    },
    data(){
        return{
            slides:[
                {src:'/assets/pizza1.png'},
                {src:'/assets/pizza2.png'},
                {src:'/assets/pizza3.png'},
                {src:'/assets/pizza4.png'},
            ],
            themMode: 'светлая',
            page: 'main',
            warnings:[
                false,
                false,
                false,
                false,
                false,
                false
            ],
            modWindowEnable: false,
        }
    },
    methods:{
        changeThem(){
            if(this.themMode === 'светлая')
            {
                this.themMode = 'тёмная';
            }
            else
            {
                this.themMode = 'светлая';
            }
        },
        checkForm(page){
            var a = document.querySelectorAll(".form__input");
            if(page === 0)
            {
                for(let i = 1; i < 3; i++)
                {
                    if(a[i].value === '')
                    {
                        this.warnings[i] = true;
                        a[i].style = "border-bottom: 1px solid rgb(200, 0, 0)";
                        a[i].onclick = function(){
                            a[i].style = "border-bottom: 1px solid rgb(198, 198, 198)";
                        };
                    }
                    else
                    {
                        a[i].style = "border-bottom: 1px solid rgb(198, 198, 198)";
                    }
                }
            }
            else if(page === 1)
            {
                for(let i = 3; i < a.length; i++)
                {
                    if(a[i].value === '')
                    {
                        this.warnings[i] = true;
                        a[i].style = "border-bottom: 1px solid rgb(200, 0, 0)";
                        a[i].onclick = function(){
                            a[i].style = "border-bottom: 1px solid rgb(198, 198, 198)";
                        };
                    }
                    else
                    {
                        a[i].style = "border-bottom: 1px solid rgb(198, 198, 198)";
                    }
                }
            }
            else if(page === 2)
            {
                for(let i = 0; i < a.length; i++)
                {
                    this.warnings[i] = false;
                    a[i].style = "border-bottom: 1px solid rgb(198, 198, 198)";
                }
            }
            else
            {
                if(a[0].value === '')
                {
                    this.warnings[0] = true;
                    a[0].style = "border-bottom: 1px solid rgb(200, 0, 0)";
                    a[0].onclick = function(){
                        a[0].style = "border-bottom: 1px solid rgb(198, 198, 198)";
                    };
                }
                else
                {
                    a[0].style = "border-bottom: 1px solid rgb(198, 198, 198)";
                }
            }
        }
    }
}

Vue.createApp(App).mount('#app');