const app1={
    data(){
        return{
            mensaje:'',
            frutas:[{nombre:'Naranja',cantidad:0,preciounitario:5,total:0}],
            nuevaFruta:'',
            nuevaCantidad:0,
            nuevoPrecio:0.0,
            iva:0.16
        }
    },
    computed:{
        calcularSubtotal(){
            let subtotal=0;
            for (let fruta of this.frutas){
                subtotal+=fruta.cantidad*fruta.preciounitario;
            }
            return subtotal;
        },
        calcularIVA(){
            return this.calcularSubtotal*this.iva;
        },
        calcularTotal(){
            return this.calcularSubtotal+this.calcularIVA;
        }
    },
    methods:{
        montoFruta(i){
            this.frutas[i].total=this.frutas[i].cantidad*this.frutas[i].preciounitario;
            return this.frutas[i].total;
        },
        agregar(){
            if (this.nuevaFruta){
                this.frutas.push({
                    nombre:this.nuevaFruta,
                    cantidad:this.nuevaCantidad||0,
                    preciounitario:this.nuevoPrecio
                });
                this.nuevaFruta='';
                this.nuevaCantidad=0;
                this.nuevoPrecio=0;
            }
        }
    }
};
Vue.createApp(app1).mount('#seccion');