const lotsData = {
    electronics: [
        {
            id: 1,
            title: "Смартфон Apple iPhone 13",
            description: "Новый. 128 ГБ, синий. Гарантия 1 год.",
            currentBid: 42500,
            minBid: 43000,
            endTime: new Date(Date.now() + 28 * 60 * 60 * 1000),
            seller: {name: "Елена Петрова", rating: 5.0, reviews: 189, memberSince: "2020"},
            bids: 8,
            views: 187,
            image: "фото/айфон 13.jpg",
            sellerAvatar: "фото/айфон 13_женщина.jpeg",
            category: "electronics",
            endingSoon: false,
            highlyActive: true,
            isNew: true
        },
        {
            id: 2,
            title: "Ноутбук Apple MacBook Pro 16",
            description: "Мощный ноутбук для работы и творчества. 512 ГБ, процессор M1 Pro.",
            currentBid: 189000,
            minBid: 192000,
            endTime: new Date(Date.now() + 99 * 60 * 60 * 1000),
            seller: {name: "Екатерина Смирнова", rating: 5.0, reviews: 312, memberSince: "2018"},
            bids: 6,
            views: 278,
            image: "фото/макбук.jpg",
            sellerAvatar: "фото/женщина макбук.jpg",
            category: "electronics",
            endingSoon: false,
            highlyActive: true,
            isNew: true
        }
    ],
    clothing: [
        {
            id: 3,
            title: "Кожаная куртка мужская",
            description: "Натуральная кожа, размер 50. Итальянского производства.",
            currentBid: 15800,
            minBid: 16500,
            endTime: new Date(Date.now() + 30 * 60 * 60 * 1000),
            seller: {name: "Александр Иванов", rating: 4.7, reviews: 215, memberSince: "2019"},
            bids: 5,
            views: 98,
            image: "фото/Кожанная куртка.jpeg",
            sellerAvatar: "фото/Мужик_куртка.jpg",
            category: "clothing",
            endingSoon: false,
            highlyActive: false,
            isNew: true
        }
    ],
    art: [
        {
            id: 4,
            title: "Картина маслом 'Осенний пейзаж'",
            description: "Пейзаж современного художника. Размер: 60х80 см. В раме.",
            currentBid: 15200,
            minBid: 16000,
            endTime: new Date(Date.now() + 5.5 * 60 * 60 * 1000),
            seller: {name: "Михаил Соколов", rating: 4.5, reviews: 124, memberSince: "2018"},
            bids: 6,
            views: 98,
            image: "фото/Картина маслом.jpg",
            sellerAvatar: "фото/Мужик_картина.jpg",
            category: "art",
            endingSoon: true,
            highlyActive: false,
            isNew: false
        }
    ],
    jewelry: [
        {
            id: 5,
            title: "Золотое кольцо с бриллиантом",
            description: "Ювелирное изделие 585 пробы с бриллиантом 0.3 карата. Новое.",
            currentBid: 25300,
            minBid: 26000,
            endTime: new Date(Date.now() + 6.3 * 60 * 60 * 1000),
            seller: {name: "Анна Козлова", rating: 4.8, reviews: 203, memberSince: "2019"},
            bids: 9,
            views: 145,
            image: "фото/Кольцо с бриллиантом.jpg",
            sellerAvatar: "фото/Женщина с кольцом.jpg",
            category: "jewelry",
            endingSoon: true,
            highlyActive: true,
            isNew: false
        }
    ],
    antiques: [
        {
            id: 6,
            title: "Антикварная ваза XVIII века",
            description: "Китайская фарфоровая ваза с традиционным орнаментом. Идеальное состояние.",
            currentBid: 5800,
            minBid: 6200,
            endTime: new Date(Date.now() + 2.25 * 60 * 60 * 1000),
            seller: {name: "Александр Иванов", rating: 4.7, reviews: 215, memberSince: "2019"},
            bids: 12,
            views: 245,
            image: "фото/ваза.jpg",
            sellerAvatar: "фото/мужик_ваза.jpg",
            category: "antiques",
            endingSoon: true,
            highlyActive: true,
            isNew: false
        }
    ],
    home: [
        {
            id: 7,
            title: "Диван угловой современный",
            description: "Угловой диван с механизмом трансформации, бежевый цвет. Новый.",
            currentBid: 32500,
            minBid: 33500,
            endTime: new Date(Date.now() + 48 * 60 * 60 * 1000),
            seller: {name: "Ольга Николаева", rating: 4.9, reviews: 156, memberSince: "2021"},
            bids: 7,
            views: 210,
            image: "фото/Диван угловой.jpg",
            sellerAvatar: "фото/Женщина_диван.jpg",
            category: "home",
            endingSoon: false,
            highlyActive: true,
            isNew: false
        }
    ],
    collectibles: [
        {
            id: 8,
            title: "Коллекция советских монет 1961-1991 гг.",
            description: "Полная коллекция монет регулярного чекана СССР. 120 монет в альбоме.",
            currentBid: 8500,
            minBid: 9000,
            endTime: new Date(Date.now() + 72 * 60 * 60 * 1000),
            seller: {name: "Сергей Кузнецов", rating: 4.6, reviews: 89, memberSince: "2020"},
            bids: 4,
            views: 76,
            image: "фото/Монеты.jpg",
            sellerAvatar: "фото/Мужик_монеты.jpg",
            category: "collectibles",
            endingSoon: false,
            highlyActive: false,
            isNew: true
        }
    ],
    sports: [
        {
            id: 9,
            title: "Горный велосипед Trek Marlin 5",
            description: "Горный велосипед 2024 года, размер рамы M. Накатан 50 км, идеальное состояние.",
            currentBid: 28500,
            minBid: 29500,
            endTime: new Date(Date.now() + 24 * 60 * 60 * 1000),
            seller: {name: "Дмитрий Семенов", rating: 4.8, reviews: 134, memberSince: "2019"},
            bids: 6,
            views: 112,
            image: "фото/Велосипед.jpg",
            sellerAvatar: "фото/Мужик_велопсипед.jpg",
            category: "sports",
            endingSoon: true,
            highlyActive: true,
            isNew: false
        }
    ],
    books: [
        {
            id: 10,
            title: "Собрание сочинений А.С. Пушкина 1937 года",
            description: "Юбилейное издание в 6 томах. Сохранность хорошая, в оригинальном переплете.",
            currentBid: 12500,
            minBid: 13000,
            endTime: new Date(Date.now() + 120 * 60 * 60 * 1000),
            seller: {name: "Мария Орлова", rating: 4.9, reviews: 67, memberSince: "2021"},
            bids: 3,
            views: 54,
            image: "фото/Пушкин_книги.jpg",
            sellerAvatar: "фото/Женщина_книги а.с.jpg",
            category: "books",
            endingSoon: false,
            highlyActive: false,
            isNew: true
        }
    ],
    auto: [
        {
            id: 11,
            title: "Мотоцикл Yamaha YZF-R6 2018 года",
            description: "Спортивный мотоцикл в отличном состоянии. Пробег 12 000 км. Полностью обслужен.",
            currentBid: 420000,
            minBid: 425000,
            endTime: new Date(Date.now() + 96 * 60 * 60 * 1000),
            seller: {name: "Андрей Волков", rating: 4.7, reviews: 203, memberSince: "2018"},
            bids: 8,
            views: 345,
            image: "фото/Мотоцикл.jpg",
            sellerAvatar: "фото/Мужик_мотоцикл.jpg",
            category: "auto",
            endingSoon: false,
            highlyActive: true,
            isNew: false
        }
    ],
    realestate: [
        {
            id: 12,
            title: "Квартира-студия в центре Москвы",
            description: "Уютная студия 35 кв.м. в историческом центре. Ремонт 2023 года. Меблирована.",
            currentBid: 12500000,
            minBid: 12600000,
            endTime: new Date(Date.now() + 168 * 60 * 60 * 1000),
            seller: {name: "Андрей Владимирович'", rating: 4.9, reviews: 456, memberSince: "2017"},
            bids: 12,
            views: 678,
            image: "фото/Студия.jpg",
            sellerAvatar: "фото/Мужик_студия.jpg",
            category: "realestate",
            endingSoon: false,
            highlyActive: true,
            isNew: true
        }
    ]
};

function getAllLots() {
    let allLots = [];
    for (const category in lotsData) {
        allLots = allLots.concat(lotsData[category]);
    }
    return allLots;
}

function formatTimeLeft(endTime) {
    const now = new Date();
    const diff = endTime - now;
    
    if (diff <= 0) return "Завершен";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days} д ${hours} ч`;
    else if (hours > 0) return `${hours} ч ${minutes} мин`;
    else return `${minutes} мин`;
}

function isEndingSoon(endTime) {
    const now = new Date();
    const diff = endTime - now;
    return diff < 6 * 60 * 60 * 1000;
}

function searchLots(query) {
    if (!query || query.trim() === '') return [];
    
    const searchTerm = query.toLowerCase().trim();
    const allLots = getAllLots();
    
    return allLots.filter(lot => {
        return lot.title.toLowerCase().includes(searchTerm) ||
               lot.description.toLowerCase().includes(searchTerm) ||
               lot.category.toLowerCase().includes(searchTerm);
    });
}

function startTimer() {
    setInterval(() => { updateAllTimeDisplays(); }, 60000);
}

function updateAllTimeDisplays() {
    document.querySelectorAll('.auction-card').forEach(card => {
        const lotId = card.getAttribute('data-lot-id');
        const timeElement = card.querySelector('.time-left');
        
        if (timeElement && lotId) {
            const lot = findLotById(lotId);
            if (lot) {
                const timeLeft = formatTimeLeft(lot.endTime);
                timeElement.textContent = timeLeft;
                
                if (isEndingSoon(lot.endTime)) timeElement.classList.add('ending-soon');
                else timeElement.classList.remove('ending-soon');
            }
        }
    });
    
    const lotDetailTime = document.querySelector('#lotDetailContent .time-left');
    if (lotDetailTime) {
        const lotId = document.querySelector('#lotDetailContent').getAttribute('data-lot-id');
        if (lotId) {
            const lot = findLotById(lotId);
            if (lot) {
                const timeLeft = formatTimeLeft(lot.endTime);
                lotDetailTime.textContent = timeLeft;
                
                if (isEndingSoon(lot.endTime)) lotDetailTime.classList.add('ending-soon');
                else lotDetailTime.classList.remove('ending-soon');
            }
        }
    }
}

function findLotById(lotId) {
    for (const category in lotsData) {
        const foundLot = lotsData[category].find(lot => lot.id == lotId);
        if (foundLot) return foundLot;
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function() {
    renderAuctionCarousel('auctionCarousel', getAllLots());
    initModals();
    initBalanceFunctionality();
    initPaymentModal();
    initSearch();
    startTimer();
    initCarousel();

    const profileBtn = document.getElementById('profileBtn');
    if (profileBtn) {
        profileBtn.addEventListener('click', function() {
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.getElementById('profile').classList.add('active');
            document.getElementById('auctions-hero').style.display = 'none';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const lotDetailSection = document.getElementById('lot-detail');
    const searchResultsSection = document.getElementById('search-results');
    const auctionsHero = document.getElementById('auctions-hero');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            if (lotDetailSection) lotDetailSection.classList.remove('active');
            if (searchResultsSection) searchResultsSection.classList.remove('active');
            
            if (this.getAttribute('data-section') === 'auctions') auctionsHero.style.display = 'block';
            else auctionsHero.style.display = 'none';
            
            this.classList.add('active');
            const sectionId = this.getAttribute('data-section');
            if (sectionId && document.getElementById(sectionId)) document.getElementById(sectionId).classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    const profileMenuLinks = document.querySelectorAll('.profile-menu-link');
    const profileSections = document.querySelectorAll('.profile-section');
    
    profileMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            profileMenuLinks.forEach(l => l.classList.remove('active'));
            profileSections.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.getAttribute('data-section')).classList.add('active');
        });
    });
    
    const filterButtonsAuctions = document.querySelectorAll('#auctions .filter-btn');
    const sortSelectAuctions = document.getElementById('sortSelectAuctions');
    
    filterButtonsAuctions.forEach(button => {
        button.addEventListener('click', function() {
            filterButtonsAuctions.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterAndSortLots('auctionCarousel', this.getAttribute('data-filter'), sortSelectAuctions.value);
        });
    });
    
    sortSelectAuctions.addEventListener('change', function() {
        const activeFilter = document.querySelector('#auctions .filter-btn.active').getAttribute('data-filter');
        filterAndSortLots('auctionCarousel', activeFilter, this.value);
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.closest('.auction-card')) {
            const card = e.target.closest('.auction-card');
            if (e.target.classList.contains('bid-btn')) return;
            const lotId = card.getAttribute('data-lot-id');
            showLotDetail(lotId);
        }
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('bid-btn') || e.target.closest('.bid-btn')) {
            const bidBtn = e.target.classList.contains('bid-btn') ? e.target : e.target.closest('.bid-btn');
            const card = bidBtn.closest('.auction-card');
            const lotId = card.getAttribute('data-lot-id');
            showLotDetail(lotId);
            setTimeout(() => {
                const bidForm = document.querySelector('.bid-form');
                if (bidForm) bidForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500);
        }
    });
    
    const startBuyingBtn = document.getElementById('startBuyingBtn');
    if (startBuyingBtn) {
        startBuyingBtn.addEventListener('click', function() {
            document.getElementById('auctions').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    
    const backToAuctionsBtn = document.getElementById('backToAuctions');
    if (backToAuctionsBtn) {
        backToAuctionsBtn.addEventListener('click', function() {
            if (lotDetailSection) lotDetailSection.classList.remove('active');
            document.getElementById('auctions').classList.add('active');
            document.querySelector('.nav-link[data-section="auctions"]').classList.add('active');
            document.getElementById('auctions-hero').style.display = 'block';
        });
    }
    
    const backFromSearchBtn = document.getElementById('backFromSearch');
    if (backFromSearchBtn) {
        backFromSearchBtn.addEventListener('click', function() {
            if (searchResultsSection) searchResultsSection.classList.remove('active');
            document.getElementById('auctions').classList.add('active');
            document.querySelector('.nav-link[data-section="auctions"]').classList.add('active');
            document.getElementById('auctions-hero').style.display = 'block';
        });
    }
    
    const createAuctionBtn = document.getElementById('createAuctionBtn');
    if (createAuctionBtn) {
        createAuctionBtn.addEventListener('click', function() {
            document.querySelector('.profile-menu-link[data-section="create-auction"]').click();
        });
    }
    
    const becomeSellerBtn = document.getElementById('becomeSellerBtn');
    if (becomeSellerBtn) {
        becomeSellerBtn.addEventListener('click', function() {
            document.getElementById('sellerModal').classList.add('active');
        });
    }
    
    const profileSettingsForm = document.getElementById('profileSettingsForm');
    if (profileSettingsForm) {
        profileSettingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Настройки профиля успешно сохранены');
        });
    }
    
    const deleteAccountBtn = document.getElementById('deleteAccountBtn');
    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', function() {
            if (confirm('Вы уверены, что хотите удалить аккаунт? Это действие невозможно отменить.')) {
                const originalText = this.innerHTML;
                this.innerHTML = '<div class="loading"></div> Удаление...';
                this.disabled = true;
                
                setTimeout(() => {
                    showNotification('Аккаунт успешно удален');
                    window.location.reload();
                }, 2000);
            }
        });
    }
    
    function renderAuctionCarousel(containerId, lots) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = '';
        
        if (lots.length === 0) {
            container.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><h3>Ничего не найдено</h3><p>Попробуйте изменить параметры поиска</p></div>';
            return;
        }
        
        lots.forEach(lot => {
            const card = document.createElement('div');
            card.className = 'auction-card';
            card.setAttribute('data-lot-id', lot.id);
            
            let badge = '';
            if (isEndingSoon(lot.endTime)) badge = '<div class="auction-badge">Горячий</div>';
            else if (lot.isNew) badge = '<div class="auction-badge">Новый</div>';
            else if (lot.highlyActive) badge = '<div class="auction-badge">Популярный</div>';
            
            const timeLeft = formatTimeLeft(lot.endTime);
            const timeClass = isEndingSoon(lot.endTime) ? 'ending-soon' : '';
            
            card.innerHTML = `
                ${badge}
                <div class="auction-image" style="background-image: url('${lot.image}')"></div>
                <div class="auction-details">
                    <h3 class="auction-title">${lot.title}</h3>
                    <p class="auction-description">${lot.description}</p>
                    <div class="auction-meta">
                        <div class="current-bid">${lot.currentBid.toLocaleString()} ₽</div>
                        <div class="time-left ${timeClass}"><i class="far fa-clock"></i> ${timeLeft}</div>
                    </div>
                    <button class="bid-btn"><i class="fas fa-hammer"></i> Сделать ставку</button>
                </div>
            `;
            
            container.appendChild(card);
        });
    }
    
    function renderAuctionGrid(containerId, lots) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = '';
        
        if (lots.length === 0) {
            container.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><h3>Ничего не найдено</h3><p>Попробуйте изменить параметры поиска</p></div>';
            return;
        }
        
        lots.forEach(lot => {
            const card = document.createElement('div');
            card.className = 'auction-card';
            card.setAttribute('data-lot-id', lot.id);
            
            let badge = '';
            if (isEndingSoon(lot.endTime)) badge = '<div class="auction-badge">Горячий</div>';
            else if (lot.isNew) badge = '<div class="auction-badge">Новый</div>';
            else if (lot.highlyActive) badge = '<div class="auction-badge">Популярный</div>';
            
            const timeLeft = formatTimeLeft(lot.endTime);
            const timeClass = isEndingSoon(lot.endTime) ? 'ending-soon' : '';
            
            card.innerHTML = `
                ${badge}
                <div class="auction-image" style="background-image: url('${lot.image}')"></div>
                <div class="auction-details">
                    <h3 class="auction-title">${lot.title}</h3>
                    <p class="auction-description">${lot.description}</p>
                    <div class="auction-meta">
                        <div class="current-bid">${lot.currentBid.toLocaleString()} ₽</div>
                        <div class="time-left ${timeClass}"><i class="far fa-clock"></i> ${timeLeft}</div>
                    </div>
                    <button class="bid-btn"><i class="fas fa-hammer"></i> Сделать ставку</button>
                </div>
            `;
            
            container.appendChild(card);
        });
    }
    
    function filterAndSortLots(containerId, filter, sort) {
        let filteredLots = getAllLots();
        
        if (filter !== 'all') {
            if (filter === 'ending') filteredLots = filteredLots.filter(lot => isEndingSoon(lot.endTime));
            else if (filter === 'active') filteredLots = filteredLots.filter(lot => lot.highlyActive);
            else if (filter === 'new') filteredLots = filteredLots.filter(lot => lot.isNew);
            else filteredLots = filteredLots.filter(lot => lot.category === filter);
        }
        
        if (sort !== 'default') {
            if (sort === 'ending') filteredLots.sort((a, b) => a.endTime - b.endTime);
            else if (sort === 'price-asc') filteredLots.sort((a, b) => a.currentBid - b.currentBid);
            else if (sort === 'price-desc') filteredLots.sort((a, b) => b.currentBid - a.currentBid);
            else if (sort === 'popularity') filteredLots.sort((a, b) => b.views - a.views);
            else if (sort === 'bids') filteredLots.sort((a, b) => b.bids - a.bids);
            else if (sort === 'views') filteredLots.sort((a, b) => b.views - a.views);
        }
        
        if (containerId === 'auctionCarousel') renderAuctionCarousel(containerId, filteredLots);
        else renderAuctionGrid(containerId, filteredLots);
    }
    
    function showLotDetail(lotId) {
        const lot = findLotById(lotId);
        if (!lot) return;
        
        const lotDetailContent = document.getElementById('lotDetailContent');
        if (!lotDetailContent) return;
        
        const timeLeft = formatTimeLeft(lot.endTime);
        const timeClass = isEndingSoon(lot.endTime) ? 'ending-soon' : '';
        
        lotDetailContent.innerHTML = `
            <div class="lot-gallery">
                <div class="lot-main-image" style="background-image: url('${lot.image}')"></div>
            </div>
            <div class="lot-info">
                <h1>${lot.title}</h1>
                <p class="lot-description">${lot.description}</p>
                
                <div class="lot-meta">
                    <div class="lot-meta-item">
                        <div class="lot-meta-value">${lot.currentBid.toLocaleString()} ₽</div>
                        <div class="lot-meta-label">Текущая ставка</div>
                    </div>
                    <div class="lot-meta-item">
                        <div class="lot-meta-value">${lot.bids}</div>
                        <div class="lot-meta-label">Ставок</div>
                    </div>
                    <div class="lot-meta-item">
                        <div class="lot-meta-value">${lot.views}</div>
                        <div class="lot-meta-label">Просмотров</div>
                    </div>
                    <div class="lot-meta-item">
                        <div class="lot-meta-value ${timeClass}">${timeLeft}</div>
                        <div class="lot-meta-label">Осталось</div>
                    </div>
                </div>
                
                <div class="seller-info">
                    <div class="seller-header">
                        <div class="seller-avatar" style="background-image: url('${lot.sellerAvatar}')"></div>
                        <div>
                            <h3>${lot.seller.name}</h3>
                            <div class="seller-rating">${generateStars(lot.seller.rating)}<span>${lot.seller.rating} (${lot.seller.reviews} отзывов)</span></div>
                            <p>На сайте с ${lot.seller.memberSince} года</p>
                        </div>
                    </div>
                </div>
                
                <div class="bid-form">
                    <h3>Сделать ставку</h3>
                    <p>Минимальная ставка: <strong>${lot.minBid.toLocaleString()} ₽</strong></p>
                    <div class="bid-input-group">
                        <input type="number" class="bid-input" placeholder="Введите сумму" min="${lot.minBid}" value="${lot.minBid}">
                        <button class="btn btn-primary" id="placeBidBtn"><i class="fas fa-gavel"></i> Сделать ставку</button>
                    </div>
                    <p class="bid-note">Нажимая кнопку, вы соглашаетесь с <a href="#">правилами проведения аукционов</a></p>
                </div>
            </div>
        `;
        
        lotDetailContent.setAttribute('data-lot-id', lotId);
        
        const placeBidBtn = document.getElementById('placeBidBtn');
        if (placeBidBtn) {
            placeBidBtn.addEventListener('click', function() {
                const bidInput = document.querySelector('.bid-input');
                if (!bidInput) return;
                
                const bidValue = parseInt(bidInput.value);
                
                if (bidValue < lot.minBid) {
                    showNotification(`Минимальная ставка: ${lot.minBid.toLocaleString()} ₽`);
                    return;
                }
                
                const originalText = placeBidBtn.innerHTML;
                placeBidBtn.innerHTML = '<div class="loading"></div>';
                placeBidBtn.disabled = true;
                
                setTimeout(() => {
                    placeBidBtn.innerHTML = originalText;
                    placeBidBtn.disabled = false;
                    showNotification(`Ваша ставка ${bidValue.toLocaleString()} ₽ принята!`);
                }, 1500);
            });
        }
        
        sections.forEach(s => s.classList.remove('active'));
        if (searchResultsSection) searchResultsSection.classList.remove('active');
        if (lotDetailSection) lotDetailSection.classList.add('active');
        document.getElementById('auctions-hero').style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    function generateStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
        if (hasHalfStar) stars += '<i class="fas fa-star-half-alt"></i>';
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';
        
        return stars;
    }
    
    function showNotification(message) {
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notification-text');
        
        if (!notification || !notificationText) return;
        
        notificationText.textContent = message;
        notification.style.display = 'block';
        
        setTimeout(() => { notification.style.display = 'none'; }, 3000);
    }
    
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('active'));
            document.querySelectorAll('.faq-question span').forEach(span => span.textContent = '+');
            
            if (!isActive) {
                answer.classList.add('active');
                this.querySelector('span').textContent = '-';
            }
        });
    });
});

function initCarousel() {
    const carousel = document.querySelector('.auction-carousel');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (carousel && prevBtn && nextBtn) {
        const scrollAmount = 320;
        
        prevBtn.addEventListener('click', () => carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
        nextBtn.addEventListener('click', () => carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
    }
}

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResultsSection = document.getElementById('search-results');
    const searchResultsGrid = document.getElementById('searchResultsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    
    function performSearch() {
        const query = searchInput.value.trim();
        
        if (query === '') {
            showNotification('Введите поисковый запрос');
            return;
        }
        
        const results = searchLots(query);
        
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        searchResultsSection.classList.add('active');
        document.getElementById('auctions-hero').style.display = 'none';
        
        resultsCount.textContent = results.length;
        
        if (results.length === 0) {
            noResults.style.display = 'block';
            searchResultsGrid.style.display = 'none';
        } else {
            noResults.style.display = 'none';
            searchResultsGrid.style.display = 'grid';
            renderAuctionGrid('searchResultsGrid', results);
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    if (searchBtn) searchBtn.addEventListener('click', performSearch);
    if (searchInput) searchInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') performSearch(); });
}

function initModals() {
    const authModal = document.getElementById('authModal');
    const sellerModal = document.getElementById('sellerModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const closeAuthModal = document.getElementById('closeAuthModal');
    const closeSellerModal = document.getElementById('closeSellerModal');
    const cancelSellerBtn = document.getElementById('cancelSellerBtn');
    const submitSellerBtn = document.getElementById('submitSellerBtn');
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginBtn) loginBtn.addEventListener('click', function() { authModal.classList.add('active'); authTabs[0].click(); });
    if (registerBtn) registerBtn.addEventListener('click', function() { authModal.classList.add('active'); authTabs[1].click(); });
    if (closeAuthModal) closeAuthModal.addEventListener('click', function() { authModal.classList.remove('active'); });
    if (closeSellerModal) closeSellerModal.addEventListener('click', function() { sellerModal.classList.remove('active'); });
    if (cancelSellerBtn) cancelSellerBtn.addEventListener('click', function() { sellerModal.classList.remove('active'); });
    
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(tabName + 'Form').classList.add('active');
        });
    });
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<div class="loading"></div> Вход...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                showNotification(`Добро пожаловать, ${email}!`);
                authModal.classList.remove('active');
                updateUserButtons(true);
            }, 1500);
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            
            if (password !== confirmPassword) {
                showNotification('Пароли не совпадают');
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<div class="loading"></div> Регистрация...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                showNotification(`Регистрация успешна! Добро пожаловать, ${name}!`);
                authModal.classList.remove('active');
                updateUserButtons(true);
            }, 1500);
        });
    }
    
    if (submitSellerBtn) {
        submitSellerBtn.addEventListener('click', function() {
            const phone = document.getElementById('sellerPhone').value;
            const address = document.getElementById('sellerAddress').value;
            const description = document.getElementById('sellerDescription').value;
            
            if (!phone || !address || !description) {
                showNotification('Заполните все обязательные поля');
                return;
            }
            
            const originalText = this.innerHTML;
            this.innerHTML = '<div class="loading"></div> Отправка...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
                showNotification('Заявка на регистрацию продавца отправлена на модерацию!');
                sellerModal.classList.remove('active');
                document.getElementById('sellerForm').reset();
            }, 1500);
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === authModal) authModal.classList.remove('active');
        if (e.target === sellerModal) sellerModal.classList.remove('active');
    });
    
    function updateUserButtons(isLoggedIn) {
        const userActions = document.querySelector('.user-actions');
        
        if (isLoggedIn) {
            userActions.innerHTML = `
                <button class="btn btn-profile" id="profileBtn"><i class="fas fa-user"></i> Личный кабинет</button>
                <button class="btn btn-outline" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Выйти</button>
            `;
            
            document.getElementById('logoutBtn').addEventListener('click', function() {
                updateUserButtons(false);
                showNotification('Вы вышли из системы');
            });
            
            document.getElementById('profileBtn').addEventListener('click', function() {
                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                document.getElementById('profile').classList.add('active');
                document.getElementById('auctions-hero').style.display = 'none';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        } else {
            userActions.innerHTML = `
                <button class="btn btn-outline" id="loginBtn"><i class="fas fa-sign-in-alt"></i> Войти</button>
                <button class="btn btn-primary" id="registerBtn"><i class="fas fa-user-plus"></i> Регистрация</button>
            `;
            
            document.getElementById('loginBtn').addEventListener('click', function() {
                authModal.classList.add('active');
                document.querySelector('.auth-tab[data-tab="login"]').click();
            });
            
            document.getElementById('registerBtn').addEventListener('click', function() {
                authModal.classList.add('active');
                document.querySelector('.auth-tab[data-tab="register"]').click();
            });
        }
    }
}

function initBalanceFunctionality() {
    const paymentCards = document.querySelectorAll('#balance .payment-card');
    paymentCards.forEach(card => {
        card.addEventListener('click', function() {
            paymentCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const method = this.getAttribute('data-method');
            const cardDetails = document.getElementById('cardDetails');
            if (method === 'card') cardDetails.style.display = 'block';
            else cardDetails.style.display = 'none';
        });
    });
    
    const processPaymentBtn = document.getElementById('processPaymentBtn');
    if (processPaymentBtn) {
        processPaymentBtn.addEventListener('click', function() {
            const amount = document.getElementById('paymentAmount').value;
            const activeMethod = document.querySelector('#balance .payment-card.active').getAttribute('data-method');
            
            if (!amount || amount < 100) {
                showNotification('Минимальная сумма пополнения - 100 ₽');
                return;
            }
            
            const originalText = this.innerHTML;
            this.innerHTML = '<div class="loading"></div> Обработка...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
                const paymentSuccess = document.getElementById('paymentSuccess');
                paymentSuccess.style.display = 'block';
                const balanceAmount = document.querySelector('.balance-amount');
                const currentBalance = parseInt(balanceAmount.textContent.replace(/\s+/g, '').replace('₽', ''));
                const newBalance = currentBalance + parseInt(amount);
                balanceAmount.textContent = newBalance.toLocaleString() + ' ₽';
                addTransaction(new Date().toLocaleDateString('ru-RU'), `Пополнение через ${getMethodName(activeMethod)}`, `+${parseInt(amount).toLocaleString()} ₽`, 'Успешно', 'positive');
                setTimeout(() => { paymentSuccess.style.display = 'none'; }, 3000);
            }, 2000);
        });
    }
}

function initPaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    const closePaymentModal = document.getElementById('closePaymentModal');
    const cancelPaymentBtn = document.getElementById('cancelPaymentBtn');
    const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
    const paymentMethods = document.querySelectorAll('#paymentModal .payment-card');
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('pay-lot-btn')) {
            const btn = e.target;
            const lotId = btn.getAttribute('data-lot-id');
            const amount = btn.getAttribute('data-amount');
            openPaymentModal(lotId, amount, btn.closest('tr').querySelector('td:first-child').textContent);
        }
    });
    
    if (closePaymentModal) closePaymentModal.addEventListener('click', function() { paymentModal.classList.remove('active'); });
    if (cancelPaymentBtn) cancelPaymentBtn.addEventListener('click', function() { paymentModal.classList.remove('active'); });
    
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            paymentMethods.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
            const methodType = this.getAttribute('data-method');
            document.querySelectorAll('.payment-section').forEach(section => section.classList.remove('active'));
            if (methodType === 'balance') document.getElementById('balancePayment').classList.add('active');
            else if (methodType === 'card') document.getElementById('cardPayment').classList.add('active');
        });
    });
    
    if (confirmPaymentBtn) {
        confirmPaymentBtn.addEventListener('click', function() {
            const selectedMethod = document.querySelector('#paymentModal .payment-card.active').getAttribute('data-method');
            const totalAmount = parseInt(document.getElementById('paymentTotal').textContent.replace(/\s+/g, '').replace('₽', ''));
            const lotTitle = document.getElementById('paymentLotTitle').textContent;
            
            const originalText = this.innerHTML;
            this.innerHTML = '<div class="loading"></div> Обработка...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
                paymentModal.classList.remove('active');
                showNotification(`Лот "${lotTitle}" успешно оплачен!`);
                
                if (selectedMethod === 'balance') {
                    const balanceAmount = document.querySelector('.balance-amount');
                    const currentBalance = parseInt(balanceAmount.textContent.replace(/\s+/g, '').replace('₽', ''));
                    const newBalance = currentBalance - totalAmount;
                    balanceAmount.textContent = newBalance.toLocaleString() + ' ₽';
                    addTransaction(new Date().toLocaleDateString('ru-RU'), `Оплата лота "${lotTitle}"`, `-${totalAmount.toLocaleString()} ₽`, 'Успешно', 'negative');
                }
                
                const paidRow = document.querySelector(`.pay-lot-btn[data-lot-id="${document.getElementById('paymentModal').getAttribute('data-lot-id')}"]`).closest('tr');
                paidRow.querySelector('td:nth-child(4)').textContent = 'Оплачен';
                paidRow.querySelector('td:last-child').innerHTML = '<span style="color: var(--success-color);">Оплачено</span>';
            }, 2000);
        });
    }
    
    window.addEventListener('click', function(e) { if (e.target === paymentModal) paymentModal.classList.remove('active'); });
}

function openPaymentModal(lotId, amount, lotTitle) {
    const paymentModal = document.getElementById('paymentModal');
    const lotPrice = parseInt(amount);
    const commission = Math.round(lotPrice * 0.05);
    const total = lotPrice + commission;
    
    document.getElementById('paymentLotTitle').textContent = lotTitle;
    document.getElementById('paymentLotPrice').textContent = lotPrice.toLocaleString() + ' ₽';
    document.getElementById('paymentCommission').textContent = commission.toLocaleString() + ' ₽';
    document.getElementById('paymentTotal').textContent = total.toLocaleString() + ' ₽';
    paymentModal.setAttribute('data-lot-id', lotId);
    
    document.querySelectorAll('#paymentModal .payment-card').forEach(card => card.classList.remove('active'));
    document.querySelector('#paymentModal .payment-card[data-method="balance"]').classList.add('active');
    document.querySelectorAll('.payment-section').forEach(section => section.classList.remove('active'));
    document.getElementById('balancePayment').classList.add('active');
    paymentModal.classList.add('active');
}

function getMethodName(method) {
    const methods = {'card': 'банковскую карту', 'sbp': 'СБП'};
    return methods[method] || 'неизвестный метод';
}

function addTransaction(date, description, amount, status, type) {
    const transactionsTable = document.querySelector('.transactions-table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${date}</td><td>${description}</td><td class="transaction-${type}">${amount}</td><td>${status}</td>`;
    transactionsTable.insertBefore(newRow, transactionsTable.firstChild);
}