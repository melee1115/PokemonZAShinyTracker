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
    { id: '009', name: 'Blastoise', image: '009-base.jpg' },
    { id: '010', name: 'Caterpie', image: '010-base.jpeg' },
    { id: '011', name: 'Metapod', image: '011-base.jpeg' },
    { id: '012', name: 'Butterfree', image: '012-base.jpeg' },
    { id: '013', name: 'Weedle', image: '013-base.jpeg' },
    { id: '014', name: 'Kakuna', image: '014-base.jpeg' },
    { id: '015', name: 'Beedrill', image: '015-base.jpeg' },
    { id: '016', name: 'Pidgeot', image: '016-base.jpeg' },
    { id: '017', name: 'Pidgeotto', image: '017-base.jpeg' },
    { id: '018', name: 'Pidgeot', image: '018-base.jpeg' },
    { id: '019', name: 'Rattata', image: '019-base.jpeg' },
    { id: '020', name: 'Raticate', image: '020-base.jpeg' },
    { id: '021', name: 'Spearow', image: '021-base.jpeg' },
    { id: '022', name: 'Fearow', image: '022-base.jpeg' },
    { id: '023', name: 'Ekans', image: '023-base.jpeg' },
    { id: '024', name: 'Arbok', image: '024-base.jpeg' },
    { id: '025', name: 'Pikachu', image: '025-base.jpeg' },
    { id: '026', name: 'Raichu', image: '026-base.jpeg' },
    { id: '027', name: 'Sandshrew', image: '027-base.jpeg' },
    { id: '028', name: 'Sandslash', image: '028-base.jpeg' },
    { id: '029', name: 'Nidoran♀', image: '029-base.jpeg' },
    { id: '030', name: 'Nidorina', image: '030-base.jpeg' },
    { id: '031', name: 'Nidoqueen', image: '031-base.jpeg' },
    { id: '032', name: 'Nidoran♂', image: '032-base.jpeg' },
    { id: '033', name: 'Nidorino', image: '033-base.jpeg' },
    { id: '034', name: 'Nidoking', image: '034-base.jpeg' },
    { id: '035', name: 'Clefairy', image: '035-base.jpeg' },
    { id: '036', name: 'Clefable', image: '036-base.jpeg' },
    { id: '037', name: 'Vulpix', image: '037-base.jpeg' },
    { id: '038', name: 'Ninetales', image: '038-base.jpeg' },
    { id: '039', name: 'Jigglypuff', image: '039-base.jpeg' },
    { id: '040', name: 'Wigglytuff', image: '040-base.jpeg' },
    { id: '041', name: 'Zubat', image: '041-base.jpeg' },
    { id: '042', name: 'Golbat', image: '042-base.jpeg' },
    { id: '043', name: 'Oddish', image: '043-base.jpeg' },
    { id: '044', name: 'Gloom', image: '044-base.jpeg' },
    { id: '045', name: 'Vileplume', image: '045-base.jpeg' },
    { id: '046', name: 'Paras', image: '046-base.jpeg' },
    { id: '047', name: 'Parasect', image: '047-base.jpeg' },
    { id: '048', name: 'Venonat', image: '048-base.jpeg' },
    { id: '049', name: 'Venomoth', image: '049-base.jpeg' },
    { id: '050', name: 'Diglett', image: '050-base.jpeg' },
    { id: '051', name: 'Dugtrio', image: '051-base.jpeg' },
    { id: '052', name: 'Meowth', image: '052-base.jpeg' },
    { id: '053', name: 'Persian', image: '053-base.jpeg' },
    { id: '054', name: 'Psyduck', image: '054-base.jpeg' },
    { id: '055', name: 'Golduck', image: '055-base.jpeg' },
    { id: '056', name: 'Mankey', image: '056-base.jpeg' },
    { id: '057', name: 'Primeape', image: '057-base.jpeg' },
    { id: '058', name: 'Growlithe', image: '058-base.jpeg' },
    { id: '059', name: 'Arcanine', image: '059-base.jpeg' },
    { id: '060', name: 'Poliwag', image: '060-base.jpeg' },
    { id: '061', name: 'Poliwhirl', image: '061-base.jpeg' },
    { id: '062', name: 'Poliwrath', image: '062-base.jpeg' },
    { id: '063', name: 'Abra', image: '063-base.jpeg' },
    { id: '064', name: 'Kadabra', image: '064-base.jpeg' },
    { id: '065', name: 'Alakazam', image: '065-base.jpeg' },
    { id: '066', name: 'Machop', image: '066-base.jpeg' },
    { id: '067', name: 'Machoke', image: '067-base.jpeg' },
    { id: '068', name: 'Machamp', image: '068-base.jpeg' },
    { id: '069', name: 'Bellsprout', image: '069-base.jpeg' },
    { id: '070', name: 'Weepinbell', image: '070-base.jpeg' },
    { id: '071', name: 'Victreebel', image: '071-base.jpeg' },
    { id: '072', name: 'Tentacool', image: '072-base.jpeg' },
    { id: '073', name: 'Tentacruel', image: '073-base.jpeg' },
    { id: '074', name: 'Geodude', image: '074-base.jpeg' },
    { id: '075', name: 'Graveler', image: '075-base.jpeg' },
    { id: '076', name: 'Golem', image: '076-base.jpeg' },
    { id: '077', name: 'Ponyta', image: '077-base.jpeg' },
    { id: '078', name: 'Rapidash', image: '078-base.jpeg' },
    { id: '079', name: 'Slowpoke', image: '079-base.jpeg' },
    { id: '080', name: 'Slowbro', image: '080-base.jpeg' },
    { id: '081', name: 'Seel', image: '081-base.jpeg' },
    { id: '082', name: 'Dewgong', image: '082-base.jpeg' },
    { id: '083', name: 'Shellder', image: '083-base.jpeg' },
    { id: '084', name: 'Cloyster', image: '084-base.jpeg' },
    { id: '085', name: 'Gastly', image: '085-base.jpeg' },
    { id: '086', name: 'Haunter', image: '086-base.jpeg' },
    { id: '087', name: 'Gengar', image: '087-base.jpeg' },
    { id: '088', name: 'Onix', image: '088-base.jpeg' },
    { id: '089', name: 'Drowzee', image: '089-base.jpeg' },
    { id: '090', name: 'Hypno', image: '090-base.jpeg' },
    { id: '091', name: 'Krabby', image: '091-base.jpeg' },
    { id: '092', name: 'Kingler', image: '092-base.jpeg' },
    { id: '093', name: 'Voltorb', image: '093-base.jpeg' },
    { id: '094', name: 'Electrode', image: '094-base.jpeg' },
    { id: '095', name: 'Exeggcute', image: '095-base.jpeg' },
    { id: '096', name: 'Exeggutor', image: '096-base.jpeg' },
    { id: '097', name: 'Cubone', image: '097-base.jpeg' },
    { id: '098', name: 'Marowak', image: '098-base.jpeg' },
    { id: '099', name: 'Lickitung', image: '099-base.jpeg' },
    { id: '100', name: 'Likitung', image: '100-base.jpeg' },
    { id: '101', name: 'Rhyhorn', image: '101-base.jpeg' },
    { id: '102', name: 'Rhydon', image: '102-base.jpeg' },
    { id: '103', name: 'Chansey', image: '103-base.jpeg' },
    { id: '104', name: 'Kangaskhan', image: '104-base.jpeg' },
    { id: '105', name: 'Horsea', image: '105-base.jpeg' },
    { id: '106', name: 'Seadra', image: '106-base.jpeg' },
    { id: '107', name: 'Goldeen', image: '107-base.jpeg' },
    { id: '108', name: 'Seaking', image: '108-base.jpeg' },
    { id: '109', name: 'Staryu', image: '109-base.jpeg' },
    { id: '110', name: 'Starmie', image: '110-base.jpeg' },
    { id: '111', name: 'Mr. Mime', image: '111-base.jpeg' },
    { id: '112', name: 'Jynx', image: '112-base.jpeg' },
    { id: '113', name: 'Electabuzz', image: '113-base.jpeg' },
    { id: '114', name: 'Magby', image: '114-base.jpeg' },
    { id: '115', name: 'Pinsir', image: '115-base.jpeg' },
    { id: '116', name: 'Tauros', image: '116-base.jpeg' },
    { id: '117', name: 'Magikarp', image: '117-base.jpeg' },
    { id: '118', name: 'Gyarados', image: '118-base.jpeg' },
    { id: '119', name: 'Lapras', image: '119-base.jpeg' },
    { id: '120', name: 'Ditto', image: '120-base.jpeg' },
    { id: '121', name: 'Eevee', image: '121-base.jpeg' },
    { id: '122', name: 'Vaporeon', image: '122-base.jpeg' },
    { id: '123', name: 'Jolteon', image: '123-base.jpeg' },
    { id: '124', name: 'Flareon', image: '124-base.jpeg' },
    { id: '125', name: 'Porygon', image: '125-base.jpeg' },
    { id: '126', name: 'Omanyte', image: '126-base.jpeg' },
    { id: '127', name: 'Omastar', image: '127-base.jpeg' },
    { id: '128', name: 'Kabuto', image: '128-base.jpeg' },
    { id: '129', name: 'Kabutops', image: '129-base.jpeg' },
    { id: '130', name: 'Aerodactyl', image: '130-base.jpeg' },
    { id: '131', name: 'Snorlax', image: '131-base.jpeg' },
    { id: '132', name: 'Articuno', image: '132-base.jpeg' },
    { id: '133', name: 'Zapdos', image: '133-base.jpeg' },
    { id: '134', name: 'Moltres', image: '134-base.jpeg' },
    { id: '135', name: 'Dratini', image: '135-base.jpeg' },
    { id: '136', name: 'Dragonair', image: '136-base.jpeg' },
    { id: '137', name: 'Dragonite', image: '137-base.jpeg' },
    { id: '138', name: 'Mewtwo', image: '138-base.jpeg' },
    { id: '139', name: 'Mew', image: '139-base.jpeg' },
    { id: '140', name: 'Chikorita', image: '140-base.jpeg' },
    { id: '141', name: 'Bayleef', image: '141-base.jpeg' },
    { id: '142', name: 'Meganium', image: '142-base.jpeg' },
    { id: '143', name: 'Cyndaquil', image: '143-base.jpeg' },
    { id: '144', name: 'Quilava', image: '144-base.jpeg' },
    { id: '145', name: 'Typhlosion', image: '145-base.jpeg' },
    { id: '146', name: 'Totodile', image: '146-base.jpeg' },
    { id: '147', name: 'Croconaw', image: '147-base.jpeg' },
    { id: '148', name: 'Feraligatr', image: '148-base.jpeg' },
    { id: '149', name: 'Sentret', image: '149-base.jpeg' },
    { id: '150', name: 'Furret', image: '150-base.jpeg' },
    { id: '151', name: 'Hoothoot', image: '151-base.jpeg' },
    { id: '152', name: 'Noctowl', image: '152-base.jpeg' },
    { id: '153', name: 'Ledyba', image: '153-base.jpeg' },
    { id: '154', name: 'Ledian', image: '154-base.jpeg' },
    { id: '155', name: 'Spinarak', image: '155-base.jpeg' },
    { id: '156', name: 'Girafarig', image: '156-base.jpeg' },
    { id: '157', name: 'Chinchou', image: '157-base.jpeg' },
    { id: '158', name: 'Lanturn', image: '158-base.jpeg' },
    { id: '159', name: 'Pichu', image: '159-base.jpeg' },
    { id: '160', name: 'Cleffa', image: '160-base.jpeg' },
    { id: '161', name: 'Igglybuff', image: '161-base.jpeg' },
    { id: '162', name: 'Togepi', image: '162-base.jpeg' },
    { id: '163', name: 'Togetic', image: '163-base.jpeg' },
    { id: '164', name: 'Tyrogue', image: '164-base.jpeg' },
    { id: '165', name: 'Hitmonlee', image: '165-base.jpeg' },
    { id: '166', name: 'Hitmonchan', image: '166-base.jpeg' },
    { id: '167', name: 'Lickitung', image: '167-base.jpeg' },
    { id: '168', name: 'Tangela', image: '168-base.jpeg' },
    { id: '169', name: 'Kangaskhan', image: '169-base.jpeg' },
    { id: '170', name: 'Horsea', image: '170-base.jpeg' },
    { id: '171', name: 'Goldeen', image: '171-base.jpeg' },
    { id: '172', name: 'Staryu', image: '172-base.jpeg' },
    { id: '173', name: 'Mr. Mime', image: '173-base.jpeg' },
    { id: '174', name: 'Jynx', image: '174-base.jpeg' },
    { id: '175', name: 'Electabuzz', image: '175-base.jpeg' },
    { id: '176', name: 'Magby', image: '176-base.jpeg' },
    { id: '177', name: 'Pinsir', image: '177-base.jpeg' },
    { id: '178', name: 'Tauros', image: '178-base.jpeg' },
    { id: '179', name: 'Magikarp', image: '179-base.jpeg' },
    { id: '180', name: 'Gyarados', image: '180-base.jpeg' },
    { id: '181', name: 'Lapras', image: '181-base.jpeg' },
    { id: '182', name: 'Ditto', image: '182-base.jpeg' },
    { id: '183', name: 'Eevee', image: '183-base.jpeg' },
    { id: '184', name: 'Vaporeon', image: '184-base.jpeg' },
    { id: '185', name: 'Jolteon', image: '185-base.jpeg' },
    { id: '186', name: 'Flareon', image: '186-base.jpeg' },
    { id: '187', name: 'Porygon', image: '187-base.jpeg' },
    { id: '188', name: 'Omanyte', image: '188-base.jpeg' },
    { id: '189', name: 'Omastar', image: '189-base.jpeg' },
    { id: '190', name: 'Kabuto', image: '190-base.jpeg' },
    { id: '191', name: 'Kabutops', image: '191-base.jpeg' },
    { id: '192', name: 'Aerodactyl', image: '192-base.jpeg' },
    { id: '193', name: 'Snorlax', image: '193-base.jpeg' },
    { id: '194', name: 'Articuno', image: '194-base.jpeg' },
    { id: '195', name: 'Zapdos', image: '195-base.jpeg' },
    { id: '196', name: 'Moltres', image: '196-base.jpeg' },
    { id: '197', name: 'Dratini', image: '197-base.jpeg' },
    { id: '198', name: 'Dragonair', image: '198-base.jpeg' },
    { id: '199', name: 'Dragonite', image: '199-base.jpeg' },
    { id: '200', name: 'Mewtwo', image: '200-base.jpeg' },
    { id: '201', name: 'Mew', image: '201-base.jpeg' },
    { id: '202', name: 'Unown', image: '202-base.jpeg' },
    { id: '203', name: 'Wooper', image: '203-base.jpeg' },
    { id: '204', name: 'Quagsire', image: '204-base.jpeg' },
    { id: '205', name: 'Espeon', image: '205-base.jpeg' },
    { id: '206', name: 'Umbreon', image: '206-base.jpeg' },
    { id: '207', name: 'Murkrow', image: '207-base.jpeg' },
    { id: '208', name: 'Slowking', image: '208-base.jpeg' },
    { id: '209', name: 'Misdreavus', image: '209-base.jpeg' },
    { id: '210', name: 'Unown', image: '210-base.jpeg' },
    { id: '211', name: 'Wobbuffet', image: '211-base.jpeg' },
    { id: '212', name: 'Girafarig', image: '212-base.jpeg' },
    { id: '213', name: 'Pineco', image: '213-base.jpeg' },
    { id: '214', name: 'Forretress', image: '214-base.jpeg' },
    { id: '215', name: 'Dunsparce', image: '215-base.jpeg' },
    { id: '216', name: 'Girafarig', image: '216-base.jpeg' },
    { id: '217', name: 'Teddiursa', image: '217-base.jpeg' },
    { id: '218', name: 'Ursaring', image: '218-base.jpeg' },
    { id: '219', name: 'Slugma', image: '219-base.jpeg' },
    { id: '220', name: 'Magcargo', image: '220-base.jpeg' },
    { id: '221', name: 'Swinub', image: '221-base.jpeg' },
    { id: '222', name: 'Piloswine', image: '222-base.jpeg' },
    { id: '223', name: 'Corsola', image: '223-base.jpeg' },
    { id: '224', name: 'Remoraid', image: '224-base.jpeg' },
    { id: '225', name: 'Octillery', image: '225-base.jpeg' },
    { id: '226', name: 'Mantine', image: '226-base.jpeg' },
    { id: '227', name: 'Skarmory', image: '227-base.jpeg' },
    { id: '228', name: 'Houndour', image: '228-base.jpeg' },
    { id: '229', name: 'Houndoom', image: '229-base.jpeg' },
    { id: '230', name: 'Phanpy', image: '230-base.jpeg' },
    { id: '231', name: 'Donphan', image: '231-base.jpeg' },
    { id: '232', name: 'Porygon2', image: '232-base.jpeg' }
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