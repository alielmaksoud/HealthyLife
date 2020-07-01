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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
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
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src="holder.js/100px160" />
  </Card>
  <Card className="text-right">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
</CardColumns>
      </React.Fragment>
    );
  }
}

export default HomePage;