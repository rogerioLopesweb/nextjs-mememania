import html2canvas from "html2canvas";
export  function mapImageList(){
    const memesObject = [
        {
            "name": "Chapolin",
            "path": "../pictures/chapolin.jpg" 
        },
        {
            "name": "Chloe",
            "path": "../pictures/chloe.jpg" 
        }
        ,
        {
            "name": "Funny cat",
            "path": "../pictures/funny-cat1.jpg" 
        }
        ,
        {
            "name": "Dog chick",
            "path": "../pictures/dog-chick.jpg" 
        }
        ,
        {
            "name": "Palhaço olhando para cima",
            "path": "../pictures/palhado-olhando-para-cima.jpg" 
        }
        ,
        {
            "name": "Laranja Careta",
            "path": "../pictures/laranja-careta.jpg" 
        }
        ,
        {
            "name": "Rei quer picanha",
            "path": "../pictures/rei-ea-picanha.jpg" 
        }
    ]

    return memesObject;
}
export  function createGallery(imageList)
{
    const memeSelector = document.querySelector("#memes-list")
    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}
export  function changeMemePicture(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}
export function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            const uploadImage = reader.result
            changeMemePicture(uploadImage)
        })
        reader.readAsDataURL(imageInput.files[0]);
}
export  function main(){
    
    document.getElementById("btn-download").onclick = () =>{
        const screenshotPrint =  document.querySelector("#downlabled")
        html2canvas(screenshotPrint).then((canvas)=>{
            const base64Image = canvas.toDataURL("image/png")
            let anchor = document.createElement("a")
            anchor.setAttribute("href", base64Image)
            anchor.setAttribute("download", "my-meme.png")
            anchor.click()
            anchor.remove()
        })
    }
    
    enablePhotoUpload()
}


export function downloadImg(){
    const screenshotPrint =  document.querySelector("#downlabled")
    html2canvas(screenshotPrint).then((canvas)=>{
        const base64Image = canvas.toDataURL("image/png")
        let anchor = document.createElement("a")
        anchor.setAttribute("href", base64Image)
        anchor.setAttribute("download", "my-meme.png")
        anchor.click()
        anchor.remove()
    })
}