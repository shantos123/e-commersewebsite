import React from 'react';
import styled from 'styled-components';

const Contact = () => {

  return (
    <Wrapper>
      <h2 className="common-heading" style={{ marginTop: "-4rem" }}> contact page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.
      032582428192!2d85.13382726488415!3d25.
      603833533708727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
      1!3m3!1m2!1s0x39ed5868439e63ef%3A0x1f6897baa42c1ae4!2sPatna%20Junction%2C%20Fraser%20Road%20Area%2C%20Patna%2C%20Bihar%20800001!5e0!3m2!1sen!2sin!4v1668945933762!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xnqrrdal"
            method="post" className="contact-inputs" >
            <input type="text"
              placeholder="username"
              name="username" required autoComplete="off" />
            <input type="email" placeholder="Enter-Email"
              name="Email" autoComplete="off" required />
            <textarea name="massage" placeholder="Enter you message"
              cols="30" rows="10" autoComplete="off" required ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>

    </Wrapper>
  )
};

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;
.container {
  margin-top: 6rem;
  .contact-form {
    max-width: 50rem;
    margin: auto;
    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;

export default Contact