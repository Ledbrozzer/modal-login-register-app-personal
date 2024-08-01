//pegr bot~ q abre modal:
const openButtons = document.querySelectorAll('.open-modal');

//p/ cada botão -> add -> event d click p/ els
openButtons.forEach(button => {
    //fazr evento de click p/ cada 1 dos botões
    //pegr attribt d'modl c/ base -> attrbt data-modal
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        // console.log(modalId)
        //pegar o attrbt do botão (id)

        // pegr modl c/ bas n'id:
        const modal = document.getElementById(modalId);
        // console.log(modal)
        // vai pegar o element -> modal id

        // modal.show();
        // -> showModal já vem estilzd
        modal.showModal();
    });
});

// fazr modl fech agr...
// pgr todds botões de fechr
const closeButtons = document.querySelectorAll('.close-modal');

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.close();
        // invés de "modal.show()" -> vai dar 1 'modal.close()'
    })
})