var app = new Vue({
    el: '#mapApp',
    data: {
        peoples: '',

    },
    created() {
        axios
            .get("../asset/json/people.json")
            .then(val => {
                this.peoples = val.data
            });
    },
    methods: {
        picID: function (index) {
            return "point" + index;
        },
        showPic: function (index) {
            for (let i = 0; i < this.peoples.length; i++) {
                if (i == index) {
                    this.peoples[i].isShow = true;
                } else {
                    this.peoples[i].isShow = false;
                }
            }
        },

    }
})