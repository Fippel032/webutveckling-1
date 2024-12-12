
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFF333'];
    //let currentIndex = 0;
    


    document.getElementById('changeColorBtn').addEventListener('click', () => {
        let i = Math.floor(Math.random() * 5);
        document.body.style.backgroundColor = colors[i];
        //currentIndex = (currentIndex + 1) % colors.length;
    });
