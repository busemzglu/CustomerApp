import React from "react";
import Navbar from "../components/Navbar";
import { Link,useHistory ,Redirect } from "react-router-dom";
import alertify from "alertifyjs"
import 'alertifyjs/build/css/alertify.css';

function Home() {

  if(localStorage.getItem("isLogin")==="success"){

    return (
      <div>
        <Navbar />
        <div className="home">
          <h3 style={{marginTop:"-200px",marginRight:"-100px",marginBottom:"170px"}}>Yapılanlar</h3>
         
          <ul>
          <br/>
            <li>Login sistemi yapıldı.
            <ul style={{marginLeft:"20px"}}>
                <li> Login olduğunda LocalStorage item isLogin=success oluyor.</li>
                <li> Logout butonuna basıldığında isLogin itemi silinerek Login sayfasına yönlendirildi.</li>
                </ul>
            </li>

            
            <li>Yanlış girişte ve doğru girişte alertifyjs kullanarak alert gösterildi.</li>
            <li>Olmayan uzantılara gidilmek istenir diye 404 sayfası eklendi.</li>
            <li>Giriş yapmadan sayfaya gitmek isteyen kullanıcı için sayfa içinde kontrol yapıldı.
              
            <ul style={{marginLeft:"20px"}}>
                <li>Eğer giriş yapmadıysa yetkisiz giriş yazarak sayfa gösterimi engellendi.</li>
                </ul>
            </li>
            <li>Müşteri ekleme ekranı yapıldı.
              <ul style={{marginLeft:"20px"}}>
                <li>Gösterim için Materiul UI DataGrid kullanıldı.</li>
                <li>Materiul UI Tooltip, AddIcon,Modal kullandı.</li>
                <li>Modal içinde Dropdown,RadioButton ve TextField Kullanıldı.</li>
                </ul>
            </li>

            <li>Dosya ekleme ekranı yapıldı.
              <ul style={{marginLeft:"20px"}}>
                <li>Dosya eklerken animasyon gösterildi.</li>
                <li>Eklenen dosyalar liste halinde asağıda gösterildi.</li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  
  }
else{
  alertify.set('notifier','position', 'top-right');
  alertify.error('Unauthorized Access'); 

return (<Redirect to="/" />)
  

}


}

export default Home;
