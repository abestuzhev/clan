export default class Timer {

    constructor(){
        this.countDownDate = new Date("Jan 16, 2021 23:59:00").getTime();
        this.timer = '';
        this.distance = null;
        this.startTimer();
        let x = '';
    }

    // start(){
    //     setInterval(() => {
    //         this.state.time++;
    //         // this.render(this.state.time);
    //     }, 1000);
    //
    // }


    initTimer(){

    }



    startTimer(){


        let x = setInterval(() => {

            // Get today's date and time
            let now = new Date().getTime();
            let $time = document.querySelector('.c-timer');

            // Find the distance between now and the count down date
            this.distance = this.countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"

            // If the count down is over, write some text
            // console.log(`${days} дней ${hours}:${minutes}:${seconds}`);

            const dayText = (days == "2" || days == "3" || days == "4") ? "дня" : "дней";

            const redactTimer = (elem) => {
                return (elem >= 10 ) ? elem : "0" + elem;
            };

            hours = redactTimer(hours);
            minutes = redactTimer(minutes);
            seconds = redactTimer(seconds);

            if($time) {
                $time.innerHTML = `<span>До конца акции: ${days} ${dayText} ${hours}:${minutes}:${seconds}</span>`;

            }

            if (this.distance < 0) {
                clearInterval(x);
                $time.innerHTML = "<span>Акция закончилась!</span>";
            }

        }, 1000);

        return x;


        // console.log("this.timer", this.timer);
    }

    destroyTimer(){
        clearInterval();
    }

    // render(time){
    //     return `<div class="header-timer">${time}</div>`;
    //     // return this.startTimer();
    //     console.log("time", time)
    // }

}