//定義時區名稱用來傳入toLocaleString跟地區名稱
const city = [
    {
        cityName: 'NEW YORK',
        timeZone: 'America/New_York',
    },
    {
        cityName: 'LONDON',
        timeZone: 'Europe/London',
    },
    {
        cityName: 'BANGKOK',
        timeZone: 'Asia/Bangkok',
    },
    {
        cityName: 'TAIWAN',
        timeZone: 'Asia/Taipei',
    },
    {
        cityName: 'SYDNEY',
        timeZone: 'Australia/Sydney',
    }
]
function time() {
    let zone = document.querySelector('.zone');
    for (let i = 0; i < city.length;i++){
        let time = new Date;
        let item = city[i]; //用來迭代陣列所有東西
        var option = {
            timeZone: item.timeZone,
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }
        //第一個參數語言第二個是option 
        let timeString = time.toLocaleString("en", option);
        //把,點拿掉
        timeString = timeString.replace(/,/g,'');
        //用空格取代: 讓hour跟min分開
        timeString =timeString.replace(':',' ');
        //去掉空白使用陣列返還 沒有使用空白會變成單字切割
        timeString = timeString.split(' ');
        //使用陣列後才能賦值解構
        let [month,day,year,hour,min] = timeString;
        console.log(month,day,year,hour);
        let clock =document.createElement('div');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let h3 = document.createElement('h3');
        clock.setAttribute('class','clock');
        h2.textContent= item.cityName;
        p.textContent = `${day} ${month}. ${year}`;
        h3.innerHTML = `${hour}<span>:</span>${min}`;
        zone.append(clock);
        clock.append(div)
        div.append(h2);
        div.append(p);
        clock.append(h3);
        if(hour <'12'){
            clock.style.color = '#ffffff';
            clock.style.backgroundColor ='#000000'
        }else if(hour <'24'){
            clock.style.color = '#000000';
            clock.style.backgroundColor = '#ffffff';
        }
        // str+= `<div>
        // <h2>${item.cityName}</h2>
        // <p>${day}${month}.${year}</p>
        // </div>
        // <div><h3>${hour}</h3></div>`;
        
    }
    // zone.innerHTML =str;
        

}

time();
// 將內容清空再啟動 以免for一直印值 
setInterval(function(){
    document.querySelector('.zone').textContent = '';
    time();
},1000)