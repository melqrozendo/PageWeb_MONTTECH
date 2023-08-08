const app = {
    data(){
        return {
            hardware: " ",
            produto: " "
        }
    },
    methods: {
        submitForm(e){

            e.preventDefault();
            this.hardware = this.input_hard;
            console.log(this.hardware);

            var foto1 = document.querySelector('#foto1');
            var foto2 = document.querySelector('#foto2');
            var foto3 = document.querySelector('#foto3');
            var foto4 = document.querySelector('#foto4');

            var erro = document.querySelector('#msg-erro');

            if(this.hardware == 'computador' || this.hardware == 'Computador'){
                //imagem de pcs
                //console.log('pc');
                foto1.innerHTML = '<img src="img/pc/pc_01.jpg"><div id="preco" class="preco"><p class="descricao">Computador 01</p><p class="preco">R$ 1.000,00</p></div>';
                foto2.innerHTML = '<img src="img/pc/pc_02.jpg"><div id="preco" class="preco"><p class="descricao">Computador 02</p><p class="preco">R$ 1.200,00</p></div>';
                foto3.innerHTML = '<img src="img/pc/pc_03.jpg"><div id="preco" class="preco"><p class="descricao">Computador 03</p><p class="preco">R$ 1.400,00</p></div>';
                foto4.innerHTML = '<img src="img/pc/pc_04.jpg"><div id="preco" class="preco"><p class="descricao">Computador 04</p><p class="preco">R$ 1.600,00</p></div>';

                // erro.style.cssText = "display: none";

            }else if(this.hardware == 'processador' || this.hardware == 'Processador' ){
                //imagem de processador
                //console.log('processador');
                foto1.innerHTML = '<img src="img/processador/processador_01.jpg"><div id="preco" class="preco"><p class="descricao">Processador 01</p><p class="preco">R$ 1.000,00</p></div>';
                foto2.innerHTML = '<img src="img/processador/processador_02.jpg"><div id="preco" class="preco"><p class="descricao">Processador 02</p><p class="preco">R$ 1.000,00</p></div>';
                foto3.innerHTML = '<img src="img/processador/processador_03.jpg"><div id="preco" class="preco"><p class="descricao">Processador 03</p><p class="preco">R$ 1.000,00</p></div>';
                foto4.innerHTML = '<img src="img/processador/processador_04.jpg"><div id="preco" class="preco"><p class="descricao">Processador 04</p><p class="preco">R$ 1.000,00</p></div>';

                // erro.style.cssText = "display: none";

            }else if(this.hardware == 'placa de vídeo' || this.hardware == 'Placa'){
                //imagem de placa de video
                //console.log('placa de video');
                foto1.innerHTML = '<img src="img/placa_de_video/placa_de_video_01.jpg"><div id="preco" class="preco"><p class="descricao">Placa de Vídeo 01</p><p class="preco">R$ 1.000,00</p></div>';
                foto2.innerHTML = '<img src="img/placa_de_video/placa_de_video_02.jpg"><div id="preco" class="preco"><p class="descricao">Placa de Vídeo 02</p><p class="preco">R$ 1.000,00</p></div>';
                foto3.innerHTML = '<img src="img/placa_de_video/placa_de_video_03.jpg"><div id="preco" class="preco"><p class="descricao">Placa de Vídeo 03</p><p class="preco">R$ 1.000,00</p></div>';
                foto4.innerHTML = '<img src="img/placa_de_video/placa_de_video_04.jpg"><div id="preco" class="preco"><p class="descricao">Placa de Vídeo 04</p><p class="preco">R$ 1.000,00</p></div>';

                // erro.style.cssText = "display: none";

            }else if(this.hardware == 'memória ram' || this.hardware == 'Memória' || this.hardware == 'Ram'){
                //imagem de memoria ram
                //console.log('memoria ram');
                foto1.innerHTML = '<img src="img/ram/ram_01.jpg"><div id="preco" class="preco"><p class="descricao">Memória RAM 01</p><p class="preco">R$ 1.000,00</p></div>';
                foto2.innerHTML = '<img src="img/ram/ram_02.jpg"><div id="preco" class="preco"><p class="descricao">Memória RAM 02</p><p class="preco">R$ 1.000,00</p></div>';
                foto3.innerHTML = '<img src="img/ram/ram_03.jpg"><div id="preco" class="preco"><p class="descricao">Memória RAM 03</p><p class="preco">R$ 1.000,00</p></div>';
                foto4.innerHTML = '<img src="img/ram/ram_04.jpg"><div id="preco" class="preco"><p class="descricao">Memória RAM 04</p><p class="preco">R$ 1.000,00</p></div>';

                // erro.style.cssText = "display: none";

            }else{
                console.log('produto não encontrado!');
                this.produto = "Produto não encontrado!";
            }
        }
    }
}

Vue.createApp(app).mount('#app'); 

var foto1 = document.querySelector('#foto1');
var foto2 = document.querySelector('#foto2');
var foto3 = document.querySelector('#foto3');
var foto4 = document.querySelector('#foto4');

function computador(){

    foto1.innerHTML = '<img src="img/pc/pc_01.jpg"><div id="preco" class="preco"><p class="descricao">Computador 01</p><p class="preco">R$ 1.000,00</p></div>';
    foto2.innerHTML = '<img src="img/pc/pc_02.jpg"><div id="preco" class="preco"><p class="descricao">Computador 02</p><p class="preco">R$ 1.200,00</p></div>';
    foto3.innerHTML = '<img src="img/pc/pc_03.jpg"><div id="preco" class="preco"><p class="descricao">Computador 03</p><p class="preco">R$ 1.400,00</p></div>';
    foto4.innerHTML = '<img src="img/pc/pc_04.jpg"><div id="preco" class="preco"><p class="descricao">Computador 04</p><p class="preco">R$ 1.600,00</p></div>';

}

function processador(){

    foto1.innerHTML = '<img src="img/processador/processador_01.jpg"><div id="preco" class="preco"><p class="descricao">Processador 01</p><p class="preco">R$ 1.000,00</p></div>';
    foto2.innerHTML = '<img src="img/processador/processador_02.jpg"><div id="preco" class="preco"><p class="descricao">Processador 02</p><p class="preco">R$ 1.000,00</p></div>';
    foto3.innerHTML = '<img src="img/processador/processador_03.jpg"><div id="preco" class="preco"><p class="descricao">Processador 03</p><p class="preco">R$ 1.000,00</p></div>';
    foto4.innerHTML = '<img src="img/processador/processador_04.jpg"><div id="preco" class="preco"><p class="descricao">Processador 04</p><p class="preco">R$ 1.000,00</p></div>';
}

function placa(){

    foto1.innerHTML = '<img src="img/placa_de_video/placa_de_video_01.jpg"><div id="preco" class="preco"><p class="descricao">Placa de Vídeo 01</p><p class="preco">R$ 1.000,00</p></div>';
    foto2.innerHTML = '<img src="img/placa_de_video/placa_de_video_02.jpg"><div id="preco" class="preco"><p class="descricao">Placa de Vídeo 02</p><p class="preco">R$ 1.000,00</p></div>';
    foto3.innerHTML = '<img src="img/placa_de_video/placa_de_video_03.jpg"><div id="preco" class="preco"><p class="descricao">Placa de Vídeo 03</p><p class="preco">R$ 1.000,00</p></div>';
    foto4.innerHTML = '<img src="img/placa_de_video/placa_de_video_04.jpg"><div id="preco" class="preco"><p class="descricao">Placa de Vídeo 04</p><p class="preco">R$ 1.000,00</p></div>';
}

function ram(){

    foto1.innerHTML = '<img src="img/ram/ram_01.jpg"><div id="preco" class="preco"><p class="descricao">Memória RAM 01</p><p class="preco">R$ 1.000,00</p></div>';
    foto2.innerHTML = '<img src="img/ram/ram_02.jpg"><div id="preco" class="preco"><p class="descricao">Memória RAM 02</p><p class="preco">R$ 1.000,00</p></div>';
    foto3.innerHTML = '<img src="img/ram/ram_03.jpg"><div id="preco" class="preco"><p class="descricao">Memória RAM 03</p><p class="preco">R$ 1.000,00</p></div>';
    foto4.innerHTML = '<img src="img/ram/ram_04.jpg"><div id="preco" class="preco"><p class="descricao">Memória RAM 04</p><p class="preco">R$ 1.000,00</p></div>';
}

