import { Component } from '@angular/core';

@Component({
  selector: 'app-passengerview',
  templateUrl: './passengerview.component.html',
  styleUrls: ['./passengerview.component.css']
})
export class PassengerviewComponent {

  passengers:any = {"totalPassengers":2964,"totalPages":99,"data":[{"_id":"63354cfcc200ce28914d6d73","name":"dinaaa","trips":300,"airline":[{"id":8,"name":"Thai Airways","country":"Thailand","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thai_Airways_Logo.svg/200px-Thai_Airways_Logo.svg.png","slogan":"Smooth as Silk / I Fly THAI","head_quaters":"Jom Phol Subdistrict, Chatuchak, Bangkok, Thailand","website":"www.thaiairways.com","established":"1960"}],"__v":0},{"_id":"633550b7ee93857e30162edd","name":"John hghh","trips":290,"airline":[{"id":6,"name":"Qantas","country":"Austrailia","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Qantas_Airways_logo_2016.svg/300px-Qantas_Airways_logo_2016.svg.png","slogan":"Spirit of Australia","head_quaters":"Mascot, Sydney, Australia","website":"qantas.com","established":"1920"}],"__v":0},{"_id":"63355798ee93859ecf16325a","name":"Yogesh","trips":1,"airline":[{"id":1,"name":"Quatar Airways","country":"Quatar","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png","slogan":"Going Places Together","head_quaters":"Qatar Airways Towers, Doha, Qatar","website":"www.qatarairways.com","established":"1994"}],"__v":0},{"_id":"633557f0903ac97f23271f92","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"633557f1903ac96c64271f95","name":"evie frye","trips":300,"airline":[{"id":8,"name":"Thai Airways","country":"Thailand","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thai_Airways_Logo.svg/200px-Thai_Airways_Logo.svg.png","slogan":"Smooth as Silk / I Fly THAI","head_quaters":"Jom Phol Subdistrict, Chatuchak, Bangkok, Thailand","website":"www.thaiairways.com","established":"1960"}],"__v":0},{"_id":"6335580d903ac9c9be271fa4","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"6335580e903ac94dc3271fa9","name":"evie frye","trips":300,"airline":[{"id":8,"name":"Thai Airways","country":"Thailand","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thai_Airways_Logo.svg/200px-Thai_Airways_Logo.svg.png","slogan":"Smooth as Silk / I Fly THAI","head_quaters":"Jom Phol Subdistrict, Chatuchak, Bangkok, Thailand","website":"www.thaiairways.com","established":"1960"}],"__v":0},{"_id":"63355931903ac94f52271fe2","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63355931903ac9df81271fe5","name":"evie frye","trips":300,"airline":[{"id":8,"name":"Thai Airways","country":"Thailand","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thai_Airways_Logo.svg/200px-Thai_Airways_Logo.svg.png","slogan":"Smooth as Silk / I Fly THAI","head_quaters":"Jom Phol Subdistrict, Chatuchak, Bangkok, Thailand","website":"www.thaiairways.com","established":"1960"}],"__v":0},{"_id":"63355a3b903ac973b727200f","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63355a3c903ac9f802272012","name":"evie frye","trips":300,"airline":[{"id":8,"name":"Thai Airways","country":"Thailand","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thai_Airways_Logo.svg/200px-Thai_Airways_Logo.svg.png","slogan":"Smooth as Silk / I Fly THAI","head_quaters":"Jom Phol Subdistrict, Chatuchak, Bangkok, Thailand","website":"www.thaiairways.com","established":"1960"}],"__v":0},{"_id":"63355b26903ac9a11d272037","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63355b27903ac96f2f27203a","name":"evie frye","trips":300,"airline":[{"id":8,"name":"Thai Airways","country":"Thailand","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thai_Airways_Logo.svg/200px-Thai_Airways_Logo.svg.png","slogan":"Smooth as Silk / I Fly THAI","head_quaters":"Jom Phol Subdistrict, Chatuchak, Bangkok, Thailand","website":"www.thaiairways.com","established":"1960"}],"__v":0},{"_id":"63355b44903ac94f7b272045","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63355b45903ac966f1272048","name":"evie frye","trips":300,"airline":[{"id":8,"name":"Thai Airways","country":"Thailand","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thai_Airways_Logo.svg/200px-Thai_Airways_Logo.svg.png","slogan":"Smooth as Silk / I Fly THAI","head_quaters":"Jom Phol Subdistrict, Chatuchak, Bangkok, Thailand","website":"www.thaiairways.com","established":"1960"}],"__v":0},{"_id":"63355b54903ac9066e272053","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63355c26903ac9ad05272070","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63355c27903ac93b18272073","name":"evie frye","trips":300,"airline":[{"id":8,"name":"Thai Airways","country":"Thailand","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thai_Airways_Logo.svg/200px-Thai_Airways_Logo.svg.png","slogan":"Smooth as Silk / I Fly THAI","head_quaters":"Jom Phol Subdistrict, Chatuchak, Bangkok, Thailand","website":"www.thaiairways.com","established":"1960"}],"__v":0},{"_id":"63355c91903ac9964f272084","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63355c92903ac9d8aa272087","name":"evie frye","trips":300,"airline":[{"id":8,"name":"Thai Airways","country":"Thailand","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thai_Airways_Logo.svg/200px-Thai_Airways_Logo.svg.png","slogan":"Smooth as Silk / I Fly THAI","head_quaters":"Jom Phol Subdistrict, Chatuchak, Bangkok, Thailand","website":"www.thaiairways.com","established":"1960"}],"__v":0},{"_id":"63355cfb903ac9d05727209a","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"6335672b903ac91e8a272bc2","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63356747903ac9f179272ca9","name":"Ana Banana","trips":120,"airline":[{"id":3,"name":"Cathay Pacific","country":"Hong Kong","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Cathay_Pacific_logo.svg/300px-Cathay_Pacific_logo.svg.png","slogan":"Move Beyond","head_quaters":"Cathay City, Hong Kong International Airport, Chek Lap Kok, Hong Kong","website":"www.cathaypacific.com","established":"1946"}],"__v":0},{"_id":"63356a52cf3f3a35fc89e64c","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63356d05cf3f3a3a7e89eccc","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63356d20cf3f3a0f1a89ece6","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"633573bb20b85298d6b09511","name":"Yogesh","trips":1,"airline":[{"id":1,"name":"Quatar Airways","country":"Quatar","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png","slogan":"Going Places Together","head_quaters":"Qatar Airways Towers, Doha, Qatar","website":"www.qatarairways.com","established":"1994"}],"__v":0},{"_id":"6335766401f6c31b6a45f256","name":"Dani Ceballos","trips":2,"airline":[{"id":2,"name":"Singapore Airlines","country":"Singapore","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/250px-Singapore_Airlines_Logo_2.svg.png","slogan":"A Great Way to Fly","head_quaters":"Airline House, 25 Airline Road, Singapore 819829","website":"www.singaporeair.com","established":"1947"}],"__v":0},{"_id":"633578fd01f6c358e345f468","name":"ةةس","trips":2,"airline":[{"_id":"63303dacd333c8311a9a17c7","id":31,"name":"Sri Lankan Airways","country":"Sri Lanka","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png","slogan":"From Sri Lanka","head_quaters":"Katunayake, Sri Lanka","website":"www.srilankaairways.com","established":"1990","__v":0}],"__v":0},{"_id":"6335851401f6c3375c45f9a3","name":"Miss Lila Monahan","trips":980,"airline":[{"id":1,"name":"Quatar Airways","country":"Quatar","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png","slogan":"Going Places Together","head_quaters":"Qatar Airways Towers, Doha, Qatar","website":"www.qatarairways.com","established":"1994"}],"__v":0}]}
}