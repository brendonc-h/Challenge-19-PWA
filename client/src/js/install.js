const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    e.preventDefault();
    deferredPrompt = e;
    //remove the hidden class from the button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accept") {
            deferredPrompt = null;
            butInstall.classList.toggle('hidden', true);
        }
        console.log(`Install prompt: ${outcome}`);
    }
    //showing prompt
//     promptEvent.prompt();

//     window.deferredPrompt = null;
//     butInstall.classList.toggle('hidden', true);
 });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', () => {
    butInstall.classList.toggle('hidden', true);
    window.deferredPrompt = null;
});
