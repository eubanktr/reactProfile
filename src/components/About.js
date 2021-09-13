import React from "react";
import Photo from './../images/IMG_0646.jpg'
export default function About(props) {
  // want an ABOUT ME Header with an INFORMATION about me and an IMAGE
  return (
    <section style={{ backgroundColor: '#C1C9CA', color: '#264473'}}>
      <h1 style={{ display: 'flex', flexDirection: 'column', padding: '15px 25px 15px 25px', alignItems: 'center' }}>Thanks for checking out my page!
        <img src={Photo} style={{ width: '500px', height: '500px', }}>
        </img>
        <p style={{ fontSize: '25px', padding: '25px 150px 25px 150px'}}>
          Who is Thomas Eubank you may ask? I am a full stack web developer. Hopefully you have already received and read my resume. If you have not there is a link above to check it out. If you're trying to get a hold of me click the link above to send me an email. I'll get back to you as soon as I am able.
        </p>
      </h1>
    </section>
  )
}