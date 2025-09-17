// Dados dos tecidos com descrições
const fabricsData = {
    algodao: {
        colors: [
            { name: "Branco", value: "#ffffff" },
            { name: "Preto", value: "#000000" },
            { name: "Azul Marinho", value: "#003366" },
            { name: "Vermelho", value: "#cc0000" },
            { name: "Verde", value: "#006600" },
            { name: "Cinza", value: "#808080" }
        ],
        description: "O algodão é um tecido natural, respirável e confortável. Perfeito para uso no dia a dia, oferece durabilidade e maciez ao toque da pele. Ideal para climas quentes e para peles sensíveis."
    },
    pv: {
        colors: [
            { name: "Branco", value: "#f8f8f8" },
            { name: "Preto", value: "#111111" },
            { name: "Azul", value: "#0066cc" },
            { name: "Rosa", value: "#ff66cc" },
            { name: "Verde", value: "#00cc66" },
            { name: "Laranja", value: "#ff9900" }
        ],
        description: "O PV (Poliéster e Viscose) é uma mistura que combina a durabilidade do poliéster com a maciez da viscose. É resistente a rugas e mantém a cor por mais tempo, ideal para uniformes e roupas de trabalho."
    },
    pa: {
        colors: [
            { name: "Branco", value: "#f0f0f0" },
            { name: "Preto", value: "#222222" },
            { name: "Azul", value: "#004488" },
            { name: "Vermelho", value: "#dd0000" },
            { name: "Verde", value: "#008855" },
            { name: "Amarelo", value: "#ffcc00" }
        ],
        description: "O PA (Poliamida) é um tecido sintético conhecido por sua resistência e elasticidade. É rápido para secar e resistente a abrasões, perfeito para roupas esportivas e atividades ao ar livre."
    }
};

// Elementos DOM
const fabricImageOptions = document.querySelectorAll('.fabric-image-option');
const fabricNameElement = document.getElementById('fabric-name');
const fabricDetailElement = document.getElementById('fabric-detail');
const colorOptionsContainer = document.getElementById('color-options');

// Inicializar a seção com algodão
let currentFabric = 'algodao';

// Função para atualizar a descrição do tecido
function updateFabricDescription(fabric) {
    fabricNameElement.textContent = fabricImageOptions[[...fabricImageOptions].findIndex(el => el.dataset.fabric === fabric)].querySelector('span').textContent;
    fabricDetailElement.textContent = fabricsData[fabric].description;
}

// Função para renderizar as opções de cor
function renderColorOptions(fabric) {
    colorOptionsContainer.innerHTML = '';
    
    fabricsData[fabric].colors.forEach(color => {
        const colorOption = document.createElement('div');
        colorOption.className = 'color-option';
        colorOption.dataset.color = color.value;
        
        const colorSwatch = document.createElement('div');
        colorSwatch.className = 'color-swatch';
        colorSwatch.style.backgroundColor = color.value;
        
        const colorName = document.createElement('span');
        colorName.className = 'color-name';
        colorName.textContent = color.name;
        
        colorOption.appendChild(colorSwatch);
        colorOption.appendChild(colorName);
        
        colorOptionsContainer.appendChild(colorOption);
    });
}

// Adicionar event listeners aos botões de imagem de tecido
fabricImageOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remover a classe ativa de todas as opções
        fabricImageOptions.forEach(opt => opt.classList.remove('active'));
        
        // Adicionar a classe ativa à opção clicada
        option.classList.add('active');
        
        // Atualizar o tecido atual
        currentFabric = option.dataset.fabric;
        
        // Atualizar a descrição do tecido
        updateFabricDescription(currentFabric);
        
        // Renderizar as opções de cor para o tecido selecionado
        renderColorOptions(currentFabric);
    });
});

// Inicializar a página com as opções de algodão
document.addEventListener('DOMContentLoaded', () => {
    updateFabricDescription('algodao');
    renderColorOptions('algodao');
});

        // JavaScript para o slider de tamanhos (existente)
        const slider = document.querySelector('.size-slider');
        const prevBtn = document.querySelector('.slider-btn.prev');
        const nextBtn = document.querySelector('.slider-btn.next');
        
        const scrollAmount = 300;
        
        prevBtn.addEventListener('click', function() {
            slider.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            slider.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        function checkScroll() {
            prevBtn.style.opacity = slider.scrollLeft <= 0 ? '0.5' : '1';
            nextBtn.style.opacity = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth ? '0.5' : '1';
        }
        
        slider.addEventListener('scroll', checkScroll);
        checkScroll();

        // Verificar se o vídeo está funcionando e aplicar fallback se necessário
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.banner-video video');
    
    if (video) {
        video.addEventListener('error', function() {
            // Se o vídeo falhar, mostrar o fallback
            const videoContainer = document.querySelector('.banner-video');
            videoContainer.innerHTML = '<div class="video-fallback"></div>';
        });
        
        // Forçar o vídeo a tocar em dispositivos móveis
        video.play().catch(function(error) {
            console.log('Autoplay não permitido:', error);
            // Em alguns dispositivos, precisamos esperar interação do usuário
            document.addEventListener('click', function() {
                video.play().catch(function() {
                    // Se ainda falhar, usar fallback
                    const videoContainer = document.querySelector('.banner-video');
                    videoContainer.innerHTML = '<div class="video-fallback"></div>';
                });
            }, { once: true });
        });
    }
});