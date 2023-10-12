const app = Vue.createApp({
    data() {
        return {
            number: 0,
            message: ''
        }
    },
    computed: {
        result() {
            if (this.number < 37) {
                return 'Not there yet!'
            } else if (this.number > 37) {
                return 'Too much!!!'
            } else {
                return this.number
            }
        }
    },
    watch: {
        result() {
            const that = this
            setTimeout(function() {
                that.number = 0
            }, 5000)
        }
    },
    methods: {
        addNumber(num) {
            this.number += num
        }
    },
})

app.mount('#assignment')