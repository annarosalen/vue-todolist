

var app= new Vue({
  el:"#app",
  data:{
    logo:"img/logo-grande.png",
    title: "Your ToDo List",
    newtodo:"",
    lista:[

    ],
  },
  methods: {
    aggiungi: function () {
      this.lista.push({name: this.newtodo, check: false});
      this.newtodo = "";

    },

    rimuovi: function(item){
      this.lista.splice(this.lista.indexOf(item),1);
    },

    enterTodo: function(){
      this.lista.push({name: this.newtodo, check: false});
      this.newtodo = "";
    },

    toggleDone: function(item){
      item.check = !item.check;
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
