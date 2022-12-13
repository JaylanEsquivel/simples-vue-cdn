const MyNameApp = {
    data() {
        return {
            name: "jaylan",
            age: 25,
            input_name: ''
        }
    },
    methods:{ 
        submitForm(e) { 
            e.preventDefault();
            console.log(this.input_name);

            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");