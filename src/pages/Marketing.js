import React from "react";
import "../styles/Marketing.css";
import Benefits from "../components/Benefits";
import MiniFooter from "../components/MiniFooter";
import L1 from "../assets/images/smm/logo1.webp";
import img1 from "../assets/images/smm/1.webp";
import img from "../assets/images/marketing_img/1.webp";
import img2 from "../assets/images/marketing_img/2.webp";
import img3 from "../assets/images/marketing_img/3.webp";
import img4 from "../assets/images/marketing_img/4.webp";
import img5 from "../assets/images/marketing_img/5.webp";
import img6 from "../assets/images/marketing_img/6.webp";
import img7 from "../assets/images/marketing_img/7.webp";
import img8 from "../assets/images/marketing_img/8.webp";
import img9 from "../assets/images/marketing_img/9.webp";
import section from "../assets/images/marketing_img/section.webp";

const Marketing = () => {
  return (
    <div className="smm-container">
      <div className="logo-container">
        <img src={L1} alt="Land Mark Estate & Builders" className="logo" />
        <span className="social-text">OUR MARKETING TEAM</span>
      </div>
      <h1>Fuel your brand®</h1>
      <p>
        With eMarketick Digital Marketing Agency, you not only gain access to
        essential business management solution but also acquire a dedicated
        marketing team crucial for your business expansion — all within a
        unified platform. Additionally, tap into effective industry-tailored
        marketing programs. Dive into our plans and pricing for further details.
      </p>
      <button className="smm-button">Plans & Pricing</button>

      <h3>
        We Provide Services to Manage Your Social Media Profiles and Websites
      </h3>

      <div>
        <img src={img1} alt="Social Media Example" className="img1" />
        <h1>Industry specific marketing programs and talent to help you...</h1>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <h1>Achieve marketing success</h1>
          <p>
            At eMarketick Agency, we understand that marketing is constantly
            evolving. That’s why we offer dedicated Marketing Success Managers
            who work tirelessly to keep you ahead of the curve. Our team focuses
            on crafting and implementing cutting-edge digital marketing
            strategies to fuel your business growth.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={img} alt="Main" className="main-image" />
        </div>
      </div>

      {/* develop section left image */}
      <div className="hero-section">
        <div className="hero-images">
          <img src={img2} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h1>Achieve success through content marketing.</h1>
          <p>
            Without prioritizing organic growth, you’ll remain stuck in a cycle
            of high acquisition costs and low returns. Our content marketing and
            SEO program is designed to elevate your brand’s organic visibility
            across various channels such as search engines, social media, email,
            and more, ensuring steady growth and improved results.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Stand out on social media</h1>
          <p>
            Effective marketing means meeting your customers where they are, and
            today, that’s on social media! Without a social media presence, you
            risk losing market share and sales to competitors. Let our social
            media management program remedy that for you.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={img3} alt="Main" className="main-image" />
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-images">
          <img src={img4} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h1>Grow with multi-channel ads</h1>
          <p>
            If your brand isn’t showcased across today’s leading digital
            platforms, you’re forfeiting sales to competitors. eMarketick’s
            multi-channel advertising program is here to reclaim those lost
            opportunities by deploying captivating ads for your brand across
            search, social media, display networks, and beyond.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Build a professional brand</h1>
          <p>
            From professional designs to videos, photography, business cards,
            logos, and tradeshow displays, you name it, we’ve got you covered.
            Just assign a creative task through our platform, and a skilled
            professional will create it for you on-demand!
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={img5} alt="Main" className="main-image" />
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-images">
          <img src={img6} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h1>Fully leverage the platform</h1>
          <p>
            Experience top-notch platform support with eMarketick, ranging from
            our comprehensive online help center to our personalized onboarding
            process, continuing through to dedicated customer support and
            ongoing success assistance.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Why a talented team is important:</h1>
          <h2>Save Time</h2>
          <p>
            In today's complex marketing landscape, time is precious. With
            eMarketick, you can focus on your business while our dedicated
            digital marketing specialists handle your success.
          </p>
          <h2>Cost-effective</h2>
          <p>
            Building an in-house digital marketing team can be costly. With
            eMarketick, you access a highly skilled team at a fraction of the
            expense.
          </p>
          <h2>Competitive Edge</h2>
          <p>
            Marketing evolves swiftly. Our dedicated team ensures you remain
            ahead of the competition and at the forefront of industry trends.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={img7} alt="Main" className="main-image" />
        </div>
      </div>

      <div className="section_container">
        <div className="section">
          <h3>Positive Mindset</h3>
          <p>
            Maintaining a positive outlook is fundamental. We thrive on
            uncovering opportunities in setbacks, finding fulfillment in the
            journey, and delighting in our work.
          </p>
        </div>
        <div className="section">
          <h3>Diligent Effort</h3>
          <p>
            Count on us for unwavering dedication. Our commitment to hard work
            is the cornerstone of our effectiveness, ensuring we deliver our
            best for you.
          </p>
        </div>

        <div className="section">
          <h3>Excellence in Performance</h3>
          <p>
            Through our optimistic approach and dedicated work ethic, expect
            nothing short of outstanding marketing performance. We're devoted to
            fueling the growth of your business.
          </p>
        </div>
      </div>

      <div className="sectionimg">
        <img src={section} alt="Main" className="sectionimg" />
      </div>
      <div className="section_container">
        <div className="section">
          <h3>Value Addition</h3>
          <p>
            From insightful marketing data analysis to attentive support for
            your business concepts, trust us to enhance your endeavors where it
            matters most.
          </p>
        </div>
        <div className="section">
          <h3>Spotting Opportunities</h3>
          <p>
            We're vigilant in spotting avenues for growth, empowering you to
            seize more market share and boost sales effectively.
          </p>
        </div>

        <div className="section">
          <h3>Your Growth Ally</h3>
          <p>
            Our perspective on every situation is geared towards growth. We're
            adept at finding victories within challenges, finding satisfaction
            in the journey, and spreading joy through our work.
          </p>
        </div>
      </div>
      <button className="smm-button">Plans & Pricing</button>

      <div className="hero-section">
        <div className="hero-images">
          <img src={img8} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h2>Starting Call</h2>
          <p>
            Your journey begins with a starting call with your dedicated
            Marketing Success Manager. This helps them understand your business
            and goals.
          </p>
          <h2>Planning Strategy</h2>
          <p>
            Once your Manager knows your goals and budget, they work with
            teammates to plan initial strategies to grow your brand.
          </p>
          <h2>Getting Started & Launch</h2>
          <p>
            After you approve the strategy, your Manager and team begin the
            process of getting familiar with the platform and training. They
            also set up everything for a successful launch.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h2>Stay Connected & Advise</h2>
          <p>
            Your Marketing Success Manager keeps in touch with both their team
            and you, offering feedback, guidance, and fresh ideas to enhance
            your business growth.
          </p>
          <h2>Ensure Quality</h2>
          <p>
            Your committed team prioritizes delivering top-notch work, whether
            it's in design, content, videos, ads, or other areas. They value
            your input to refine their efforts continually.
          </p>
          <h2>Analyze & Optimize</h2>
          <p>
            Your dedicated team consistently analyzes your business and makes
            data-driven improvements to ensure the best return on investment for
            you over time.
          </p>

          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={img9} alt="Main" className="main-image" />
        </div>
      </div>

      <div className="new-section">
        <h2>6 reasons why you need eMarketick Digital Marketing Agency</h2>
        <div className="reasons-container">
          <div className="reason">
            <h3>1</h3>
            <h4>All-In-One Solution</h4>
            <p>
              Access analytics, reporting, tracking, and essential tools for
              business growth through a single, affordable platform.
            </p>
          </div>
          <div className="reason">
            <h3>2</h3>
            <h4>Talent and Tech Combined</h4>
            <p>
              eMarketick offers both talent and technology necessary for
              business growth, ensuring you don't have to choose between the
              two.
            </p>
          </div>
          <div className="reason">
            <h3>3</h3>
            <h4>Streamlined Experience</h4>
            <p>
              We understand your busy schedule, so we provide the talent and
              support needed to maintain high standards, making everything easy
              for you.
            </p>
          </div>
          <div className="reason">
            <h3>4</h3>
            <h4>Time Efficiency</h4>
            <p>
              By handling everything for you, we save you time, allowing you to
              focus on the bigger picture and managing your expanding business.
            </p>
          </div>
          <div className="reason">
            <h3>5</h3>
            <h4>Cost Savings</h4>
            <p>
              eMarketick not only saves you time but also money! Say goodbye to
              expensive in-house teams and high-cost software solutions.
            </p>
          </div>
          <div className="reason">
            <h3>6</h3>
            <h4>Continuous Improvement</h4>
            <p>
              Our momentum-based system ensures that your online presence and
              overall results continually improve over time, maximizing your
              return on investment.
            </p>
          </div>
        </div>
        <button className="smm-button">Plans & Pricing</button>
      </div>
      <Benefits/>

         
      <MiniFooter />
    </div>
  );
};

export default Marketing;
