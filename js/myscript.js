

var app= new Vue({
  el:"#app",
  data:{
    logo:"img/logo-piccolo.png",
    todo:"",
    lista:[
    ]
  },
  methods: {
    aggiungi: function () {
      this.lista.push(this.todo);
    },

    rimuovi: function(item){
      this.lista.splice(this.lista.indexOf(item),1);
    }

  }
});
