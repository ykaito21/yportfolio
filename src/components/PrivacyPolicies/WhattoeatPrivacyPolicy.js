import React from "react"
import styled from "styled-components"

function WhattoeatPrivacyPolicy() {
  return (
    <WhattoeatPrivacyPolicyWrapper>
      <div>
        <h3>
          What2Eat <br /> Privacy Policy
        </h3>
        <div className="policy-container">
          <div className="policy-paragraph">
            <h5>Privacy Policy</h5>
            <p className="policy-text">
              Yuki Kaito built the What2Eat app as a Free app. This SERVICE is
              provided by Yuki Kaito at no cost and is intended for use as is.
              This page is used to inform visitors regarding my policies with
              the collection, use, and disclosure of Personal Information if
              anyone decided to use my Service. If you choose to use my Service,
              then you agree to the collection and use of information in
              relation to this policy. The Personal Information that I collect
              is used for providing and improving the Service. I will not use or
              share your information with anyone except as described in this
              Privacy Policy. The terms used in this Privacy Policy have the
              same meanings as in our Terms and Conditions, which is accessible
              at What2Eat unless otherwise defined in this Privacy Policy.
            </p>
          </div>

          <div className="policy-paragraph">
            <h5>Information Collection and Use</h5>
            <p className="policy-text">
              For a better experience, while using our Service, I may require
              you to provide us with certain personally identifiable
              information. The information that I request will be retained on
              your device and is not collected by me in any way. The app does
              use third party services that may collect information used to
              identify you. Link to privacy policy of third party service
              providers used by the app
              <ul>
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Play Services
                  </a>
                </li>
              </ul>
            </p>
          </div>
          <div className="policy-paragraph">
            <h5>Log Data</h5>
            <p className="policy-text">
              I want to inform you that whenever you use my Service, in a case
              of an error in the app I collect data and information (through
              third party products) on your phone called Log Data. This Log Data
              may include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the
              configuration of the app when utilizing my Service, the time and
              date of your use of the Service, and other statistics.
            </p>
          </div>
          <div className="policy-paragraph">
            <h5>Cookies</h5>
            <p className="policy-text">
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. These are sent to your
              browser from the websites that you visit and are stored on your
              device's internal memory. This Service does not use these
              “cookies” explicitly. However, the app may use third party code
              and libraries that use “cookies” to collect information and
              improve their services. You have the option to either accept or
              refuse these cookies and know when a cookie is being sent to your
              device. If you choose to refuse our cookies, you may not be able
              to use some portions of this Service.
            </p>
          </div>
          <div className="policy-paragraph">
            <h5>Service Providers</h5>
            <p className="policy-text">
              I may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <ul>
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p className="policy-text">
              I want to inform users of this Service that these third parties
              have access to your Personal Information. The reason is to perform
              the tasks assigned to them on our behalf. However, they are
              obligated not to disclose or use the information for any other
              purpose.
            </p>
          </div>
          <div className="policy-paragraph">
            <h5>Security</h5>
            <p className="policy-text">
              I value your trust in providing us your Personal Information, thus
              we are striving to use commercially acceptable means of protecting
              it. But remember that no method of transmission over the internet,
              or method of electronic storage is 100% secure and reliable, and I
              cannot guarantee its absolute security.
            </p>
          </div>
          <div className="policy-paragraph">
            <h5>Links to Other Sites</h5>
            <p className="policy-text">
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by me. Therefore, I strongly
              advise you to review the Privacy Policy of these websites. I have
              no control over and assume no responsibility for the content,
              privacy policies, or practices of any third-party sites or
              services.
            </p>
          </div>
          <div className="policy-paragraph">
            <h5>Children’s Privacy</h5>
            <p className="policy-text">
              These Services do not address anyone under the age of 13. I do not
              knowingly collect personally identifiable information from
              children under 13. In the case I discover that a child under 13
              has provided me with personal information, I immediately delete
              this from our servers. If you are a parent or guardian and you are
              aware that your child has provided us with personal information,
              please contact me so that I will be able to do necessary actions.
            </p>
          </div>
          <div className="policy-paragraph">
            <h5>Changes to This Privacy Policy</h5>
            <p className="policy-text">
              I may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. I will
              notify you of any changes by posting the new Privacy Policy on
              this page. These changes are effective immediately after they are
              posted on this page.
            </p>
          </div>
          <div className="policy-paragraph">
            <h5>Contact Us</h5>
            <p className="policy-text">
              If you have any questions or suggestions about my Privacy Policy,
              do not hesitate to contact me at ykaito21@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </WhattoeatPrivacyPolicyWrapper>
  )
}

const WhattoeatPrivacyPolicyWrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h3 {
    padding: 2rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  .policy-container {
    text-align: left;
  }

  .policy-paragraph {
    padding: 1rem 0;
  }
  .policy-text {
    padding: 1rem 0;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 3rem;
    }
    h5 {
      font-size: 2rem;
    }
  }
`

export default WhattoeatPrivacyPolicy
