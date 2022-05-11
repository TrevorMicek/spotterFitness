import React from 'react'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const defaultQ = [
  {

  }
]
const faqs = [
  {
  question: "What is Spotter?",
  answer: "Spotter is the app that filters nearby gyms and/or trainers according to user preferences. It is free to create a profile for users and offers bundled discount drop-in rates to in-network gyms for travelers or gym-goers who just want to try something new. Payment is all in-app. Users can also connect, chat, and book with trainers all in-app. Both gyms and trainers have reviews and rankings by confirmed users/clients.",
  open: true
  },
  {
    question: "What makes Spotter unique?",
    answer:
      "By harnessing our SpotFit™ technology we provide the best matches based on preferences and proximity. We offer in-app booking, communication, and payment tools so you can manage gym access and/or trainer scheduling easily and from anywhere.",

  },
  {
    question: "I am new to fitness. How can Spotter help me? ",
    answer:
      "We take the guesswork out of fitness! Our onboarding makes it simple to build your free, unique profile. Spotter filters the best gyms and trainers near you according to your unique preferences and needs. Read through posted reviews from others about each provider before you decide what is best for you. Use discounted drop-in bundles to try out a new gym. Chat and communicate with matched trainers, and book and pay right on the app.  ",
  },
  {
    question: "I am a trainer. How can I join?",
    answer:
      "We would love for you to join our network! Joining is free. Download the app, create your Trainer account, and let the fitness roll! You have full control over your booked sessions and rates. We secure a flat fee for any service booked within the app.",
  },
  {
    question: "I am a gym owner. How can I join?",
    answer:
      "We would love for you to join our network! Joining is free. Download the app and create your Gym account. Approval is quick before your gym goes live on the SpotterFitness network. We encourage in-network gyms to provide drop-in rates and discounted bundles. The amounts and discounts are entirely up to you and what makes sense for your business. We secure a flat fee for any service booked within the app.",
  },
  {
    question: "How do I pay for the Gym or Trainer? ",
    answer:
      "All transactions are encrypted and secured in app via Stripe. Payment methods can be stored for future use.",
  },
  {
    question: "Do you offer discounts? ",
    answer:
      "Spotter works by negotiating ahead of time with trainers and gyms, ensuring you get the most fit for your buck. All rates and discounts are clearly displayed in each provider’s profile.",
  },
  {
    question: "Where can I download the app? ",
    answer:
      "Find us on the App store in iOS and GooglePlay Store.",
  },
  {
    question: "Is your network limited to just gyms and trainers?",
    answer:
      "No! By gyms we mean a variety of fitness facilities. By trainers we mean a variety of fitness and wellness providers and instructors. Download the app and search according to your unique needs and interests.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  return (
    <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>
    <div className="font-default pt-0 pb-12" >
      <div className="max-w-7xl mx-auto pb-8  sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">

          <h2 className="text-center bg-black text-white text-3xl font-extrabold ">FAQ's</h2>

          <dl className="mt-6 px-4 space-y-6 divide-y divide-gray-200">

            {faqs.map((faq) => (
              <Disclosure as="div" defaultOpen={faq.open} key={faq.question} className="pt-6">

                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  )
}