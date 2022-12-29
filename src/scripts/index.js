(()=>{

    const [...allButtons] = document.getElementById("rating-scale").getElementsByTagName('button');
    const formSearch = document.getElementById('rating-form');

    const globalValues = {
        selectedRating: undefined,
    }

    const initialize = () => {
        allButtons.forEach(element => {
            element.addEventListener('click', onSelectReview);
        });
        formSearch.addEventListener('submit', onSubmitForm);
    }

    function onSelectReview (event){
        allButtons.forEach(element => {
            element.removeAttribute('data-selected');
        })
        event.target.setAttribute('data-selected', "true");
        console.log(event);
    };

    function onSubmitForm (event){
        event.preventDefault();
        [...event.target].forEach(element => {
            if (element.hasAttribute('data-selected')){
                globalValues.selectedRating = element.value;
            }
        })
        console.log(globalValues.selectedRating);
    }

    initialize();
})();