const app = Vue.createApp({
    data() {
        return {
            name: 'Georgi',
            age: 37,
            imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
        }
    },
    methods: {
        randomNumber() {
            return Math.random()
        }
    },
})

app.mount('#assignment')