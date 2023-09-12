let game = {
    // array com todas as tecnologias
        techs: ['bootstrap',
            'css',
            'electron',
            'firebase',
            'html',
            'javascript',
            'jquery',
            'mongo',
            'node',
            'react',],
    
    // quando abre o documento executa a funcao startGame que cria as cartas e bota dentro de cards, depois executa a funcao shuffleCards que recebe como argumento o array com as 20 cartas pra embaralhar ele depois.
    cards: null,
    // Virar duas cartas, checar se sao iguais, se sao iguais permanecem viradas, se nao depois de um tempo elas viram pra baixo.
    // Toda vez que clicar em uma carta, marca e guarda ela, depois que clicar na segunda faz a msm coisa, depois checa se sao iguais, se nao forem vira de cabeca pra baixo
    // se a carta tiver virada ela nao pode receber mais um clique
    // nao pode selecionar mais que 2 cartas

    // lockmode: depois que seleciona a segunda carta entra em lock mode
    lockMode: false,
    firstCard: null,
    secondCard: null,
    
    setCard: function (id) {

        // retorna todas as cartas que tiverem o id igual ao id que eu cliquei la
        // retorna um array e ai pega so o primeiro elemento
        let card = this.cards.filter(card => card.id === id)[0];
        // checa se a carta foi virada
        if(card.flipped || this.lockMode){
            return false;
        }
        if(!this.firstCard){
            this.firstCard = card;
            this.firstCard.flipped = true
            return true;

        }else{
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true
            return true
        }
    },
    checkMatch: function () {
        if(!this.firstCard || !this.secondCard){
            return false
        }
        return this.firstCard.icon === this.secondCard.icon
    },
    clearCards: function(){
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;

    },
    unflipCards(){
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },
    checkGameOver(){
        return this.cards.filter(card => !card.flipped).length == 0;
    },
    
    
    // A primeira coisa que se deve fazer eh ter um modelo para as cartas

    // Eh preciso ter duas cartas pra cada uma das tecnologias
    createCardsFromTechs: function () {
        this.cards = [];


        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech))

        });


        // a funcao flatmap tambem retorna um array mas se cada um dos elementos do array for um array ele desmembra isso
        this.cards = this.cards.flatMap(pair => pair)
        this.shuffleCards();
        return this.cards
    },
    createPairFromTech: function (tech) {
        // retorna um array com o par
        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }, {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }]

    },
    createIdWithTech: function (tech) {
        return tech + parseInt(Math.random() * 1000)
    },
    // embaralhamento
    shuffleCards: function (cards) {
        let currentIndex = this.cards.length;

        let randomIndex = 0;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]


        }
    },
}