// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

let doc = document
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return console.log( Math.floor(Math.random() * (max - min + 1) + min))

} 
getRandomIntInclusive(1,30)
//preloader
let preloader = doc.querySelector('.preloader')
document.body.onload = function(){

    setTimeout(() => {
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done')
        }
    },  1000);

}

//categorii  // JAnri//////////////////////////////////////////////////////////////////////////////////////////////////
let show = doc.querySelector('.show')
let show_janr = doc.querySelector('.show_img')

let hiphop2 = doc.querySelector('.hiphop2')
let pop = doc.querySelector('.pop')
let pop2 = doc.querySelector('.pop2')
let rock = doc.querySelector('.rock')
let rock2 = doc.querySelector('.rock2')
let colo = doc.querySelector('.colo')
let colo2 = doc.querySelector('.colo2')
let play = doc.querySelector('.play')
let play2 = doc.querySelector('.play2')
show.addEventListener('click', function () {
    hiphop2.classList.toggle('high')
    show_janr.classList.toggle('show_img_rotate')
})


pop.addEventListener('click', function () {
    pop2.classList.toggle('high')
    show_janr.classList.toggle('show_img_rotate')
})
rock.addEventListener('click', function () {
    rock2.classList.toggle('high2')
    show_janr.classList.toggle('show_img_rotate')
})
colo.addEventListener('click', function () {
    colo2.classList.toggle('high2')
    show_janr.classList.toggle('show_img_rotate')
})
// play.addEventListener('click', function () {
//     play2.classList.toggle('high2')
//     show_janr.classList.toggle('show_img_rotate')
// })




//CLOSED MENU//////////////////////////////////////////////////////////////////////////////////////////////
let close_menu = doc.querySelector('.close_menu')
let close_menu1 = doc.querySelector('.close_menu1')
let logo = doc.querySelector('.logo')
let overall_block = doc.querySelector('.playlist_main')
let txt1 = doc.querySelector('.txt1')
let txt2 = doc.querySelector('.txt2')
let txt3 = doc.querySelector('.txt3')
let txt4 = doc.querySelector('.txt4')
let menu_box = doc.querySelector('.menu_box')
let menu_btn = doc.querySelector('.menu_btn')
let img_btn = doc.createElement('img')

let wraper = doc.querySelector('.wrapper')
let header = doc.querySelector('header')


let liked_songs = doc.querySelector('.liked_songs')
let liked_songs2 = doc.querySelector('.liked_songs2')
let recent_songs = doc.querySelector('.recent_songs')
let friends_songs = doc.querySelector('.friends_songs')
let title1_box = doc.querySelector('.title1_box')
let container = doc.querySelector('.container')
let container2 = doc.querySelector('.container22')
let slider = doc.querySelector('.slider')
let slider2 = doc.querySelector('.slider22')
function txt_none() {
    txt1.classList.toggle('none')
    txt2.classList.toggle('none')
    txt3.classList.toggle('none')
    txt4.classList.toggle('none')
}

let love_box = doc.querySelector('.love_box')
let loved_songs = doc.querySelector('.loved_songs')
let close_fun = () => {
    txt_none()
    overall_block.classList.toggle('none')
    menu_box.classList.toggle('menu_box_closed')
    logo.setAttribute('src', "./img/Single.svg")
    close_menu.classList.toggle('none')
    close_menu1.classList.toggle('none')
    logo.classList.toggle('logo1')
    logo.classList.toggle('logo')
    menu_btn.classList.toggle('menu_btn1')
    menu_btn.textContent = ''
    img_btn.src = "./img/DownloadSimple.svg"
    menu_btn.append(img_btn)
    header.classList.toggle('pad_head')
    wraper.classList.remove('mar_wrap')
    liked_songs.classList.add('common_category2')
    recent_songs.classList.add('common_category2')
    friends_songs.classList.add('common_category2')
    title1_box.classList.add('title1_box2')
    slider_fun()
}
let close_fun1 = () => {
    txt_none()
    logo.classList.toggle('logo')

    overall_block.classList.toggle('none')
    menu_box.classList.toggle('menu_box_closed')
    logo.setAttribute('src', "./img/LOGO.svg")
    close_menu.classList.toggle('none')
    close_menu1.classList.toggle('none')
    logo.classList.toggle('logo1')
    menu_btn.classList.toggle('menu_btn1')
    menu_btn.textContent = 'Download app'
    header.classList.toggle('pad_head')
    wraper.classList.add('mar_wrap')
    liked_songs.classList.remove('common_category2')
    recent_songs.classList.remove('common_category2')
    friends_songs.classList.remove('common_category2')
    title1_box.classList.remove('title1_box2')
    slider_fun()
}
// let reload = ()=>{
//     // alert('reload')
// }
// document.addEventListener('DOMContentLoaded' , reload)
close_menu.addEventListener('click', close_fun)
close_menu1.addEventListener('click', close_fun1)


//HOME/////////////////////////////////////////////////////////////////////////////////////////////////////////////

let home_box = doc.querySelector('.home_box')
let search_box = doc.querySelector('.search_box')
let library_box = doc.querySelector('.library_box')
let main_box = doc.querySelector('.main_box')
let input_box = doc.querySelector('.input_box')

let library_head =doc.querySelector('.library_head')
let home_icon = doc.querySelector('.home_icon')
let library_icon = doc.querySelector('.library_icon')




let lib1 = doc.querySelector('.lib1')
let lib2 = doc.querySelector('.lib2')
let lib3 = doc.querySelector('.lib3')
let lib4 = doc.querySelector('.lib4')

lib1.onclick = function(){
    lib2.classList.remove('lib_high')
    lib3.classList.remove('lib_high')
    lib4.classList.remove('lib_high')
    lib1.classList.add('lib_high')
}
lib2.onclick = function(){
    lib2.classList.add('lib_high')
    lib1.classList.remove('lib_high')
    lib3.classList.remove('lib_high')
    lib4.classList.remove('lib_high')

}
lib3.onclick = function(){
    lib3.classList.add('lib_high')
    lib1.classList.remove('lib_high')
    lib2.classList.remove('lib_high')
    lib4.classList.remove('lib_high')
    
}       
lib4.onclick = function(){
    lib4.classList.add('lib_high')
    lib1.classList.remove('lib_high')
    lib2.classList.remove('lib_high')
    lib3.classList.remove('lib_high')

}
let library =  doc.querySelector('.library') 
let eye_lib = doc.querySelector('.eye_lib')
let down_lib= doc.querySelector('.down_lib')
let eye_close = doc.querySelector('.eye_close')
eye_lib.addEventListener("click", function(){
    if (down_lib.contains(eye_close)){
        eye_lib.src = './img/eye_close.svg'
        eye_lib.classList.remove('eye_close')
        eye_lib.classList.add('eye_lib')
        alert('contain')
    } else if (down_lib.contains(eye_lib)){ 
        eye_lib.classList.add('eye_close')
        eye_lib.classList.remove('eye_lib1')
        eye_lib.src = './img/eye_close.svg'
    }
    
})



function home_none(){
    category.classList.add('none')
    main_box.classList.add('none')
    library.classList.add('none')
} 
function weekly_none(){
    weekly_box.classList.add('none')
    weekly_box1.classList.add('none')
    weekly_box2.classList.add('none')
    weekly_box3.classList.add('none')
    weekly_box4.classList.add('none')
}
let search_icon = doc.querySelector('.search_icon')
let find_box =doc.querySelector('.find_box')
let search_state = () => {
    weekly_none()
    category22.classList.remove('none')

    loved_songs.classList.add('none')
    search_box.classList.add('gray')
    home_box.classList.remove('gray')
    library_box.classList.remove('gray')
    library_icon.src = "./img/library.svg"
    home_icon.src = './img/home_close.svg'
    library_box.classList.remove('library_box1')
    friends_playlist.classList.add('none')
    header.classList.remove('trans')
    home_none()
    input_box.classList.add('search2')

    input_box.classList.remove('none')
    library_head.classList.add('none')
    find_box.classList.remove('none')
    love_box.classList.remove('gray')
    search_icon.src = './img/Search_Fill_S.svg'

}

let library_state = () => {
    loved_songs.classList.add('none')
    weekly_none()
    category22.classList.remove('none')

    search_box.classList.remove('gray')
    home_box.classList.remove('gray')
    library_box.classList.add('gray')
    friends_playlist.classList.add('none')
    header.classList.remove('trans')
    input_box.classList.remove('search2')
    find_box.classList.add('none')
    love_box.classList.remove('gray')


    //NEw PAge//////////////    /////////////////////////////////////////////////////////
    category.classList.add('none')
    main_box.classList.add('none')
    input_box.classList.add('none')
    // wraper.classList.add('lib_back')
    library_head.classList.remove('none')
    home_icon.src = './img/home_close.svg'
    library_icon.src = './img/library_open.svg'
    library_box.classList.add('library_box1')
    library.classList.remove('none')
    search_icon.src = './img/search.svg'

}
let home_state = () => {
    loved_songs.classList.add('none')
    weekly_none()
    friends_playlist.classList.add('none')
    header.classList.remove('trans')
    search_box.classList.remove('gray')
    input_box.classList.remove('search2')
    category22.classList.remove('none')
    
    find_box.classList.add('none')
    love_box.classList.remove('gray')
    
    search_icon.src = './img/search.svg'
    

    home_box.classList.add('gray')
    //library//////
    library_box.classList.remove('gray')
    category.classList.remove('none')
    main_box.classList.remove('none')
    input_box.classList.remove('none')
    library_head.classList.add('none')
    // wraper.classList.remove('lib_back')
    home_icon.src = './img/home_icon.svg'
    library_icon.src = "./img/library.svg"
    library_box.classList.remove('library_box1')
    library.classList.add('none')
}
let love_state = ()=>{
    friends_playlist.classList.add('none')
    header.classList.remove('trans')
    search_box.classList.remove('gray')
    home_none()
    input_box.classList.add('none')
    weekly_none()
    category22.classList.remove('none')
    
    find_box.classList.add('none')
    love_box.classList.add('gray')
    home_box.classList.remove('gray')
    //library//////
    library_box.classList.remove('gray')
    loved_songs.classList.remove('none')
    header.classList.add('trans')
    home_box.classList.remove('gray')
    library_head.classList.add('none')
    // wraper.classList.remove('lib_back')
    home_icon.src = './img/home_close.svg'

    library_icon.src = "./img/library.svg"
    library_box.classList.remove('library_box1')
    library.classList.add('none')
    search_icon.src = './img/search.svg'
    
}

liked_songs.addEventListener("click" ,  love_state)
liked_songs2.addEventListener("click" ,  love_state)




love_box.addEventListener("click" , love_state)
search_box.addEventListener("click", search_state)
library_box.addEventListener("click", library_state)
home_box.addEventListener("click", home_state)


//seting////////////////////////////////////////////////////////////////////////////////

let seting_box = doc.querySelector('.setting')
let point = doc.querySelector('.points')
let seting = () => {
    seting_box.classList.toggle('ani_seting')
}
point.addEventListener("click", seting)

//cross///////////////////////////////////////////////////

let cros_img = doc.querySelector('.cross_boxes')
let cros_img2 = doc.querySelector('.cross_boxes1')

let all_close = () => {
    enter_box.classList.add('none')
    registr_box.classList.add('none')
}
cros_img.addEventListener("click", all_close)
cros_img2.addEventListener("click", all_close)

//Registr/////////////////////////////////////////////////////////////////////////////

let enter_btn = doc.querySelector('.zayti_btn')
let enter_box = doc.querySelector('.enter_box')
let enter_p = doc.querySelector('.ent_p')


let reg = doc.querySelector('.reg')
let registr_box = doc.querySelector('.registr_box')
let reg_btn = doc.querySelector('.registr_btn2')

let registration = () => {
    registr_box.classList.remove('none')
    enter_box.classList.add('none')
}
let enter = () => {
    enter_box.classList.remove('none')
    registr_box.classList.add('none')
}


reg.addEventListener("click", registration)
reg_btn.addEventListener("click", registration)


enter_p.addEventListener("click", enter)
enter_btn.addEventListener("click", enter)


///ENT



let auth = doc.forms.auth

let login = auth.login
let pass = auth.password
myStorage = window.localStorage
let enterr = localStorage.getItem('enterr');






let down_profile1 = doc.querySelector('.down_profile')
let right = doc.querySelector('.right')
let right2 = doc.querySelector('.right2')
// localStorage.clear()

function proverka(event) {
    event.preventDefault()
    axios.get("http://localhost:3333/users")
        .then(function (response) {
            let loginv = login.value
            let passv = pass.value
            let mass = response.data
            console.log(mass);
            for (let item of mass) {
                if (item.password.includes(passv) == true && item.name.includes(loginv) === true && loginv !== "") {
                    window.location.href = "index.html"
                    alert(`С возврашением ${item.name}`)
                    // localStorage.setItem('enterr', 'True')
                    axios.put('http://localhost:3333/users/' + `${item.id}`, {
                        name: item.name,
                        password: item.password,
                        acess: true
                    })
                } else {
                    login.style.borderColor = "red"
                    pass.style.borderColor = "red"
                }
                ///new interface/////////////////////////////////////////////////////////////////////////////////
            }

        })
}
let gradient_text1 = doc.querySelector('.gradient_text1')
let pl_high = doc.querySelector('.pl_high')
let pl_high2 = doc.querySelector('.pl_high2')

console.log(down_profile1);
auth.addEventListener("submit", proverka)
let exit = doc.querySelector('.exit')
let notification = doc.querySelector('.notification')
axios.get("http://localhost:3333/users")
    .then(function (response) {
        for (let item of response.data) {
            if (item.acess == true) {
                reg.classList.add('none')
                enter_btn.classList.add('none')

                let down_img = doc.createElement('img')
                down_img.src = "./img/down_profile.svg"
                down_img.classList.add('down_profile')

                let profile = doc.createElement('div')
                profile.classList.add('profile')
                right.append(profile)

                let img_profile = doc.createElement('img')
                img_profile.src = './img/ABFD2080-4F75-42D3-ABA6-F93747DBF77B 1.svg'
                img_profile.classList.add('img_profile')
                profile.append(img_profile)

                let name = doc.createElement('p')
                name.textContent = `${item.name}`
                gradient_text1.textContent = item.name
                pl_high.textContent = item.name
                pl_high2.textContent = item.name
                profile.append(name , down_img)
                exit.classList.remove('none')
                notification.classList.remove('none')
                profile.addEventListener("click" , function(){
                    exit.classList.toggle('exit2')
                    down_img.classList.toggle('rot')
                })
                exit.addEventListener("click", function () {
                    right.classList.add('flex')
                    right.classList.remove('none')
                    axios.put('http://localhost:3333/users/' + `${item.id}`, {
                        name: item.name,
                        password: item.password,
                        acess: false
                    })
                })
            }
        }

    })










//   let number = doc.createElement('p')
//     let num = 0;
//     while (num <= 50) {
//       num++
//   number.textContent = num
//       if (num == 50){
           
//         break
//       } e 
// //    console.log(num)

//    console.log(number);
//   };  

let love_mus = doc.querySelector('.love_mus')
let mass = []
let api_content =[]
let num = 0
let num2 = 0
let liked_mass = []
let shuffle = doc.querySelector('.shuffle')
let all_musics1 = doc.querySelector('.all_musics1')
let all_musics2 = doc.querySelector('.all_musics2')
let url2 = 'http://localhost:3333/liked_songs'
let progress_box = doc.querySelector('.progress_box')
let now_time =doc.querySelector('.now_time')
let all_time =doc.querySelector('.all_time')
let progress_bar = doc.querySelector('.progress_bar')
// let valume_slider = doc.querySelector('.valume-slider')
let play_box = doc.querySelector('.play_box')
let pause_box = doc.querySelector('.pause_box')
let music_info = doc.querySelector('.music_info')
let info_img = doc.querySelector('.info_img')
let info_right = doc.querySelector('.info_right')
let all_musics = doc.querySelector('.all_musics')
let all_musics3 = doc.querySelector('.all_musics3')
let all_musics4 = doc.querySelector('.all_musics4')
let all_musics5 = doc.querySelector('.all_musics5')
let next_song = doc.querySelector('.next_song')
let prev_song = doc.querySelector('.prev_song')
let info_name = doc.querySelector('.info_name')
let music_index = 0
let mass_like = []
let valume_slider = doc.querySelector('#rang')
let fill = doc.querySelector('.bar .fill')
function get_musics(e){ 
    for(let item of mass) {
        let all_obj = item.tracks.items
        // console.log(all_obj);
        for(let item2 of all_obj){
            let track = item2.track

            
            let obj_api = {
              name:item2.track.name,
              track : item2.track.preview_url,
              artists:item2.track.album.artists[0].name,
              img:track.album.images[2].url,
              date:track.album.release_date
          }
          
          api_content.push(obj_api)
          

          


            // console.log(track);  
            // console.log(track.album.name);   
            
            let music_box = doc.createElement('div')
            let music_name = doc.createElement('p')
            let music_img = doc.createElement('img')
            let name_img = doc.createElement('div')
            let names = doc.createElement('div')
            let music_author = doc.createElement('p')
            let album = doc.createElement('p')
            let date = doc.createElement('p')
            let add_by = doc.createElement('a')
            let add_box = doc.createElement('div')
            let add_img = doc.createElement('img')
            let duration = doc.createElement('p')
          let liked_img = doc.createElement('img')
          let liked_div = doc.createElement('div')

          liked_img.src = './img/liked.svg'
            liked_img.classList.add('liked_img')
 
           
             function liked_func(event){
                event.preventDefault()
                  
            
               let dataUser2 = {
                        name:item2.track.name,
                        author:track.artists[0].name,
                        img:track.album.images[2].url,
                        track : item2.track.preview_url,
                        date:track.album.release_date,
                        album:track.album.name,
                        duration:track.duration_ms
                    }   
                    
                    axios.post(url2, dataUser2)
                    // love_mus.append(music_box)
                    api_content.forEach((n, u) => n.i = u + 1 - 1)


                let isLiked = liked_div.classList.contains('isliked')
                liked_img.src = './img/liked_yes.svg'
                liked_div.classList.add('isliked')
                if (isLiked){
                    liked_img.src = './img/liked.svg'
                    // event.preventDefault()
                    liked_div.classList.remove('isliked')
                    // all_musics.append(music_box)
                } else {
                    liked_img.src = './img/liked_yes.svg'
                    // event.preventDefault()
                    liked_div.classList.add('isliked') 
                    
                    alert('Added in loved one') 
                };
                    
                      // library.append(music_box)
                   
                
            }   
          
  
          liked_img.addEventListener("click" , liked_func) 
          let day = new Date(obj_api.date)
          let my_day = new Date()
          let day_min = my_day.getDay() + day.getDay()
          date.textContent = `${day_min} day`


            let por = doc.createElement('p')
            por.innerHTML  = `${num = num + 1}`
            // let music_time = track.duration_ms
            // let total_min = Math.floor(music_time / 60)
            // let total_sec = Math.floor(music_time % 60)
            // duration.innerText = `${total_min} : ${total_sec}`
            duration.textContent = '00:29'
            // console.log(((track.duration_ms/1000)/60).toString().slice(0,4).replace(/\./ ,':'));
            // duration.textContent = (((track.duration_ms/1000)/60).toString().slice(0,4).replace(/\./ ,':'))
            add_by.textContent = 'Moonman'
            add_img.src = './img/photo_2022-07-03_14-09-35.jpg'
            add_by.href = 'https://open.spotify.com/user/31uhiqduyfrattxjl5ltxh3b4npm'
            // date.textContent = track.album.release_date
            // date.textContent = '1 day ago'
            album.textContent = track.album.name.slice(0,8)
            music_img.src = track.album.images[2].url
            music_name.textContent = obj_api.name
            music_author.textContent = track.artists[0].name.slice(0,10)

            por.classList.add('por')  
            music_img.classList.add('music_img')
            music_name.classList.add('music_name')
            music_box.classList.add('music_box')
            name_img.classList.add('name_img')
            names.classList.add('names')
            music_author.classList.add('music_author')
            album.classList.add('music_author')
            date.classList.add('date')
            add_by.classList.add('add_by')
            add_box.classList.add('add_box')
            add_img.classList.add('add_img')
            duration.classList.add('duration')
            liked_div.append(liked_img)
            names.append(music_name,music_author)
            name_img.append(music_img ,names)
            music_box.append(por,name_img , album , date , add_box)
            add_box.append( add_img ,add_by , liked_div, duration)

            e.append(music_box)

          //music_audio///////////////
        //   let info_name= doc.createElement('p')
        async function loading(arr,index){
          let muzon = arr[index]
          info_name.textContent = muzon.name 
          info_img.src = muzon.img
          audio.src= muzon.track
          info_author.textContent = muzon.artists
         
          console.log(muzon);
          if(muzon.music === null) {
              audio.src = await nullSearch(muzon.name, muzon.artists)
              muzon.music = await nullSearch(muzon.name, muzon.artists)
              audio.play()
  
          } else {
              audio.play()
          }
      
          next_song.addEventListener('click', ()=>{

            let shuffle_on = shuffle.classList.contains('shuffle_on')     
          if (shuffle_on){
            loading(arr,  index + (Math.floor(Math.random() * (30 - 10+ 1) + 10)))
            
          } else{
            loading(arr, index+1)
          }
              
            
              
          })
          
      
          prev_song.addEventListener('click', ()=>{
            let shuffle_on = shuffle.classList.contains('shuffle_on')     
          if (shuffle_on){
            loading(arr,  index + (Math.floor(Math.random() * (30 - 10+ 1) + 10)))
            
          } else{
            loading(arr, index-1)
          }
              
   
          })
      
          audio.addEventListener("ended", ()=>{
  
          let on = repeate.classList.contains('repeate_on')
          if (on){
            audio.play()
            
          } else {
            let shuffle_on = shuffle.classList.contains('shuffle_on')     
            if (shuffle_on){
              loading(arr,  index + (Math.floor(Math.random() * (30 - 10+ 1) + 10)))
              
            } else{
              loading(arr, index+1)
            play_song()
              
            }
          }
  
  
           
          
          
      })
          

        
        }
          let audio = doc.querySelector('.audio')
        //   let player = doc.querySelector('.player')
          music_box.addEventListener("click" , function(){
            loading(api_content,  all_obj.indexOf(item2))  


            music_box.classList.add('block-click')


            let blocks = doc.querySelectorAll('.music_box')

            blocks.forEach((block)=>{
                block.classList.remove('block-click')  
                // track.pause()
            })
            music_box.classList.add('block-click')

            
            info_name.textContent = obj_api.name 
            info_img.src = track.album.images[2].url
            audio.src= obj_api.track
            info_author.textContent = track.artists[0].name
            info_name.classList.add('music_name')
            info_author.classList.add('music_author2')
            info_right.append(info_name , info_author)
            // play_btn.src = './img/211871_pause_icon.svg'
            // play_btn.src = './img/211876_play_icon.svg'
            play_song()

         

            function play_song (){  
              // play_btn.src = './img/211871_pause_icon.svg'
            pause_box.classList.remove('none')
            play_box.classList.add('none')
              audio.play()
            }
            function pause_song (){
              // play_btn.src = './img/211876_play_icon.svg'
              pause_box.classList.add('none')
              play_box.classList.remove('none')
              audio.pause()
            }
            play_box.addEventListener("click" , function(){
              pause_box.classList.remove('none')
              play_box.classList.add('none')
              play_song()
              
            })

            pause_box.addEventListener("click" , function(){
              play_box.classList.remove('none')
              pause_box.classList.add('none')
              pause_song()
              
            })      
              
              //PRogre_player//////////////////////////////////////////////////////////////
              function progres_update(e){
                const {duration , currentTime} = e.srcElement

                let progres_percent = (currentTime / duration) * 100

                progress_bar.style.width = `${progres_percent}%`

                // now_time.innerHTML = currentTime.toString().slice(0,4).replace(/\./ ,':')
                // all_time.innerHTML = duration.toString().slice(0,4).replace(/\./ ,':')


                //second varik////////////////////////////////

                now_time.innerHTML = currentTime.toString().slice(0,2).replace(/\./ ,'')
                all_time.innerHTML = duration.toString().slice(0,2).replace(/\./ ,'')


              }
              audio.addEventListener('timeupdate' , progres_update)
              
              //set progress/////////////////////////////////////////////////////////////

              function set_progress(e){
                const width =  this.clientWidth
                const clickX = e.offsetX
                const duration = audio.duration
                
                audio.currentTime = (clickX / width) * duration
              }

              progress_box.addEventListener("click" , set_progress)

              
          })

          

        }
    }
}

let repeate = doc.querySelector('.repeate')


let repeate_fuc = ()=>{
  let on = repeate.classList.contains('repeate_on')
  if(on){
    repeate.classList.remove('repeate_on')
    
  } else {
    repeate.classList.add('repeate_on')
  }


}
repeate.addEventListener("click" , repeate_fuc)


let shuffle_fuc = ()=>{
  let shuffle_on = shuffle.classList.contains('shuffle_on')
  if(shuffle_on){
    shuffle.classList.remove('shuffle_on')
    
  } else {
    shuffle.classList.add('shuffle_on')
  }


}
shuffle.addEventListener("click" , shuffle_fuc)





let audio = doc.querySelector('.audio')
let play_main = doc.querySelector('.play_btn_main')
let info_author = doc.querySelector('.info_author')

const clientId = 'aefc3f567f7342ab83ee69ecaae51dec';
    const clientSecret = '49777910037a468e8913f5626297d153';

    const getToken = async () => {
        
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        let acess = data.access_token 
        // Скопируйте результат в консоли и поместите в переменную accessToken
        console.log(data.access_token);

            


 
    const accesToken = acess
    fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO1kxsTC', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accesToken
  }
})
  .then(res => res.json())
  .then(res => {
    
    mass.push(res)
     
    for(let item of mass) {
        let all_obj = item.tracks.items
        // console.log(all_obj);
        for(let item2 of all_obj){
            let track = item2.track

            
            let obj_api = {
              name:item2.track.name,
              track : item2.track.preview_url,
              artists:item2.track.album.artists[0].name,
              img:track.album.images[2].url,
              date:track.album.release_date
          }
          
          api_content.push(obj_api)

          


            // console.log(track);  
            // console.log(track.album.name);   
            
            let music_box = doc.createElement('div')
            let music_name = doc.createElement('p')
            let music_img = doc.createElement('img')
            let name_img = doc.createElement('div')
            let names = doc.createElement('div')
            let music_author = doc.createElement('p')
            let album = doc.createElement('p')
            let date = doc.createElement('p')
            let add_by = doc.createElement('a')
            let add_box = doc.createElement('div')
            let add_img = doc.createElement('img')
            let duration = doc.createElement('p')
          let liked_img = doc.createElement('img')
          let liked_div = doc.createElement('div')

          liked_img.src = './img/liked.svg'
            liked_img.classList.add('liked_img')
 
           
             function liked_func(event){
                event.preventDefault()
                  
            
               let dataUser2 = {
                        name:item2.track.name,
                        author:track.artists[0].name,
                        img:track.album.images[2].url,
                        track : item2.track.preview_url,
                        date:track.album.release_date,
                        album:track.album.name,
                        duration:track.duration_ms
                    }   
                    
                    axios.post(url2, dataUser2)
                    // love_mus.append(music_box)
                    api_content.forEach((n, u) => n.i = u + 1 - 1)


                let isLiked = liked_div.classList.contains('isliked')
                liked_img.src = './img/liked_yes.svg'
                liked_div.classList.add('isliked')
                if (isLiked){
                    liked_img.src = './img/liked.svg'
                    // event.preventDefault()
                    liked_div.classList.remove('isliked')
                    // all_musics.append(music_box)
                } else {
                    liked_img.src = './img/liked_yes.svg'
                    // event.preventDefault()
                    liked_div.classList.add('isliked') 
                    
                    alert('Added in loved one') 
                };
                    
                   
                
            }   
          
  
          liked_img.addEventListener("click" , liked_func) 
          let day = new Date(obj_api.date)
          let my_day = new Date()
          let day_min = my_day.getDay() + day.getDay()
          date.textContent = `${day_min} day ago`


            let por = doc.createElement('p')
            por.innerHTML  = `${num = num + 1}`
            // let music_time = track.duration_ms
            // let total_min = Math.floor(music_time / 60)
            // let total_sec = Math.floor(music_time % 60)
            // duration.innerText = `${total_min} : ${total_sec}`
            duration.textContent = '00:29'
            // console.log(((track.duration_ms/1000)/60).toString().slice(0,4).replace(/\./ ,':'));
            // duration.textContent = (((track.duration_ms/1000)/60).toString().slice(0,4).replace(/\./ ,':'))
            add_by.textContent = 'Moonman'
            add_img.src = './img/photo_2022-07-03_14-09-35.jpg'
            add_by.href = 'https://open.spotify.com/user/31uhiqduyfrattxjl5ltxh3b4npm'
            // date.textContent = track.album.release_date
            // date.textContent = '1 day ago'
            album.textContent = track.album.name.slice(0,8)
            music_img.src = track.album.images[2].url
            music_name.textContent = obj_api.name
            music_author.textContent = track.artists[0].name.slice(0,10)

            por.classList.add('por')  
            music_img.classList.add('music_img')
            music_name.classList.add('music_name')
            music_box.classList.add('music_box')
            name_img.classList.add('name_img')
            names.classList.add('names')
            music_author.classList.add('music_author')
            album.classList.add('music_author')
            date.classList.add('date')
            add_by.classList.add('add_by')
            add_box.classList.add('add_box')
            add_img.classList.add('add_img')
            duration.classList.add('duration')
            liked_div.append(liked_img)
            names.append(music_name,music_author)
            name_img.append(music_img ,names)
            music_box.append(por,name_img , album , date , add_box)
            add_box.append( add_img ,add_by , liked_div, duration)

            all_musics.append(music_box)


    
      async function loading(arr,index){
        let muzon = arr[index]
        info_name.textContent = muzon.name 
        info_img.src = muzon.img
        audio.src= muzon.track
        info_author.textContent = muzon.artists
        


       

        // console.log(muzon);
        if(muzon.music === null) {
            audio.src = await nullSearch(muzon.name, muzon.artists)
            muzon.music = await nullSearch(muzon.name, muzon.artists)
            audio.play()

        } else {
            audio.play()
        }
        
       
        next_song.addEventListener('click', ()=>{
         
          pause_box.classList.remove('none')
          play_box.classList.add('none')
            audio.play()

          
          let shuffle_on = shuffle.classList.contains('shuffle_on')     
        if (shuffle_on){
          loading(arr,  index + (Math.floor(Math.random() * (30 - 10+ 1) + 10)))
          
        } else{
          loading(arr, index+1)
        }
            
          
            
        })
        
    
        prev_song.addEventListener('click', ()=>{
          let shuffle_on = shuffle.classList.contains('shuffle_on')     
        if (shuffle_on){
          loading(arr,  index + (Math.floor(Math.random() * (30 - 10+ 1) + 10)))
          
        } else{
          loading(arr, index-1)
        }
            
 
        })
    
        audio.addEventListener("ended", ()=>{

        let on = repeate.classList.contains('repeate_on')
        if (on){
          audio.play()
          
        } else {
          let shuffle_on = shuffle.classList.contains('shuffle_on')     
          if (shuffle_on){
            loading(arr,  index + (Math.floor(Math.random() * (30 - 10+ 1) + 10)))
            
          } else{
            loading(arr, index+1)
          play_song()
            
          }
        }


         

//         function getRandomIntInclusive(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return console.log( Math.floor(Math.random() * (max - min + 1) + min))

//       }      
// getRandomIntInclusive(1,30) 
        
        
    })
        
    
    

    }

    
    
    // Управление с звуком
    function setVolume(){
        audio.volume = valume_slider.value / 100
    }
    valume_slider.addEventListener('change',setVolume)

   
function set_bar(){
    fill.style.width = audio.value + "%"
}
valume_slider.addEventListener('input', set_bar)
set_bar()
  


          music_box.addEventListener("click" , function(){
            loading(api_content,  all_obj.indexOf(item2))  
            music_box.classList.add('block-click')


            let blocks = doc.querySelectorAll('.music_box')

            blocks.forEach((block)=>{
                block.classList.remove('block-click')  
                // track.pause()
            })
            music_box.classList.add('block-click')

            info_name.textContent = obj_api.name 
            info_img.src = track.album.images[2].url
            audio.src= obj_api.track
            info_author.textContent = track.artists[0].name
            // info_name.classList.add('music_name')
            // info_author.classList.add('music_author2')
            // info_right.append(info_name , info_author)
            info_name.classList.add('music_name')
            info_author.classList.add('music_author2')
            info_right.append(info_name , info_author)
            // play_btn.src = './img/211871_pause_icon.svg'
            // play_btn.src = './img/211876_play_icon.svg'
            play_song()

            function play_song (){  
                // play_btn.src = './img/211871_pause_icon.svg'
              pause_box.classList.remove('none')
              play_box.classList.add('none')
                audio.play()
              }
              function pause_song (){
                // play_btn.src = './img/211876_play_icon.svg'
                pause_box.classList.add('none')
                play_box.classList.remove('none')
                audio.pause()
              }
              play_box.addEventListener("click" , function(){
                pause_box.classList.remove('none')
                play_box.classList.add('none')
                play_song()
                
              })

              pause_box.addEventListener("click" , function(){
                play_box.classList.remove('none')
                pause_box.classList.add('none')
                pause_song()
                
              })    
              
              //PRogre_player//////////////////////////////////////////////////////////////
              function progres_update(e){
                const {duration , currentTime} = e.srcElement

                let progres_percent = (currentTime / duration) * 100

                progress_bar.style.width = `${progres_percent}%`

                // now_time.innerHTML = currentTime.toString().slice(0,4).replace(/\./ ,':')
                // all_time.innerHTML = duration.toString().slice(0,4).replace(/\./ ,':')


                //second varik////////////////////////////////

                now_time.innerHTML = currentTime.toString().slice(0,2).replace(/\./ ,'')
                all_time.innerHTML = duration.toString().slice(0,2).replace(/\./ ,'')


              }
              audio.addEventListener('timeupdate' , progres_update)

              //set progress/////////////////////////////////////////////////////////////

              function set_progress(e){
                const width =  this.clientWidth
                const clickX = e.offsetX
                const duration = audio.duration
                
                audio.currentTime = (clickX / width) * duration
              }

              progress_box.addEventListener("click" , set_progress)

            //   audio.addEventListener("ended", ()=>{
            //       loading(arr, index+1)

            //     // if (on){
            //     //   audio.play()
            //     //   pause_box.classList.remove('none')
            //     //   play_box.classList.add('none')
            //     // } else {
            //     //   loading(arr, index+1)
    
            //     // }
    
                
            // })
          })

         
      
         
          // console.log(obj_api);

        }
    }
      console.log(api_content);
      console.log(liked_mass);
  })

  
  




//1 playlist


  fetch('https://api.spotify.com/v1/playlists/37i9dQZEVXcDF2p3yHlqEP', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accesToken
  }
})
  .then(res => res.json())
  .then(res => {
    mass.push(res)
    get_musics(all_musics1)
    
     
  })

//2 playlist
  fetch('https://api.spotify.com/v1/playlists/37i9dQZF1E4jPa5xvFs6GW', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accesToken
    }
  })
    .then(res => res.json())
    .then(res => {
      mass.push(res)
    //   get_musics(all_musics2)
    get_musics(all_musics2)
       
    })



3
    fetch('https://api.spotify.com/v1/playlists/1CxDhmU0jyOBY8LTLUCboe', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accesToken
        }
      })
        .then(res => res.json())
        .then(res => {
          mass.push(res)
        //   get_musics(all_musics2)
        get_musics(all_musics3)
           
        })

 //4       
        fetch('https://api.spotify.com/v1/playlists/1bBQNOuecTal7IstXfusn0', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + accesToken
            }
          })
            .then(res => res.json())
            .then(res => {
              mass.push(res)
            //   get_musics(all_musics2)
            get_musics(all_musics4)
               
            })

//5 
            fetch('https://api.spotify.com/v1/playlists/3vYP1iKhIjlPDYotLOCgGd', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + accesToken
                }
              })
                .then(res => res.json())
                .then(res => {
                  mass.push(res)
                //   get_musics(all_musics2)
                get_musics(all_musics5)
                   
                })



             

  axios.get(url2)
  .then(function (res) {
    let item2 = res.data
    // console.log(res.data);
  //   console.log(r  es.data);
    for (let item of item2) {
    //  console.log(item);
    
     let music_box = doc.createElement('div')
     let music_name = doc.createElement('p')
     let music_img = doc.createElement('img')
     let name_img = doc.createElement('div')
     let names = doc.createElement('div')
     let music_author = doc.createElement('p')
     let album = doc.createElement('p')
     let date = doc.createElement('p')
     let add_by = doc.createElement('a')
     let add_box = doc.createElement('div')
     let add_img = doc.createElement('img')
     let duration = doc.createElement('p')
   let liked_img = doc.createElement('img')
   let liked_div = doc.createElement('div')

   liked_img.src = './img/liked_yes.svg'
     liked_img.classList.add('liked_img')
    
    
      function liked_func(event){
         event.preventDefault()
        
        
    // .then(() => element.innerHTML = 'Delete successful');
  
    axios.delete(`http://localhost:3333/liked_songs/${item.id}`)

    .then(() =>  alert('Delete successful'));    
     }   
   

   liked_img.addEventListener("click" , liked_func) 
 
   let day = new Date(item.date)
   let my_day = new Date()
   let day_min = my_day.getDay() + day.getDay()
   date.textContent = `${day_min} day ago`
  
     let por1 = doc.createElement('p')
     por1.innerHTML  = `${num2 = num2 + 1}`

    
     // console.log;
    
     add_by.textContent = 'Moonman'
     add_img.src = './img/photo_2022-07-03_14-09-35.jpg'
     add_by.href = 'https://open.spotify.com/user/31uhiqduyfrattxjl5ltxh3b4npm'
    //  date.textContent = item.date
     album.textContent = item.album.slice(0,10)
     music_img.src = item.img
     music_name.textContent = item.name.slice(0,10)
     music_author.textContent = item.author.slice(0,10)
    // duration.textContent = (((item.duration/1000)/60).toString().slice(0,4).replace(/\./ ,':'))
     duration.textContent = '00:29'
     por1.classList.add('por')  
     music_img.classList.add('music_img')
     music_name.classList.add('music_name')
     music_box.classList.add('music_box')
     name_img.classList.add('name_img')
     names.classList.add('names')
     music_author.classList.add('music_author')
     album.classList.add('music_author')
     date.classList.add('date')
     add_by.classList.add('add_by')
     add_box.classList.add('add_box')
     add_img.classList.add('add_img')
     duration.classList.add('duration')
     liked_div.append(liked_img)
     names.append(music_name,music_author)
     name_img.append(music_img ,names)
     music_box.append(por1,name_img , album , date , add_box)
     add_box.append( add_img ,add_by , liked_div, duration)



     love_mus.append(music_box)   

     async function loading(arr,index){
      let muzon = arr[index]
      info_name.textContent = muzon.name 
      info_img.src = muzon.img
      audio.src= muzon.track
      info_author.textContent = muzon.artists
     
      console.log(muzon);
      if(muzon.music === null) {
          audio.src = await nullSearch(muzon.name, muzon.artists)
          muzon.music = await nullSearch(muzon.name, muzon.artists)
          audio.play()

      } else {
          audio.play()
      }
  
      next_song.addEventListener('click', ()=>{

        let shuffle_on = shuffle.classList.contains('shuffle_on')     
      if (shuffle_on){
        loading(arr,  index + (Math.floor(Math.random() * (30 - 10+ 1) + 10)))
        
      } else{
        loading(arr, index+1)
      }
          
        
          
      })
      
  
      prev_song.addEventListener('click', ()=>{
        let shuffle_on = shuffle.classList.contains('shuffle_on')     
      if (shuffle_on){
        loading(arr,  index + (Math.floor(Math.random() * (30 - 10+ 1) + 10)))
        
      } else{
        loading(arr, index-1)
      }
          

      })
  
      audio.addEventListener("ended", ()=>{

      let on = repeate.classList.contains('repeate_on')
      if (on){
        audio.play()
        
      } else {
        let shuffle_on = shuffle.classList.contains('shuffle_on')     
        if (shuffle_on){
          loading(arr,  index + (Math.floor(Math.random() * (30 - 10+ 1) + 10)))
          
        } else{
          loading(arr, index+1)
        play_song()
          
        }
      }


       
      
      
  })


    }

     let audio = doc.querySelector('.audio')
    //   let player = doc.querySelector('.player')
      music_box.addEventListener("click" , function(){
        loading(api_content,  item2.indexOf(res.data))  

        info_name.textContent = item.name
        info_img.src = item.img
        audio.src= item.track
        info_author.textContent = item.author
        info_name.classList.add('music_name')
        info_author.classList.add('music_author2')
        info_right.append(info_name , info_author)
        // play_btn.src = './img/211871_pause_icon.svg'
        // play_btn.src = './img/211876_play_icon.svg'
        play_song()
          


        function play_song (){  
          // play_btn.src = './img/211871_pause_icon.svg'
        pause_box.classList.remove('none')
        play_box.classList.add('none')
          audio.play()
        }
        function pause_song (){
          // play_btn.src = './img/211876_play_icon.svg'
          pause_box.classList.add('none')
          play_box.classList.remove('none')
          audio.pause()
        }
        play_box.addEventListener("click" , function(){
          pause_box.classList.remove('none')
          play_box.classList.add('none')
          play_song()
          
        })

        pause_box.addEventListener("click" , function(){
          play_box.classList.remove('none')
          pause_box.classList.add('none')
          pause_song()
          
        })    
          
          //PRogre_player//////////////////////////////////////////////////////////////
          function progres_update(e){
            const {duration , currentTime} = e.srcElement

            let progres_percent = (currentTime / duration) * 100

            progress_bar.style.width = `${progres_percent}%`

            // now_time.innerHTML = currentTime.toString().slice(0,4).replace(/\./ ,':')
            // all_time.innerHTML = duration.toString().slice(0,4).replace(/\./ ,':')


            //second varik////////////////////////////////

            now_time.innerHTML = currentTime.toString().slice(0,2).replace(/\./ ,'')
            all_time.innerHTML = duration.toString().slice(0,2).replace(/\./ ,'')


          }
          audio.addEventListener('timeupdate' , progres_update)

          //set progress/////////////////////////////////////////////////////////////

          function set_progress(e){
            const width =  this.clientWidth
            const clickX = e.offsetX
            const duration = audio.duration
            
            audio.currentTime = (clickX / width) * duration
          }

          progress_box.addEventListener("click" , set_progress)

          audio.addEventListener('ended' , function(){
          pause_song()
          play_btn.src = './img/211876_play_icon.svg'

          })
      })
    }
    

      

    })
    

}
getToken()
  ///LOVE/////////////////////////////////////////////////////////////////////////////



let url = "http://localhost:3333/users"
// let btnReg = doc.querySelector(".btn_reg")

let regForm = doc.forms.reges
let forma = doc.querySelector("#reges")

let nameReg = regForm.name


let passReg = regForm.password
let passConf = regForm.password_confirm







function postReg(event) {
    event.preventDefault()



    if (passReg.value === passConf.value) {
        event.preventDefault()
        let dataUser = {
            name: nameReg.value,
            password: passReg.value,
            acess: true
        }

        axios.post(url, dataUser)
        alert('вы зарегались')
        axios.get(url)
            .then(function (response) {
                console.log(response);
            })

    } else alert("Пароли не совпадают!")
}
forma.addEventListener("submit", postReg)



//notification //////////////////////////////////////////////////////////////////////

let notif_btn = doc.querySelector('.notif_btn')
let notification_box = doc.querySelector('.notification_box')
let green_point = doc.querySelector('.green_point')
let notif = () => {
    notification_box.classList.toggle('ani_seting')
    green_point.classList.add('none')
    friends_songs.classList.toggle('z_index')
}
notif_btn.addEventListener("click", function () {
    notif_btn.classList.add('notif_btn2')
    notif_btn.textContent = 'FOLOWING'

})
notification.addEventListener("click", notif)

scroll //////////////////////////////////////////////////////////
window.onscroll = function () { myFunction() };

function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop; //our scroll
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.height = scrolled + "%";
};


//friends///////////////////////////////////////////////////

let friends_open = doc.querySelector('.friends_open')
let friends_box = doc.querySelector('.friends_box')
let progres_box = doc.querySelector('.progres_box')
let category = doc.querySelector('.category')
let friend_open = () => {
    progres_box.classList.toggle('progres2')
    friends_box.classList.toggle('friends_box2')
    header.classList.toggle('pad_right')
    friends_open.classList.toggle('rotate180')
    category.classList.toggle('category2')
    category.style.transition = 400 + 'ms' //Tine animation for category
    }
friends_open.addEventListener("click", friend_open)

///friens  PLaylist./////////////////////////////////////////////////////////////////
let friends_playlist = doc.querySelector('.friends_playlist')
let friend_playlist = ()=>{
    friends_playlist.classList.remove('none')
    loved_songs.classList.add('none')

    category.classList.add('none')
    main_box.classList.add('none')
    input_box.classList.add('none')
    
    home_box.classList.remove('gray')
    library_box.classList.remove('gray')
    search_box.classList.remove('gray')

    header.classList.add('trans')
}

let friends_songs2 = doc.querySelector('.friends_songs2')
friends_songs2.addEventListener('click' , friend_playlist)


friends_songs.addEventListener('click' , friend_playlist)

////weekly.//////////////////////////////////////////////////////////////////////////////////////

let weekly = doc.querySelector('.weekly')
let weekly1 = doc.querySelector('.weekly1')
let weekly2 = doc.querySelector('.weekly2')
let weekly3 = doc.querySelector('.weekly3')
let weekly4 = doc.querySelector('.weekly4')

let weekly_box = doc.querySelector('.weekly_box')
let weekly_box1 = doc.querySelector('.weekly_box1')
let weekly_box2 = doc.querySelector('.weekly_box2')
let weekly_box3 = doc.querySelector('.weekly_box3')
let weekly_box4 = doc.querySelector('.weekly_box4')


let category22 = doc.querySelector('.category22')
function gray_none(){
    library_box.classList.remove('gray')
    
    search_box.classList.remove('gray')
    home_box.classList.remove('gray')
love_box.classList.remove('gray')
}


function weekly_open(){
    weekly_box.classList.remove('none')
    home_none()
    gray_none()
    find_box.classList.add('none')
    loved_songs.classList.add('none')
    header.classList.add('trans')

    category22.classList.add('none')
}
function weekly_open1(){
    weekly_box1.classList.remove('none')
    home_none()
    gray_none()
    find_box.classList.add('none')
    loved_songs.classList.add('none')
    header.classList.add('trans')

    category22.classList.add('none')
}
function weekly_open2(){
    weekly_box2.classList.remove('none')
    home_none()
    find_box.classList.add('none')
    loved_songs.classList.add('none')
    gray_none()
    header.classList.add('trans')

    category22.classList.add('none')
}
function weekly_open3(){
    weekly_box3.classList.remove('none')
    home_none()
    find_box.classList.add('none')
    loved_songs.classList.add('none')
    gray_none()
    header.classList.add('trans')

    category22.classList.add('none')
}
function weekly_open4(){
    category22.classList.add('none')


weekly_box4.classList.remove('none')
    home_none()
    find_box.classList.add('none')
    loved_songs.classList.add('none')
    gray_none()
    header.classList.add('trans')
}


weekly.addEventListener("click" , weekly_open)
weekly1.addEventListener("click" , weekly_open1)
weekly2.addEventListener("click" , weekly_open2)
weekly3.addEventListener("click" , weekly_open3)
weekly4.addEventListener("click" , weekly_open4)



let last = doc.querySelector('.last')
let next = doc.querySelector('.next')

next.addEventListener('click' , function(){
    library_state()
    // let isblack = next.classList.contains('black')
    // if(isblack){
    //     next.classList.remove('black')
    //     next.classList.add('last_back')
    //     last.classList.add('next_back')
    // } else{
    //     next.classList.add('black')
    //     next.classList.remove('last_back')
    //     last.classList.remove('next_back')
    // }
})

last.addEventListener("click" , function(){
    home_state()
    // let isblack = next.classList.contains('black')
    // if(isblack){
    //     next.classList.remove('black')
    //     next.classList.add('last_back')
    //     last.classList.add('next_back')
    // } else{
    //     next.classList.add('black')
    //     next.classList.remove('last_back')
    //     last.classList.remove('next_back')
    // }
})








//slider//////////////////////////////////////////

let container_3 = doc.querySelector('.container_3')
let container_4 = doc.querySelector('.container_4')
let container_5 = doc.querySelector('.container_5')
let slider_3 = doc.querySelector('.slider_3')
let slider_4 = doc.querySelector('.slider_4')
let slider_5 = doc.querySelector('.slider_5')
//slider////////////////////////////////////////////////////
let slider_fun = ()=>{
    container2.classList.toggle('container2')
    container.classList.toggle('container2')
    slider2.classList.toggle('slider2')
    slider.classList.toggle('slider2')
    container_3.classList.toggle('container2')
    container_4.classList.toggle('container2')
    // container_5.classList.toggle('container2')
    slider_3.classList.toggle('slider2')
    slider_4.classList.toggle('slider2')
    // slider_5.classList.toggle('slider2')
}



const slider_line2 = document.querySelector('.slider-line2')
const slider_line = document.querySelector('.slider-line')
const slider_line3 = document.querySelector('.slider-line3')
const slider_line4 = document.querySelector('.slider-line4')
const slider_line5 = document.querySelector('.slider-line5')
let offset3 = 0
document.querySelector('.slider-next3').addEventListener('click', function(){
    offset3 = offset3 + 196;
    if(offset3 > 804){
        offset3 = 0
    }

    slider_line3.style.left = - offset3 + 'px'
    document.querySelector('.slider-prev3').classList.remove('none')
});

document.querySelector('.slider-prev3').addEventListener('click', function(){
    offset3 = offset3 - 196;
    if(offset3 <0){
        offset3 = 804
        // document.querySelector('.slider-prev').classList.add('none')
    }
    slider_line3.style.left = - offset3 + 'px'
});

/////2

let offset1 = 0
document.querySelector('.slider-next1').addEventListener('click', function(){
    offset1 = offset1 + 196;
    if(offset1 > 804){
        offset1 = 0
    }

    slider_line2.style.left = - offset1 + 'px'
    document.querySelector('.slider-prev1').classList.remove('none')
});

document.querySelector('.slider-prev1').addEventListener('click', function(){
    offset1 = offset1 - 196;
    if(offset1 <0){
        offset1 = 804
        // document.querySelector('.slider-prev').classList.add('none')
    }
    slider_line2.style.left = - offset1 + 'px'
});
//1
let offset = 0
document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 196;
    if(offset > 804){
        offset = 0
    }

    slider_line.style.left = - offset + 'px'
    document.querySelector('.slider-prev').classList.remove('none')
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 196;
    if(offset <0){
        offset = 804
        // document.querySelector('.slider-prev').classList.add('none')
    }
    slider_line.style.left = - offset + 'px'
});
//4

let offset4 = 0
document.querySelector('.slider-next4').addEventListener('click', function(){
    offset4 = offset4 + 196;
    if(offset4 > 804){
        offset4 = 0
    }

    slider_line4.style.left = - offset4 + 'px'
    document.querySelector('.slider-prev4').classList.remove('none')
});

document.querySelector('.slider-prev4').addEventListener('click', function(){
    offset4 = offset4 - 196;
    if(offset4 <0){
        offset4 = 804
        // document.querySelector('.slider-prev').classList.add('none')
    }
    slider_line4.style.left = - offset4 + 'px'
});


//5

let offset5 = 0
document.querySelector('.slider-next5').addEventListener('click', function(){
    offset5 = offset5 + 196;
    if(offset5 > 804){
        offset5 = 0
    }

    slider_line5.style.left = - offset5 + 'px'
    document.querySelector('.slider-prev5').classList.remove('none')
});

document.querySelector('.slider-prev5').addEventListener('click', function(){
    offset5 = offset5 - 196;
    if(offset5 <0){
        offset5 = 804
        // document.querySelector('.slider-prev').classList.add('none')
    }
    slider_line5.style.left = - offset5 + 'px'
});
///Burger

let burger_box = doc.querySelector('.burger_box')

let sp1 = doc.querySelector('.sp1')
let sp2 = doc.querySelector('.sp2')
let sp3 = doc.querySelector('.sp3')



function burger(){
  sp2.classList.toggle('none_tr')
  sp1.classList.toggle('ani1')
  sp3.classList.toggle('ani2')
  close_fun()
  menu_box.classList.toggle('none_bur')
  
}

burger_box.addEventListener("click" , burger)



async function nullSearch(names, artis) {
  let nullResult = await fetch('https://api.spotify.com/v1/search?q=${names + artis}*&type=track&limit=20', {
      headers: {
          'Authorization': 'Bearer ' + globalToken
      }
  });
  const res = await nullResult.json();
  const track = res.tracks.items.find((item) => item.preview_url !== null);
  console.log(track);
  return track.preview_url;
}



let yak1 = doc.querySelector('.yak1')
let yak2 = doc.querySelector('.yak2')
let yak3 = doc.querySelector('.yak3')
let yak4 = doc.querySelector('.yak4')
let yak5 = doc.querySelector('.yak5')
let yak6 = doc.querySelector('.yak6')
let yak7 = doc.querySelector('.yak7')
////YAKOR

let sec2 = doc.querySelector('.HIP')
let sec1 = doc.querySelector('.hip1')
let sec7 = doc.querySelector('.hip3')
let sec4 = doc.querySelector('.hip4')
let sec5 = doc.querySelector('.hip5')


yak1.addEventListener("click", function(event){
  event.preventDefault()
  library_state()
  window.scrollTo({
      top: sec1.offsetTop,
      left: 0,
      behavior: "smooth",

  });
})
yak3.addEventListener("click", function(event){
  event.preventDefault()
  library_state()
  window.scrollTo({
      top: sec5.offsetTop,
      left: 0,
      behavior: "smooth",

  });
})
// yak4.addEventListener("click", function(event){
//   event.preventDefault()
//   library_state()
//   window.scrollTo({
//       top: sec5.offsetTop,
//       left: 0,
//       behavior: "smooth",

//   });
// })


yak2.addEventListener("click", function(event){
  event.preventDefault()
  library_state()
  window.scrollTo({
      top: sec2.offsetTop,
      left: 0,
      behavior: "smooth",

  });
})

yak7.addEventListener("click", function(event){
  event.preventDefault()
  library_state()
  window.scrollTo({
      top: sec4.offsetTop,
      left: 0,
      behavior: "smooth",

  });
})
yak5.addEventListener("click", function(event){
  event.preventDefault()
  library_state()
  window.scrollTo({
      top: sec7.offsetTop,
      left: 0,
      behavior: "smooth",

  });
})


// let ran = Math.random()

// ran = ran.splice(1,3)
// console.log(ran);