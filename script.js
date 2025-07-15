// Function to generate Wikipedia district link from card title
function generateWikiLink(districtName) {
    // Clean the district name and format it for Wikipedia URL
    const formattedName = districtName.trim().replace(/\s+/g, '_') + '_district';
    return `https://en.wikipedia.org/wiki/${formattedName}`;
}

// Function to initialize Wikipedia links for all cards
function initializeWikiLinks() {
    // Get all card elements
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Get the title from the card
        const titleElement = card.querySelector('.card__title');
        const buttonElement = card.querySelector('.btn--explore');
        
        if (titleElement && buttonElement) {
            const districtName = titleElement.textContent;
            const wikiLink = generateWikiLink(districtName);
            
            // Set the href attribute dynamically
            buttonElement.href = wikiLink;
            buttonElement.target = '_blank';
            
            console.log(`Generated link for ${districtName}: ${wikiLink}`);
        }
    });
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeWikiLinks);
