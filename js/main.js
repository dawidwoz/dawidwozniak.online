var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var config = JSON.parse(this.responseText);
        const app = Vue.createApp({
            data() {
                return {
                    config
                }
            },
            methods: {
                returnImg(id) {
                    return "./img/" + id;
                }
            }
        });
       app.mount('#app');
    }
};
xmlhttp.open("GET", "data/data.json", true);
xmlhttp.send();

    
