
function generateHash() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText) {
        alert('Please enter some text to hash.');
        return;
    }

    // Using the Web Crypto API to generate SHA-256 hash
    async function hashData(data) {
        const encoder = new TextEncoder();
        const dataToHash = encoder.encode(data);
        const hashBuffer = await crypto.subtle.digest('SHA-256', dataToHash);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    hashData(inputText).then(hash => {
        document.getElementById('output').innerText = `SHA-256 Hash: ${hash}`;
    }).catch(error => {
        console.error('Error hashing data:', error);
        document.getElementById('output').innerText = 'An error occurred while generating the hash.';
    });
}
