import Image from 'next/image';
import React from 'react';
import FooterLink from '../../molecules/FooterLink';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="/#" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <FooterLink link="/#" title="About Us" />
                    <FooterLink link="/#" title="Press Release" />
                    <FooterLink link="/#" title="Terms of Use" />
                    <FooterLink link="/#" title="Privacy & Policy" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <FooterLink link="/#" title="Refund Policy" />
                    <FooterLink link="/#" title="Unlock Rewards" />
                    <FooterLink link="/#" title="Live Chatting" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <FooterLink
                      link="mailto: hi@store.gg"
                      title="hi@store.gg"
                    />
                    <FooterLink
                      link="mailto: team@store.gg"
                      title="team@store.gg"
                    />
                    <FooterLink
                      link="http://maps.google.com/?q=Pasific 12,
                                        Jakarta Selatan"
                      title="Pasific 12, Jakarta Selatan"
                    />
                    <FooterLink
                      link="tel: 02111229090"
                      title="021 - 1122 - 9090"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
