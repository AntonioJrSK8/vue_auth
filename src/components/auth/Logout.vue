<template>
    <div class="container">
        <div class="text-center row">
            Efetuando logout...
        </div>
    </div>
</template>

<script type="text/javascript">

    import store from '../../store';
    
    export default {
        mounted(){
            setTimeout(() => {
                this.logout();
            },2000)
        },
        methods: {
            logout(){
                store.commit('unauthenticated');
                this.$router.push({name: 'auth.login'});
            }
        }
    }
</script>