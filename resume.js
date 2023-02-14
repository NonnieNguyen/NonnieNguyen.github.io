const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
           
            entry.target.classList.add('show');
            // entry.target.classList.remove('hidden');
        }
    })
});

for(const elem of document.getElementsByClassName('hidden')){
    observer.observe(elem);

} 
