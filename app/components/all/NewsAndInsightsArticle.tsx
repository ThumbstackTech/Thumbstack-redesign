import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../layout/Sidebar';

export default function NewsAndInsightsArticle() {
  return (
    <div className="w-full bg-[#FFFFFF] relative pb-20 z-10">
      <Sidebar />
      
      {/* Hero Image - Full Width */}
      <div className="w-full h-[40vh] md:h-[80vh] relative overflow-hidden mb-16 md:mb-24 shrink-0 bg-[#BDBDBD]">
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.1)] z-10 pointer-events-none"></div>
        <Image 
          src="/grid1.jpg"
          alt="Article Hero"
          fill
          className="object-cover"
          unoptimized
          priority
        />
        
        {/* Centered Logo Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-[172px] md:h-[172px] bg-white rounded-2xl md:rounded-[2rem] shadow-[0px_48px_80px_-16px_rgba(0,0,0,0.15)] flex items-center justify-center z-20 backdrop-blur-md">
          <div className="relative w-20 h-20 md:w-28 md:h-28">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-16 md:h-16">
                <path d="M16 4L26 22H6L16 4Z" fill="#3145DD" />
                <circle cx="16" cy="22" r="4" fill="#A8F2D1" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[100px] md:pl-[190px] flex flex-col items-start gap-[22px]">
        
        {/* Article Header & Main Text */}
        <div className="w-full max-w-[1248px] flex flex-col items-start gap-[16px] mb-16 md:mb-[100px]">
          
          {/* Top Intro Section */}
          <div className="w-full max-w-[1048px] flex flex-col items-start gap-[16px]">
            <span 
              className="text-[#000000]"
              style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 400, fontSize: '14px', lineHeight: '36px' }}
            >
              12 min read · Mar 28, 2026
            </span>
            
            <div className="flex flex-col gap-[16px]">
              <h1 
                className="text-[#0F1D07] w-full"
                style={{ 
                  fontFamily: 'var(--font-delight)', 
                  fontWeight: 500, 
                  fontSize: '80px', 
                  lineHeight: '102px', 
                  letterSpacing: '-0.02em' 
                }}
              >
                Launch: Sunteck Realty Digital Showcase
              </h1>
              
              <p 
                className="text-[#0F1D07] w-full max-w-[772px]"
                style={{ 
                  fontFamily: 'var(--font-satoshi)', 
                  fontWeight: 500, 
                  fontSize: '22px', 
                  lineHeight: '36px' 
                }}
              >
                We transformed how a luxury real estate brand tells its story online — blending cinematic design with seamless performance.
              </p>
              
              <p 
                className="text-[#0F1D07] w-full max-w-[700px] mt-2"
                style={{ 
                  fontFamily: 'var(--font-satoshi)', 
                  fontWeight: 400, 
                  fontSize: '20px', 
                  lineHeight: '32px' 
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Augue sem at commodo viverra platea sed arcu. Nisl malesuada odio vivamus massa praesent malesuada urna vitae vehicula. Amet viverra tellus facilisi pharetra dui eget. Ultrices augue cursus morbi amet ut id dignissim. Non at in tristique mattis libero bibendum massa massa. Urna diam lorem tincidunt vulputate duis lectus. Lobortis massa at mattis magna euismod sed elementum imperdiet nibh. Viverra gravida mi gravida viverra turpis pretium. Suscipit et in lectus netus pellentesque suscipit elementum. Purus libero mi et nec a. Risus aliquet amet imperdiet elit nulla amet. Arcu morbi amet sed sit amet eu adipiscing eget.
              </p>
            </div>
          </div>

          {/* Sub Section 1 */}
          <div className="w-full max-w-[1044px] flex flex-col items-start gap-[20px]">
            <h2 
              className="text-[#0F1D07] w-full"
              style={{ 
                fontFamily: 'var(--font-delight)', 
                fontWeight: 500, 
                fontSize: '42px', 
                lineHeight: '70px', 
                letterSpacing: '-0.02em' 
              }}
            >
              Launch: Sunteck Realty Digital Showcase
            </h2>
            <p 
              className="text-[#0F1D07] w-full max-w-[700px]"
              style={{ 
                fontFamily: 'var(--font-satoshi)', 
                fontWeight: 400, 
                fontSize: '20px', 
                lineHeight: '32px' 
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Augue sem at commodo viverra platea sed arcu. Nisl malesuada odio vivamus massa praesent malesuada urna vitae vehicula. Amet viverra tellus facilisi pharetra dui eget. Ultrices augue cursus morbi amet ut id dignissim. Non at in tristique mattis libero bibendum massa massa. Urna diam lorem tincidunt vulputate duis lectus. Lobortis massa at mattis magna euismod sed elementum imperdiet nibh. Viverra gravida mi gravida viverra turpis pretium. Suscipit et in lectus netus pellentesque suscipit elementum. Purus libero mi et nec a. Risus aliquet amet imperdiet elit nulla amet. Arcu morbi amet sed sit amet eu adipiscing eget.
            </p>
          </div>
        </div>
      </div>

      {/* Middle Image 1 - Full Width */}
      <div className="w-full h-[738px] relative overflow-hidden mb-16 md:mb-[100px] shrink-0 bg-[#BDBDBD]">
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)] z-10 pointer-events-none"></div>
        <Image 
          src="/grid1.jpg"
          alt="Article Mid Image"
          fill
          className="object-cover"
          unoptimized
        />
        
        {/* Centered Logo Card for consistency */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[204px] h-[185.79px] bg-white rounded-[32.7857px] shadow-[0px_48px_80px_-16px_rgba(0,0,0,0.15)] flex items-center justify-center z-20">
          <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
             <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-16 md:h-16">
                <path d="M16 4L26 22H6L16 4Z" fill="#3145DD" />
                <circle cx="16" cy="22" r="4" fill="#A8F2D1" />
              </svg>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[100px] md:pl-[190px] flex flex-col items-start gap-[22px]">
        {/* Sub Section 2 */}
        <div className="w-full max-w-[1248px] flex flex-col items-start mb-16 md:mb-[100px]">
          <div className="w-full max-w-[1044px] flex flex-col items-start gap-[20px]">
            <h2 
              className="text-[#0F1D07] w-full"
              style={{ 
                fontFamily: 'var(--font-delight)', 
                fontWeight: 500, 
                fontSize: '42px', 
                lineHeight: '70px', 
                letterSpacing: '-0.02em' 
              }}
            >
              Launch: Sunteck Realty Digital Showcase
            </h2>
            <p 
              className="text-[#0F1D07] w-full max-w-[700px]"
              style={{ 
                fontFamily: 'var(--font-satoshi)', 
                fontWeight: 400, 
                fontSize: '20px', 
                lineHeight: '32px' 
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Augue sem at commodo viverra platea sed arcu. Nisl malesuada odio vivamus massa praesent malesuada urna vitae vehicula. Amet viverra tellus facilisi pharetra dui eget. Ultrices augue cursus morbi amet ut id dignissim. Non at in tristique mattis libero bibendum massa massa. Urna diam lorem tincidunt vulputate duis lectus. Lobortis massa at mattis magna euismod sed elementum imperdiet nibh. Viverra gravida mi gravida viverra turpis pretium. Suscipit et in lectus netus pellentesque suscipit elementum. Purus libero mi et nec a. Risus aliquet amet imperdiet elit nulla amet. Arcu morbi amet sed sit amet eu adipiscing eget.
            </p>
          </div>
        </div>
      </div>

      {/* Middle Image 2 - Full Width */}
      <div className="w-full h-[738px] relative overflow-hidden mb-16 md:mb-[100px] shrink-0 bg-[#BDBDBD]">
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)] z-10 pointer-events-none"></div>
        <Image 
          src="/grid1.jpg"
          alt="Article Bottom Image"
          fill
          className="object-cover"
          unoptimized
        />
        
        {/* Centered Logo Card for consistency */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[204px] h-[185.79px] bg-white rounded-[32.7857px] shadow-[0px_48px_80px_-16px_rgba(0,0,0,0.15)] flex items-center justify-center z-20">
          <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
             <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-16 md:h-16">
                <path d="M16 4L26 22H6L16 4Z" fill="#3145DD" />
                <circle cx="16" cy="22" r="4" fill="#A8F2D1" />
              </svg>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[100px] md:pl-[190px] flex flex-col items-start">
        {/* Two Column Section */}
        <div className="w-full max-w-[1044px] flex flex-col md:flex-row items-start gap-10 md:gap-[40px] mb-20 md:mb-[100px]">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col items-start gap-5 max-w-[502px]">
            <h2 
              className="text-[#0F1D07] w-full"
              style={{ 
                fontFamily: 'var(--font-delight)', 
                fontWeight: 500, 
                fontSize: '42px', 
                lineHeight: '60px', 
                letterSpacing: '-0.02em' 
              }}
            >
              Launch: Sunteck Realty Digital Showcase
            </h2>
            <p 
              className="text-[#0F1D07] w-full"
              style={{ 
                fontFamily: 'var(--font-satoshi)', 
                fontWeight: 400, 
                fontSize: '20px', 
                lineHeight: '32px' 
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Augue sem at commodo viverra platea sed arcu. Nisl malesuada odio vivamus massa praesent malesuada urna vitae vehicula. Amet viverra tellus facilisi pharetra dui eget. Ultrices augue cursus morbi amet ut id dignissim. Non at in tristique mattis libero bibendum massa massa. Urna diam lorem tincidunt vulputate duis lectus. Lobortis massa at mattis magna euismod sed elementum imperdiet nibh. Viverra gravida mi gravida viverra turpis pretium.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col items-start gap-5 max-w-[502px]">
            <h2 
              className="text-[#0F1D07] w-full"
              style={{ 
                fontFamily: 'var(--font-delight)', 
                fontWeight: 500, 
                fontSize: '42px', 
                lineHeight: '60px', 
                letterSpacing: '-0.02em' 
              }}
            >
              Launch: Sunteck Realty Digital Showcase
            </h2>
            <p 
              className="text-[#0F1D07] w-full"
              style={{ 
                fontFamily: 'var(--font-satoshi)', 
                fontWeight: 400, 
                fontSize: '20px', 
                lineHeight: '32px' 
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Augue sem at commodo viverra platea sed arcu. Nisl malesuada odio vivamus massa praesent malesuada urna vitae vehicula. Amet viverra tellus facilisi pharetra dui eget. Ultrices augue cursus morbi amet ut id dignissim. Non at in tristique mattis libero bibendum massa massa. Urna diam lorem tincidunt vulputate duis lectus. Lobortis massa at mattis magna euismod sed elementum imperdiet nibh. Viverra gravida mi gravida viverra turpis pretium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
