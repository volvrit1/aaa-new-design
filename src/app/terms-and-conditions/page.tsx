import Link from "next/link";

export default function Page() {
  return (
    <div className="pt-[11vh] text-black md:pt-[22vh]">
      <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-20 lg:pt-10 bg-white">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-gray-600 mb-8">Last updated: March 25, 2025</p>

        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700">
            Please read these terms and conditions carefully before using Our Service.
          </p>
        </section>

        {/* Interpretation and Definitions Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Interpretation</h2>
          <p className="mb-4">
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
          <p className="mb-4">For the purposes of these Terms and Conditions:</p>

          <ul className="list-disc list-inside space-y-4 mb-4">
            <li>
              <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
            </li>
            <li><strong>Country</strong> refers to: New South Wales, Australia</li>
            <li>
              <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Above All Agency.
            </li>
            <li>
              <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
            </li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li>
              <strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.
            </li>
            <li>
              <strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
            </li>
            <li>
              <strong>Website</strong> refers to Above All Agency, accessible from{" "}
              <Link href="https://aboveallagency.com.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                https://aboveallagency.com.au/
              </Link>
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
            </li>
          </ul>
        </div>

        {/* Acknowledgment Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Acknowledgment</h2>
          <p className="mb-4">
            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
          </p>
          <p className="mb-4">
            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
          </p>
          <p className="mb-4">
            By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
          </p>
          <p className="mb-4">
            You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
          </p>
          <p className="mb-4">
            Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Links to Other Websites</h2>
          <p className="mb-4">
            Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
          </p>
          <p className="mb-4">
            The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
          </p>
          <p className="mb-4">
            We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p className="mb-4">
            We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
          </p>
          <p className="mb-4">
            Upon termination, Your right to use the Service will cease immediately.
          </p>
        </div>

        {/* Links to Other Websites Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Disputes Resolution</h2>
          <p className="mb-4">
            If You have any concern or dispute about the Service, You agree to first
            try to resolve the dispute informally by contacting the Company.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            For European Union (EU) Users
          </h2>
          <p className="mb-4">
            If You are a European Union consumer, you will benefit from any
            mandatory provisions of the law of the country in which You are
            resident.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            United States Legal Compliance
          </h2>
          <p className="mb-4">
            You represent and warrant that (i) You are not located in a country that
            is subject to the United States government embargo, or that has been
            designated by the United States government as a "terrorist supporting"
            country, and (ii) You are not listed on any United States government
            list of prohibited or restricted parties.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Severability and Waiver</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">Severability</h3>
          <p className="mb-4">
            If any provision of these Terms is held to be unenforceable or invalid,
            such provision will be changed and interpreted to accomplish the
            objectives of such provision to the greatest extent possible under
            applicable law and the remaining provisions will continue in full force
            and effect.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Waiver</h3>
          <p className="mb-4">
            Except as provided herein, the failure to exercise a right or to require
            performance of an obligation under these Terms shall not affect a
            party's ability to exercise such right or require such performance at
            any time thereafter nor shall the waiver of a breach constitute a waiver
            of any subsequent breach.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            Translation Interpretation
          </h2>
          <p className="mb-4">
            These Terms and Conditions may have been translated if We have made them
            available to You on our Service. You agree that the original English
            text shall prevail in the case of a dispute.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            Changes to These Terms and Conditions
          </h2>
          <p className="mb-4">
            We reserve the right, at Our sole discretion, to modify or replace these
            Terms at any time. If a revision is material, We will make reasonable
            efforts to provide at least 30 days' notice prior to any new terms
            taking effect. What constitutes a material change will be determined at
            Our sole discretion.
          </p>
          <p className="mb-4">
            By continuing to access or use Our Service after those revisions become
            effective, You agree to be bound by the revised terms. If You do not
            agree to the new terms, in whole or in part, please stop using the
            website and the Service.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms and Conditions, You can
            contact us:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              By visiting this page on our website:{" "}
              <Link
                href="https://aboveallagency.com.au/contact-us"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://aboveallagency.com.au/contact-us
              </Link>
            </li>
            <li>By phone number: 0411 537 183</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
