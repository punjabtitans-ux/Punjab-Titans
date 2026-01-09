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
          <span className="text-[#E0C36D] text-lg">
            {" "}
            / Terms and Conditions
          </span>
        </div>

        <div className="pt-12">
          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Terms & Conditions
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              Welcome to <span className="text-[#BD9D6B]">Punjab Titans</span>{" "}
              (“we”, “our”, “us”). By accessing or using our website, you agree
              to comply with and be bound by the following Terms & Conditions.
              If you do not agree, please do not use our website.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Use of Website
            </h4>
            <ul className="list-disc text-white pl-5 space-y-2">
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  This website is intended for informational and fan engagement
                  purposes only.
                </p>
              </li>
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  You agree to use the website lawfully and not for any illegal,
                  harmful, or unauthorized purpose.
                </p>
              </li>
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  We reserve the right to restrict or terminate access if these
                  terms are violated.
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Intellectual Property Rights
            </h4>
            <ul className="list-disc text-white pl-5 space-y-2">
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  All content on this website including text, logos, images,
                  videos, graphics, designs, and trademarks are the exclusive
                  property of Punjab Titans or its licensors.
                </p>
              </li>
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  You may not copy, reproduce, distribute, modify, or use any
                  content for commercial purposes without prior written
                  permission.
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              User Submissions
            </h4>
            <p className="text-base 2xl:text-xl text-white pb-2">
              If you submit or upload any content (comments, images, videos, or
              messages)
            </p>
            <ul className="list-disc text-white pl-5 space-y-2">
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  You confirm that you own the rights or have permission to
                  share the content.
                </p>
              </li>
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  You grant Punjab Titans a non-exclusive, royalty-free,
                  worldwide license to use, display, and share such content.
                </p>
              </li>
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  We reserve the right to remove any content deemed
                  inappropriate, offensive, or unlawful.
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Acceptable Conduct
            </h4>
            <p className="text-base 2xl:text-xl text-white pb-2">Users must not:</p>
            <ul className="list-disc text-white pl-5 space-y-2">
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  Post abusive, defamatory, obscene, or misleading content
                </p>
              </li>
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  Upload viruses or malicious software
                </p>
              </li>
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  Infringe intellectual property or privacy rights
                </p>
              </li>
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  Use the website for advertising, promotions, or spam without
                  authorization
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Third-Party Links
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              Our website may contain links to third-party websites. Punjab
              Titans is not responsible for the content, policies, or practices
              of any external websites.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Disclaimer
            </h4>
            <ul className="list-disc text-white pl-5 space-y-2">
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  All information on the website is provided on an “as-is”
                  basis.
                </p>
              </li>
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  We do not guarantee the accuracy, completeness, or
                  availability of content.
                </p>
              </li>
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  Punjab Titans is not liable for any loss or damage arising
                  from the use of this website.
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Limitation of Liability
            </h4>
            <p className="text-base 2xl:text-xl text-white pb-2">
              Punjab Titans shall not be liable for any direct, indirect,
              incidental, or consequential damages resulting from:
            </p>
            <ul className="list-disc text-white pl-5 space-y-2">
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  Use or inability to use the website
                </p>
              </li>
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  Errors or omissions in content
                </p>
              </li>
              <li>
                <p className="text-base 2xl:text-xl text-white">
                  Unauthorized access or data breaches
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Changes to Terms
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              We reserve the right to update or modify these Terms & Conditions
              at any time without prior notice. Continued use of the website
              indicates acceptance of the updated terms.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Termination
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              We may suspend or permanently terminate access to the website
              without notice if these Terms & Conditions are violated.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Governing Law
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              These Terms & Conditions are governed by the laws of India, and
              any disputes shall be subject to the jurisdiction of Indian
              courts.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg 2xl:text-xl text-[#BD9D6B] font-semibold mb-2">
              Contact Information
            </h4>
            <p className="text-base 2xl:text-xl text-white">
              For any questions regarding these Terms & Conditions, please
              contact us through the Contact Us page on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
