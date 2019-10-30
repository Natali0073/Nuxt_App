<template>
  <div>
    <h1>Hi</h1>
    <button @click="createEvent">click</button>
  </div>
</template>

<script>

  export default {
    head() {
      return {
        script: [{src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'}],
      };
    },
    methods: {
      createEvent: function (e) {

        hcap.power.getPowerMode({
          "onSuccess": function (s) {
            var div = document.createElement('div');
            div.innerText = 'TEST DIV';
            div.style.color = 'white';
            div.style.position = 'absolute';
            div.style.background = 'red';
            div.style.bottom = '100px';
            div.style.top = '0';
            document.body.appendChild(div);
            console.log("onSuccess power mode " + s.mode);
          },
          "onFailure": function (f) {
            var div = document.createElement('div');
            div.innerText = 'TEST DIV';
            div.style.color = 'white';
            div.style.position = 'absolute';
            div.style.background = 'blue';
            div.style.bottom = '100px';
            div.style.top = '0';
            document.body.appendChild(div);
            console.log("onFailure : errorMessage = " + f.errorMessage);
          }
        });

//        console.log('click');
//        var event = new Event('build');
//        document.body.className = 'custom-class';
//        document.body.className = 'test-class';
////        setTimeout(this.sayHi(), 1000);
////        var scope = this;
////        document.addEventListener('build', function (e) {
////          console.log('build event');
////          setTimeout(scope.sayHi(), 1000);
////        }, false);
//        document.dispatchEvent(event);
      },
    }
  }
</script>
