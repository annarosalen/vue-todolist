

var app= new Vue({
  el:"#app",
  data:{
    logo:"img/logo-grande.png",
    newtodo:"",
    lista:[
    ],
    check: ""
  },
  methods: {
    aggiungi: function () {
      this.lista.push(this.newtodo);
      this.newtodo = "";
    },

    rimuovi: function(item){
      this.lista.splice(this.lista.indexOf(item),1);
    },

    enterTodo: function(){
      this.lista.push(this.newtodo);
      this.newtodo = "";
    },

    toggleDone: function(){
      this.check  = !this.check;
      // if (this.check==="done") {
      //   this.check = "";
      // }else{
      //   this.check="done";
      // }
    }

  },

  //DA RIVEDERE
  // directives: {
  //       "todo-focus": function(el, binding) {
  //         if (binding.value) {
  //           el.focus();
  //         }
  //       }
  //     }
});
