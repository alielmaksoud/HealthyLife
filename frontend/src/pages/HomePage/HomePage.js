import React, { Component } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import AuthContext from '../../context/auth-context';
import './HomePage.css';

class HomePage extends Component {
  state = {
    creating: false,
    events: [],
    isLoading: false,
    selectedEvent: null
  };
  isActive = true;

  static contextType = AuthContext;

  render() {
    return (
      <React.Fragment>
        <CardColumns>
  <Card>
    <Card.Img variant="top" src="https://www.diyetkolik.com/site_media/media/customvideo_images/kapak_13.jpg" />
    <Card.Body>
      <Card.Title>Ananasın yararları saymakla bitmiyor!</Card.Title>
      <Card.Text>
      Ananasın ilgi çekici bir görüntüye sahip olduğu konusunda çoğumuz hem fikiriz. Oldukça lezzetli tropikal meyvelerden biri olduğu konusunda da muhtemelen oy birliği sağlamamız mümkün. Ancak hepimizin arka plana attığı en önemli şey ananasın en faydalı meyveler arasında üst sıralarda yer alması. Antik çağlardan beri halk hekimliğinde kullanıldığını da belirtmeden geçmeyelim. Son zamanlarda tüketimi artan ananas taze, dondurulmuş veya konserve halleriyle kullanılabiliyor. Aynı şekilde bu sulu sarı meyvenin tadını çıkarmanın birçok farklı yolu da var. Dilimleri ızgara yapılabilir ve etle veya başka yiyeceklerle servis edilebilir. Farklı bir alternatif olarak dondurulmuş parçaları bir smoothiye atılabilir veya meyve tabaklarını saf haliyle süsleyebilir.

      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
      Vücudumuzun dengesini, ihtiyaçlarını karşılamak için  
tek başına su yeterli değildir. 
Bir diğer ihtiyacımız ise kaloridir.

      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.diyetkolik.com/site_media/media/customvideo_images/rutin.jpg" />
    <Card.Body>
      <Card.Title>Tüm gününüzü şekillendirecek 5 sabah rutini</Card.Title>
      <Card.Text>
      İşte size yataktan çıkıp işlevsel ve psikolojik oyunlarla günü bu verimde geçirmenin basit ama etkili yolları:
      *Su İçin
      Sabah uyandığınızda ilk iş olarak bedeninize verebileceğiniz en değerli hediye, bir bardak su olacaktır, emin olun. Gece saatler boyunca susuz kalan vücudunuz, her tür yiyecek ve içecekten önce, suya gereksinim duyar. Sindirim sisteminizi gün içerisinde verimle çalışacak şekilde hazırlayabilmek için sabahları su içmeyi alışkanlık haline getirmelisiniz. Ayrıca sabah ilk iş olarak 1 ya da 2 bardak su içerek, günlük ihtiyacınızın yaklaşık 1/4’ünü karşılamış olabilirsiniz.

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="primary" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
Unutmayın: Kalori hesaplamaları kişiye özel olup cinsiyet, boy, kilo gibi bilgilere göre değişiklik göstermektedir.

      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card className="text-center">
    <Card.Body>
    <Card.Img variant="top" src="https://www.diyetkolik.com/site_media/media/customvideo_images/diet-for-healthy-weight.jpg" />
      <Card.Title>Sebze ağırlıklı beslenmek demir eksikliğine neden olur mu?</Card.Title>
      <Card.Text>
      Günlük demir dozunuzu bitki temelli beslenerek de edinebilirsiniz Sebze ağırlıklı beslenenlerin yeterince demir almadığı yaygın bir düşüncedir. Halbuki et, sebze ya da daha farklı beslenme düzeniniz de olsa demir eksikliği yaşayabilirsiniz. Demir eksikliği hem yetişkinlerde hem de çocuklarda sıklıkla görülen, çağımızın en yaygın mineral eksikliklerinden biri. Beslenme şekillerindeki farklar bile oranları değiştirmez. Beslenme düzeninize göre bolca tavuk, balık ya da yumurta yiyor olabilirsiniz; ancak bu durum demir eksikliği konusunda endişelenmemeniz gerektiği anlamına gelmiyor. Aşırı yorgunluk gibi şikayetleriniz varsa eğer, demir ölçümü yaptırmanızda fayda var.
      </Card.Text>
    </Card.Body>
  </Card>
    <Card className="text-center">
    <Card.Body>
    <Card.Img variant="top" src="https://www.diyetkolik.com/site_media/media/customvideo_images/zayiflama_yontemleri_1.jpg" />
      <Card.Title>Hedef kilosuna ulaşan insanların uyguladığı 6 zayıflama yöntemi</Card.Title>
      <Card.Text>
      Düşük kalorili diyetler, protein diyetleri, ketojenik diyetler, şok diyetler… Sayısız diyet ve diyet listesi bulunan bu karışık dünyada, denilebilir ki herkesin diyeti kendine! Fakat hızlı zayıflama yöntemlerinin revaçta olduğu günümüzde sağlıklı yollara sapmak her şeyden önemli. Evet, önemli olan kişinin hayat tarzına, sevdiklerine ve boy, kilo, cinsiyet gibi kişisel özelliklerine uygun olarak hazırlanan bir diyet listesini takip etmesi olsa da, bazı alışkanlıklar var ki edinildiği takdirde kişinin bir bütün olarak sağlıklı bir yaşam sürdürmesini sağlıyor. Amerika'yı yeniden keşfetmek sadece vakit kaybı olur. Bunun yerine sağlıklı bir şekilde kilo vermiş kişilerin tecrübelerinden yararlanmak en mantıklısı. Bu alışkanlıklar size hızlı kilo vermeyi değil, sağlıklı beslenme ve sağlıklı yaşama yoluyla dengeli ve kalıcı bir şekilde kilo vermeyi vaat ediyor. Aşağıda sıraladığımız 6 alışkanlığı edinerek zayıflama konusunda çok önemli bir yol kat edebilir, daha da önemlisi zayıflama hedefinizi gerçekleştirdikten sonra da bulunduğunuz kiloyu koruyabilirsiniz.

      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="text-center">
    <Card.Body>
    <Card.Img variant="top" src="https://www.diyetkolik.com/site_media/media/customvideo_images/paket-servisi-kapak.jpg" />
      <Card.Title>Sağlıklı paket servis için öneriler</Card.Title>
      <Card.Text>
      Her ne kadar güvenli olup olmadığından emin olmadığımız için pandemi sürecinde dışarıdan sipariş vermemeye özen göstersek de bir noktada evde pişirilen yiyecek seçeneklerini tüketip çareyi paket serviste bulabiliyoruz. Ancak paket servis sırasında sağlıklı seçimler yapılması çok kolay olmuyor. Yine de sadece biraz özenli davranarak ve irademizi koruyarak bunu yapabilmek mümkün. Şimdi dikkat edilmesi gereken noktaları biraz da bizden dinleyin.
      Bunlar arasında ; Kızarmış, çıtır çıtır, ekmekli, kremalı, soslu, peynirli, alfredo gibi kelimeler yer alıyor. Bu terimler yüksek yağ ve kalori içeriğine sahip oldukları anlamına gelebilir. Kızartılmış veya doymuş yağ oranı yüksek soslarla servis edilen ürünleri sınırlandırın. Daha sağlıklı seçenekleri oluşturanlar ızgara, haşlanmış, buharda pişirilmiş, kavrulmuş gibi kelimelerle belirtilen yağdan daha uzak ve kalorisi yükseltilmeden hazırlanmış besinlerdir.

      </Card.Text>
    </Card.Body>
  </Card>
</CardColumns>
      </React.Fragment>
    );
  }
}

export default HomePage;