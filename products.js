const PRODUTOS = [
  {
    id: 1,
    nome: "Bruschetta Tradicional ao Pomodoro",
    descricao: "Fatias de pão italiano rústico tostadas com azeite extravirgem, tomates frescos marinados no manjericão e redução balsâmica.",
    preco: 34.90,
    categoria: "Entradas"
  },
  {
    id: 2,
    nome: "Carpaccio Clássico de Mignon",
    descricao: "Finas lâminas de filé mignon cru, molho de alcaparras com mostarda Dijon, lascas de queijo parmesão reggiano e rúcula fresca.",
    preco: 52.00,
    categoria: "Entradas"
  },
  {
    id: 3,
    nome: "Dadinhos de Tapioca com Geleia de Pimenta",
    descricao: "Cubos crocantes de queijo coalho com tapioca dourados à perfeição, acompanhados de geleia artesanal de pimenta agridoce.",
    preco: 38.50,
    categoria: "Entradas"
  },
  {
    id: 4,
    nome: "Ceviche Peruano de Robalo",
    descricao: "Cubos de robalo fresco marinados em leche de tigre cítrico, cebola roxa em fios, milho crocante, coentro e lâminas de batata-doce.",
    preco: 58.00,
    categoria: "Entradas"
  },
  {
    id: 5,
    nome: "Tartar de Salmão com Abacate",
    descricao: "Salmão fresco picado na ponta da faca com cubos de avocado, gergelim tostado, cebolinha e emulsão de azeite de gergelim.",
    preco: 56.00,
    categoria: "Entradas"
  },
  {
    id: 6,
    nome: "Arancini al Funghi com Aioli Trufado",
    descricao: "Bolinhos italianos de risoto de cogumelos recheados com muçarela de búfala derretida, servidos com maionese artesanal de alho trufado.",
    preco: 42.00,
    categoria: "Entradas"
  },
  {
    id: 7,
    nome: "Burrata Cremosa ao Pesto & Confit",
    descricao: "Burrata artesanal fresca servida com tomates-cereja confitados no azeite de oliva, pesto de manjericão fresco e focaccia da casa.",
    preco: 64.00,
    categoria: "Entradas"
  },
  {
    id: 8,
    nome: "Coxinha Gourmet de Pato com Aioli de Laranja",
    descricao: "Massa finíssima de batata recheada com ragu de pato desfiado lentamente em ervas finas, servida com aioli cítrico de laranja.",
    preco: 44.00,
    categoria: "Entradas"
  },
  {
    id: 9,
    nome: "Casquinha de Siri Baiana Especial",
    descricao: "Carne de siri pura refogada no leite de coco, azeite de dendê e ervas aromáticas, gratinada com farofinha crocante de dendê e parmesão.",
    preco: 39.00,
    categoria: "Entradas"
  },
  {
    id: 10,
    nome: "Croquete de Costela Bovina Defumada",
    descricao: "Croquetes recheados com costela bovina cozida por 12 horas, empanados na farinha panko crocante com mostarda escura rústica.",
    preco: 41.50,
    categoria: "Entradas"
  },
  {
    id: 11,
    nome: "Camembert Empanado ao Mel Trufado",
    descricao: "Queijo camembert inteiro em crosta de castanhas crocantes, servido morno com fio generoso de mel trufado e torradas finas.",
    preco: 68.00,
    categoria: "Entradas"
  },
  {
    id: 12,
    nome: "Polvo à Vinagrete com Torradas Rústicas",
    descricao: "Tentáculos macios de polvo marinados em vinagrete suave com azeite extravirgem, pimentões coloridos e ervas frescas.",
    preco: 62.00,
    categoria: "Entradas"
  },
  {
    id: 13,
    nome: "Tábua de Frios & Queijos Selecionados",
    descricao: "Seleção premium de presunto cru tipo Parma, salame italiano, queijo gouda maturado, queijo brie, azeitonas e castanhas.",
    preco: 79.00,
    categoria: "Entradas"
  },
  {
    id: 14,
    nome: "Lula à Dorê com Molho Tártaro da Casa",
    descricao: "Anéis de lula fresca temperados no limão siciliano, empanados no fubá e panko, acompanhados de molho tártaro cremoso e limão.",
    preco: 54.00,
    categoria: "Entradas"
  },
  {
    id: 15,
    nome: "Guacamole Artesanal com Tortilhas de Milho",
    descricao: "Abacate fresco amassado com cebola roxa, coentro, limão taiti e cubos de tomate, servido com tortilhas de milho estaladiças.",
    preco: 36.00,
    categoria: "Entradas"
  },
  {
    id: 16,
    nome: "Pastelzinho Gourmet de Camarão e Catupiry",
    descricao: "Porção de minipastéis dourados e super recheados com camarões refogados no alho e legítimo Catupiry cremoso.",
    preco: 45.00,
    categoria: "Entradas"
  },
  {
    id: 17,
    nome: "Bolinho de Bacalhau da Serra",
    descricao: "Receita tradicional portuguesa à base de lascas nobres de bacalhau gadus morhua e batata selecionada com azeite de oliva virgem.",
    preco: 48.00,
    categoria: "Entradas"
  },
  {
    id: 18,
    nome: "Pastel de Brie com Geleia de Damasco",
    descricao: "Minipastéis com massa leve e estaladiça, recheados de queijo brie derretido e calda aveludada de damascos turcos.",
    preco: 43.00,
    categoria: "Entradas"
  },
  {
    id: 19,
    nome: "Shimeji na Manteiga com Shoyu e Cebolinha",
    descricao: "Cogumelos shimeji frescos salteados na manteiga clarified, finalizados com molho shoyu premium, saquê mirin e cebolinha verde.",
    preco: 37.00,
    categoria: "Entradas"
  },
  {
    id: 20,
    nome: "Queijo Coalho Grelhado ao Melaço de Cana",
    descricao: "Espetos de queijo coalho artesanal dourados na grelha, finalizados com melaço de cana da serra e raspas de limão capeta.",
    preco: 32.00,
    categoria: "Entradas"
  },
  {
    id: 21,
    nome: "Sticks de Muçarela com Molho Pomodoro",
    descricao: "Palitos crocantes de queijo muçarela empanados em ervas da Toscana, servidos quentes com molho pomodoro rústico picante.",
    preco: 35.00,
    categoria: "Entradas"
  },
  {
    id: 22,
    nome: "Mix de Bruschettas Especiais",
    descricao: "Trio exclusivo com 1 bruschetta de pomodoro, 1 bruschetta de brie com parma e 1 bruschetta de cogumelos ao gorgonzola.",
    preco: 46.00,
    categoria: "Entradas"
  },
  {
    id: 23,
    nome: "Kibe Cru com Coalhada Seca e Pão Sírio",
    descricao: "Carne bovina magra nobre temperada com hortelã fresca e especiarias árabes, acompanhada de coalhada artesanal e pão sírio quentinho.",
    preco: 47.00,
    categoria: "Entradas"
  },
  {
    id: 24,
    nome: "Carpaccio de Polvo com Vinagrete Cítrico",
    descricao: "Lâminas tenras de polvo cozido a vácuo, finalizadas com flor de sal, azeite de ervas, páprica defumada e brotos frescos.",
    preco: 69.00,
    categoria: "Entradas"
  },
  {
    id: 25,
    nome: "Cogumelos Paris Recheados com Gorgonzola",
    descricao: "Grandes cogumelos frescos assados no forno com recheio cremoso de gorgonzola, nozes picadas e farofinha de panko.",
    preco: 46.50,
    categoria: "Entradas"
  },
  {
    id: 26,
    nome: "Tartar de Atum com Crispy de Alho-poró",
    descricao: "Atum vermelho fresco picado com toques de wasabi, molho ponzu de laranja e cobertura de alho-poró dourado bem crocante.",
    preco: 59.00,
    categoria: "Entradas"
  },
  {
    id: 27,
    nome: "Camarão Crocante no Panko com Sweet Chilli",
    descricao: "Camarões médios limpos empanados em crocante panko japonês, acompanhados de molho tailandês sweet chilli agridoce.",
    preco: 65.00,
    categoria: "Entradas"
  },
  {
    id: 28,
    nome: "Pão de Alho Especial com Parmesão Gratinado",
    descricao: "Baguete artesanal recheada com pasta de alho assado suave, requeijão cremoso e crosta dourada de queijo parmesão.",
    preco: 26.00,
    categoria: "Entradas"
  },
  {
    id: 29,
    nome: "Empanadas Argentinas de Carne Suave (3 un)",
    descricao: "Massa folhada artesanal recheada de carne cortada na faca com cebola doce, azeitonas verdes, ovo caipira e cominho.",
    preco: 36.00,
    categoria: "Entradas"
  },
  {
    id: 30,
    nome: "Salada Caprese com Redução Balsâmica",
    descricao: "Fatias de tomate caqui maduro intercaladas com muçarela de búfala fresca, folhas de manjericão roxo e glace de balsâmico.",
    preco: 39.50,
    categoria: "Entradas"
  },
  {
    id: 31,
    nome: "Filé Mignon ao Molho Poivre com Risoto",
    descricao: "Medalhão alto de filé mignon grelhado com molho cremoso de pimenta verde fresca, acompanhado de risoto cremoso de parmesão.",
    preco: 89.00,
    categoria: "Pratos Principais"
  },
  {
    id: 32,
    nome: "Bife de Chorizo Angus com Batatas Rústicas",
    descricao: "Corte nobre argentino (320g) grelhado na brasa ao ponto do cliente, guarnecido de batatas rústicas com alecrim e chimichurri fresco.",
    preco: 94.00,
    categoria: "Pratos Principais"
  },
  {
    id: 33,
    nome: "Picanha Nobre Grelhada na Brasa",
    descricao: "Duas fatias suculentas de picanha de novilho precoce com farofa de ovos na manteiga de garrafa, vinagrete e arroz branco soltinho.",
    preco: 98.00,
    categoria: "Pratos Principais"
  },
  {
    id: 34,
    nome: "Risoto de Camarão com Limão Siciliano",
    descricao: "Arroz arbóreo italiano cozido em caldo aromático de frutos do mar, camarões salteados no azeite, raspas de limão e parmesão.",
    preco: 86.00,
    categoria: "Pratos Principais"
  },
  {
    id: 35,
    nome: "Salmão Grelhado com Crosta de Ervas",
    descricao: "Filé de salmão fresco com crosta aromática de castanhas e ervas finas, servido com purê aveludado de mandioquinha e aspargos.",
    preco: 88.00,
    categoria: "Pratos Principais"
  },
  {
    id: 36,
    nome: "Medalhão de Mignon com Risoto de Alho-poró",
    descricao: "Tornedor de filé mignon envolvido em bacon crocante ao molho roti de carne, acompanhado de risoto leve de alho-poró.",
    preco: 87.50,
    categoria: "Pratos Principais"
  },
  {
    id: 37,
    nome: "Bacalhau à Gomes de Sá Confitado",
    descricao: "Posta nobre de bacalhau gadus morhua confitada em azeite extravirgem com batatas douradas, cebolas caramelizadas, azeitonas e ovos.",
    preco: 108.00,
    categoria: "Pratos Principais"
  },
  {
    id: 38,
    nome: "Risoto de Funghi Porcini Trufado",
    descricao: "Clássico risoto piemontês preparado com mix de cogumelos nobres funghi secchi e frescos, finalizado com toque de azeite trufado.",
    preco: 78.00,
    categoria: "Pratos Principais"
  },
  {
    id: 39,
    nome: "Fettuccine Alfredo com Tiras de Mignon",
    descricao: "Massa fresca artesanal envolvida em molho cremoso à base de manteiga da fazenda e queijo parmesão 24 meses, com tiras de filé grelhado.",
    preco: 79.00,
    categoria: "Pratos Principais"
  },
  {
    id: 40,
    nome: "Polvo Grelhado com Batatas ao Murro",
    descricao: "Tentáculos tenros de polvo grelhados no azeite aromatizado com páprica e alho assado, acompanhados de batatas ao murro e brócolis.",
    preco: 115.00,
    categoria: "Pratos Principais"
  },
  {
    id: 41,
    nome: "Gnocchi Artesanal ao Ragu de Costela",
    descricao: "Nhoque macio de batatas assadas coberto com delicioso ragu de costela bovina desfiada e cozida lentamente no vinho tinto.",
    preco: 74.00,
    categoria: "Pratos Principais"
  },
  {
    id: 42,
    nome: "Ravioli de Ricota e Espinafre na Manteiga",
    descricao: "Raviolis recheados com ricota fresca artesanal e espinafre, salteados na manteiga dourada aromatizada com sálvia e nozes.",
    preco: 69.00,
    categoria: "Pratos Principais"
  },
  {
    id: 43,
    nome: "Moqueca Capixaba de Frutos do Mar",
    descricao: "Peixe nobre, camarões e anéis de lula ensopados em panela de barro com tomates frescos, coentro e urucum. Acompanha arroz e pirão.",
    preco: 112.00,
    categoria: "Pratos Principais"
  },
  {
    id: 44,
    nome: "Galeto Desossado ao Molho Mostarda Dijon",
    descricao: "Peito e sobrecoxa de galeto grelhados e marinados em ervas, servidos com molho de mostarda dijon e legumes salteados na manteiga.",
    preco: 65.00,
    categoria: "Pratos Principais"
  },
  {
    id: 45,
    nome: "Prime Rib Suíno com Geleia de Abacaxi",
    descricao: "Corte nobre de porco duroc grelhado na brasa com crosta crocante, acompanhado de purê de maçã e geleia agridoce de abacaxi com pimenta.",
    preco: 76.00,
    categoria: "Pratos Principais"
  },
  {
    id: 46,
    nome: "Espaguete al Frutti di Mare",
    descricao: "Massa de sêmola grano duro italiana salteada com camarões, lulas, vôngoles e mexilhões em molho de tomates frescos e vinho branco.",
    preco: 89.50,
    categoria: "Pratos Principais"
  },
  {
    id: 47,
    nome: "Parmegiana de Filé Mignon da Casa",
    descricao: "Filé mignon empanado crocante coberto por fatias generosas de queijo muçarela derretido e molho pomodoro artesanal, com arroz e fritas.",
    preco: 82.00,
    categoria: "Pratos Principais"
  },
  {
    id: 48,
    nome: "Ancho Angus com Risoto de Gorgonzola",
    descricao: "Corte alto de bife de ancho grelhado na brasa com sabor marcante, servido ao lado de risoto aveludado de queijo gorgonzola dolce.",
    preco: 96.00,
    categoria: "Pratos Principais"
  },
  {
    id: 49,
    nome: "Confit de Canard com Molho de Laranja",
    descricao: "Coxa e sobrecoxa de pato confitadas lentamente na própria gordura até a pele ficar dourada e crocante, servida com purê de batata baroa.",
    preco: 104.00,
    categoria: "Pratos Principais"
  },
  {
    id: 50,
    nome: "Baião de Dois Especial do Chef",
    descricao: "Arroz e feijão-fradinho preparados com carne de sol desfiada artesanal, queijo coalho em cubos, bacon crocante e manteiga de garrafa.",
    preco: 68.00,
    categoria: "Pratos Principais"
  },
  {
    id: 51,
    nome: "Costelinha BBQ Defumada com Onion Rings",
    descricao: "Costela suína macia que solta do osso regada com molho barbecue artesanal defumado, acompanhada de anéis de cebola crocantes.",
    preco: 79.90,
    categoria: "Pratos Principais"
  },
  {
    id: 52,
    nome: "Bobó de Camarão Cremoso na Moranga",
    descricao: "Camarões selecionados envoltos em creme aveludado de mandioca temperado com leite de coco e azeite de dendê. Servido com arroz de coco.",
    preco: 92.00,
    categoria: "Pratos Principais"
  },
  {
    id: 53,
    nome: "Risoto de Cordeiro com Toque de Hortelã",
    descricao: "Arroz italiano com lascas tenras de pernil de cordeiro cozido no vinho tinto, finalizado com queijo pecorino e pesto de hortelã fresca.",
    preco: 88.00,
    categoria: "Pratos Principais"
  },
  {
    id: 54,
    nome: "Tilápia Grelhada ao Molho de Alcaparras",
    descricao: "Filé alto de tilápia fresca grelhado no azeite de ervas, regado com molho de manteiga e alcaparras, acompanhado de legumes no vapor.",
    preco: 64.00,
    categoria: "Pratos Principais"
  },
  {
    id: 55,
    nome: "Lasanha Tradicional alla Bolognese",
    descricao: "Camadas de massa fresca com carne bovina moída selecionada em cozimento lento no vinho tinto, bechamel artesanal e muçarela gratinada.",
    preco: 67.00,
    categoria: "Pratos Principais"
  },
  {
    id: 56,
    nome: "Bife Ancho ao Molho Redução de Cabernet",
    descricao: "Bife ancho premium servido com clássica redução encorpada de vinho cabernet sauvignon e chalotas, guarnecido de mousseline de batata.",
    preco: 95.00,
    categoria: "Pratos Principais"
  },
  {
    id: 57,
    nome: "Paella Valenciana Tradicional",
    descricao: "Arroz bomba espanhol cozido no caldo de açafrão verdadeiro com camarões, lula, mexilhões, frango e pimentões grelhados.",
    preco: 98.00,
    categoria: "Pratos Principais"
  },
  {
    id: 58,
    nome: "Carré de Cordeiro com Purê de Ervilhas",
    descricao: "Costeletas nobres de cordeiro grelhadas com crosta de ervas de Provence, servidas com purê verde de ervilhas frescas e demi-glace.",
    preco: 119.00,
    categoria: "Pratos Principais"
  },
  {
    id: 59,
    nome: "Strogonoff Gourmet de Filé Mignon",
    descricao: "Cubos tenros de filé mignon flambados no conhaque com cogumelos paris frescos em molho aveludado de nata. Acompanha arroz e palha artesanal.",
    preco: 75.00,
    categoria: "Pratos Principais"
  },
  {
    id: 60,
    nome: "Tagliatelle com Cogumelos Frescos & Trufas",
    descricao: "Massa longa artesanal de ovos salteada com cogumelos portobello, paris e shimeji na manteiga trufada e finalizada com ciboulette.",
    preco: 73.00,
    categoria: "Pratos Principais"
  },
  {
    id: 61,
    nome: "Petit Gâteau com Sorvete de Baunilha",
    descricao: "Bolo quente de chocolate meio amargo com recheio cremoso e escorrendo, servido com bola de sorvete de baunilha de Madagascar.",
    preco: 32.00,
    categoria: "Sobremesas"
  },
  {
    id: 62,
    nome: "Tiramisù Clássico Italiano",
    descricao: "Biscoitos savoiardi embebidos em café espresso com licor Amaretto, intercalados com levíssimo creme de queijo mascarpone e cacau.",
    preco: 34.00,
    categoria: "Sobremesas"
  },
  {
    id: 63,
    nome: "Grand Gâteau de Morango e Nutella",
    descricao: "Gâteau vulcão de chocolate servido com picolé artesanal de baunilha mergulhado, morangos frescos picados e calda morna de avelã.",
    preco: 39.00,
    categoria: "Sobremesas"
  },
  {
    id: 64,
    nome: "Pudim de Leite Condensado com Fava",
    descricao: "Pudim lisinho e sem furinhos, extremamente sedoso, preparado com leite condensado especial e calda brilhante de caramelo tostado.",
    preco: 22.00,
    categoria: "Sobremesas"
  },
  {
    id: 65,
    nome: "Cheesecake de Frutas Vermelhas New York",
    descricao: "Base crocante de biscoito amanteigado com recheio denso e aveludado de cream cheese, coberto com calda fresca artesanal de amoras e framboesas.",
    preco: 31.00,
    categoria: "Sobremesas"
  },
  {
    id: 66,
    nome: "Brownie de Chocolate Belga com Nozes",
    descricao: "Brownie denso e úmido feito com chocolate belga 54% cacau e pedaços generosos de nozes, acompanhado de sorvete de creme e calda quente.",
    preco: 29.00,
    categoria: "Sobremesas"
  },
  {
    id: 67,
    nome: "Banoffee Pie Tradicional da Casa",
    descricao: "Torta inglesa com base amanteigada crocante, fatias de banana fresca caramelizada, doce de leite artesanal e chantilly leve polvilhado com cacau.",
    preco: 27.00,
    categoria: "Sobremesas"
  },
  {
    id: 68,
    nome: "Mil Folhas com Creme Pâtissière",
    descricao: "Lâminas super crocantes de massa folhada francesa dourada recheadas com creme de confeiteiro aveludado com fava de baunilha.",
    preco: 28.50,
    categoria: "Sobremesas"
  },
  {
    id: 69,
    nome: "Taça Sensação com Mousse de Chocolate",
    descricao: "Taça com camadas generosas de mousse aerada de chocolate meio amargo, morangos frescos marinados e calda aveludada de chocolate ao leite.",
    preco: 29.90,
    categoria: "Sobremesas"
  },
  {
    id: 70,
    nome: "Profiteroles com Calda Quente de Chocolate",
    descricao: "Carolinas de massa choux crocante recheadas com sorvete de baunilha e banhadas na hora com calda quente de chocolate belga e amêndoas laminadas.",
    preco: 33.00,
    categoria: "Sobremesas"
  },
  {
    id: 71,
    nome: "Crème Brûlée de Fava de Baunilha",
    descricao: "Clássico creme francês à base de gemas e creme de leite fresco aromatizado com fava natural, finalizado com casquinha de açúcar maçaricado.",
    preco: 30.00,
    categoria: "Sobremesas"
  },
  {
    id: 72,
    nome: "Cartola Pernambucana com Canela",
    descricao: "Banana-da-terra frita na manteiga de garrafa coberta com queijo manteiga grelhado derretido, açúcar mascavo e canela em pó.",
    preco: 26.00,
    categoria: "Sobremesas"
  },
  {
    id: 73,
    nome: "Mousse de Maracujá com Sementes Confit",
    descricao: "Mousse aerada e refrescante feita com polpa pura de maracujá, coberta com calda brilhante agridoce de sementes naturais.",
    preco: 24.00,
    categoria: "Sobremesas"
  },
  {
    id: 74,
    nome: "Torta Holandesa Tradicional",
    descricao: "Base de biscoitos calypso, creme aveludado branco e cobertura espelhada de ganache de chocolate nobre meio amargo.",
    preco: 26.50,
    categoria: "Sobremesas"
  },
  {
    id: 75,
    nome: "Quindim Tradicional de Coco Ralado",
    descricao: "Doce clássico brasileiro brilhante à base de gemas selecionadas, açúcar e coco ralado fresco, dourado ao forno em banho-maria.",
    preco: 21.00,
    categoria: "Sobremesas"
  },
  {
    id: 76,
    nome: "Fondue Individual de Chocolate com Frutas",
    descricao: "Panelinha com ganache quente de chocolate ao leite servida com morangos frescos, uvas sem semente, banana e marshmallows.",
    preco: 42.00,
    categoria: "Sobremesas"
  },
  {
    id: 77,
    nome: "Torta de Limão Siciliano com Merengue Suíço",
    descricao: "Massa podre amanteigada recheada com curd cítrico e aromático de limão siciliano, coberta com picos de merengue maçaricados.",
    preco: 27.00,
    categoria: "Sobremesas"
  },
  {
    id: 78,
    nome: "Churros Gourmet com Doce de Leite Viçosa",
    descricao: "Minichurros fritos na hora bem crocantes e passados no açúcar e canela, acompanhados de pote generoso do premiado doce de leite de Viçosa.",
    preco: 28.00,
    categoria: "Sobremesas"
  },
  {
    id: 79,
    nome: "Panna Cotta Italiana de Frutas Silvestres",
    descricao: "Sobremesa piemontesa sedosa de creme de leite fresco e baunilha, servida gelada com redução caseira de mirtilos, amoras e framboesas.",
    preco: 29.00,
    categoria: "Sobremesas"
  },
  {
    id: 80,
    nome: "Sorvete Artesanal de Pistache Siciliano",
    descricao: "Duas bolas de gelato artesanal feito com pasta pura de pistache de Bronte (Sicília), finalizado com pistaches tostados picados.",
    preco: 31.00,
    categoria: "Sobremesas"
  },
  {
    id: 81,
    nome: "Pavê Tradicional com Gotas de Avelã",
    descricao: "Camadas alternadas de biscoito champanhe umedecido no licor de cacau, creme de baunilha suave e cobertura crocante de avelãs tostadas.",
    preco: 25.00,
    categoria: "Sobremesas"
  },
  {
    id: 82,
    nome: "Cocada Mole com Sorvete de Tapioca",
    descricao: "Cocada cremosa de colher servida quentinha com raspas de limão e bola de sorvete artesanal de tapioca com coco.",
    preco: 26.00,
    categoria: "Sobremesas"
  },
  {
    id: 83,
    nome: "Torta Oreo Cremosa com Ganache",
    descricao: "Base de biscoito Oreo triturado com recheio aveludado de cream cheese com pedaços de biscoito e ganache de chocolate meio amargo.",
    preco: 28.00,
    categoria: "Sobremesas"
  },
  {
    id: 84,
    nome: "Abacaxi Grelhado com Raspas de Limão e Canela",
    descricao: "Fatia espessa de abacaxi grelhada com açúcar demerara e canela na brasa, servida morna com bola de sorvete de coco artesanal.",
    preco: 23.00,
    categoria: "Sobremesas"
  },
  {
    id: 85,
    nome: "Folhado de Maçã com Sorvete de Canela",
    descricao: "Trouxinha de massa folhada recheada com maçãs verdes salteadas na manteiga com noz-moscada e passas, servida com sorvete de canela.",
    preco: 30.00,
    categoria: "Sobremesas"
  },
  {
    id: 86,
    nome: "Mousse de Chocolate Amargo 70% com Flor de Sal",
    descricao: "Mousse intensa para apreciadores de chocolate puro cacau, finalizada com cristais franceses de flor de sal e azeite extravirgem.",
    preco: 29.50,
    categoria: "Sobremesas"
  },
  {
    id: 87,
    nome: "Torta Mousse de Cappuccino com Cacau",
    descricao: "Massa crocante de café com recheio duplo de mousse de café arábica e chocolate branco, polvilhada com canela em pó.",
    preco: 27.50,
    categoria: "Sobremesas"
  },
  {
    id: 88,
    nome: "Cannoli Siciliano com Pistache (2 un)",
    descricao: "Canudos crocantes de massa frita italiana recheados com creme fresco de ricota de ovelha, gotas de chocolate e extremidades com pistache.",
    preco: 32.00,
    categoria: "Sobremesas"
  },
  {
    id: 89,
    nome: "Bolo Vulcão de Cenoura com Chocolate Belga",
    descricao: "Minibolo fofinho de cenoura artesanal recheado com calda quente e cremosa de brigadeiro nobre feito com chocolate Callebaut.",
    preco: 28.00,
    categoria: "Sobremesas"
  },
  {
    id: 90,
    nome: "Brigadeiro Gourmet de Colher na Panelada",
    descricao: "Brigadeiro aveludado de colher servido morno na panelinha de ferro com raspas abundantes de chocolate blend belga.",
    preco: 22.00,
    categoria: "Sobremesas"
  },
  {
    id: 91,
    nome: "Suco Natural de Laranja Fresco (400ml)",
    descricao: "Laranjas peras espremidas na hora sem adição de água ou açúcar.",
    preco: 14.00,
    categoria: "Bebidas"
  },
  {
    id: 92,
    nome: "Suco de Abacaxi com Hortelã (400ml)",
    descricao: "Polpa de abacaxi fresco batida com folhas selecionadas de hortelã e gelo.",
    preco: 15.50,
    categoria: "Bebidas"
  },
  {
    id: 93,
    nome: "Suco Natural de Maracujá (400ml)",
    descricao: "Suco preparado com a polpa pura e fresca do maracujá da fruta.",
    preco: 16.00,
    categoria: "Bebidas"
  },
  {
    id: 94,
    nome: "Suco de Frutas Vermelhas Especial (400ml)",
    descricao: "Mix refrescante de morango, amora e framboesa batidos na hora.",
    preco: 18.00,
    categoria: "Bebidas"
  },
  {
    id: 95,
    nome: "Limonada Suíça Cremosa (400ml)",
    descricao: "Limões taiti batidos com casca, água mineral gaseificada e toque de leite condensado.",
    preco: 17.00,
    categoria: "Bebidas"
  },
  {
    id: 96,
    nome: "Soda Italiana de Maçã Verde (400ml)",
    descricao: "Xarope francês Monin de maçã verde, água gaseificada artesanal e muito gelo.",
    preco: 18.50,
    categoria: "Bebidas"
  },
  {
    id: 97,
    nome: "Soda Italiana de Cranberry (400ml)",
    descricao: "Bebida refrescante com xarope premium de cranberry, gelo e água com gás.",
    preco: 18.50,
    categoria: "Bebidas"
  },
  {
    id: 98,
    nome: "Chá Gelado da Casa de Pêssego (450ml)",
    descricao: "Infusão artesanal de chá preto com extrato natural de pêssegos e rodelas de limão.",
    preco: 16.00,
    categoria: "Bebidas"
  },
  {
    id: 99,
    nome: "Água Mineral Sem Gás (500ml)",
    descricao: "Garrafa de água mineral pura das montanhas.",
    preco: 7.00,
    categoria: "Bebidas"
  },
  {
    id: 100,
    nome: "Água Mineral Com Gás (500ml)",
    descricao: "Garrafa de água mineral naturalmente gaseificada servida com rodela de limão.",
    preco: 8.00,
    categoria: "Bebidas"
  },
  {
    id: 101,
    nome: "Água Tônica Antarctica (Lata 350ml)",
    descricao: "Refrigerante de quinino clássico com gelo e fatia de limão taiti.",
    preco: 9.50,
    categoria: "Bebidas"
  },
  {
    id: 102,
    nome: "Refrigerante Coca-Cola Original (Lata 350ml)",
    descricao: "Servida estupidamente gelada com fatia de limão e gelo.",
    preco: 9.00,
    categoria: "Bebidas"
  },
  {
    id: 103,
    nome: "Refrigerante Coca-Cola Sem Açúcar (Lata 350ml)",
    descricao: "Sabor original sem calorias, servida com gelo e limão.",
    preco: 9.00,
    categoria: "Bebidas"
  },
  {
    id: 104,
    nome: "Refrigerante Guaraná Antarctica (Lata 350ml)",
    descricao: "O sabor autêntico da Amazônia, servido bem gelado.",
    preco: 9.00,
    categoria: "Bebidas"
  },
  {
    id: 105,
    nome: "Cerveja Heineken Long Neck (330ml)",
    descricao: "Cerveja premium puro malte tipo lager holandesa.",
    preco: 16.00,
    categoria: "Bebidas"
  },
  {
    id: 106,
    nome: "Cerveja Corona Extra Long Neck (330ml)",
    descricao: "Cerveja mexicana leve e refrescante, servida com fatia de limão no gargalo.",
    preco: 17.00,
    categoria: "Bebidas"
  },
  {
    id: 107,
    nome: "Cerveja Stella Artois Long Neck (330ml)",
    descricao: "Cerveja belga puro malte com notas florais e amargor suave.",
    preco: 15.00,
    categoria: "Bebidas"
  },
  {
    id: 108,
    nome: "Cerveja Artesanal IPA Especial (500ml)",
    descricao: "India Pale Ale com lúpulos americanos marcantes, notas cítricas e aroma floral.",
    preco: 28.00,
    categoria: "Bebidas"
  },
  {
    id: 109,
    nome: "Cerveja Artesanal Weiss de Trigo (500ml)",
    descricao: "Cerveja de trigo de inspiração alemã não filtrada, com notas de banana e cravo.",
    preco: 26.00,
    categoria: "Bebidas"
  },
  {
    id: 110,
    nome: "Chopp Artesanal Claro (Caldereta 350ml)",
    descricao: "Chopp pilsen super fresco tirado com colarinho cremoso a -2°C.",
    preco: 12.50,
    categoria: "Bebidas"
  },
  {
    id: 111,
    nome: "Caipirinha Tradicional com Cachaça Nobre",
    descricao: "Limões macerados com açúcar orgânico e cachaça envelhecida em barril de umburana.",
    preco: 26.00,
    categoria: "Bebidas"
  },
  {
    id: 112,
    nome: "Caipiroska de Vodka com Frutas Vermelhas",
    descricao: "Vodka premium importada, morangos, amoras maceradas com xarope simples e gelo.",
    preco: 32.00,
    categoria: "Bebidas"
  },
  {
    id: 113,
    nome: "Mojito Clássico Cubano com Hortelã",
    descricao: "Rum branco caribenho, suco de limão fresco, xarope de açúcar, hortelã e club soda.",
    preco: 31.00,
    categoria: "Bebidas"
  },
  {
    id: 114,
    nome: "Gin Tônica Clássico com Zimbro e Limão",
    descricao: "London Dry Gin, tônica premium, bagas de zimbro e fatia de limão siciliano.",
    preco: 35.00,
    categoria: "Bebidas"
  },
  {
    id: 115,
    nome: "Aperol Spritz Veneziano",
    descricao: "Aperol original, espumante prosecco brut, água com gás e meia lua de laranja bahia.",
    preco: 36.00,
    categoria: "Bebidas"
  },
  {
    id: 116,
    nome: "Moscow Mule com Espuma Artesanal de Gengibre",
    descricao: "Vodka, suco de limão, xarope de açúcar e cobertura farta de espuma densa de gengibre na caneca de cobre.",
    preco: 37.00,
    categoria: "Bebidas"
  },
  {
    id: 117,
    nome: "Negroni Clássico Italiano",
    descricao: "Partes iguais de London Dry Gin, Campari Bitter e Vermute Tinto doce, aromatizado com casca de laranja.",
    preco: 38.00,
    categoria: "Bebidas"
  },
  {
    id: 118,
    nome: "Margarita Tradicional com Borda de Sal",
    descricao: "Tequila prata 100% agave azul, licor Cointreau de laranja e suco de limão taiti com borda de sal fino.",
    preco: 34.00,
    categoria: "Bebidas"
  },
  {
    id: 119,
    nome: "Café Espresso Moído na Hora (50ml)",
    descricao: "Grãos 100% arábica do cerrado mineiro com crema densa e aveludada.",
    preco: 8.50,
    categoria: "Bebidas"
  },
  {
    id: 120,
    nome: "Cappuccino Italiano Cremoso (180ml)",
    descricao: "Espresso duplo com leite vaporizado sedoso e finalização com cacau em pó.",
    preco: 14.50,
    categoria: "Bebidas"
  },
  {
    id: 121,
    nome: "Angélica Zapata Cabernet Franc Alta (750ml)",
    descricao: "Mendoza, Argentina. Vinho complexo, com notas de groselha preta, especiarias doces, baunilha e taninos sedosos.",
    preco: 340.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 122,
    nome: "Catena Zapata Malbec Clássico (750ml)",
    descricao: "Mendoza, Argentina. Referência mundial de Malbec, com aromas intensos de ameixa madura, violetas, chocolate e carvalho.",
    preco: 220.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 123,
    nome: "Montes Alpha Cabernet Sauvignon (750ml)",
    descricao: "Vale de Colchagua, Chile. Estruturado e elegante, notas de frutas negras maduras, cedro, tabaco e final longo.",
    preco: 185.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 124,
    nome: "Casillero del Diablo Cabernet Sauvignon (750ml)",
    descricao: "Vale Central, Chile. Vinho tinto equilibrado, com notas de cerejas pretas, toques de café torrado e carvalho tostado.",
    preco: 95.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 125,
    nome: "Marqués de Riscal Rioja Reserva (750ml)",
    descricao: "Rioja, Espanha. Elaborado com Tempranillo de vinhedos antigos, notas balsâmicas, couro nobre, frutas secas e carvalho.",
    preco: 260.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 126,
    nome: "Brunello di Montalcino DOCG Banfi (750ml)",
    descricao: "Toscana, Itália. 100% Sangiovese Grosso, maturado em carvalho. Aromas de cerejas escuras, couro, tabaco e acidez impecável.",
    preco: 620.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 127,
    nome: "Chianti Classico Riserva DOCG Ruffino (750ml)",
    descricao: "Toscana, Itália. Vinho encorpado com notas expressivas de ameixa vermelha, violeta, especiarias e taninos nobres.",
    preco: 210.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 128,
    nome: "Barolo Tradizionale DOCG Fontanafredda (750ml)",
    descricao: "Piemonte, Itália. O rei dos vinhos italianos elaborado com a uva Nebbiolo. Notas de rosas secas, trufas, alcatrão e especiarias.",
    preco: 580.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 129,
    nome: "Châteauneuf-du-Pape Rouge E. Guigal (750ml)",
    descricao: "Vale do Rhône, França. Blend potente de Grenache e Syrah, com notas intensas de frutas silvestres, pimenta preta e garrigue.",
    preco: 490.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 130,
    nome: "Château Margaux Premier Grand Cru (750ml)",
    descricao: "Bordeaux, França. Um dos vinhos mais celebrados do mundo. Elegância incomparável, notas florais, cassis, grafite e seda.",
    preco: 2850.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 131,
    nome: "Guaspari Syrah Vista da Serra (750ml)",
    descricao: "Espírito Santo do Pinhal, Brasil. Premiado vinho paulista de colheita de inverno, com notas de amora, café e pimenta preta.",
    preco: 290.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 132,
    nome: "Miolo Lote 43 Cabernet-Merlot (750ml)",
    descricao: "Vale dos Vinhedos, Brasil. Ícone brasileiro elaborado apenas em safras excepcionais, com aromas de frutas maduras e cacau.",
    preco: 240.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 133,
    nome: "Casa Valduga Leopoldina Gran Merlot (750ml)",
    descricao: "Vale dos Vinhedos, Brasil. Encorpado, macio e aveludado, com passagem de 12 meses em barricas de carvalho francês.",
    preco: 175.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 134,
    nome: "Salton Desejo Tannat Especial (750ml)",
    descricao: "Serra Gaúcha, Brasil. Potente e estruturado, com taninos firmes e maduros, notas de frutas pretas e chocolate meio amargo.",
    preco: 155.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 135,
    nome: "Norton Reserva Malbec (750ml)",
    descricao: "Luján de Cuyo, Argentina. Aromas generosos de ameixas em compota, amoras, baunilha e taninos redondos e agradáveis.",
    preco: 135.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 136,
    nome: "DV Catena Cabernet-Malbec (750ml)",
    descricao: "Mendoza, Argentina. Blend harmônico criado pela família Catena com grande estrutura aromática, madeira nobre e persistência.",
    preco: 195.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 137,
    nome: "Santa Helena Gran Reserva Carménère (750ml)",
    descricao: "Vale Central, Chile. Notas marcantes de pimentão vermelho doce tostado, café, amora silvestre e taninos aveludados.",
    preco: 110.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 138,
    nome: "Tarapacá Gran Reserva Cabernet (750ml)",
    descricao: "Vale do Maipo, Chile. Clássico chileno com aromas de cassis, tabaco, eucalipto e excelente equilíbrio na boca.",
    preco: 145.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 139,
    nome: "Quinta do Crasto Douro Superior (750ml)",
    descricao: "Douro, Portugal. Elaborado com Touriga Nacional e Tinta Roriz, apresenta frescor aromático, notas de frutos silvestres e esteva.",
    preco: 215.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 140,
    nome: "Esporão Reserva Tinto DOC Alentejo (750ml)",
    descricao: "Alentejo, Portugal. Vinho clássico e robusto com aromas de compota de frutos pretos, especiarias e tosta de carvalho americano.",
    preco: 255.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 141,
    nome: "Cartuxa DOC Alentejo Évora Tinto (750ml)",
    descricao: "Alentejo, Portugal. Produzido pela Fundação Eugénio de Almeida, entrega finesse com notas de ameixa seca, baunilha e couro.",
    preco: 360.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 142,
    nome: "Álamos Chardonnay Branco (750ml)",
    descricao: "Mendoza, Argentina. Vinho branco fresco e elegante, com notas de abacaxi maduro, pêssego branco, maçã verde e baunilha sutil.",
    preco: 120.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 143,
    nome: "Cordero con Piel de Lobo Malbec (750ml)",
    descricao: "Mendoza, Argentina. Vinho jovem, frutado, vibrante e moderno, com aromas de frutas vermelhas frescas e acidez envolvente.",
    preco: 98.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 144,
    nome: "Whispering Angel Rosé Côtes de Provence (750ml)",
    descricao: "Provence, França. O rosé mais famoso do mundo, incrivelmente fresco com notas florais, pêssego e frutas vermelhas frescas.",
    preco: 310.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 145,
    nome: "Espumante Chandon Réserve Brut (750ml)",
    descricao: "Garibaldi, Brasil. Borbulhas finas e persistentes com aromas florais, pão tostado e frescor cítrico refrescante.",
    preco: 115.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 146,
    nome: "Espumante Casa Perini Moscatel (750ml)",
    descricao: "Farroupilha, Brasil. Doce na medida certa, aroma sedutor de flores brancas, pêssego em calda e leveza ao paladar.",
    preco: 85.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 147,
    nome: "Champagne Veuve Clicquot Ponsardin Brut (750ml)",
    descricao: "Reims, França. Clássico rótulo amarelo, com notas de brioche, maçã assada, baunilha e estrutura gastronômica inigualável.",
    preco: 690.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 148,
    nome: "Champagne Moët & Chandon Impérial Brut (750ml)",
    descricao: "Épernay, França. O champagne mais icônico do mundo, combinando frescor de frutas de caroço, flores brancas e nuance de nozes.",
    preco: 670.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 149,
    nome: "Vinho do Porto Taylor's Fine Tawny (750ml)",
    descricao: "Douro, Portugal. Vinho licoroso fortificado envelhecido em cascos de carvalho, notas ricas de nozes, figos secos e caramelo.",
    preco: 160.00,
    categoria: "Carta de Vinhos"
  },
  {
    id: 150,
    nome: "Vinho Verde Casal Garcia Branco (750ml)",
    descricao: "Minho, Portugal. Vinho leve, fresco, jovem e naturalmente frisante com deliciosas notas cítricas e florais.",
    preco: 79.00,
    categoria: "Carta de Vinhos"
  }
];
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRODUTOS;
}

