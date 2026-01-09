import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="py-6 cus_container">
        <div className="flex items-center gap-2">
          <Image
            src={"/icons/home.svg"}
            alt=""
            width={1000}
            height={500}
            className="max-w-[20px]"
          />
          <span className="text-[#E0C36D] text-lg"> / Privacy Policy</span>
        </div>

        <div className="pt-12">
          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Privacy Policy – Punjab Titans
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              Punjab Titans (“we”, “our”, “us”) is owned and operated by{" "}
              <span className="text-[#BD9D6B]">PureSports Pvt. Ltd.</span> We
              are committed to protecting your privacy and ensuring that your
              personal information is handled in a safe and responsible manner.
            </p>
            <p className="text-base 2xl:text-xl text-white mt-2">
              This Privacy Policy explains how we collect, use, disclose, and
              protect information when you visit or interact with our website.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Information We Collect
            </h4>

            <p className="text-base 2xl:text-xl text-white pb-2 font-semibold">
              a) Personal Information
            </p>
            <ul className="list-disc text-white pl-5 space-y-2 mb-4">
              <li className="text-base 2xl:text-xl text-white">Name</li>
              <li className="text-base 2xl:text-xl text-white">
                Email address
              </li>
              <li className="text-base 2xl:text-xl text-white">Phone number</li>
              <li className="text-base 2xl:text-xl text-white">
                Any other details submitted via forms, registrations, or
                communications
              </li>
            </ul>

            <p className="text-base 2xl:text-xl text-white pb-2 font-semibold">
              b) Non-Personal Information
            </p>
            <ul className="list-disc text-white pl-5 space-y-2">
              <li className="text-base 2xl:text-xl text-white">IP address</li>
              <li className="text-base 2xl:text-xl text-white">
                Browser type and device information
              </li>
              <li className="text-base 2xl:text-xl text-white">
                Pages visited and time spent on the website
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              How We Use Your Information
            </h4>
            <p className="text-base 2xl:text-xl text-white pb-2 ">
              We use the collected information to:
            </p>
            <ul className="list-disc text-white pl-5 space-y-2">
              <li className="text-base 2xl:text-xl text-white">
                Respond to inquiries and support requests
              </li>
              <li className="text-base 2xl:text-xl text-white">
                Improve website performance and user experience
              </li>
              <li className="text-base 2xl:text-xl text-white">
                Share team updates, news, events, or promotions (only if opted
                in)
              </li>
              <li className="text-base 2xl:text-xl text-white">
                Maintain internal records and analytics
              </li>
              <li className="text-base 2xl:text-xl text-white">
                Ensure website security and prevent misuse
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Cookies and Tracking Technologies
            </h4>
            <p className="text-base 2xl:text-xl text-white pb-2 ">
              Punjab Titans may use cookies and similar technologies to:
            </p>
            <ul className="list-disc text-white pl-5 space-y-2">
              <li className="text-base 2xl:text-xl text-white">
                Understand user behavior
              </li>
              <li className="text-base 2xl:text-xl text-white">
                Remember preferences
              </li>
              <li className="text-base 2xl:text-xl text-white">
                Improve website functionality
              </li>
            </ul>
            <p className="text-base 2xl:text-xl text-white mt-2">
              You may disable cookies through your browser settings; however,
              some website features may not function properly.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Sharing of Information
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              We do not sell or rent your personal information.
            </p>
            <p className="text-base 2xl:text-xl text-white pb-2">
              We may share information only with:
            </p>
            <ul className="list-disc text-white pl-5 space-y-2 mt-2">
              <li className="text-base 2xl:text-xl text-white">
                Trusted service providers assisting website operations
              </li>
              <li className="text-base 2xl:text-xl text-white">
                Legal or regulatory authorities if required by law
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Data Security
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              We implement reasonable technical and organizational measures to
              protect your personal information. However, no online transmission
              or storage method is completely secure.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Children’s Privacy
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              Our website is not intended for children under 18 years of age. We
              do not knowingly collect personal information from minors.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Third-Party Links
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              Punjab Titans is not responsible for the privacy practices or
              content of third-party websites.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Your Rights
            </h4>
            <p className="text-base 2xl:text-xl text-white pb-2">You may:</p>
            <ul className="list-disc text-white pl-5 space-y-2">
              <li className="text-base 2xl:text-xl text-white">
                Request access to your personal data
              </li>
              <li className="text-base 2xl:text-xl text-white">
                Request correction or deletion of your data
              </li>
              <li className="text-base 2xl:text-xl text-white">
                Opt out of marketing communications
              </li>
            </ul>
            <p className="text-base 2xl:text-xl text-white mt-2">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:Support@punjabtitan.com"
                className="text-[#BD9D6B]"
              >
                Support@punjabtitan.com
              </a>
              .
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Changes to This Privacy Policy
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              Punjab Titans reserves the right to update or modify this Privacy
              Policy at any time. Any changes will be posted on this page, and
              continued use of the website signifies acceptance of the updated
              policy.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Governing Law
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              This Privacy Policy shall be governed by the laws of India, and
              any disputes shall be subject to Indian jurisdiction.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Contact Information
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              For questions, concerns, or requests related to this Privacy
              Policy, please contact:
            </p>
            <p className="text-base 2xl:text-xl text-[#BD9D6B] mt-1">
              📧{" "}
              <a
                href="mailto:Support@punjabtitan.com"
                className="text-[#BD9D6B]"
              >
                Support@punjabtitan.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
