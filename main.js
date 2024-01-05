

async function getIP() {
    const response = await fetch('https://api.ipify.org?format=json')
    return (await response.json()).ip
}
async function getInfo(){
    const ip = await getIP()
    const response = await fetch(`http://ipwho.is/${ip}`)
    return  await response.json()
}
const [mainDiv,...secondDiv] = document.getElementsByTagName('div')

getInfo().then(data=>{
    
    console.log(data)
    // console.log(secondDiv)
    mainDiv.children[1].innerHTML=`<img src=${data.flag.img} class="card-img-top">`;
    mainDiv.children[2].children[0].innerHTML=`${data.country}`
    mainDiv.children[2].children[1].innerHTML=`${data.city}`
    mainDiv.children[2].children[2].innerHTML=`isp: ${data.connection.isp}`
    secondDiv[2].children[0].innerHTML=`IP: ${data.ip}`
    secondDiv[2].children[1].innerHTML = `Latitude: ${data.latitude}`
    secondDiv[2].children[2].innerHTML = `Longitude: ${data.longitude}`
    // console.log(mainDiv.children[1])
    return data})

