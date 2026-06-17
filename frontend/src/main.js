// DOM Elements
const statusIndicator = document.getElementById('status-indicator');
const statusText = statusIndicator.querySelector('.status-text');
const apiResponseData = document.getElementById('api-response-data');
const refreshBtn = document.getElementById('refresh-btn');

// Fetch data from backend Express API
async function fetchApiData() {
  apiResponseData.textContent = '// Chargement en cours...';
  apiResponseData.style.color = '#9ca3af'; // temporary grey
  
  try {
    const response = await fetch('/api');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Update visual status to ONLINE
    statusIndicator.className = 'status-indicator online';
    statusText.textContent = 'En ligne';
    
    // Display formatted JSON
    apiResponseData.textContent = JSON.stringify(data, null, 2);
    apiResponseData.style.color = '#a7f3d0'; // Mint green for success
    
  } catch (error) {
    console.error('Failed to fetch from API:', error);
    
    // Update visual status to OFFLINE
    statusIndicator.className = 'status-indicator offline';
    statusText.textContent = 'Hors ligne';
    
    // Display error details in the panel
    apiResponseData.textContent = JSON.stringify({
      error: 'Impossible de contacter l\'API backend',
      details: error.message,
      tip: 'Assurez-vous que le backend Express est en cours d\'exécution (port 5000) et accessible.'
    }, null, 2);
    apiResponseData.style.color = '#fca5a5'; // Light red for error
  }
}

// Event Listeners
refreshBtn.addEventListener('click', fetchApiData);

// Initial call on load
window.addEventListener('DOMContentLoaded', fetchApiData);
