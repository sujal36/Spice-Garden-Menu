// DOM elements
const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

// Current filters
let currentCategory = 'all';
let currentSearchTerm = '';

// Initialize the menu
document.addEventListener('DOMContentLoaded', function() {
    renderMenu(menuData);
    setupEventListeners();
});

// Render menu items
function renderMenu(items) {
    menuGrid.innerHTML = '';
    
    if (items.length === 0) {
        menuGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666;">
                <h3>No menu items found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    items.forEach((item, index) => {
        const menuItem = createMenuItemElement(item, index);
        menuGrid.appendChild(menuItem);
    });
}

// Create individual menu item element
function createMenuItemElement(item, index) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.style.animationDelay = `${(index % 6) * 0.1}s`;
    
    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
        <div class="item-header">
            <h3 class="item-name">${item.name}</h3>
            <span class="item-price">${item.price}</span>
        </div>
        <p class="item-description">${item.description}</p>
        <span class="item-category">${getCategoryDisplayName(item.category)}</span>
    `;
    
    return menuItem;
}

// Get display name for category
function getCategoryDisplayName(category) {
    const categoryNames = {
        'appetizers': 'Starters',
        'mains': 'Main Dish',
        'desserts': 'Desserts',
        'drinks': 'Beverage',
        'rolls' : 'Rolls'
    };
    return categoryNames[category] || category;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Category filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', handleCategoryFilter);
    });
}

// Handle search input
function handleSearch(event) {
    currentSearchTerm = event.target.value.toLowerCase().trim();
    filterMenu();
}

// Handle category filter
function handleCategoryFilter(event) {
    const category = event.target.dataset.category;
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    currentCategory = category;
    filterMenu();
}

// Filter menu based on current category and search term
function filterMenu() {
    menuGrid.classList.add('filtering');
    
    setTimeout(() => {
        let filteredItems = menuData;
        
        // Filter by category
        if (currentCategory !== 'all') {
            filteredItems = filteredItems.filter(item => item.category === currentCategory);
        }
        
        // Filter by search term
        if (currentSearchTerm) {
            filteredItems = filteredItems.filter(item =>
                item.name.toLowerCase().includes(currentSearchTerm) ||
                item.description.toLowerCase().includes(currentSearchTerm)
            );
        }
        
        renderMenu(filteredItems);
        menuGrid.classList.remove('filtering');
    }, 150);
}

// Add smooth scrolling to menu when filtering
function scrollToMenu() {
    const menuSection = document.querySelector('.menu-grid');
    menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Add loading animation for menu items
function addLoadingAnimation() {
    const items = document.querySelectorAll('.menu-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Enhanced search with debouncing
let searchTimeout;
function handleSearchWithDebounce(event) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        handleSearch(event);
    }, 300);
}

// Replace the original search listener with debounced version
searchInput.removeEventListener('input', handleSearch);
searchInput.addEventListener('input', handleSearchWithDebounce);

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        searchInput.value = '';
        currentSearchTerm = '';
        filterMenu();
        searchInput.blur();
    }
});

// Add category cycling with keyboard
document.addEventListener('keydown', function(event) {
    if (event.altKey && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
        event.preventDefault();
        const currentIndex = Array.from(filterButtons).findIndex(btn => btn.classList.contains('active'));
        let newIndex;
        
        if (event.key === 'ArrowRight') {
            newIndex = (currentIndex + 1) % filterButtons.length;
        } else {
            newIndex = (currentIndex - 1 + filterButtons.length) % filterButtons.length;
        }
        
        filterButtons[newIndex].click();
    }
});