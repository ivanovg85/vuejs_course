const app = Vue.createApp({
 data() {
    return {
        inputClass: '',
        isVisible: true, 
        inputBackgroundColor: ''
    }
 },
 computed: {
    paragraphClasses() {
        return {
            user1: this.inputClass === 'user1',
            user2: this.inputClass === 'user2',
            visible: this.isVisible,
            hidden: !this.visible
        }
    }
 },
 methods: {
    toggleVisible() {
        this.isVisible = !this.isVisible
    }
 },
})

app.mount('#assignment')