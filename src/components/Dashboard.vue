
<template>
    <div>
        Logado...
    </div>
</template>

<script>

export default {
    
    data () {
        return {
            menuPerfil: false,
            }
    },
    methods: {
        abrir() {
            this.menuPerfil = this.menuPerfil == false ? true : false;
        }
    }
  
}
</script>