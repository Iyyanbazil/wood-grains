import React from 'react'
import "./contact.css"
import {ImLocation2} from "react-icons/im"
import {AiFillMail} from "react-icons/ai"
import {MdCall} from "react-icons/md"
const Contact = () => {
  return (
    <>
    <div className="contact-main-div">
       <p className='contact-main-heading'>Contact</p>
       <p className='contact-desc'>
        Reach us to entertain your queries  about the product complaint and return polices
       </p>

</div>
<div className="desktop-grid-div">
        <div className='complain-background'>
           
            <div className='complain-form'>
            
            <form >
            <p className="complain-main-head">Complaint</p>
                <p className='label'>Name</p>
                <input className='complain-input' />
                <p  className='label'>Email</p>
                <input className='complain-input' />
                <p className='label' >Complain</p>
                <textarea className='complain-textarea' />
            </form>
            </div>
        </div>

        <div className='find-main-div'>
           <div>
            <p className='find-main-head'>Find Us</p>
            <p><ImLocation2/>Location</p>
            <p>Main Road Gulberg 3 Lahore</p>
            <p><AiFillMail/>Email</p>
            <p>ayyanbazil000@gmail.com</p>
            <p><MdCall/>Call at</p>
            <p>+92214667901</p>
            </div>
        </div>

        </div>

        <div>
<p className="return-heading">Return Policies*</p>
<p className='policy-desc'><b>1. Customers expect free returns</b>
Like it’s done with two-day and same-day shipping, Amazon Prime has made free returns synonymous with ecommerce for many shoppers. 79% of customers won’t purchase from an online store that charges return shipping fees.

While free return shipping won’t make sense for every business’ margins, offering it may cause a big enough increase in sales that it essentially pays for itself. We recommend crunching some numbers to figure out just how many additional orders it will take to break even on free return shipping.

<b>2. Refund speed matters</b>
72% of online customers expect a refund credit within 5 days of returning merchandise.

Even in an otherwise smooth return process, waiting too long to credit a customer can hurt brand loyalty: 88% of customers would limit or stop shopping with a merchant that took too long to credit the refund. Ensuring a quick return and refund process will keep customers coming back to your store time and time again.

<b>3. It pays to have a process </b>
If you’re just starting out in ecommerce, it may be tempting to handle returns on an ad-hoc basis. However, as your business grows, investing in your returns process can pay dividends. Your process should make it extremely easy for your customers to make a return, which means making our process simple. 58% of customers say they want a hassle-free return policy, and 47% want an easy-to-print return label. 

Penske found that businesses that invest in improving reverse logistics processes see a 12% increase in customer satisfaction and a 4% decrease in cost. 

<b>4 ways to proactively reduce returns</b>
It’s clear that creating a great return policy is important for increasing sales and building customer loyalty. But with the average retailer spending 8.1% of total sales on reverse logistics, it can pay to reduce overall return volume as well. 

<b>1. Create clear product descriptions</b>
With online shopping, what you see isn’t always what you get. That’s why 88% of shoppers characterize detailed product content as being extremely important to their purchasing decision.

Giving reliable info about your product upfront can also decrease returns. When what customers receive matches their expectations, they’ll be less likely to return that product. Make sure that the product pages on your website are descriptive and include high-quality, accurate product photos.

<b>2. Increase return time window</b>
Customers expect at least 30 days to return an online purchase. But only 5% of shoppers say they return online orders more than 30 days after purchase.

Being lenient with return time limits (e.g., a 60-day vs. 30-day policy) can actually decrease returns by creating less urgency around returns for the customer.

<b>3. Conduct regular quality testing </b>
If your product page seems to reflect the product accurately, and you’re still getting a high rate or returned items, there may be an issue with the item itself. Assess the quality of the item, do product testing, and check in with your manufacturer to address any production or quality issues.

<b>4. Identify trends in commonly returned items </b>
You can also include a quick one-question survey in the returns process asking why a customer chose to return a certain product. If your returns process is easy to complete, customers will likely be happy to select a return reason from a list of preset options.

This can be particularly helpful in identifying a quality issue with a product, such as a fit issue with apparel. For example, if clothing items are being returned because they are too large, you may be able to identify a potential sizing issue with your manufacturer.

Gathering information on the return side can help you identify trends and issues with your products and make the necessary improvements to future inventory.</p>

        </div>
        </>
  )
}

export default Contact