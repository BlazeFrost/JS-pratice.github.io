function switchTab(index){
    const tabs = document.querySelectorAll('.TableContent');

    tabs.forEach((tab) =>{
        tab.classList.remove('TableContent-active');
        tab.style.display = 'none';
    })

    const activeTab = document.getElementById('tab'+index);
    activeTab.style.display='block';
    activeTab.classList.add('TableContent-active')
}

switchTab(0);