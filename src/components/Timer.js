export default class Timer {

    constructor($root){
        this.countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
        this.timer = '';
        this.distance = null;
        this.$root = document.querySelector($root);
        this.startTimer();
    }




    startTimer(){

        let x = setInterval(() => {

            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            this.distance = this.countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            this.$root.innerHTML = `${days}d: ${hours}:${minutes}:${seconds}`;

            // If the count down is over, write some text

            if (this.distance < 0) {
                clearInterval(x);
                this.$root.innerHTML = "EXPIRED";
            }

        }, 1000);


        console.log("this.timer", this.timer);


    }

}