function setupModal(buttonId, modalId, closeId) {
    const AbreModal = document.getElementById(buttonId);
    const Modal = document.getElementById(modalId);
    const CerrarModal = document.getElementById(closeId);

    AbreModal.addEventListener('click', (e) => {
        e.preventDefault();
        Modal.classList.add('modal--show');
    });

    CerrarModal.addEventListener('click', (e) => {
        e.preventDefault();
        Modal.classList.remove('modal--show');
    });
}

setupModal('Boton1', 'modal1', 'cerrarM1');
setupModal('Boton2', 'modal2', 'cerrarM2');
setupModal('Boton3', 'modal3', 'cerrarM3');
setupModal('Boton4', 'modal4', 'cerrarM4');

