import React, { useState, useRef } from 'react'
import { Switch } from '@headlessui/react'
import emailjs from '@emailjs/browser';

import Confirm from './Confirmation'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  const [validateName, setValidateName] = useState(undefined)
  const [validateEmail, setValidateEmail] = useState(undefined)
  const [validateCompany, setValidateCompany] = useState(undefined)
  const [validateMessage, setValidateMessage] = useState(undefined)

  const form = useRef()

const handleChange = (e) => {
  switch(e.target.name) {
      case 'email':
           if (validateEmail !== undefined) {
               setValidateEmail(undefined)
           }
          setEmail(e.target.value)
          break;
      case 'name':
          if (validateName !== undefined) {
              setValidateName(undefined)
          }
          setName(e.target.value)
          break;
    case 'company':
        if (validateCompany !== undefined) {
                setValidateCompany(undefined)
            }
            setCompany(e.target.value)
            break;
    case 'message':
        if (validateMessage !== undefined) {
                setValidateMessage(undefined)
            }
            setMessage(e.target.value)
            break;

    }
}
const validateError = (label, which) => {
  const errorMessage = () => (
      <div className="text-red-500">
      * {which} input is empty
      </div>
  )

  console.log(label)

 switch (label) {
     case name:
          setValidateName(errorMessage)
          break;
     case email:
         setValidateEmail(errorMessage)
         break;
    case company:
        setValidateCompany(errorMessage)
         break;
    case message:
        setValidateMessage(errorMessage)
        break;



 }
}
const onSubmit = (e) => {
  switch ('') {
      case name:
          validateError(name, 'name');
          e.preventDefault()
          break;
      case email:
          validateError(email, 'email')
          e.preventDefault()
          break;
        case company:
            validateError(company, 'company');
            e.preventDefault()
            break;
        case message:
            validateError(message, 'message');
            e.preventDefault()
            break;


      default:
         /* setURL() */
         setConfirm(true)
         //emailjs.sendForm('service_arikqvn', 'template_ht51ufi', e.target, 'user_kC0T8kmC4F1GOkt3Q06Q4')
         e.preventDefault()
  }
}
const confirmMessage = ['Thanks for choosing Spotter Fitness!', 'Please wait while we create your account']

  return (
    <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>

    <div className="font-default py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto" >
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Have questions about Spotter Fitness?</h2>
          <p className=" text-lg leading-6 text-gray-500">
            Fill out the form and we'll get back to you ASAP. We look forward to chatting with you!
          </p>
        </div>
        <div className="mt-12">
        {confirm ? <Confirm prompt="false" message={confirmMessage} confirm={() =>setConfirm(false)} /> : null}
          <form ref={form} onSubmit={onSubmit} className="sm:grid-cols-2 sm:gap-x-8">
            <div>

              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label> {validateName}

              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  value={name}
                  onChange={handleChange}
                  key='name'
                  placeholder="Enter name..."
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-gold focus:border-gold border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  value={company}
                  onChange={handleChange}
                  key='name'
                  placeholder="Enter name..."
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-gold focus:border-gold border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email {validateEmail}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleChange}
                  key='name'
                  placeholder="Enter email..."
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-gold focus:border-gold border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-gold focus:border-gold rounded-md"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="py-3 px-4 mb-6 block w-full pl-20 focus:ring-gold focus:border-gold border-gray-300 rounded-md"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label> {validateMessage}
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={handleChange}
                  key='name'
                  placeholder="Enter message..."
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-gold focus:border-gold border border-gray-300 rounded-md"

                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-gold' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    By selecting this, you agree to the{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gold hover:bg-cream hover:border-4 hover:border-gold hover:text-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
              >
                let's talk!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}