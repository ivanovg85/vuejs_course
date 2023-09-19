const app = Vue.createApp({
    data() {
        return {
            firstOutput: '',
            secondOutput: '',
            confirmedSecondOutput: ''
        }
    },
    methods: {
        showAlert() {
            alert('Hello there!!!')
        },
        updateFirstOutput(event) {
            this.firstOutput = event.target.value
        },
        updateSecondOutput(event) {
            this.secondOutput = event.target.value
        },
        showSecondOutput() {
            this.confirmedSecondOutput = this.secondOutput
        }
    },  
})

app.mount('#assignment')