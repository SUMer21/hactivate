let latitude = ''; 
let longitude = '';
function locate() {
    try {
        navigator.geolocation.getCurrentPosition((position) => {

            latitude = position.coords.latitude;
            longitude = position.coords.longitude; 

            console.log(`${latitude} and ${longitude}`)

    });
    } catch(error) {
        alert(` error : ${error}`)
    }
}
