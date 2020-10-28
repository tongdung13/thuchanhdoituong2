class Mobile {
    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.msg = '';
        this.inbox = [];
        this.outbox = [];
        this.status = true;
    }

  isOn() {
      return this.status;
  }

  tunrOff() {
      if (this.status == false){
          return this.status;
      }
  }

  changeBattery() {
      if(this.battery < 100){
          this.battery += 1;
      }
  }

   wrireMsg() {
     this.msg = msg;
   }

   takeMsg(msg) {
     this.inbox.push(msg);
   }

   senMsg(msg) {
     mobile.takeMsg(this.msg);
     this.outbox.push(this.msg);
   }
}
