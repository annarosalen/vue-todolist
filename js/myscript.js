

var app= new Vue({
  el:"#app",
  data:{
    logo:"img/logo-grande.png",
    todo:"",
    lista:[
    ]
  },
  methods: {
    aggiungi: function () {
      this.lista.push(this.todo);
      this.todo = "";
    },

    rimuovi: function(item){
      this.lista.splice(this.lista.indexOf(item),1);
    },

    enterTodo: function(){
      this.lista.push(this.todo);
      this.todo = "";
    },


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
