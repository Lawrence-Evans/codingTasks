import React from "react";
import Figure from "react-bootstrap/Figure";

export default function About() {
  return (
    <Figure>
      <Figure.Image id="aboutImage"
        width={171}
        height={180}
        alt="171x180"
        src="https://img.freepik.com/free-vector/sports-balls_23-2147487291.jpg?w=1380&t=st=1716455681~exp=1716456281~hmac=c4a10779b75a988a14a3466f0e378b7e665e1c8f3cc91a9526a3589673c6fa8f"
      />
      <Figure.Caption id="aboutText">
        Bounce them, kick them, throw them, catch them. Just don't eat them!
      </Figure.Caption>
      <Figure.Image id="aboutImage" src="https://youmedia-cdn.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/09/08165335/decathlon-leeds-aug-2022-no-credit-1-800x450.webp" />
      <Figure.Image id="aboutImage" src="https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11617253510926.jpg" />
      <Figure.Caption id="aboutText">
        Contacts - Telephone: 0800 8411 8411 - Email: ballpoirum@email.com
      </Figure.Caption>
    </Figure>
  );
}
