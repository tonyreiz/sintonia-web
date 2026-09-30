<footer class="rodape" id="contato">
        <section class="rodape-grid">
            <div class="esquerda">
                <h3>Contate-nos</h3>
                <a href="#" data-placeholder-link target="_blank" rel="noopener noreferrer">contato@sintoniaweb.com</a>
                <a href="#" data-placeholder-link target="_blank" rel="noopener noreferrer">(11) 91234-5678</a>
            </div>

            <div class="centro" id="rota">
                <h3>Faça Seu Orçamento</h3>
                <form action="#" method="post">
                    <div class="form-campo">
                        <input type="text" name="nome" placeholder="Nome Completo" required>
                    </div>
                    <div class="form-contato">
                        <div class="form-campo">
                            <input type="email" name="email" placeholder="Email" required>
                        </div>
                        <div class="form-campo">
                            <input type="tel" name="fone" placeholder="Telefone" required>
                        </div>
                    </div>
                    <textarea name="mens" cols="30" rows="10" placeholder="Digite sua mensagem" required></textarea>
                    <button class="btn-form">Enviar</button>
                </form>
            </div>

            <div class="direita">
                <h3>Nosso Endereço</h3>
                <a href="#" data-placeholder-link target="_blank" rel="noopener noreferrer">Av. Marechal Tito, 1500 <br>
                    São Miguel
                    Paulista</a>
            </div>
        </section>

        <section class="linha-final">
            <p>© <?php $data = date('Y'); echo $data; ?> - Criado e Desenvolvido pela Agência <span>Sintonia Web</span> - Senac SMP</p>
        </section>
    </footer>