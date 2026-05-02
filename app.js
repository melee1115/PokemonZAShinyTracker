// Main App Logic
const POKEMON_LIST = [
    { id: '001', name: 'Bulbasaur', image: '001-base.jpg' },
    { id: '002', name: 'Ivysaur', image: '002-base.jpg' },
    { id: '003', name: 'Venusaur', image: '003-base.jpg' },
    { id: '004', name: 'Charmander', image: '004-base.jpg' },
    { id: '005', name: 'Charmeleon', image: '005-base.jpg' },
    { id: '006', name: 'Charizard', image: '006-base.jpg' },
    { id: '007', name: 'Squirtle', image: '007-base.jpg' },
    { id: '008', name: 'Wartortle', image: '008-base.jpg' },
    { id: '009', name: 'Blastoise', image: '009-base.jpg' }
];

// Initialize app on load
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await initDB();
        renderGallery();
        setupEventListeners();
        updateTrackedCount();
    } catch (error) {
        console.error('Failed to initialize app:', error);
    }
});

// Render gallery
async function renderGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    for (const pokemon of POKEMON_LIST) {
        const isTracked = await getTrackingData(pokemon.id);
        const card = createCard(pokemon, isTracked);
        gallery.appendChild(card);
    }
}

// Create card element
function createCard(pokemon, isTracked) {
    const card = document.createElement('div');
    card.className = `card ${isTracked ? 'tracked' : ''}`;
    card.id = `card-${pokemon.id}`;

    card.innerHTML = `
        <img src="${pokemon.image}" alt="${pokemon.name}" class="card-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 250 250%22%3E%3Crect fill=%22%23ddd%22 width=%22250%22 height=%22250%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage not found%3C/text%3E%3C/svg%3E'">
        <div class="card-content">
            <div class="card-title">${pokemon.name}</div>
            <div class="checkbox-container">
                <input 
                    type="checkbox" 
                    id="check-${pokemon.id}" 
                    ${isTracked ? 'checked' : ''}
                    aria-label="Mark ${pokemon.name} as found"
                >
                <label for="check-${pokemon.id}">Found Shiny</label>
            </div>
        </div>
    `;

    const checkbox = card.querySelector(`#check-${pokemon.id}`);
    checkbox.addEventListener('change', async (e) => {
        await saveTrackingData(pokemon.id, e.target.checked);
        card.classList.toggle('tracked');
        updateTrackedCount();
    });

    return card;
}

// Update tracked count
async function updateTrackedCount() {
    const data = await getAllTrackingData();
    const trackedCount = data.filter(item => item.tracked).length;
    document.getElementById('trackedCount').textContent = trackedCount;
}

// Setup event listeners
function setupEventListeners() {
    // Reset button
    document.getElementById('resetBtn').addEventListener('click', async () => {
        if (confirm('Are you sure? This will clear all tracked data.')) {
            await clearAllData();
            renderGallery();
            updateTrackedCount();
        }
    });

    // Export button
    document.getElementById('exportBtn').addEventListener('click', async () => {
        try {
            await exportData();
            showSyncStatus('✓ Data exported successfully', 'success');
        } catch (error) {
            console.error('Export failed:', error);
            showSyncStatus('✗ Export failed', 'error');
        }
    });

    // Import button
    document.getElementById('importBtn').addEventListener('click', () => {
        document.getElementById('fileInput').click();
    });

    // File input change
    document.getElementById('fileInput').addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                await importData(file);
                renderGallery();
                updateTrackedCount();
                showSyncStatus('✓ Data imported successfully', 'success');
                e.target.value = '';
            } catch (error) {
                console.error('Import failed:', error);
                showSyncStatus('✗ Import failed', 'error');
            }
        }
    });
}

// Show sync status
function showSyncStatus(message, type) {
    const statusEl = document.getElementById('syncStatus');
    statusEl.textContent = message;
    statusEl.className = `sync-status ${type}`;
    setTimeout(() => {
        statusEl.textContent = '✓ Synced';
        statusEl.className = 'sync-status';
    }, 3000);
}