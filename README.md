#We Duke Care

##Inspiration
The one topic we have not always been so open about - mental health.

Going off of that, our team had the desire to come up with a companion app to help improve one's mental well-being. From our research, we found out that one way that will help in that sense would be in terms of practicing mindfulness.

Mindfulness is a type of meditation in which you focus on being intensely aware of what you're sensing and feeling in the moment, without interpretation or judgment. Practicing mindfulness involves breathing methods, guided imagery, and other practices to relax the body and mind and help reduce stress. One proven method to encourage the practice of mindfulness is through the habit of journaling (https://www.mayoclinic.org/healthy-lifestyle/consumer-health/in-depth/mindfulness-exercises/art-20046356).

Journaling is the act of keeping a record of your personal thoughts, feelings, insights, and more. It can be written, drawn, or typed. It can be on paper or on your computer. It’s a simple, low-cost way of improving your mental health.

These are some of the benefits of journaling (https://www.webmd.com/mental-health/mental-health-benefits-of-journaling):

It can reduce anxiety
It helps with brooding
It creates awareness
It regulates emotions
It encourages opening up
It can speed up physical healing
Reference https://positivepsychology.com/benefits-of-journaling/

##What it does
Users are able to sign-up and log in. Once logged in, these are some of the main features:

User is able to put in a daily entry: From the daily entry, we included Google's Natural Language API - Sentiment Analysis API to detect the severity of the user's emotions. Should the user lean towards having a risk of harming themselves (low score and high magnitude), a trigger will be sent via Twilio's text messaging API to the user's emergency contact. Should the user lean towards a moderately severe score, it will trigger the function call via Twilio's text messaging API to remind said user of their happier memories that have been recorded on the app
User is able to rate their mood on a scale of 1 to 5
User is able to key in the date and submit the daily entry

Other features:

Plant progress tracker to keep track of user's activity on the app Say that the user has logged in consecutively, the user is acknowledged for it (the plant looks alive and well). Say that the user has skipped several days, the user is reminded about it (the plant wilts).

Disclaimer: Not all features have been fully implemented / are still in its prototype stage eg. having hard-coded destination phone numbers.

##How we built it
The tech stacks we used for the frontend are as such:

React
Nodejs
Chakra UI
HTML
CSS
Javascript

The tech stacks used for the backend are as such:

Django
MongoDB
Python
Heroku
Google Cloud Natural Language API
Twilio SMS API

The tech stacks used for the deployment on the Google Cloud Platform:

App Engine
Cloud Build for CI/CD
Monitoring Dashboard with Uptime Checks for Automated Deployment (Push to branch)

##Challenges we ran into
A few challenges that we ran into were definitely the time constraint and having to communicate virtually with our own teammates. Apart from that, we were also challenged to learn about new tech frames and APIs, to ensure that our app was able to execute more efficiently.

##Accomplishments that we're proud of
We're proud that we were able to use the new technologies as we envisioned it, such as the Google Cloud Natural Language API, Twilio's Messaging API, and so on. Furthermore, we're proud that we were able to build a prototype app to help encourage the practice of mindfulness in the Health sector.

##What we learned
We learned that communication is key. Having to attend this hackathon virtually, we were tasked to improve our communication skills to ensure that everyone on the team is on the same page.

##What's next for we-duke-care
We are looking to fully deploy the application on App Engine, with both frontend and backend connected. We are also looking to fix the automation of collecting data from user (eg. emergency contact number) to officiate using Twilio's messaging API. We are also looking to containerize the application to be deployed on Google's Kubernetes Engine, to help optimize cost and scale our application according to the required needs.
