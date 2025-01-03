import './../../styles/footerbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { 
	BsFillTelephoneFill, 
	BsFillEnvelopeAtFill, 
	BsFillPinMapFill, 
	BsWhatsapp, 
	BsFacebook, 
	BsInstagram, 
	BsTiktok,
	BsStopwatchFill
} from "react-icons/bs";


const FooterBar = (): JSX.Element => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer-10">
			<div className="container">
				<div className="row mb-5 pb-3 no-gutters">
					<div className="col-md-3 mb-md-0 mb-3 d-flex">
						<div className="con con-1 w-100 py-5">
							<div className="con-info w-100 text-center">
								<div className="icon d-flex align-items-center justify-content-center">
                                    <BsFillTelephoneFill />
								</div>
								<div className="text">
									<span>(+00) 1234 5678</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3 mb-md-0 mb-3 d-flex">
						<div className="con con-1 w-100 py-5">
							<div className="con-info w-100 text-center">
								<div className="icon d-flex align-items-center justify-content-center">
                                    <BsFillEnvelopeAtFill />
								</div>
								<div className="text">
									<span>info@email.com</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3 mb-md-0 mb-3 d-flex">
						<div className="con con-1 w-100 py-5">
							<div className="con-info w-100 text-center">
								<div className="d-flex align-items-center justify-content-center">
									<a href='https://maps.app.goo.gl/VggizQfzpwY99J1u6' className='icon' data-toggle='tooltip' data-placement='top' title='Ubicación' target='_blank' rel='noreferrer'>
										<BsFillPinMapFill />
									</a>
								</div>
								<div className="text">
									<span>
										1<sup>ra</sup> calle Oriente #18 entre 3<sup>ra</sup> y 5<sup>ta</sup> avenida Norte.
										A media cuadra de la Prepa 1
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3 mb-md-0 mb-3 d-flex">
						<div className="con con-1 w-100 py-5">
							<div className="con-info w-100 text-center">
								<div className="icon d-flex align-items-center justify-content-center">
									<BsStopwatchFill />
								</div>
								<div className="text">
									<span>Lunes a sábado de 11:30 am a 09:00 pm</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-7">
						<div className="row">
							<div className="col-md-4 mb-md-0 mb-4">
								<h2 className="footer-heading">About</h2>
								<ul className="list-unstyled">
                                    <li><a href="/" className="d-block">Out story</a></li>
                                    <li><a href="/" className="d-block">Awards</a></li>
                                    <li><a href="/" className="d-block">Our Team</a></li>
                                    <li><a href="/" className="d-block">Career</a></li>
		                        </ul>
							</div>
							<div className="col-md-4 mb-md-0 mb-4">
								<h2 className="footer-heading">Company</h2>
								<ul className="list-unstyled">
                                    <li><a href="/" className="d-block">Our services</a></li>
                                    <li><a href="/" className="d-block">Clients</a></li>
                                    <li><a href="/" className="d-block">Contact</a></li>
                                    <li><a href="/" className="d-block">Press</a></li>
		                        </ul>
							</div>
							<div className="col-md-4 mb-md-0 mb-4">
								<h2 className="footer-heading">Resources</h2>
								<ul className="list-unstyled">
                                    <li><a href="/" className="d-block">Blog</a></li>
                                    <li><a href="/" className="d-block">Newsletter</a></li>
                                    <li><a href="/" className="d-block">Privacy Policy</a></li>
		                        </ul>
							</div>
						</div>
					</div>
					<div className="col-md-5 mb-md-0 mb-4">
						<h2 className="footer-heading">Subscribe</h2>
						<form action="#" className="subscribe-form">
                            <div className="form-group d-flex">
                                <input type="text" className="form-control rounded-left" placeholder="Enter email address"/>
                                <button type="submit" className="form-control submit rounded-right">Subscribe</button>
                            </div>
                            <span className="subheading">Get digital marketing updates in your mailbox</span>
                        </form>
					</div>
				</div>
				<div className="row mt-5 pt-4 border-top">
                    <div className="col-md-6 col-lg-8 mb-md-0 mb-4">
                        <p className="copyright mb-0">
                            Copyright &copy;{year}
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-4 text-md-right">
          	            <ul className="ftco-footer-social p-0">
                            <li className="fadeInUp ftco-animated ">
                                <a href="https://wa.me/9625291194" data-toggle="tooltip" data-placement="top" title="WhatsApp" target='_blank' rel='noreferrer'>
                                    <BsWhatsapp className='icon' />
                                </a>
                            </li>
                            <li className="fadeInUp ftco-animated">
                                <a href="https://www.facebook.com/p/DulceMania-100085258223053" data-toggle="tooltip" data-placement="top" title="Facebook" target='_blank' rel='noreferrer'>
                                    <BsFacebook className='icon' />
                                </a>
                            </li>
                            <li className="fadeInUp ftco-animated">
                                <a href="https://www.instagram.com/dulcemania_tap" data-toggle="tooltip" data-placement="top" title="Instagram" target='_blank' rel='noreferrer'>
                                    <BsInstagram className='icon' />
                                </a>
                            </li>
							<li className="fadeInUp ftco-animated">
                                <a href="https://www.tiktok.com/@dulcemania_tap" data-toggle="tooltip" data-placement="top" title="TikTok" target='_blank' rel='noreferrer'>
									<BsTiktok className='icon' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
			</div>
		</footer>
    );
}

export default FooterBar;