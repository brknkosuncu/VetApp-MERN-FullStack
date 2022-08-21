# VETAPP

The purpose of creating this project; pet care, health, food, etc. To ensure that articles on the subject are presented as articles by veterinarians.

## Features Included in the Application:
* Presenting the articles to the users on the homepage.
* You can like the articles, see the number of likes and comment on the articles.
* Displaying the detail page about the article when the title of any article is clicked. On this page, you can see content of the articles, creation time, additional pdf etc. it can be downloaded by users,
there are user comments.
* Users will be able to comment and rate the article.
* On the profile page, the name of the profile, information about the profile, profile picture, etc. information is available.
* Creating article, deleting, updating, like, user login, registration, Google login, etc. has features.
* With the filtering feature, you can filter the articles as you want.
* You can contact the admin with the Contact Us feature and your feedback is evaluated.
* MVC is adopted as the design pattern.
* Communication in the infrastructure is created with REST API. The REST API was written by myself. 

 ## Used technologies:
* Middle tier: ExpressJS
* Server platform: NodeJS
* Database: MongoDB
* Cloud Database: MongoDB Cloud
* HTML Template Engine: Visual Studio Code
* CSS Framework: Bootstrap, Reactstrap etc.
* Programming Language: Javascript
* Version Control: Git
* Communication: REST API
* Interface Framework: React
* API Test: Postman 

Project setup

• Clone this project your computer.

• Open project folder.Open 2 terminal.

• For first terminal, go to client folder and run `npm install` command.

• For second terminal, go to server folder and run `npm install` command.

• In server folder, rename `example.env` file to `.env`.

• In `.env` file, enter your informations for configuration.

• In example,

• `PORT = 5000`

• `CONNECTION_URL = MongoDB connection url`

• `SECRET= enter secret key what you want`

• `SMTP_USER= enter email for admin`

• `SMTP_PASSWORD= enter email password for admin`

• `TO_MAIL= enter email for persons who wants to contact with you`

• When the installations finish, run `npm start` command in two terminals.

• Congrulations, you started application successfully!

# VETAPP

Bu projeyi oluşturmamdaki amaç; evcil hayvanların bakımı, sağlıkları, mamalar vb. hakkında yazıların veterinerler tarafından makale olarak sunulmasını sağlamak.

## Uygulamada Yer Alan Özellikler:
* Anasayfada makalelerin kullanıcılara sunulması.
* Makaleleri beğenebilir, beğeni sayılarını görebilir ve makalelere yorum yapabilirsiniz.
* Herhangi bir makalenin başlığına tıklandığında makale ile ilgili detay sayfasının gösterilmesi. Bu sayfada makalenin içeriği, oluşturulma zamanı, ek pdf gibi dosyaların kullanıcılar
tarafından indirilebilmesi, kullanıcı yorumları bulunuyor.
* Kullanıcılar makaleye yorum yapabilecek ve puan verebilecek.
* Profil sayfasında profilin adı, profil hakkında bilgiler, profil resmi vb. bilgiler bulunuyor.
* Makale ekleme, silme, güncelleme, kullanıcı girişi, kayıt olma, Google ile giriş vb. özellikler bulunuyor.
* Filtreleme özelliği ile makaleleri istediğiniz gibi filtreleyebilirsiniz.
* Contact Us özelliği ile adminle iletişime geçebilir ve geri-dönüşümleriniz değerlendirilir.
* Tasarım deseni olarak MVC benimsenilmiştir.
* Altyapıda haberleşme REST API ile oluşturulmuş olup. REST API kendim tarafından yazılmıştır.


## Kullanılan Teknolojiler:
* Orta katman: ExpressJS
* Sunucu platformu: NodeJS
* Veritabanı: MongoDB
* Bulut Veritabanı: MongoDB Cloud
* HTML Şablon Motoru: Visual Studio Code
* CSS Çatısı: Bootstrap, Reactstrap vb. 
* Programlama Dili: Javascript
* Sürüm Kontrolü: Git
* Haberleşme: REST API
* Arayüz Çatısı: React
* API Testi: Postman


Projenin kurulumu

• Projeyi bilgisayarınıza klonlayın.

• Proje klasörünü açın ve iki terminal açın.

• Birinci terminalde client klasörüne gidin ve `npm install` komutunu çalıştırın.

• İkinci terminalde client klasörüne gidin ve `npm install` komutunu çalıştırın.

• Server dosyasında `example.env` dosyasının adını `.env` olarak değiştirin.

• `.env` dosyasında konfigürasyon için bilgilerinizi girin.

• Örnek olarak,

• `PORT = 5000`

• `CONNECTION_URL = MongoDB bağlantı url'i`

• `SECRET= istediğiniz bir secret key`

• `SMTP_USER= admin için email adresi`

• `SMTP_PASSWORD= admin için email şifresi`

• `TO_MAIL= sizinle iletişim kurmak isteyenler için email adresi`

• Kurulumlar bittiğinde iki terminalde de `npm start` komutunu çalıştırın.

• Tebrikler, uygulamayı başarıyla çalıştırdınız!

![alt text](https://github.com/brknkosuncu/VetApp-MERN-FullStack/blob/master/server/images/vetAppAnaSayfa%20(2).png "resim 1")
![alt text](https://github.com/brknkosuncu/VetApp-MERN-FullStack/blob/master/server/images/vetAppGiri%C5%9F.png "resim 2")
![alt text](https://github.com/brknkosuncu/VetApp-MERN-FullStack/blob/master/server/images/vetAppKayitOl.png "resim 3")
![alt text](https://github.com/brknkosuncu/VetApp-MERN-FullStack/blob/master/server/images/vetAppProfil.png "resim 4")
![alt text](https://github.com/brknkosuncu/VetApp-MERN-FullStack/blob/master/server/images/vetAppProfilDetay.png "resim 5")
