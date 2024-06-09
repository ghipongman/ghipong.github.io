document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.getElementById('connect-button');
    const addressElement = document.getElementById('address');

    connectButton.addEventListener('click', async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
                addressElement.textContent = account;
            } catch (error) {
                console.error('User denied account access', error);
                addressElement.textContent = 'User denied account access';
            }
        } else {
            console.log('MetaMask is not installed. Please install MetaMask to use this feature.');
            addressElement.textContent = 'MetaMask is not installed';
        }
    });
});
